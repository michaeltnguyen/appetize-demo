const config = {
  testDir: "./tests",
  outputDir: "test-results/",
  timeout: 120 * 1000,
  expect: {
    // recommended ratio for screenshot testing
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 3 : 0,
  reporter: "line",

  // correlates to number of concurrent Appetize sessions at a time
  workers: 1,
  fullyParallel: false,

  use: {
    trace: "retain-on-failure",
    baseURL: "https://appetize.io",

    // Appetize session configuration
    config: {
      device: "pixel7",
      publicKey: "rzj4z6l4qgpnorzyadsf474w7m",
    },
  },
};

export default config;
