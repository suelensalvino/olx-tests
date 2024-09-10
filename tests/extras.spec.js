import { test, expect } from '@playwright/test';

test('verificando o title da pagina', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await expect(page).toHaveTitle(/Anúncios em Pernambuco/);
});

test('indo para o URL: Grande Recife', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await page.getByRole('link', { name: 'DDD 81 - Grande Recife' }).click();
  await expect(page).toHaveURL('https://www.olx.com.br/estado-pe/grande-recife');
});

test('indo para o URL: Petrolina', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await page.getByRole('link', { name: 'DDD 87 - Petrolina, Garanhuns' }).click();
  await expect(page).toHaveURL('https://www.olx.com.br/estado-pe/regiao-de-petrolina-e-garanhuns');
});

test('heading de ánuncios', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await page.getByRole('heading', { name: 'Anúncios em Pernambuco' }).click();
  await expect(page.getByRole('heading', { name: 'Anúncios em Pernambuco' })).toBeVisible();
});

test('Texto: Ordenar por', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await page.getByRole('heading', { name: 'Anúncios em Pernambuco' }).click();
  await expect(page.getByText('Ordenar por')).toBeVisible();
});

test('Texto: Tipos de anúncio', async ({ page }) => {
  await page.goto('https://www.olx.com.br/estado-pe?lang=pt');
  await page.getByRole('heading', { name: 'Anúncios em Pernambuco' }).click();
  await expect(page.getByText('Tipos de anúncio')).toBeVisible();
});

test('Link Pernambuco', async ({ page }) => {
  await page.goto('https://www.olx.com.br/brasil?lang=pt');
  await page.getByRole('link', { name: 'Pernambuco' }).click();
  await expect(page).toHaveURL('https://www.olx.com.br/estado-pe');
});

test('Carregamento Pernambuco', async ({ page }) => {
  await page.goto('https://www.olx.com.br/brasil?lang=pt');
  await page.getByRole('link', { name: 'Pernambuco' }).click();
  await expect(page.getByRole('heading', { name: 'Anúncios em Pernambuco ' })).toBeVisible();
});

test('Link Goiás', async ({ page }) => {
  await page.goto('https://www.olx.com.br/brasil?lang=pt');
  await page.getByRole('link', { name: 'Goiás' }).click();
  await expect(page).toHaveURL('https://www.olx.com.br/estado-go');
});

test('Carregamento Goiás', async ({ page }) => {
  await page.goto('https://www.olx.com.br/brasil?lang=pt');
  await page.getByRole('link', { name: 'Goiás' }).click();
  await expect(page.getByRole('heading', { name: 'Anúncios em Goiás ' })).toBeVisible();
});