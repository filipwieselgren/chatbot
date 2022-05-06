import { showImg } from "./mainadmin";

window.onload = function () {
  createAccountImg();
  createAccountForm();
};

export const createAccountImg = () => {
  console.log("skapa konto");

  showImg();

  const getAdminImgLoginCon: HTMLDivElement = document.querySelector(
    ".admin-img-login-con"
  ) as HTMLDivElement;

  const getAdminImgLogin: HTMLImageElement = document.querySelector(
    ".admin-img-login"
  ) as HTMLImageElement;

  getAdminImgLogin.src = "../public/images/chatbot-create-account.png";

  getAdminImgLogin.className = "center-bot-img";

  getAdminImgLoginCon.classList.remove("admin-img-login-con");
  getAdminImgLoginCon.classList.add("center-bot");

  // adminImgLoginCon.className = "admin-img-login-con";

  // adminImgLogin.className = "admin-img-login";
  getAdminImgLoginCon.appendChild(getAdminImgLogin);
};

const createAccountForm = () => {
  const adminFormCon: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const adminForm: HTMLFormElement = document.createElement(
    "form"
  ) as HTMLFormElement;

  const adminFormUserName: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  const adminFormPassword: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;
  const adminFormPasswordConfirm: HTMLInputElement = document.createElement(
    "input"
  ) as HTMLInputElement;

  const adminFormBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;

  adminFormCon.className = "admin-form-con";
  adminForm.className = "admin-form";
  adminFormUserName.className = "admin-form-username";
  adminFormPassword.className = "admin-form-password";
  adminFormPasswordConfirm.className = "admin-form-password";
  adminFormBtn.className = "admin-form-btn";

  adminFormUserName.placeholder = "Username";
  adminFormPassword.placeholder = "Password";
  adminFormPasswordConfirm.placeholder = "Confirm password";
  adminFormBtn.innerText = "Create account";

  adminFormPassword.type = "password";
  adminFormPasswordConfirm.type = "password";

  document.body.appendChild(adminFormCon);
  adminFormCon.appendChild(adminForm);
  adminForm.appendChild(adminFormUserName);
  adminForm.appendChild(adminFormPassword);
  adminForm.appendChild(adminFormPasswordConfirm);
  adminForm.appendChild(adminFormBtn);
};
