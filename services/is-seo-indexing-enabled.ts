import { env } from 'node:process'

export default function isSeoIndexingEnabled(): boolean {
  return env.SEO_ENABLE_INDEXING === 'true'
}
