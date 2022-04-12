export const loadBotImg = () => {
  const mainContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  mainContainer.className = "main-container";

  const botContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  botContainer.className = "bot-container";

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(botContainer);
};
