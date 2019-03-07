/* eslint-disable no-await-in-loop */
const symbols = require("../../symbols");

const delay = async millisec =>
  new Promise(resolve => {
    setTimeout(() => resolve(), millisec);
  });

const frames = {
  hi: (text = "") => `

    (__]__
    (●‿●)    ${text}
    (> <)

`,
  lastDay: (text1 = "", text2 = "", text3 = "") => `

    (__]__  ${text1}
    (●_●)    ${text2}
    (>  )>   ${text3}

`,
  lastDayCloseEye: (text1 = "", text2 = "", text3 = "") => `

    (__]__  ${text1}
    ( _ )    ${text2}
    (>  )>   ${text3}

`,
  plane: (text1, text2, text3) => `
         __|__         ${text1}
  --@--@--(_)--@--@--  ${text2}
                       ${text3}
  `,
  planeRun: (text1, text2, text3) => `
         __|__         ${text1}
  --o--o--(_)--o--o--  ${text2}
                       ${text3}
  `,
  planeLand: (text1, text2, text3) => `
         __|__         ${text1}
  --o--o--(_)--o--o--  ${text2}
       !   !   !       ${text3}
`,

  izettle: (text1 = "", text2 = "", header = "") => `
  ${header}
   =======
      /😎     ${text1} 
  🤘 ///  🤘  ${text2}
    ///
   =======  
`,
  izettleClose: (text1 = "", text2 = "", header = "") => `
  ${header}
   =======
      /😎     ${text1} 
  🤟  ///  🤟   ${text2}
    ///
   =======  
`,
  exizettle: (text1 = "", text2 = "", text3 = "", h = "", h2 = "") => `
${h}

   ^^^        ${h2}
  (■‿■)       ${text1}
  (> <)       ${text2}
              ${text3}
 `
};

const animHi = async stream => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.hi("Hej 👋"));
  await delay(1500);
  const messages = [
    " Today is my last day here ☹️",
    "I wanted to take a moment to",
    "let you know how much I’ve enjoyed my time here..."
  ];
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.lastDay(...messages));
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.lastDayCloseEye(...messages));
    await delay(500);
  }
};

const animMovingToStockholm = async stream => {
  const messages = [
    "I moved from India 🇮🇳",
    "on Sept 2018",
    "to join iZettle 🚀"
  ];
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.plane(...messages));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.planeRun(...messages));
    await delay(600);
  }
  stream.push(symbols.PAGE_BREAK);

  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(
      frames.planeLand(
        "It was a big change 😅",
        "But iZettle made me feel",
        "like home 🏠"
      )
    );
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(
      frames.planeLand(
        "It was a big change 😅",
        "But iZettle made me feel",
        "like home ❤️"
      )
    );
    await delay(600);
  }
};

const animHappyWork = async stream => {
  const messages = [
    "I am taking with me: ",
    "Memories💐, Friendships😎 & lots of learnings 🌈",
    "Though my time here was short."
  ];
  for (let i = 0; i < 8; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.izettle(...messages));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.izettleClose(...messages));
    await delay(500);
  }

  stream.push(symbols.PAGE_BREAK);
  stream.push(
    frames.izettle(
      "All my amazing friends and colleagues !!! 🎉",
      "",
      "I'll miss 😞 "
    )
  );
  await delay(3000);

  stream.push(symbols.PAGE_BREAK);
  stream.push(
    frames.izettleClose(
      "All my amazing friends and colleagues !!! 🎉",
      "Also: The kickass EC-Team 😎🤘 ",
      "I'll miss 😞 "
    )
  );
  await delay(5000);
};

const animExIz = async stream => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(
    frames.exizettle(
      "My Email: atulanand94@gmail.com",
      "LinkedIn: https://www.linkedin.com/in/atulanand94/",
      "Website: https://blog.atulr.com",
      "Thank you for everything 🙂 and keep rocking! 🚀",
      "I hope we can keep in touch 🙏"
    )
  );
};

module.exports = async stream => {
  await animHi(stream);
  await animMovingToStockholm(stream);
  await animHappyWork(stream);
  await animExIz(stream);
  stream.push("\n");
  stream.push(null);
};
