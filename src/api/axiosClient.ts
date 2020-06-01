import axios, { AxiosResponse } from 'axios';

interface ApiUriTypes {
  production: string;
  development: string;
  test: string;
}

function apiUri(): string {
  if (!process.env.PROD_API_URI || !process.env.DEV_API_URI)
    throw new Error('API URI not defined. (ENV)');

  const apiUriPreference: ApiUriTypes = {
    production: process.env.PROD_API_URI,
    development: process.env.DEV_API_URI,
    test: process.env.DEV_API_URI,
  };

  return apiUriPreference[process.env.NODE_ENV];
}

export const client = axios.create({
  baseURL: apiUri(),
  headers: { 'Access-Control-Expose-Headers': 'x-access-token' },
});

// It renews access token
async function renewAccessToken(): Promise<{ result: boolean }> {
  const refreshToken = window.localStorage.getItem('refresh-token');
  if (!refreshToken) return { result: false };
  return client
    .post('auth/resign', { token: refreshToken }, {})
    .then((res) => {
      axios.defaults.headers.common['x-access-token'] = res.data.data.token;
      window.localStorage.setItem('access-token', res.data.data.token);
      return { result: true };
    })
    .catch(() => ({ result: false }));
}

async function resolver(request: Promise<AxiosResponse<any>>): Promise<any> {
  return await request
    .then((result) => {
      return { ...result.data };
    })
    .catch(async (result) => {
      console.error(`Error ${result.status} : ${result.data.message}`);
      if (result.data.code === 'TOKEN_EXPIRED') {
        console.info('Retrying Login...');
        if (!(await renewAccessToken()).result) {
          return { ...result };
        } else {
          return await resolver(request);
        }
      }
      return { ...result };
    });
}

export default { resolver, client };
