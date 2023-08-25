/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {},
  preset: 'ts-jest',
  // testEnvironment: 'node',

  testEnvironment: 'jsdom',
}

export default config
