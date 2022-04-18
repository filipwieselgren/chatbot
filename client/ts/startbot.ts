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

  const btnContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  btnContainer.className = "btn-container";

  const closeBotBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  closeBotBtn.className = "close-bot-btn";
  closeBotBtn.innerText = "Close me";
  closeBotBtn.style.display = "none";
  closeBotBtn.addEventListener("click", () => {
    closeBot();
  });

  const sendMessageBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  sendMessageBtn.className = "send-message-btn";
  sendMessageBtn.innerText = "Send message";
  sendMessageBtn.remove();

  getBot.appendChild(btnContainer);
  btnContainer.appendChild(closeBotBtn);
  btnContainer.appendChild(sendMessageBtn);
  main.appendChild(chatBox);

  const activeBot: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  activeBot.style.display = "none";

  getBot.addEventListener("click", () => {
    createBotText(activeBot, closeBotBtn, sendMessageBtn);
  });
};
