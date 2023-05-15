export default function isSeoIndexingEnabled(): boolean {
  return process.env.SEO_ENABLE_INDEXING === 'true';
}
