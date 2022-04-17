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
  botImg.alt = "An image on a robot";
  botImg.src = "../public/images/chatbot.png";

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
