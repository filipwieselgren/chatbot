export const sendMessage = () => {
  const chatHtmlMsg: HTMLDivElement = document.querySelector(
    ".chat-html"
  ) as HTMLDivElement;

  const clientMessageValue: HTMLTextAreaElement = document.querySelector(
    ".client-message"
  ) as HTMLTextAreaElement;

  const showMsg: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const clientMessage: String = clientMessageValue.value;

  showMsg.innerText = clientMessage.toString();

  chatHtmlMsg.appendChild(showMsg);

  clientMessageValue.remove();
};
