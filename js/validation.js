$("#input-phone").inputmask("+38(999)999-99-99");

// Правило валидации номера телефона
jQuery.validator.addMethod("checkMaskPhone", function (value) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

const form = $("#order_form");

form.validate();

$.validator.addClassRules({
  "#input-phone": {
    checkMaskPhone: true,
  },
});

form.submit(function (e) {
  e.preventDefault();
  if (form.valid()) {
    console.log($("#input-name").val(), $("#input-phone").val());
  }
  return;
});
