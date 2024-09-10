import { test, expect } from "@playwright/test";

test("Link Acre", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Acre" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-ac");
});

test("Link Amapá", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Amapá" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-ap");
});

test("Link Amazonas", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Amazonas" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-am");
});

test("Link Tocantins", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Tocantins" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-to");
});

test("Link Santa Catarina", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Santa Catarina" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-sc");
});

test("Link Sergipe", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Sergipe" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-se");
});

test("Link São Paulo", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "São Paulo" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-sp");
});

test("Link Rondônia", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Rondônia" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-ro");
});

test("Link Roraima", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Roraima" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-rr");
});

test("Link Bahia", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Bahia" }).click();
  await expect(page).toHaveURL("https://www.olx.com.br/estado-ba");
});
