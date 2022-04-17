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
}
