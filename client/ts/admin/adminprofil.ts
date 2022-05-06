try {
  const msg = JSON.parse(localStorage.getItem("clientmsg") || "");

  console.log(msg);
} catch {
  console.log("No msg");
}
