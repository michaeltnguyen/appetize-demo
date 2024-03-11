import { test, expect } from "@appetize/playwright";

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

test("logs in successfully", async ({ session }) => {
  // this is the newly added deep link
  await session.openUrl("wikilogin://");

  // Recorded using session.record()
  // 1. tap on element with class "android.widget.Button"
  // 2. tap on element with class "android.widget.EditText"
  // 3. type "test"
  // 4. tap on element with class "android.widget.EditText"
  // 5. type "test"
  // 6. tap on element with class "android.widget.Button"
  await session.playActions([
    {
      type: "tap",
      element: {
        path: "/2/0/0/0/0/1/0/0/0/0/0/7/1",
        type: "node",
        source: "accessibility",
        bounds: {
          x: 14,
          y: 415.3333333333333,
          width: 332,
          height: 42,
        },
        attributes: {
          text: "Log in",
          class: "android.widget.Button",
          "resource-id": "org.wikipedia.alpha:id/create_account_login_button",
        },
      },
      coordinates: {
        x: 551,
        y: 1289.9999999999998,
      },
      appId: "org.wikipedia.alpha",
      time: 6.288965237,
      duration: 0.064,
      position: {
        x: 0.5116063138347261,
        y: 0.5381727158948685,
      },
      localPosition: {
        x: 0.5110441767068273,
        y: 0.3492063492063483,
      },
    },
    {
      type: "tap",
      element: {
        path: "/2/0/0/0/0/1/0/0/0/0/0/0/0",
        type: "node",
        source: "accessibility",
        bounds: {
          x: 14,
          y: 91,
          width: 332,
          height: 48.666666666666664,
        },
        attributes: {
          text: "Username",
          class: "android.widget.EditText",
        },
      },
      coordinates: {
        x: 351,
        y: 326,
      },
      appId: "org.wikipedia.alpha",
      time: 7.83617697,
      duration: 0.084,
      position: {
        x: 0.32590529247910865,
        y: 0.13600333750521484,
      },
      localPosition: {
        x: 0.3102409638554217,
        y: 0.3630136986301371,
      },
    },
    {
      type: "typeText",
      text: "test",
    },
    {
      type: "tap",
      element: {
        path: "/3/0/0/0/0/1/0/0/0/0/1/0/0",
        type: "node",
        source: "accessibility",
        bounds: {
          x: 14,
          y: 146.66666666666666,
          width: 332,
          height: 48.666666666666664,
        },
        attributes: {
          text: "Password",
          class: "android.widget.EditText",
        },
      },
      coordinates: {
        x: 327.00000000000006,
        y: 518,
      },
      appId: "org.wikipedia.alpha",
      time: 9.824678595,
      duration: 0.09,
      position: {
        x: 0.30362116991643456,
        y: 0.2161034626616604,
      },
      localPosition: {
        x: 0.2861445783132531,
        y: 0.5342465753424658,
      },
    },
    {
      type: "typeText",
      text: "test",
    },
    {
      type: "tap",
      element: {
        path: "/3/0/0/0/0/1/0/0/0/0/2",
        type: "node",
        source: "accessibility",
        bounds: {
          x: 14,
          y: 202.33333333333334,
          width: 332,
          height: 42,
        },
        attributes: {
          text: "Log in",
          class: "android.widget.Button",
          "resource-id": "org.wikipedia.alpha:id/login_button",
        },
      },
      coordinates: {
        x: 443.00000000000006,
        y: 674,
      },
      appId: "org.wikipedia.alpha",
      time: 12.516369971,
      duration: 0.059,
      position: {
        x: 0.4113277623026927,
        y: 0.2811848143512724,
      },
      localPosition: {
        x: 0.40261044176706834,
        y: 0.5317460317460313,
      },
    },
  ]);

  await expect(session).toHaveElement({
    attributes: {
      text: "Explore",
    },
  });
});

test("changes tabs based on language", async ({ session }) => {
  await session.setLanguage("fr_FR");

  await expect(session).toHaveElement({
    attributes: {
      text: "Explorer",
    },
  });
});
