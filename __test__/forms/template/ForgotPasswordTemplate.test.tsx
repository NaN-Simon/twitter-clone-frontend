import { fireEvent, render, screen } from '@testing-library/react'
import ForgotPasswordTemplate from '@/../src/forms/templates/ForgotPasswordTemplate'

describe('ForgotPasswordTemplate', () => {
  test('renders ForgotPasswordForm component', () => {
    render(<ForgotPasswordTemplate />);

    expect(screen.getByAltText('twitter icon')).toBeInTheDocument();
    expect(screen.getByText('Forgot password')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Login/i })).toBeInTheDocument();
  });

  test('submits the form when the submit button is clicked', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<ForgotPasswordTemplate />);

    const btn = screen.getByRole('button', { name: /Submit/i })
    const input = screen.getByRole('textbox')

    expect(input).toContainHTML('')
    fireEvent.input(input, { target: { value: 'hello' } })
    expect(input).toHaveValue('hello')
    fireEvent.click(btn);
    expect(consoleLogSpy).toHaveBeenCalledWith('submitted: hello');
    consoleLogSpy.mockRestore()
  });

})