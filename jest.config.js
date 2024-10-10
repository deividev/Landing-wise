module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  coverageDirectory: './coverage',
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  // Remove the globalSetup property
  // globalSetup: 'jest-preset-angular/global-setup',
};
