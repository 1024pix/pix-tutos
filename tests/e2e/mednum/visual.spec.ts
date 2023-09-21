import { expect, test } from '@playwright/test'

test.describe('#mednum content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/mednum'

    // when
    await page.goto(pageToVisit)

    // then
    await expect
      .soft(page.getByRole('heading', { name: 'Tutoriels produits par la MedNum pour Pix' }))
      .toBeVisible()

    await expect(page).toHaveScreenshot()
  })
})
