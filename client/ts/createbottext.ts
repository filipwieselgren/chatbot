import { startChat } from "./startchat";

export const createBotText = (
  activeBot: HTMLDivElement,
  closeBotBtn: HTMLButtonElement
) => {
  const removeBotImg: HTMLDivElement = document.querySelector(
    ".bot-container"
  ) as HTMLDivElement;

  const chatHtml: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const openBotImgContainer: HTMLImageElement = document.createElement(
    "div"
  ) as HTMLImageElement;

  const openBotImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  const firstMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const secondMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const nameInputContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const nameInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  const continueBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  chatHtml.className = "chat-html";

  openBotImgContainer.className = "open-bot-img-container";

  openBotImg.className = "open-bot-img";

  firstMsg.className = "first-msg";

  secondMsg.className = "second-msg";

  nameInputContainer.className = "name-input-container";

  nameInput.className = "name-input";

  continueBtn.className = "continue-btn";

  firstMsg.innerText =
    "Glad to have you hear! I will put you in touch with a real person now.";

  secondMsg.innerText = "But before I do that please tell me your name.";

  continueBtn.innerText = "Continue";

  removeBotImg.style.display = "none";

  activeBot.style.display = "flex";

  closeBotBtn.style.display = "block";

  openBotImg.src = "../public/images/chatbot-open.png";

  openBotImg.alt = "Image of a robot";

  nameInput.placeholder = "Write your name here...";

  continueBtn.addEventListener("click", (e) => {
    if (nameInput.value) {
      startChat(e, chatHtml, firstMsg, secondMsg, nameInputContainer);
      chatHtml.classList.remove("chat-html");
      chatHtml.classList.add("chat-html-end");
      openBotImg.classList.remove("change-bot-width");
      openBotImg.classList.add("open-bot-img");
      openBotImg.src = "../public/images/chatbot-open.png";
      firstMsg.style.border = "1px solid #cee0e0";
      openBotImgContainer.appendChild(openBotImg);
    } else if (!nameInput.value) {
      openBotImg.src = "../public/images/chatbot-no-name.png";
      firstMsg.innerText = "";
      firstMsg.style.border = "none";
      secondMsg.innerText = "";
      secondMsg.style.border = "none";
      openBotImg.classList.remove("open-bot-img");
      openBotImg.classList.add("change-bot-width");
      openBotImgContainer.appendChild(openBotImg);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && nameInput.value) {
      startChat(e, chatHtml, firstMsg, secondMsg, nameInputContainer);
      chatHtml.classList.remove("chat-html");
      chatHtml.classList.add("chat-html-end");
      openBotImg.classList.remove("change-bot-width");
      openBotImg.classList.add("open-bot-img");
      openBotImg.src = "../public/images/chatbot-open.png";
      firstMsg.style.border = "1px solid #cee0e0";
      openBotImgContainer.appendChild(openBotImg);
    } else if (e.key === "Enter" && !nameInput.value) {
      openBotImg.src = "../public/images/chatbot-no-name.png";
      firstMsg.innerText = "";
      firstMsg.style.border = "none";
      secondMsg.innerText = "";
      secondMsg.style.border = "none";
      openBotImg.classList.remove("open-bot-img");
      openBotImg.classList.add("change-bot-width");
      openBotImgContainer.appendChild(openBotImg);
    }
  });

  activeBot.appendChild(chatHtml);
  activeBot.appendChild(closeBotBtn);
  activeBot.appendChild(openBotImgContainer);
  openBotImgContainer.appendChild(openBotImg);

  chatHtml.appendChild(firstMsg);
  chatHtml.appendChild(secondMsg);
  chatHtml.appendChild(nameInputContainer);
  nameInputContainer.appendChild(nameInput);
  nameInputContainer.appendChild(continueBtn);
};
