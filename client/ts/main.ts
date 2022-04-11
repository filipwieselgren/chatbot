window.onload = () => {
  loadHTML();
};

const loadHTML = () => {
  const div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  div.className = "chatbox";
  div.style.border = "1px solid red";
  div.style.width = "80%";
  div.style.height = "80vh";

  document.body.appendChild(div);
};
