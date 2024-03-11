module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    transform: {'^.+\\.tsx?$': ['ts-jest', {tsconfig: 'tsconfig.json'}]},
    testMatch: ['**/*.(spec|test).ts'],
    moduleFileExtensions: ['ts', 'js'],
    testTimeout: 12000,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
