/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const requireJSON = require('require-strip-json-comments');
const { compilerOptions } = requireJSON('./tsconfig.paths.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>',
    }),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: true,
    },
  },
};
