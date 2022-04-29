window.onload = function() {
    showImg();
    showForm();
};
const showImg = ()=>{
    const adminImgLoginCon = document.createElement("div");
    const adminImgLogin = document.createElement("img");
    adminImgLoginCon.className = "admin-img-login-con";
    adminImgLogin.className = "admin-img-login";
    adminImgLogin.src = "../public/images/chatbotlogin.png";
    document.body.appendChild(adminImgLoginCon);
    adminImgLoginCon.appendChild(adminImgLogin);
};
const showForm = ()=>{
    const adminFormCon = document.createElement("div");
    const adminForm = document.createElement("form");
    const adminFormUserName = document.createElement("input");
    const adminFormPassword = document.createElement("input");
    const adminFormBtn = document.createElement("button");
    const crtAccountTxt = document.createElement("div");
    const crtAccountTxtAtag = document.createElement("a");
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

//# sourceMappingURL=admin.35743779.js.map
