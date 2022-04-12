export const startBot = () => {
  const getBot: HTMLDivElement = document.querySelector(
    ".bot-container"
  ) as HTMLDivElement;

  getBot.addEventListener("click", () => {
    const activeBot: HTMLDivElement = document.querySelector(
      ".bot-box"
    ) as HTMLDivElement;

    const removeBotImg: HTMLDivElement = document.querySelector(
      ".bot-container"
    ) as HTMLDivElement;

    removeBotImg.style.display = "none";
    activeBot.style.display = "block";
  });
};
