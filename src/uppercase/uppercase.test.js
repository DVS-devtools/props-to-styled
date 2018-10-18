import uppercase from './uppercase';

test('uppercase works correctly with true', () => {
    const result = uppercase({ uppercase: true });
    expect(result).toBe('text-transform: uppercase');
});

test('uppercase works correctly with false', () => {
    const result = uppercase({ uppercase: false });
    expect(result).toBeNull();
});

test('uppercase works correctly without uppercase prop', () => {
    const result = uppercase({});
    expect(result).toBeNull();
});