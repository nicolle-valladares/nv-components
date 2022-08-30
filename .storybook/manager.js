import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

import logo from '../src/red-abierta.png'

addons.setConfig({
  theme: create({
    base: 'light',
    brandImage: logo
  })
})
