import { expect, test } from '@playwright/test'

test.describe('#edu content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/edu'

    // when
    await page.goto(pageToVisit)

    // then
    await expect
      .soft(page.getByRole('heading', { name: 'Tutoriels Réseau Canopé-Pix' }))
      .toBeVisible()

    await expect(page).toHaveScreenshot()
  })
})
