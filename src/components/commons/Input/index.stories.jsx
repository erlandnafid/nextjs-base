import Input from './index'

const config = {
  title: 'components/UI/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    type: {
      options: ['text', 'email', 'password', 'file', 'date', 'number'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
}

const template = (args) => <Input {...args} />
const input = template.bind({})

export { config as default, input }

input.args = {
  name: 'test',
  label: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  size: 'md',
  value: 'value',
  disabled: false,
  touched: {
    test: false,
  },
  errors: {
    test: 'test',
  },
}
