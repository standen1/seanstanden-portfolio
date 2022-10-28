import {render, screen, fireEvent} from '@testing-library/react'
import Button from './Button';

describe('Testing Button commponent', () => {
    it('Calls onclick prompt when clicked.', () => {
        const handleClick = jest.fn()
        render(<Button background="#fff" onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByText(/click me/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
});