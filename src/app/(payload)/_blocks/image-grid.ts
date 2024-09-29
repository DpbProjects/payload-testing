import { Block } from 'payload';

export const imageGrid: Block = {
  slug: 'image-grid',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Grid Title',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      minRows: 6,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // This should be your media collection slug
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
          required: true,
        },
      ],
    },
  ],
};
