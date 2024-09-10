import { test, expect } from "@playwright/test";

test("Acessar categoria de Imóveis", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page
    .getByRole("link", { name: "Ícone da categoria Imóveis Im" })
    .click();
  await expect(page).toHaveURL("https://www.olx.com.br/imoveis");
});

test("Filtrar imóveis por preço e localização", async ({ page }) => {
  await page.goto("https://www.olx.com.br/imoveis");
  await page.getByLabel("seletor de categoria").selectOption("1001");
  await page.getByLabel("campo de localização").selectOption("ba");
  await page.getByPlaceholder("R$ 1.500,00").click();
  await page.getByPlaceholder("R$ 1.500,00").fill("800,00");
  await page.getByPlaceholder("R$ 9.500,00").fill("1500,00");
  await page.getByRole("link", { name: "Buscar" }).click();
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/venda/estado-ba?ps=800&pe=1500&lis=home_body_search_bar_1001"
  );
});

test("Filtrar por tipo de anunciante", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/estado-ba?ps=800&pe=1500&lis=home_body_search_bar_1001"
  );
  await page.locator("label").filter({ hasText: "1" }).click();
  await page
    .getByTestId("filter-box-clodoview")
    .getByText("Profissional")
    .click();
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/venda/estado-ba?f=c&gsp=1&pe=1500&ps=800"
  );
});

test("Filtrar imóveis por tipo (Casas)", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/estado-ba?f=c&gsp=1&pe=1500&ps=800"
  );
  await page.getByRole("tab", { name: "Casas" }).click();
  await page.getByRole("link", { name: "Casas para alugar Rio de" }).click();
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/aluguel/casas/estado-rj/rio-de-janeiro-e-regiao"
  );
});

test("Buscar casas para alugar no Rio de Janeiro", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/aluguel/casas/estado-rj/rio-de-janeiro-e-regiao"
  );
  await page.getByLabel("Ordenar anúncios por").selectOption("price");
  await page.goto(
    "https://www.olx.com.br/imoveis/aluguel/casas/estado-rj/rio-de-janeiro-e-regiao?sp=1"
  );
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/aluguel/casas/estado-rj/rio-de-janeiro-e-regiao?sp=1"
  );
});

test("Filtrar imóveis por número de quartos", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/estado-sp/grande-campinas/campinas"
  );
  await page
    .getByTestId("filter-box-clodoview")
    .getByRole("combobox")
    .first()
    .selectOption("2");
  await page
    .getByTestId("filter-box-clodoview")
    .getByRole("combobox")
    .nth(1)
    .selectOption("3");
  await page
    .getByRole("button", { name: "aplicar filtro Número de quartos" })
    .click();
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/venda/casas/estado-sp/grande-campinas/campinas?roe=3&ros=2"
  );
});

test("Filtrar imóveis por número de banheiros", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/estado-sp/grande-campinas/campinas"
  );
  await page
    .getByTestId("filter-box-clodoview")
    .getByRole("combobox")
    .nth(2)
    .selectOption("1");
  await page
    .getByTestId("filter-box-clodoview")
    .getByRole("combobox")
    .nth(3)
    .selectOption("2");
  await page
    .getByRole("button", { name: "aplicar filtro Número de banheiros" })
    .click();
  await expect(page).toHaveURL(
    "https://www.olx.com.br/imoveis/venda/casas/estado-sp/grande-campinas/campinas?bae=2&bas=1"
  );
});

test("Aplicar filtro por Particular", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/casas-de-vila?gsp=2"
  );
  await page
    .getByTestId("filter-box-clodoview")
    .getByText("Particular")
    .click();
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/casas-de-vila?f=p&gsp=2"
  );
  await expect(page).toHaveURL(/.*f=p/);
});

test("Aplicar filtro por área mínima e máxima", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/casas-de-vila?f=p&gsp=2"
  );
  await page.locator("#size_min").click();
  await page.locator("#size_min").fill("50");
  await page.locator("#size_max").fill("1");
  await page.locator("#size_max").click();
  await page.locator("#size_max").fill("100");
  await page.getByRole("button", { name: "aplicar filtro Área" }).click();
  await page.goto(
    "https://www.olx.com.br/imoveis/venda/casas/casas-de-vila?f=p&gsp=2&se=100&ss=50"
  );
  await expect(page).toHaveURL(/.*se=100&ss=50/);
});

test("Filtrar terrenos por faixa de preço em Salvador", async ({ page }) => {
  await page.goto(
    "https://www.olx.com.br/imoveis/terrenos/estado-ba/grande-salvador"
  );
  await page.locator("#price_min").fill("70000");
  await page.locator("#price_max").fill("150000");
  await page.getByRole("button", { name: "aplicar filtro Preço" }).click();
  await expect(page).toHaveURL(/.*pe=150000&ps=70000/);
});
