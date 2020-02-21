interface ApiUriTypes {
  production: string;
  development: string;
  test: string;
}

// Define your apiUri below.
const apiUri: ApiUriTypes = {
  production: 'https://apiuri',
  development: 'https://dev.apiuri',
  test: 'https://test.dev.apiuri',
};

export default (): string => {
  return apiUri[process.env.NODE_ENV];
};
