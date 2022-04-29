window.onload = function () {
  showImg();
  showForm();
};

const showImg = () => {
  const adminImgLoginCon: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const adminImgLogin: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  adminImgLoginCon.className = "admin-img-login-con";

  adminImgLogin.className = "admin-img-login";

  adminImgLogin.src = "../public/images/chatbotlogin.png";

  document.body.appendChild(adminImgLoginCon);

  adminImgLoginCon.appendChild(adminImgLogin);
};

const showForm = () => {
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
  const adminFormBtn: HTMLButtonElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  const crtAccountTxt: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  const crtAccountTxtAtag: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  adminFormCon.className = "admin-form-con";
  adminForm.className = "admin-form";
  adminFormUserName.className = "admin-form-username";
  adminFormPassword.className = "admin-form-password";
  adminFormBtn.className = "admin-form-btn";
  crtAccountTxt.className = "crt-account-txt";

  adminFormUserName.placeholder = "Username";
  adminFormPassword.placeholder = "Password";
  adminFormBtn.innerText = "Login";
  crtAccountTxt.innerText = "Don’t have an account? Create one ";
  crtAccountTxtAtag.innerText = "here";

  document.body.appendChild(adminFormCon);
  adminFormCon.appendChild(adminForm);
  adminForm.appendChild(adminFormUserName);
  adminForm.appendChild(adminFormPassword);
  adminForm.appendChild(adminFormBtn);
  adminForm.appendChild(crtAccountTxt);
  crtAccountTxt.appendChild(crtAccountTxtAtag);
};
