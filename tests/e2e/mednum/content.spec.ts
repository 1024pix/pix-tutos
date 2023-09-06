import { expect, test } from '@playwright/test'

test.describe('#mednum content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/mednum'

    // when
    await page.goto(pageToVisit)

    // then
    await expect
      .soft(page.getByRole('heading', { name: 'Tutoriels MedNum' }))
      .toBeVisible()

    for (const link of await page.getByRole('link').all())
      await expect.soft(link).toBeVisible()
  })
})
