import { Field } from 'payload'

export const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'url',
      label: "Custom URL",
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      label: "Label",
      type: 'text',
      admin: {
        width: '50%',
      },
      required: true,
    },
  ]
  
}
