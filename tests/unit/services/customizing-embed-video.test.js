import { describe, it, expect } from 'vitest';
import customizeEmbedVideo from '../../../services/customizing-embed-video';

describe('Unit | Services | Customizing Embed Video', function () {
  describe('#customizeEmbedVideo', function () {
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
    ];

    urls.forEach(({ url, expectedUrl }) => {
      it(`should add query params to equal ${expectedUrl}`, function () {
        // when
        const result = customizeEmbedVideo(url);

        // then
        expect(result).toEqual(expectedUrl);
      });
    });
  });
});
