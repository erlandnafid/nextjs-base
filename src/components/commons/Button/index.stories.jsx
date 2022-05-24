import Button from './index'

const config = {
  title: 'components/UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'secondary'],
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
}
