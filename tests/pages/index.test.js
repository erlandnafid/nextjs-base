import Home from '@pages/index'
import { render, fireEvent, act, screen } from '@testing-library/react'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Home />)
  })

  it('should not submit a todo form when input is empty', async () => {
    // Arrange

    // Act
    const submit_button = wrapper.getByLabelText('submit-todo')
    const invalid_feedback = wrapper.getByLabelText('invalid-feedback')

    await act(() => {
      fireEvent.submit(submit_button)
    })

    // Assert
    expect(invalid_feedback.textContent).toBe('Field is required')
  })

  it('should submit a todo form', async () => {
    // Arrange
    const name = 'todo 1'

    // Act
    const input_name = wrapper.getByLabelText('input-name')
    const submit_button = wrapper.getByLabelText('submit-todo')

    await act(() => {
      fireEvent.change(input_name, { target: { value: name } })
      fireEvent.submit(submit_button)
    })

    const output_name = wrapper.getByLabelText('list-todo')

    // Assert
    expect(output_name.textContent).toBe(input_name.value)
  })
})
