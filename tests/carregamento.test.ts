import { test, expect } from "@playwright/test";

test("Carregamento Acre", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Acre" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios no Acre" })
  ).toBeVisible();
});

test("Carregamento Amapá", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Amapá" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios no Amapá" })
  ).toBeVisible();
});

test("Carregamento Amazonas", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Amazonas" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios no Amazonas " })
  ).toBeVisible();
});

test("Carregamento Tocantins", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Tocantins" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em Tocantins " })
  ).toBeVisible();
});

test("Carregamento Santa Catarina", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Santa Catarina" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em Santa Catarina" })
  ).toBeVisible();
});

test("Carregamento Sergipe", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Sergipe" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em Sergipe " })
  ).toBeVisible();
});

test("Carregamento São Paulo", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "São Paulo" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em São Paulo " })
  ).toBeVisible();
});

test("Carregamento Rondônia", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Rondônia" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em Rondônia " })
  ).toBeVisible();
});

test("Carregamento Roraima", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Roraima" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios em Roraima " })
  ).toBeVisible();
});

test("Carregamento Bahia", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Bahia" }).click();
  await expect(
    page.getByRole("heading", { name: "Anúncios na Bahia " })
  ).toBeVisible();
});
