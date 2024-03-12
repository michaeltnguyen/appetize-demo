import { test, expect } from "@appetize/playwright";

test.use({
  config: {
    publicKey: "5snkvo26z7leqzpzby5qswo5ei",
    device: "iphone14",
  },
});

test("loads the main activity", async ({ session }) => {
  await expect(session).toHaveElement({
    attributes: {
      text: "Explore",
    },
  });
});

test.use({ config: { appearance: "dark" } });

test("loads the main activity in dark mode", async ({ session }) => {
  await expect(session).toHaveElement({
    attributes: {
      text: "Featured article",
    },
  });

  var screenshot = await session.screenshot();

  expect(screenshot.data).toMatchSnapshot();
});

test("changes tabs based on language", async ({ session }) => {
  await session.setLanguage("fr_FR");

  await expect(session).toHaveElement({
    attributes: {
      text: "Explorer",
    },
  });
});
