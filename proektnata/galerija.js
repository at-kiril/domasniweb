const f = document.querySelectorAll(".glasaj");

f.forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault(); 

    const komentar = form.querySelector("textarea").value.trim();
    const like = form.querySelector("input[id$='lajk']").checked;
    const dislike = form.querySelector("input[id$='dislajk']").checked;

    let komentari = form.querySelector(".komentari");
    if (!komentari) {
      komentari = document.createElement("div");
      komentari.classList.add("komentari");
      form.appendChild(komentari);
    }

    const novkomentar = document.createElement("p");
    if (like) novkomentar.textContent = `👍 ${komentar || ""}`;
    else if (dislike) novkomentar.textContent = `👎  ${komentar || ""}`;
    else novkomentar.textContent = komentar || "";

    komentari.appendChild(novkomentar);

    form.querySelector("textarea").value = "";
    form.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
  });
});

