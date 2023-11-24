import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button/Button'


const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {

    layout: 'centered',
  },

  argTypes: {

  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'contained'
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    size: 'md'
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
    variant: 'contained'
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Button small',
    variant: 'contained'
  },
}
