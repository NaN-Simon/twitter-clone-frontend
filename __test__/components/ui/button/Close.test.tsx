import { render, screen } from '@testing-library/react'
import Close from '@/components/UI/button/Close'

describe('close button', () => {
  test('close button should be in the document', () => {
    render(<Close type="reset" />);
    const closeElem = screen.getByRole('button')
    expect(closeElem).toBeInTheDocument()
  })

  test('close button must have a type reset', () => {
    render(<Close type="reset" />);
    const closeElem = screen.getByRole('button')
    expect(closeElem).toHaveAttribute('type', 'reset')
  })

  test('close button must have a type submit', () => {
    render(<Close type="submit" />);
    const closeElem = screen.getByRole('button')
    expect(closeElem).toHaveAttribute('type', 'submit')
  })

  test('close button must have a type button', () => {
    render(<Close type="button" />);
    const closeElem = screen.getByRole('button')
    expect(closeElem).toHaveAttribute('type', 'button')
  })

})