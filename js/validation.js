const phoneInput = document.getElementById("input-phone");

phoneInput.addEventListener("onkeydown", function (e) {
  return !/^[А-Яа-яA-Za-z ]$/.test(e.key);
});
