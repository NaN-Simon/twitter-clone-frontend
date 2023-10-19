import { renderHook, act } from '@testing-library/react-hooks'
import useHover from '@/../src/hooks/useHover'

describe('useHover', () => {
  it('should change isHovering state correctly', () => {
    // Create a mock ref object
    const ref = {
      current: document.createElement('a') as HTMLAnchorElement,
    }

    // Render the hook with our mock ref
    const { result } = renderHook(() => useHover(ref))

    // Initially, isHovering should be false
    expect(result.current).toBe(false)

    // Simulate a mouseenter event
    act(() => {
      ref.current.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
    })

    // Now, isHovering should be true
    expect(result.current).toBe(true)

    // Simulate a mouseleave event
    act(() => {
      ref.current.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }))
    })

    // isHovering should be false again
    expect(result.current).toBe(false)
  })
})
