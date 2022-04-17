import { startChat } from "./startchat";

export const createBotText = (
  activeBot: HTMLDivElement,
  closeBotBtn: HTMLButtonElement
) => {
  const removeBotImg: HTMLDivElement = document.querySelector(
    ".bot-container"
  ) as HTMLDivElement;

  removeBotImg.style.display = "none";
  activeBot.style.display = "flex";

  const chatHtml: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  chatHtml.className = "chat-html";

  closeBotBtn.style.display = "block";

  const openBotImgContainer: HTMLImageElement = document.createElement(
    "div"
  ) as HTMLImageElement;

  openBotImgContainer.className = "open-bot-img-container";

  const openBotImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  openBotImg.className = "open-bot-img";
  openBotImg.src = "../public/images/chatbot-open.png";
  openBotImg.alt = "Image of a robot";

  const firstMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  firstMsg.className = "first-msg";
  firstMsg.innerText =
    "Glad to have you hear! I will put you in touch with a real person now.";

  const secondMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  secondMsg.className = "second-msg";
  secondMsg.innerText = "But before I do that please tell me your name.";

  const nameInputContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  nameInputContainer.className = "name-input-container";

  const nameInput: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  nameInput.className = "name-input";
  nameInput.placeholder = "Write your name here...";

  const continueBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  continueBtn.className = "continue-btn";
  continueBtn.innerText = "Continue";

  continueBtn.addEventListener("click", (e) => {
    if (nameInput.value) {
      startChat(e, chatHtml, firstMsg, secondMsg, nameInputContainer);
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

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && nameInput.value) {
      startChat(e, chatHtml, firstMsg, secondMsg, nameInputContainer);
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
