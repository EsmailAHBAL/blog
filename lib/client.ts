import { createClient } from 'next-sanity'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn:false,
})
