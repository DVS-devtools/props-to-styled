import ellipsis from './ellipsis';

test('ellipsis works correctly with true', () => {
    const value = true;
    const result = ellipsis({ ellipsis: value });
    expect(result).toBe(`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        `);
});

test('ellipsis works correctly with 2', () => {
    const value = 2;
    const result = ellipsis({ ellipsis: value });
    expect(result).toBe(`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${value};
            -webkit-box-orient: vertical;
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