module.exports = {
    transform: { '^.+\\.ts$': 'ts-jest' },
    testEnvironment: 'jsdom',
    testRegex: '.*\\.(test|spec)?\\.ts$',
    moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node']
};
