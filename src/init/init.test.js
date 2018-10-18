import init from './index';

test('init() returns message + " world"', () => {
    const message = 'hello';
    const returnedValue = init({ message });
    expect(returnedValue).toBe(`${message} world`);
});