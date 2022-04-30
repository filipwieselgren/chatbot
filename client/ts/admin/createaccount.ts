export const createAccount = () => {
  const getAdminImgLoginCon: HTMLDivElement = document.querySelector(
    ".admin-img-login-con"
  ) as HTMLDivElement;

  const getAdminImgLogin: HTMLImageElement = document.querySelector(
    ".admin-img-login"
  ) as HTMLImageElement;

  const getAdminForm: HTMLDivElement = document.querySelector(
    ".admin-form"
  ) as HTMLDivElement;

  getAdminImgLogin.src = "../public/images/chatbot-create-account.png";

  getAdminImgLogin.className = "center-bot-img";

  getAdminImgLoginCon.classList.remove("admin-img-login-con");
  getAdminImgLoginCon.classList.add("center-bot");

  getAdminForm.remove();

  // adminImgLoginCon.className = "admin-img-login-con";

  // adminImgLogin.className = "admin-img-login";

  getAdminImgLoginCon.appendChild(getAdminImgLogin);
};
