import { Story, Meta } from '@storybook/react/types-6-0'
import InputCustom, { InputProps } from '.'

export default {
  title: 'InputCustom',
  component: InputCustom
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ margin: '12.5rem 5rem' }}>
    <InputCustom {...args} />
  </div>
)

export const DefaultMax: Story<InputProps> = (args) => (
  <div style={{ margin: '13rem 5rem', display: 'flex' }}>
    <InputCustom {...args} />
    <InputCustom {...args} />
    <InputCustom {...args} />
  </div>
)

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

DefaultMax.parameters = {
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
      icon: '/img/flags/brasil.png',
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      icon: '/img/flags/emirate.png',
      code: '971',
      mask: '999 999 9999'
    },
    {
      name: 'United Kingdom',
      icon: '/img/flags/kingdom.png',
      code: '44',
      mask: '99999 999999'
    },
    {
      name: 'United State',
      icon: '/img/flags/states.png',
      code: '1',
      mask: '(999) 999-9999'
    }
  ]
}

DefaultMax.args = {
  list: [
    {
      name: 'Brasil',
      icon: '/img/flags/brasil.png',
      code: '55',
      mask: '(99) 99999-9999'
    },
    {
      name: 'United Arab Emirates',
      icon: '/img/flags/emirate.png',
      code: '971',
      mask: '999 999 9999'
    },
    {
      name: 'United Kingdom',
      icon: '/img/flags/kingdom.png',
      code: '44',
      mask: '99999 999999'
    },
    {
      name: 'United State',
      icon: '/img/flags/states.png',
      code: '1',
      mask: '(999) 999-9999'
    }
  ]
}
