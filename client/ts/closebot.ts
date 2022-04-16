import { loadBotImg } from "./loadbotimg";
import { startBot } from "./startbot";

export const closeBot = () => {
  const getChatBox: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  getChatBox.remove();

  const removeMainContainer: HTMLDivElement = document.querySelector(
    ".main-container"
  ) as HTMLDivElement;
  removeMainContainer.remove();

  loadBotImg();
  startBot();
};
