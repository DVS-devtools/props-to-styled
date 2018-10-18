import float from './float';

test('float works correctly with "left"', () => {
    const result = float({ float: 'left' });
    expect(result).toBe('float: left;');
});

test('float works correctly with "right"', () => {
    const result = float({ float: 'right' });
    expect(result).toBe('float: right;');
});

test('float works correctly with "none"', () => {
    const result = float({ float: 'none' });
    expect(result).toBeNull();
});

test('float works correctly without float prop', () => {
    const result = float({});
    expect(result).toBeNull();
});