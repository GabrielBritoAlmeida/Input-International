import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

import FlagUSA from '../../../assets/svgs/flagUSA.svg'

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
  list: [
    { name: 'United State', icon: FlagUSA },
    { name: 'Italia' },
    { name: 'Brasil' },
    { name: 'United Arab Emirates' },
    { name: 'França' }
  ]
}
