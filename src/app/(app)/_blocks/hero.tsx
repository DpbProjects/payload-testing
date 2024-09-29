import { Page } from 'payload-types'

import { CmsImage } from '../_components/cms-image'
import { CmsLink } from '../_components/link'

import { Media } from 'payload-types'

export const Hero: React.FC<Page['hero']> = ({ content, image, link, content_html }) => {
  console.log(content_html)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 prose custom-prose">
          {content_html && <div dangerouslySetInnerHTML={{ __html: content_html }} />}
          {link && <CmsLink {...link} />}
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <CmsImage {...(image as Media)} />
        </div>
      </div>
    </section>
  )
}
