import { Fragment } from 'react'

import type { Page } from 'payload-types'

import Features from '../_blocks/features'
import Testimonials from '../_blocks/testimonials'
import ImageGrid from '../_blocks/image-grid'

const blockComponents = {
  features: Features,
  testimonials: Testimonials,
  'image-grid': ImageGrid,
}

interface BlockProps {
  blocks: Page['layout'][0][]
}

const Blocks = ({ blocks }: BlockProps) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            return <Block key={index} {...block} />
          }
        })}
      </Fragment>
    )
  }

  return null
}

export default Blocks
