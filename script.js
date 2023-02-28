function changeTheme() {
  var body = document.querySelector("body");
  var header = document.querySelector("header");

  if (body.classList.contains("alt-theme")) {
    body.classList.remove("alt-theme");
    header.classList.remove("alt-theme");
  } else {
    body.classList.add("alt-theme");
    header.classList.add("alt-theme");
  }
}

