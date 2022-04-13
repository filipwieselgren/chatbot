export const loadBotImg = () => {
  const mainContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  mainContainer.className = "main-container";

  const botBox: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  botBox.className = "bot-box";
  botBox.style.display = "none";

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
  mainContainer.appendChild(botBox);
  mainContainer.appendChild(botContainer);
  botContainer.appendChild(botImg);
};
