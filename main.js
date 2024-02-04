// styling for nav items
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.color = "var(--dark)";

    for (item of navItems) {
      if (e != item) {
        item.style.color = "var(--dark-dull)";
      }
    }
  });
});

// header's 'p' animation
const subtitle = document.getElementById("header-subtitle");
const subtitleText = "Is anybody out there?";
const subtitleArray = [];

for (i = 0; i < subtitleText.length; i++) {
  subtitleArray.push(subtitleText[i]);
}

subtitleArray.forEach((letter) => {
  subtitle.innerHTML += `<p class="subtitle">${letter}</p>`;
});

const subtitleLetters = document.querySelectorAll(".subtitle");

setInterval(() => {
  const animSpeed = 25;
  let subCount = 1;

  subtitleLetters.forEach((letter) => {
    setTimeout(function () {
      letter.style.color = "var(--dark-dull)";
      letter.style.marginLeft = ".5px";
    }, subCount * animSpeed);

    subCount++;
  });

  let subCountLn = 1;

  setTimeout(() => {
    subtitleLetters.forEach((letter) => {
      setTimeout(function () {
        letter.style.color = "var(--dark)";
        letter.style.marginLeft = "0px";
      }, subCountLn * animSpeed);

      subCountLn++;
    });
  }, subtitleText.length * animSpeed);
}, 7000);
