import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Sanity configuration — replace with your actual project details:
 * 1. Project ID: found in your Sanity project dashboard (e.g. abc12345)
 * 2. Dataset: usually 'production' or 'development'
 */
const SANITY_PROJECT_ID = '3iah38w2';
const SANITY_DATASET = 'production';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-05-15',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { asset: { _ref: string; _type: string }; _type?: string; alt?: string }) {
  return builder.image(source);
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: unknown;
  publishedAt: string;
  author?: {
    name: string;
    slug?: { current: string };
    image?: { _type: string; asset: { _ref: string; _type: string } };
  };
  mainImage?: { _type: string; asset: { _ref: string; _type: string }; alt?: string };
  categories?: string[];
}
