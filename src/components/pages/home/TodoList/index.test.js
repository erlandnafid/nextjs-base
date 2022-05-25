import TodoList from '@comps/pages/home/TodoList'
import { render } from '@testing-library/react'
import { todos } from '../../../../../tests/mocks'

describe('TodoList', () => {
  it('should render the list', () => {
    // Arrange
    const name = 'todo 1'

    // Act
    const wrapper = render(<TodoList todos={todos} />)
    const output_name = wrapper.getByLabelText('list-todo')

    // Assert
    expect(output_name.textContent).toBe(name)
  })
})
