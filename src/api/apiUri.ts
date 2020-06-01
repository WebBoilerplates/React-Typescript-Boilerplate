interface ApiUriTypes {
  production: string;
  development: string;
  test: string;
}

export default (): string => {
  if (!process.env.PROD_API_URI || !process.env.DEV_API_URI)
    throw new Error('APIURI not defined. (ENV)');

  const apiUri: ApiUriTypes = {
    production: process.env.PROD_API_URI,
    development: process.env.DEV_API_URI,
    test: process.env.DEV_API_URI,
  };

  return apiUri[process.env.NODE_ENV];
};
