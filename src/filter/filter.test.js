import filter from './filter';

test('fixed works correctly with one value', () => {
    const value = 'drop-shadow(1px 0px 3px rgba(0,0,0,0.3))';
    const result = filter(value);
    expect(result).toBe(value);
});

test('fixed works correctly without fixed prop', () => {
    const result = fixed();
    expect(result).toBeNull();
});