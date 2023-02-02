import { test, expect } from '@playwright/test';

test.describe('content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/edu';

    // when
    const response = await page.goto(pageToVisit);

    // then
    expect(response.status()).toBe(200);
    await expect(
      page.getByRole('heading', { name: 'Tutoriels Réseau Canopé-Pix' })
    ).toBeVisible();
    for (const link of await page.getByRole('link').all()) {
      await expect(link).toBeVisible();
    }
  });
});
