document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let header = document.createElement("h1");
  header.innerText = "hello, welcome to Dom Practice";
  header.className = "mainHeader";
  body.appendChild(header);

  let form = document.createElement("form");
  let firstName = document.createElement("input");
  let lastName = document.createElement("input");

  form.className = "mainForm";
  body.appendChild(form);

  form.appendChild(firstName);
  form.appendChild(lastName);

  let button = document.createElement("button");
  button.innerText = "Submit";
  let userFirst = document.createElement("p");
  firstName.addEventListener("change", event => {
    userFirst.innerText = event.target.value;
  });
  let userLast = document.createElement("p");
  lastName.addEventListener("change", event => {
    userLast.innerText = event.target.value;
  });

  body.appendChild(button);

  button.addEventListener("click", event => {
    localStorage.setItem("userFirstInput", userFirst.innerHTML);
    localStorage.setItem("userLastInput", userLast.innerHTML);

    body.appendChild(userFirst);
    body.appendChild(userLast);
  });

  let value1 = localStorage.getItem("userFirstInput");
  console.log(value1);
  let value2 = localStorage.getItem("userLastInput");
  let newRefreshPtag1 = document.createElement("p");
  let newRefreshPtag2 = document.createElement("p");
  newRefreshPtag1.innerHTML = value1;
  newRefreshPtag2.innerHTML = value2;

  body.appendChild(newRefreshPtag1);
  body.appendChild(newRefreshPtag2);
});
