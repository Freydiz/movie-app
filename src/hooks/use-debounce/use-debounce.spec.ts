import { act, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('initialValue', 1000));

    expect(result.current).toEqual('initialValue');
  });

  it('should not update the value immediately but after delay', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 1000), {
      initialProps: { value: 'initialValue' },
    });

    rerender({ value: 'updatedValue' });

    // The hook should not update the value immediately
    expect(result.current).toBe('initialValue');

    // Fast-forward time by less than the delay
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // The hook should still return the initial value
    expect(result.current).toBe('initialValue');

    // Fast-forward time by the remaining delay
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // After the delay, the hook should return the updated value
    expect(result.current).toBe('updatedValue');
  });
});
