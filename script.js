const botones  = document.querySelectorAll(".btn");
const pantalla = document.querySelector(".pantalla");



botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);

    if (btn.id === "borrarTodo") {
      pantalla.textContent = 0;
      return;
    }

    if (btn.id === "borrar") {
      if (pantalla.textContent.length === 1) {
        pantalla.textContent = 0;
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (btn.textContent === "=") {
      pantalla.textContent = eval(pantalla.textContent);
      return;
    }

    if (pantalla.textContent === "0") {
      pantalla.textContent = btn.textContent;
      return;
    }
    pantalla.textContent += btn.textContent;
  });
});