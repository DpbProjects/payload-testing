import Image from 'next/image'

import { Page } from 'payload-types'

interface FeatureItem {
  title: string
  description: {
    root: {
      type: string
      children: Array<{ type: string; version: number; [k: string]: unknown }>
      direction: 'ltr' | 'rtl' | null
      format: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
      indent: number
      version: number
    }
  }
  description_html?: string | null // Marking this as optional
  image: {
    url: string
    alt?: string
  }
}

interface FeaturesProps {
  title: string
  description: {
    root: {
      type: string
      children: Array<{ type: string; version: number; [k: string]: unknown }>
      direction: 'ltr' | 'rtl' | null
      format: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
      indent: number
      version: number
    }
  }
  description_html?: string | null // Marking this as optional
  featureItems?: FeatureItem[] // Make featureItems optional if it can be absent
}

const Features: React.FC<FeaturesProps> = ({ title, description_html, featureItems }) => {
  console.log({ title, description_html, featureItems })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Reflect the title and description from props */}
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        {/* Render the rich text content safely */}
        {description_html && (
          <div
            className="text-lg text-center mb-8 text-gray-600"
            dangerouslySetInnerHTML={{ __html: description_html }}
          />
        )}

        {/* Render featureItems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems &&
            featureItems.map((feature, index) => {
              return (
                <div key={index} className="p-6 border rounded-lg shadow-md text-center">
                  <div className="relative w-full h-64">
                    <Image
                      src={feature.image.url}
                      alt={feature.image.alt || 'Feature image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  {/* Render the rich text content for each feature item */}
                  {feature.description_html && (
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: feature.description_html }}
                    />
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Features
