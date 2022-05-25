import Button from './index'

const config = {
  title: 'components/UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
}

const template = (args) => <Button {...args} />
const button = template.bind({})

export { config as default, button }

button.args = {
  label: 'Button',
  variant: 'primary',
  type: 'button',
  size: 'md',
}
