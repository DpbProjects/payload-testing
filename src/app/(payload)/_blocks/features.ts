import type { Block } from 'payload'

import { richTextField } from '../_field/richtext'

export const features: Block = {
  slug: 'features',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...richTextField('description'),
    {
      name: 'featureItems', // Sub-blocks array
      type: 'array',
      label: 'Feature Items',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        ...richTextField('description'),
        {
          name: 'image',
          type: 'upload', // Assuming you're using an upload collection for media
          relationTo: 'media', // Change 'media' to your actual media collection slug
          required: true,
        },
      ],
    },
  ],
}
