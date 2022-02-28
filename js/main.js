const mobile_btn = document.getElementById("mobile");
const mobile_menu = document.getElementById("mobile_menu");
const close_btn = document.getElementById("close");

mobile_btn.onclick = (e) => mobile_menu.classList.toggle("show");
close_btn.onclick = (e) => mobile_menu.classList.toggle("show");
