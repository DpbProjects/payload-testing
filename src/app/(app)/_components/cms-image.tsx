import { Media } from 'payload-types'
import Image from 'next/image'

export const CmsImage: React.FC<Media> = (props) => {
  const { url } = props
  if (!url) return null // Return early if no image URL is provided

  return (
    <Image
      src={url}
      alt="Hero Image"
      className="w-full h-auto rounded-lg shadow-lg"
      width={600} // Set desired width
      height={400} // Set desired height
    />
  )
}
