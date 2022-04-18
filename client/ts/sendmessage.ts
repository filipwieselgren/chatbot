export const sendMessage = (clientMessage: HTMLTextAreaElement) => {
  const chatHtmlMsg: HTMLDivElement = document.querySelector(
    ".chat-html"
  ) as HTMLDivElement;

  const clientMessageValue: HTMLTextAreaElement = document.querySelector(
    ".client-message"
  ) as HTMLTextAreaElement;

  const showMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const appendChatHtml: HTMLDivElement = document.querySelector(
    ".chat-html"
  ) as HTMLDivElement;

  showMsg.className = "show-msg";

  const getClientMessage: String = clientMessageValue.value;

  if (getClientMessage) {
    showMsg.innerText = getClientMessage.toString();
    chatHtmlMsg.appendChild(showMsg);
    clientMessageValue.remove();
    clientMessage;
    appendChatHtml.appendChild(clientMessage);
    clientMessage.innerText = "";
  } else if (!getClientMessage) {
    return;
  }
};
