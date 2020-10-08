import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

import FlagUSA from '../../assets/svgs/flagUSA.svg'
import FlagB from '../../assets/svgs/flagB.svg'
import FlagRU from '../../assets/svgs/flagRU.svg'
import FlagEUA from '../../assets/svgs/flagEmirates.svg'

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
    { name: 'Brasil', icon: FlagB },
    { name: 'United Arab Emirates', icon: FlagEUA },
    { name: 'United Kingdom', icon: FlagRU },
    { name: 'United State', icon: FlagUSA }
  ]
}
