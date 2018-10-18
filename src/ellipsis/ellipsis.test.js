import ellipsis from './ellipsis';

test('ellipsis works correctly with true', () => {
    const result = ellipsis({ ellipsis: true });
    expect(result).toBe(`
        overflow: 'hidden';
        textOverflow: 'ellipsis';
        whiteSpace: 'nowrap';
        wordWrap: 'normal';
    `);
});

test('ellipsis works correctly with false', () => {
    const result = ellipsis({ ellipsis: false });
    expect(result).toBeNull();
});

test('ellipsis works correctly without ellipsis prop', () => {
    const result = ellipsis({});
    expect(result).toBeNull();
});