import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

import FlagUSA from '../../assets/svgs/states.png'
import FlagB from '../../assets/svgs/brasil.png'
import FlagRU from '../../assets/svgs/kingdom.png'
import FlagEUA from '../../assets/svgs/emirate.png'

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
    {
      name: 'Brasil',
      icon: FlagB,
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      icon: FlagEUA,
      code: '971',
      mask: '999 999 9999'
    },
    { name: 'United Kingdom', icon: FlagRU, code: '44', mask: '99999 999999' },
    { name: 'United State', icon: FlagUSA, code: '1', mask: '(999) 999-9999' }
  ]
}
