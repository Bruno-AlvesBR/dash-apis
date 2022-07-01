const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  bail: 1,
  verbose: true,
  silent: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/index.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
