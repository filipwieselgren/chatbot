import { closeBot } from "./closebot";
import { createBotText } from "./createbottext";

export const startBot = () => {
  const getBot: HTMLDivElement = document.querySelector(
    ".bot-container"
  ) as HTMLDivElement;
  const main: HTMLDivElement = document.querySelector(
    ".main-container"
  ) as HTMLDivElement;

  const chatBox: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  chatBox.className = "chat-box";

  const closeBotBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  closeBotBtn.className = "close-bot-btn";
  closeBotBtn.innerText = "Close me";
  closeBotBtn.style.display = "none";
  closeBotBtn.addEventListener("click", () => {
    closeBot();
  });

  getBot.appendChild(closeBotBtn);
  main.appendChild(chatBox);

  const activeBot: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  activeBot.style.display = "none";

  getBot.addEventListener("click", () => {
    createBotText(activeBot, closeBotBtn);
  });
};
