import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../components/Button/IconButton'


const meta: Meta<typeof IconButton> = {
    title: 'Example/IconButton',
    component: IconButton,
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
        icon: '/public/vite.svg',
        variant: 'text',
        // rounded: '100%'
    },
};


