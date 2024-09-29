import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import type { Config } from 'payload-types'

export async function fetchDocs<T>(args: {
  collection: keyof Config['collections']
  slug?: string
  id?: string
}) {
  'use server'
  const payload = await getPayloadHMR({ config: configPromise })

  const pages = payload.find({
    collection: args.collection,
  })

  return (await pages).docs
}
