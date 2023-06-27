export default function customizeEmbedVideo(href: string): string {
  const url = new URL(href)
  url.searchParams.append('title', '0')
  url.searchParams.append('warningTitle', '0')
  url.searchParams.append('peertubeLink', '0')
  url.searchParams.append('p2p', '0')
  return url.href
}
