module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': { babelConfig: true },
    }
}