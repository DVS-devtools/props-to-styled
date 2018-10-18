import fixed from './fixed';

test('fixed works correctly with "top"', () => {
    const result = fixed({ fixed: 'top' });
    expect(result).toBe('position: fixed; top: 0; bottom: inherit; left: 0; right: 0;');
});

test('fixed works correctly with "bottom"', () => {
    const result = fixed({ fixed: 'bottom' });
    expect(result).toBe('position: fixed; top: inherit; bottom: 0; left: 0; right: 0;');
});

test('fixed works correctly with "none"', () => {
    const result = fixed({ fixed: 'none' });
    expect(result).toBeNull();
});

test('fixed works correctly without fixed prop', () => {
    const result = fixed({});
    expect(result).toBeNull();
});