import type { Field } from 'payload'

import { richTextField } from './richtext'

import { link } from './link'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    ...richTextField('content'),
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
      // required: true,
    },
    link,
  ],
}
