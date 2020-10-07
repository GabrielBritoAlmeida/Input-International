import { Story, Meta } from '@storybook/react/types-6-0'
import Notification from '.'

export default {
  title: 'Notification',
  component: Notification
} as Meta

export const Default: Story = () => <Notification />
