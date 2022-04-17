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

  const getBotContainer: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  const clientMessage: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;

  clientMessage.className = "client-message";

  const btnContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  btnContainer.className = "btn-container";

  const changeCloseBtnWidth: HTMLButtonElement = document.querySelector(
    ".close-bot-btn"
  ) as HTMLButtonElement;
  changeCloseBtnWidth.classList.toggle("change-btn-width");

  const sendMessageBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  sendMessageBtn.className = "send-message-btn";
  sendMessageBtn.innerText = "Send message";

  getBotContainer.appendChild(btnContainer);
  btnContainer.appendChild(changeCloseBtnWidth);
  btnContainer.appendChild(sendMessageBtn);
  chatHtml.appendChild(clientMessage);
}
