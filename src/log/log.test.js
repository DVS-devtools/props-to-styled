import log from './index';

global.console = {
    warn: jest.fn(),
    log: jest.fn()
};

test('log() should print message + " world"', () => {
    log({ message: 'Hello' });

    expect(global.console.log).toHaveBeenCalledWith('Hello world');
});
