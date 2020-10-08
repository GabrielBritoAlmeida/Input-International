import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

import { FlagUsa } from '@styled-icons/fa-solid/FlagUsa'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

export default {
  title: 'InputCustom',
  component: InputCustom
} as Meta

export const Default: Story<InputProps> = (args) => <InputCustom {...args} />

Default.parameters = {
  backgrounds: {
    values: [
      { name: 'input', value: '#000000' },
      { name: 'inputLight', value: '#fafafa' }
    ],
    default: 'input'
  },
  layout: 'fullscreen'
}

Default.args = {
  list: [{name: 'USA'}, {name: 'USA'}, {name: 'USA'}, {name: 'USA'}]
}
