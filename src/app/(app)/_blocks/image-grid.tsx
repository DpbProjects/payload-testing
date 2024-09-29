import Image from 'next/image'

interface ImageGridProps {
  title: string
  images: {
    image: {
      url: string
    }
    altText: string
  }[]
}

const ImageGrid: React.FC<ImageGridProps> = ({ title, images }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="columns-2 md:columns-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img.image.url}
                alt={img.altText}
                width={600} // Wider for better fit in masonry layout
                height={0} // Automatic height based on aspect ratio
                layout="responsive" // Let Next.js handle responsive sizing
                className="w-full h-auto transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGrid
