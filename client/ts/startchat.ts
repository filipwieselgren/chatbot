import { sendMessage } from "./sendmessage";

export function startChat(
  e: any,
  chatHtml: HTMLDivElement,
  firstMsg: HTMLDivElement,
  secondMsg: HTMLDivElement,
  nameInputContainer: HTMLDivElement
) {
  const getSendMessageBtn: HTMLButtonElement = document.querySelector(
    ".send-message-btn"
  ) as HTMLButtonElement;

  const getShowMsgContainer: HTMLDivElement = document.querySelector(
    ".show-msg-container"
  ) as HTMLDivElement;

  if (getShowMsgContainer === null) {
    const showMsgContainer: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    chatHtml.appendChild(showMsgContainer);
    showMsgContainer.className = "show-msg-container";
  }

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

  if (getSendMessageBtn === null) {
    const sendMessageBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    sendMessageBtn.className = "send-message-btn";
    sendMessageBtn.innerText = "Send message";
    getBtnContainer.appendChild(sendMessageBtn);
    sendMessageBtn.addEventListener("click", () => {
      sendMessage(clientMessage);
    });
  }

  firstMsg.innerText = `Nice to meet you ${getNameValue.value}! How can I help you?`;

  localStorage.setItem("client", JSON.stringify(getNameValue.value));

  const clientMessageContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  clientMessageContainer.className = "client-message-container";

  clientMessage.className = "client-message";

  secondMsg.remove();
  nameInputContainer.remove();

  changeCloseBtnWidth.classList.remove("change-btn-width");
  changeCloseBtnWidth.classList.add("change-btn-width");

  getBotContainer.appendChild(getBtnContainer);
  getBtnContainer.appendChild(changeCloseBtnWidth);

  chatHtml.appendChild(clientMessage);
  // clientMessageContainer.appendChild(clientMessage);
}
