import { Toggle } from "../Toggle";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { ToggleProps } from "../types";


describe('Toggle component', () => {
  let mockOnChangeFn = jest.fn();
  let mockProps: ToggleProps;

  beforeEach(() => {
    mockProps = {
      value: false,
      defaultValue: false,
      onChange: mockOnChangeFn,
    }
  })

  test('should render checkbox and label with default unchecked state', () => {
    render(<Toggle {...mockProps}>
        {(isOn, toggle) => (
          <div>
            <input type='checkbox' checked={isOn} onChange={toggle} />
            <label htmlFor="scales">{isOn ? 'Checked' : 'Unchecked'}</label>
          </div>
        )}
      </Toggle>)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('Unchecked')).toBeInTheDocument()
  })

  test('should call onChange when clicked', async () => {
    render(<Toggle {...mockProps}>
      {(isOn, toggle) => (
        <div>
          <input type='checkbox' checked={isOn} onChange={toggle} />
          <label htmlFor="scales">{isOn ? 'Checked' : 'Unchecked'}</label>
        </div>
      )}
    </Toggle>)

    const checkbox = screen.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(mockOnChangeFn).toHaveBeenCalledWith(true)
  })

  test('should show Checked label when clicked', async () => {
    render(<Toggle>
      {(isOn, toggle) => (
        <div>
          <input type='checkbox' checked={isOn} onChange={toggle} />
          <label htmlFor="scales">{isOn ? 'Checked' : 'Unchecked'}</label>
        </div>
      )}
    </Toggle>)

    const checkbox = screen.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(await screen.findByText('Checked')).toBeInTheDocument()
  })
})