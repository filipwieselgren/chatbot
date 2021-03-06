export const sendMessage = (clientMessage: HTMLTextAreaElement) => {
  let msgArr: String[] = [];

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

  const showMsgInContainer: HTMLDivElement = document.querySelector(
    ".show-msg-container"
  ) as HTMLDivElement;

  showMsg.className = "show-msg";

  const getNameFromLocal = JSON.parse(localStorage.getItem("client") || "");

  const getClientMessage: String = clientMessageValue.value;

  msgArr.push(getClientMessage);

  localStorage.setItem("clientmsg", JSON.stringify(getClientMessage));

  if (getClientMessage) {
    showMsg.innerText = getClientMessage.toString();
    // clientMessage.innerText = "";
    clientMessageValue.value = "";
    showMsgInContainer.appendChild(showMsg);
    clientMessageValue.remove();
    clientMessage;
    appendChatHtml.appendChild(clientMessage);
  } else if (!getClientMessage) {
    return;
  }
};
