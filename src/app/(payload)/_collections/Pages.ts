import type { CollectionConfig } from 'payload'

import { hero } from '../_field/hero'
import { features } from '../_blocks/features'
import { testimonials } from '../_blocks/testimonials'
import { imageGrid } from '../_blocks/image-grid'

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [features, testimonials, imageGrid],
            },
          ],
        },
      ],
    },
  ],
}
