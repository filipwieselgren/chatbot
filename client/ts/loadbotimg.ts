export const loadBotImg = () => {
  const mainContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const botContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const botImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  mainContainer.className = "main-container";

  botContainer.className = "bot-container";

  botImg.className = "bot-img";

  botImg.src = "../public/images/chatbot.png";

  botImg.alt = "An image on a robot";

  botContainer.addEventListener("mouseover", () => {
    botImg.src = "../public/images/chatbot-bh.png";
    botContainer.style.cursor = "pointer";
  });
  botContainer.addEventListener("mouseout", () => {
    botImg.src = "../public/images/chatbot.png";
  });

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(botContainer);
  botContainer.appendChild(botImg);
};
