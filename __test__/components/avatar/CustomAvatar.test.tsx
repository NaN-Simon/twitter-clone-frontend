import { render, screen } from '@testing-library/react'
import CustomAvatar from '@/../src/components/avatar/CustomAvatar'

describe('custom avatar', () => {
  const width = 48
  const height = 48
  const startImg = '/example.jpg'
  const expectedImg = '/_next/image?url=%2Fexample.jpg&w=96&q=75'

  test('custom avatar should be in the document', () => {
    render(<CustomAvatar img={startImg} width={width} height={height} alt="example" />);
    const customAvatarElem = screen.getByRole('img')
    expect(customAvatarElem).toBeInTheDocument()
    expect(customAvatarElem).toHaveAttribute('src', expectedImg);
  })

  test('custom avatar should have sizes', () => {
    render(<CustomAvatar img={startImg} width={width} height={height} alt="example" />);
    const customAvatarElem = screen.getByRole('img')
    expect(customAvatarElem).toHaveStyle(`width: ${width}, height: ${height}`)
  })

  test('renders with specified alt text', () => {
    render(<CustomAvatar img={startImg} width={width} height={height} alt="example" />);
    const customAvatarElem = screen.getByAltText('example');
    expect(customAvatarElem).toBeInTheDocument();
  });

})