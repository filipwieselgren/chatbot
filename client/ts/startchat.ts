import { sendMessage } from "./sendmessage";

export function startChat(
  e: any,
  chatHtml: HTMLDivElement,
  firstMsg: HTMLDivElement,
  secondMsg: HTMLDivElement,
  nameInputContainer: HTMLDivElement,
  sendMessageBtn: HTMLButtonElement
) {
  const getNameValue: HTMLInputElement = document.querySelector(
    ".name-input"
  ) as HTMLInputElement;

  const getBotContainer: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  const clientMessage: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;

  const getBtnContainer: HTMLDivElement = document.querySelector(
    ".btn-container"
  ) as HTMLDivElement;

  const changeCloseBtnWidth: HTMLButtonElement = document.querySelector(
    ".close-bot-btn"
  ) as HTMLButtonElement;

  const getSendBtn: HTMLButtonElement = document.querySelector(
    ".send-message-btn"
  ) as HTMLButtonElement;

  firstMsg.innerText = `Nice to meet you ${getNameValue.value}! How can I help you?`;

  localStorage.setItem("client", JSON.stringify(getNameValue.value));

  clientMessage.className = "client-message";

  getSendBtn.addEventListener("click", () => {
    sendMessage();
  });

  secondMsg.remove();
  nameInputContainer.remove();

  changeCloseBtnWidth.classList.remove("change-btn-width");
  changeCloseBtnWidth.classList.add("change-btn-width");

  sendMessageBtn.style.display = "block";

  getBotContainer.appendChild(getBtnContainer);
  getBtnContainer.appendChild(changeCloseBtnWidth);
  chatHtml.appendChild(clientMessage);
}
