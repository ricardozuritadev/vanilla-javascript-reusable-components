const header = document.querySelector(".header");

const links = ["Link 1", "Link 2", "Link 3"]; // Replace with real links

function navbar({
  links,
  backgroundColor = "#fff",
  height = "6rem",
  linksColor = "#000",
  hasLogo = true,
  hasExtraIcons = true
}) {
  function initNavbar() {
    generateNavbar();
    createLinksFunctionality();
  }
  initNavbar();

  function generateNavbar() {
    let navLinksStyles = "margin: 0%";
    if (!hasLogo && !hasExtraIcons) {
      navLinksStyles = "margin: 0%";
    } else if (!hasLogo && hasExtraIcons) {
      navLinksStyles = "margin-left: 10%";
    } else if (!hasExtraIcons && hasLogo) {
      navLinksStyles = "margin-right: 15%";
    }

    const navStyles = `background-color: ${backgroundColor};height: ${height}`;
    const navItemStyles = `color: ${linksColor}`;

    header.insertAdjacentHTML(
      "beforeend",
      `
      <nav class="nav" style="${navStyles}">
        ${hasLogo ? '<div class="nav__logo">LOGO</div>' : ""}

        <ul class="nav__links" style="${navLinksStyles}">
          ${links
            .map(
              (link, index) => `
            <li class="nav__item" style="${navItemStyles}">
              <a class="nav__link" href="#section--${index + 1}">${link}</a>
            </li>
          `
            )
            .join("")}
        </ul>

        ${
          hasExtraIcons ? '<div class="nav__extra-icons">EXTRA ICONS</div>' : ""
        }
      </nav>
    `
    );
  }

  function createLinksFunctionality() {
    const navLinks = document.querySelector(".nav__links");
    navLinks.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("nav__link")) {
        const sectionId = e.target.getAttribute("href");
        document.querySelector(sectionId).scrollIntoView();
      }
    });
  }
}

navbar({
  links,
  backgroundColor: "#6ab187",
  linksColor: "#fff"
});
