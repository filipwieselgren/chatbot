export const startBot = () => {
  const getBot: HTMLDivElement = document.querySelector(
    ".bot-container"
  ) as HTMLDivElement;

  getBot.addEventListener("click", () => {
    const activeBot: HTMLDivElement = document.querySelector(
      ".chat-box"
    ) as HTMLDivElement;

    const removeBotImg: HTMLDivElement = document.querySelector(
      ".bot-container"
    ) as HTMLDivElement;

    removeBotImg.style.display = "none";
    activeBot.style.display = "block";

    const chatHtml: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    chatHtml.className = "chat-html";

    const closeBotBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    closeBotBtn.className = "close-bot-btn";
    closeBotBtn.innerText = "Close me";

    activeBot.appendChild(chatHtml);
    activeBot.appendChild(closeBotBtn);
  });
};
