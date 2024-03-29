import { describe, expect, it } from 'vitest'
import customizeEmbedVideo from '../../../services/customizing-embed-video'

describe('unit | Services | Customizing Embed Video', () => {
  describe('#customizeEmbedVideo', () => {
    const urls = [
      {
        url: 'https://ma-super-video.example.net/videoId',
        expectedUrl:
          'https://ma-super-video.example.net/videoId?title=0&warningTitle=0&peertubeLink=0&p2p=0',
      },
      {
        url: 'https://ma-super-video.example.net/videoId?toto=2',
        expectedUrl:
          'https://ma-super-video.example.net/videoId?toto=2&title=0&warningTitle=0&peertubeLink=0&p2p=0',
      },
    ]

    urls.forEach(({ url, expectedUrl }) => {
      it(`should add query params to equal ${expectedUrl}`, () => {
        // when
        const result = customizeEmbedVideo(url)

        // then
        expect(result).toEqual(expectedUrl)
      })
    })
  })
})
