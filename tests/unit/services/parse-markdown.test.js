import parseMarkdownMetadata from '../../../services/parse-markdown';

describe('Unit | Services | Parse Markdown Metadata', function () {
  describe('#parseMarkdownMetadata', function () {
    it('should return an empty object if metadata doesnt exist', function () {
      const markdown = `# My Blog Post
      This is the content of my blog post.`;

      const metadata = parseMarkdownMetadata(markdown);

      expect(metadata).toStrictEqual({});
    });

    it('should parse metadata if exists', function () {
      const markdown = `---
      title: My Blog Post
      author: John Doe
      date: 2021-01-01
      url: https://test.fr
      ---
      # My Blog Post
      This is the content of my blog post.`;

      const metadata = parseMarkdownMetadata(markdown);

      const expectedResult = {
        author: 'John Doe',
        date: '2021-01-01',
        title: 'My Blog Post',
        url: 'https://test.fr',
      };

      expect(metadata).toStrictEqual(expectedResult);
    });
  });
});
