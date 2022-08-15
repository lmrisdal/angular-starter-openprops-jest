// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    // This should reflect the paths in tsconfig.json
    '@environment/(.*)': '<rootDir>/src/environments/$1',
    '@scss/(.*)': '<rootDir>/src/assets/scss/$1',
    '@models/(.*)': '<rootDir>/src/app/core/models/$1',
    '@enums/(.*)': '<rootDir>/src/app/core/enums/$1',
    '@services/(.*)': '<rootDir>/src/app/core/services/$1',
    '@guards/(.*)': '<rootDir>/src/app/core/guards/$1',
    '@layout/(.*)': '<rootDir>/src/app/core/layout/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@components/(.*)': '<rootDir>/src/app/shared/components/$1',
    '@pipes/(.*)': '<rootDir>/src/app/shared/pipes/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@features/(.*)': '<rootDir>/src/app/features/$1',
  },
}
