import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { notFound } from 'next/navigation'

import { Hero } from '../../_blocks/hero'
import Blocks from '../../_components/blocks'

import type { Page } from 'payload-types'

export default async function Page({ params: { slug = 'home' } }) {
  const payload = await getPayloadHMR({ config })

  const data = await payload.find({
    collection: 'pages',
    where: {
      title: { equals: slug },
    },
  })

  const page = data.docs[0]

  if (!data.docs.length) {
    notFound()
    return null
  }

  return (
    <>
      <Hero {...page.hero} />
      <Blocks blocks={page.layout} />
    </>
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })

  // Fetch all pages to get the slugs
  const data = await payload.find({
    collection: 'pages',
    limit: 100, // Adjust based on your expected number of pages
    depth: 0, // If you don't need deep population
  })

  // Map through the docs and return the slug for each page
  const paths = data.docs.map((doc) => ({
    slug: doc.title, // or doc.slug if you have a slug field
  }))

  if (!paths.length) {
    return []
  }

  return paths
}
