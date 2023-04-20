let header = document.querySelector(".main-menu-container");
let mobileMenu = document.getElementById("mobile-menu");
let headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  let isClosed = header.clientHeight === headerHeight;

  // If header client height is equal to header original height then open menu
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height =
      "45px"; /* Otherwise, close menu by setting header client = 45 */
  }
};

// Close menu when menu items are clicked
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    let isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
