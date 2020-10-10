import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

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
      icon: '/img/brasil.png',
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      icon: '/img/emirate.png',
      code: '971',
      mask: '999 999 9999'
    },
    {
      name: 'United Kingdom',
      icon: '/img/kingdom.png',
      code: '44',
      mask: '99999 999999'
    },
    {
      name: 'United State',
      icon: '/img/states.png',
      code: '1',
      mask: '(999) 999-9999'
    }
  ]
}
