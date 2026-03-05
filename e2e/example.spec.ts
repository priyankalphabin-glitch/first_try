import { test, expect } from "@playwright/test";

const URL = "http://localhost:10000/";

test("homepage loads", async ({ page }) => {
  await page.goto(URL);

  await expect(page.getByText("Welcome to Our Website")).toBeVisible();
});

test("All URL loads", async ({ page }) => {
  await page.goto(URL);
  await page.click("text=Contact Us");
  await expect(page.getByText("Contact Us")).toBeVisible();

  await page.goto(URL);
  await page.click("text=Dashboard");
  await expect(page.getByText("Contact Dashboard")).toBeVisible();

  await page.goto(URL);
  await page.click("text=Contact APP");
  await expect(page.getByText("Welcome to Our Website")).toBeVisible();
});

test("Contact form submission", async ({ page }) => {
  await page.goto(URL);
  await page.click("text=Contact Us");
  await page.fill("#name", "John Doe");
  await page.fill("#email", "john.doe@example.com");
  await page.fill("#contactNumber", "1234567890");
  await page.click("text=submit");
  await expect(page.getByText("Thank you for your message!")).toBeVisible();
});
