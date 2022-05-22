import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render correctly', async () => {
    const { container, getByText } = render(<App />)

    expect(container).toMatchSnapshot()
    expect(getByText('Vite React App')).toBeInTheDocument()
  })
})
