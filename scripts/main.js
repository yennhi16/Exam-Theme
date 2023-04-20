const login = document.querySelector(".login");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const utils = document.querySelector(".utils");
const recentViews = document.querySelector(".recent-views-detail");
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  cart.style.transform = "translateX(420px)";
  login.style.transform = "translateX(370px)";
});
const handleDisplayLogin = () => {
  overlay.style.display = "block";
  login.style.transform = "translateX(0)";
};

const handleCloseLogin = () => {
  overlay.style.display = "none";
  login.style.transform = "translateX(370px)";
};

const handleCloseCart = () => {
  overlay.style.display = "none";
  cart.style.transform = "translateX(420px)";
};

const handleDisplayCart = () => {
  overlay.style.display = "block";
  cart.style.transform = "translateX(0)";
};

const handleDisplayRecentViews = () => {
  recentViews.style.display = "flex";
  utils.style.display = "none";
};

const collapseRecentViews = () => {
  recentViews.style.display = "none";
  utils.style.display = "flex";
};

// Display utils then user scroll first 100vh
window.addEventListener("scroll", function () {
  const distanceFromTop = window.scrollY;
  if (distanceFromTop >= window.innerHeight) {
    utils.style.display = "block";
  } else {
    utils.style.display = "none";
  }
});

// Scroll to top
const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    duration: 800,
  });
};

// Add to cart
const addToCartBtn = document.querySelectorAll(".item-button-hover");

addToCartBtn.forEach((button) =>
  button.addEventListener("click", function () {
    const selectionBox = `<div class="item-button-submit">
              <div class="item-icon-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              </div>
              <div class="item-button-submit-des">
                <p>Size: XS</p>
                <div class="item-button-submit-sizes">
                  <span class="item-size">XS</span>
                  <span class="item-size">S</span>
                  <span class="item-size">M</span>
                  <span class="item-size">L</span>
                  <span class="item-size">XL</span>
                  <span class="item-size">2X</span>
                </div>
              </div>
              <button class="button">SUBMIT</button>
            </div>`;
    const iconEye = `<div class="item-icon-fav-eye">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"
              />
            </svg>
          </div>`;
    button.insertAdjacentHTML("afterend", iconEye);
    button.insertAdjacentHTML("afterend", selectionBox);
    const closeButton = button.parentElement.querySelector(".item-icon-close");
    closeButton.addEventListener("click", handleCloseSelection);
  })
);

const handleCloseSelection = (e) => {
  const closeButton = e.currentTarget;
  const itemButtonSubmit = closeButton.closest(".item-button-submit");
  const itemIconEye = closeButton.closest(".item-icon-fav-eye");
  const eye = document.querySelector(".item-icon-fav-eye");

  itemButtonSubmit.remove();
  // itemIconEye.remove();
  eye.style.display = "none";
};
