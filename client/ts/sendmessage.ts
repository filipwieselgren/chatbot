export const sendMessage = (clientMessage: HTMLTextAreaElement) => {
  const chatHtmlMsg: HTMLDivElement = document.querySelector(
    ".chat-html-end"
  ) as HTMLDivElement;

  const clientMessageValue: HTMLTextAreaElement = document.querySelector(
    ".client-message"
  ) as HTMLTextAreaElement;

  const showMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const appendChatHtml: HTMLDivElement = document.querySelector(
    ".chat-html-end"
  ) as HTMLDivElement;

  const showMsgContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  showMsgContainer.className = "show-msg-container";

  showMsg.className = "show-msg";

  const getClientMessage: String = clientMessageValue.value;

  if (getClientMessage) {
    showMsg.innerText = getClientMessage.toString();
    clientMessage.innerText = "Write here...";
    chatHtmlMsg.appendChild(showMsgContainer);
    showMsgContainer.appendChild(showMsg);
    clientMessageValue.remove();
    clientMessage;
    appendChatHtml.appendChild(clientMessage);
  } else if (!getClientMessage) {
    return;
  }
};
