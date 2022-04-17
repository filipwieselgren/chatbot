export function startChat(
  e: any,
  chatHtml: HTMLDivElement,
  firstMsg: HTMLDivElement,
  secondMsg: HTMLDivElement,
  nameInputContainer: HTMLDivElement
) {
  const getNameValue: HTMLInputElement = document.querySelector(
    ".name-input"
  ) as HTMLInputElement;

  firstMsg.innerText = `Nice to meet you ${getNameValue.value}! How can I help you?`;

  secondMsg.remove();
  nameInputContainer.remove();

  const clientMessage: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;

  clientMessage.className = "client-message";

  const changeCloseBtnWidth: HTMLButtonElement = document.querySelector(
    ".close-bot-btn"
  ) as HTMLButtonElement;
  changeCloseBtnWidth.classList.toggle("change-btn-width");
  chatHtml.appendChild(clientMessage);
}
