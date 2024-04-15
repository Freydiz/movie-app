import { act, fireEvent, renderHook } from '@testing-library/react';
import { useDebounce } from './use-debounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should return the initial value', () => {
    const { result } = renderHook(() => useDebounce('initialValue', 1000));

    expect(result.current).toEqual('initialValue');
  });

  it('should update the value after delay', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 1000), {
      initialProps: { value: 'initialValue' },
    });

    rerender({ value: 'updatedValue' });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).toBe('updatedValue');
  });
});
