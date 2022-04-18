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

  firstMsg.innerText = `Nice to meet you ${getNameValue.value}! How can I help you?`;
  localStorage.setItem("client", JSON.stringify(getNameValue.value));

  secondMsg.remove();
  nameInputContainer.remove();

  const getBotContainer: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  const clientMessage: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;

  clientMessage.className = "client-message";

  const getBtnContainer: HTMLDivElement = document.querySelector(
    ".btn-container"
  ) as HTMLDivElement;

  const changeCloseBtnWidth: HTMLButtonElement = document.querySelector(
    ".close-bot-btn"
  ) as HTMLButtonElement;

  const getSendBtn: HTMLButtonElement = document.querySelector(
    ".send-message-btn"
  ) as HTMLButtonElement;

  getSendBtn.addEventListener("click", () => {
    sendMessage();
  });

  changeCloseBtnWidth.classList.remove("change-btn-width");
  changeCloseBtnWidth.classList.add("change-btn-width");
  sendMessageBtn.style.display = "block";

  getBotContainer.appendChild(getBtnContainer);
  getBtnContainer.appendChild(changeCloseBtnWidth);
  chatHtml.appendChild(clientMessage);
}
