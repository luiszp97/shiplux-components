import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../components/Typography/Typography'

const meta: Meta<typeof Typography> = {
    title: 'Example/Typography',
    component: Typography,
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
        variant: 'h1',
        children: 'hola',
        align: 'center',
        className: 'w-full'
        // rounded: '100%'
    },
};


