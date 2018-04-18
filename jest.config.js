module.exports = {
  globals: { 'ts-jest': { tsConfigFile: 'tsconfig.json' } },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testRegex: '(/tests/.*|(\\.|/)spec)\\.(ts|tsx)$',
  testEnvironment: 'node'
};