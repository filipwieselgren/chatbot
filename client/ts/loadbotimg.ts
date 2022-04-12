export const loadBotImg = () => {
  const mainContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  mainContainer.className = "main-container";

  const botContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  botContainer.className = "bot-container";

  const botImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  botImg.className = "bot-img";
  botImg.src = "../public/images/chatbot.png";

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(botContainer);
};
