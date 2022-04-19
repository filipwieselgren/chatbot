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

  const btnContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const closeBotBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  chatBox.className = "chat-box";

  btnContainer.className = "btn-container";

  closeBotBtn.className = "close-bot-btn";

  closeBotBtn.innerText = "Close me";

  getBot.appendChild(btnContainer);
  btnContainer.appendChild(closeBotBtn);
  main.appendChild(chatBox);

  const activeBot: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  closeBotBtn.style.display = "none";
  activeBot.style.display = "none";

  closeBotBtn.addEventListener("click", () => {
    closeBot();
  });

  getBot.addEventListener("click", () => {
    createBotText(activeBot, closeBotBtn);
  });
};
