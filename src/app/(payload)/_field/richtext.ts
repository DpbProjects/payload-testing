import { Field } from 'payload'

import { appendHtml } from '../_utils'

import { lexicalEditor, HTMLConverterFeature, lexicalHTML } from '@payloadcms/richtext-lexical'

type RichText = (name: string) => Field[]

export const richTextField: RichText = (name: string) => {
  return [
    {
      name,
      type: 'richText',
      required: true,
      // Pass the Lexical editor here and override base settings as necessary
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML(name, { name: appendHtml(name) }),
  ]
}
