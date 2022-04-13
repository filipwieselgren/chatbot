export const loadBotImg = () => {
  const mainContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  mainContainer.className = "main-container";

  const chatBox: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  chatBox.className = "chat-box";
  chatBox.style.display = "none";

  const botContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  botContainer.className = "bot-container";

  const botImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  botImg.className = "bot-img";
  botImg.alt = "An image on a robot";
  botImg.src = "../public/images/chatbot.png";

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(chatBox);
  mainContainer.appendChild(botContainer);
  botContainer.appendChild(botImg);
};
