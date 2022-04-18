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

  showMsg.innerText = clientMessageValue.value;

  chatHtmlMsg.appendChild(showMsg);

  clientMessageValue.remove();
};
