import { test, expect } from '@playwright/test';

test.describe('content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/edu';

    // when
    const response = await page.goto(pageToVisit);

    // then
    await expect
      .soft(page.getByRole('heading', { name: 'Tutoriels Réseau Canopé-Pix' }))
      .toBeVisible();
    for (const link of await page.getByRole('link').all()) {
      await expect.soft(link).toBeVisible();
    }
  });
});
