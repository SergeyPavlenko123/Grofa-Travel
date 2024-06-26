let selectedTour;
let tours = [];
let favTours = [];

function showSlider() {
  fetch("https://run.mocky.io/v3/952980e8-b147-44eb-95c5-dc2b66ee8011")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      tours = data;
      console.log(tours);
    })
    .then(function () {
      for (let i = 0; i < tours.length; i++) {
        document.querySelector(".owl-carousel").innerHTML += `
                        <div class="frame">
                        <div class="item" style="background-image: url(./img/slider/${tours[i].cover})">
                        <div class="item-content">
                          <div class="content-heading">${tours[i].title}</div>
                          <p class="item-text">${tours[i].date}</p>
                          <p class="item-text">${tours[i].price} грн</p>
                          <button class="favorites-button" id=${tours[i].id}>Додати до обраного</button>
                          <button class="button">
                            <a href="./tours.html">Поїхали!</a>
                          </button>
                        </div>
                      </div>
                        </div>
                        `;
      }

      document
        .querySelector(".owl-carousel")
        .addEventListener("click", function (el) {
          let elementId = el.target.id;
          if (el.target.matches(".favorites-button")) {
            favTours.push(tours.find((el) => el.id == elementId));
            localStorage.setItem("favTours", JSON.stringify(favTours));
          }
        });
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          992: {
            items: 2,
            nav: true,
          },
        },
      });
    });
}

function showFeedbackModal() {
  document.querySelector("body").innerHTML = `
  <div class="submit-booking">
  <div class="container">
    <button class="close-button">
    </button>
    <div class="submit-booking-content">
      <p>
        Дякуємо, що ви обрали<br />
        <span>Grofa Travel</span>
      </p>
      <p>Очікуйте дзінка від нашого менеджера</p>
    </div>
  </div>
</div>
  `;
  document.querySelector(".close-button").onclick = () => {
    location.replace("./index.html");
  };
}
document.querySelector(".question-form").onsubmit = showFeedbackModal;
showSlider();
