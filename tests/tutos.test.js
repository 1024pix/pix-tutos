const { TUTOS: tutos } = require("../TUTOS");

describe("TUTOS", () => {
  it("should be a non empty list", () => {
    expect(tutos.length).toBeGreaterThan(0);
  });

  it("should have `title` property", () => {
    tutos.forEach((tuto) => {
      expect(tuto).toHaveProperty("title");
    });
  });

  it("should have `slug` property", () => {
    tutos.forEach((tuto) => {
      expect(tuto).toHaveProperty("slug");
    });
  });

  it("should have `videoSrc` property", () => {
    tutos.forEach((tuto) => {
      expect(tuto).toHaveProperty("videoSrc");
    });
  });

  it("should have `transcriptPdfHref` property", () => {
    tutos.forEach((tuto) => {
      expect(tuto).toHaveProperty("transcriptPdfHref");
    });
  });
});
