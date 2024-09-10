import { test, expect } from "@playwright/test";

test("Acessar página de cadastro", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await expect(page.url()).toContain("acesso");
});

test("Cadastro com dados válidos", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(page).toHaveURL("https://conta.olx.com.br/cadastro");
});

test("Cadastro com e-mail inválido", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("mariam.com"); // E-mail inválido
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Por favor, insira um endereço de e-mail válido.")
  ).toBeVisible();
});

test("Cadastro com campos obrigatórios vazios", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(page.getByText("Campo obrigatório")).toBeVisible();
});

test("Cadastro com CNPJ inválido", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page
    .locator("label")
    .filter({ hasText: "Pessoa Jurídica" })
    .locator("span")
    .nth(3)
    .click();
  await page.getByLabel("CNPJ").fill("12.345.678/0001-00");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Campo obrigatório. Informe o número do seu CNPJ.")
  ).toBeVisible();
});

test("Trocar cadastro de pessoa física para jurídica", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("maria@email");
});

test("Cadastro com nome inválido", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Por favor, preencha ao menos 3 caracteres")
  ).toBeVisible();
});

test("Cadastro com CPF inválido", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("000.000.000-00");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Campo obrigatório. Informe o número do seu CPF.")
  ).toBeVisible();
});

test("Cadastro com e-mail correto", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Enviaremos um e-mail de confirmação.")
  ).toBeVisible();
});

test("Cadastro com nome correto", async ({ page }) => {
  await page.goto(
    "https://conta.olx.com.br/acesso?returnToToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2NvbnRhLm9seC5jb20uYnIvYW51bmNpb3MiLCJpYXQiOjE3MjU5MzQ1MzU1NjB9.UKkCEqDWeIP2jixuI9BujQ6nizMEeAIsrrzLQ0aJeXI"
  );
  await page.getByText("Cadastre-se").click();
  await page.getByPlaceholder("Exemplo: João S.").fill("Maria");
  await page.getByLabel("CPF").fill("789.452.013-26");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Senha", { exact: true }).fill("M@ria190A");
  await page.getByRole("button", { name: "Cadastre-se" }).click();
  await expect(
    page.getByText("Aparecerá em seu perfil, anúncios e chats.")
  ).toBeVisible();
});
