import { test, expect } from "@playwright/test";

test("Acesso OLX - Login com e-mail incompleto", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByRole("button", { name: "Continuar" }).click();
  const errorMessage = await page.getByText("Campo obrigatório. Informe um");
  expect(errorMessage).toBeTruthy();
});

test("Inserção de e-mail incompleto", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("suelen");
  await page.getByRole("button", { name: "Continuar" }).click();
  const errorMessage = await page.getByText("Campo obrigatório. Informe um");
  expect(errorMessage).toBeTruthy();
});

test("Inserção de e-mail completo", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("suelen@email.com");
  await page.getByRole("button", { name: "Continuar" }).click();
  const errorMessage = await page.getByText("Houve um problema ao acessar");
  expect(errorMessage).toBeTruthy();
});

test("Ajuda ao usuário", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  const helpMessage = await page.getByText("Esqueceu sua senha?");
  expect(helpMessage).toBeTruthy();
});

test("Reativação de conta", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  await page
    .getByRole("button", { name: "Quero reativar minha conta" })
    .click();
  await expect(page).toHaveURL("https://conta.olx.com.br/reativacao-conta");
});

test("Redirecionamento para a página de cadastro", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Cadastre-se").click();
  await expect(page).toHaveURL("https://conta.olx.com.br/cadastro");
});

test("Redirecionamento para a página de recuperação de senha", async ({
  page,
}) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  await page.getByRole("button", { name: "Esqueci a minha senha" }).click();
  await expect(page).toHaveURL("https://conta.olx.com.br/recuperacao-senha");
});

test("Redirecionamento para a página de acesso sem senha", async ({ page }) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  await page.getByRole("button", { name: "Entrar sem senha" }).click();
  await expect(page).toHaveURL(
    "https://conta.olx.com.br/enviar-email-acesso-sem-senha"
  );
});

test("Receber acesso por e-mail com campo obrigatório não preenchido", async ({
  page,
}) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  await page.getByRole("button", { name: "Entrar sem senha" }).click();
  await page.getByLabel("E-mail").click();
  await page.getByRole("button", { name: "Receber acesso por e-mail" }).click();
  const errorMessage = await page.getByText("Este campo é obrigatório");
  expect(errorMessage).toBeTruthy();
});

test("Tentativa de recuperação de senha com captcha não preenchido", async ({
  page,
}) => {
  await page.goto("https://www.olx.com.br/brasil?lang=pt");
  await page.getByRole("link", { name: "Entrar" }).click();
  await page.getByText("Preciso de ajuda").click();
  await page.getByRole("button", { name: "Esqueci a minha senha" }).click();
  await page.getByLabel("E-mail").click();
  await page.getByLabel("E-mail").fill("suelen@email.com");
  await page.getByRole("button", { name: "Receber instruções" }).click();
  await page.getByRole("button", { name: "Receber instruções" }).click();
  const captchaErrorMessage = await page.getByText("Captcha não preenchido.");
  expect(captchaErrorMessage).toBeTruthy();
});
