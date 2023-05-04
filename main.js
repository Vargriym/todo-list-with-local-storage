const button = document.querySelector("button"),
  container = document.querySelector("#container"),
  input = document.querySelector("input"),
  form = document.querySelector("form"),
  text = document.querySelector(".task-text");



form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
    <div class="tasks">
      <p class="task-text">${input.value}</p>
      <div>
        <span class="material-icons checkmark icon">
          done
          </span>
        <span class="material-icons trash icon">
          delete
          </span>
      </div>
    </div>
    `;

  input.value = "";

  container.innerHTML += task;
});



container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "material-icons trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "material-icons checkmark icon":
      eo.target.classList.add("dn");

      const close = `
      <span class="material-icons close icon">close</span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finished");

      eo.target.parentElement.innerHTML += close;

      break;

    case "material-icons close icon":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finished");
      eo.target.classList.add("dn");

      const restoreIcon = `
      <span class="material-icons checkmark icon">
          done
      </span>`;

      eo.target.parentElement.innerHTML += restoreIcon;

      break;
  }
});
