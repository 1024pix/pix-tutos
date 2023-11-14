import { expect, test } from '@playwright/test'

test.describe('#sixieme content', () => {
  test('should show correctly', async ({ page }) => {
    // given
    const pageToVisit = '/sixieme'

    // when
    await page.goto(pageToVisit)

    // then
    await expect
      .soft(page.getByRole('heading', { name: 'Capsules vidéos de sensibilisation au numérique - attestation Pix en 6ème' }))
      .toBeVisible()

    for (const link of await page.getByRole('link').all())
      await expect.soft(link).toBeVisible()
  })
})
