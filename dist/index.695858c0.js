let selectedTour;
let tours = [];
let favTours = [];
function showSlider() {
    fetch("https://run.mocky.io/v3/7ae64052-c659-4c35-b6af-f46601a202a5").then(function(response) {
        return response.json();
    }).then(function(data) {
        tours = data;
    }).then(function() {
        for(let i = 0; i < tours.length; i++)document.querySelector(".owl-carousel").innerHTML += `
                        <div class="frame">
                        <div class="item" style="background-image: url(./img/slider/${tours[i].cover})">
                        <div class="item-content">
                          <div class="content-heading">${tours[i].title}</div>
                          <p class="item-text">${tours[i].date}</p>
                          <p class="item-text">${tours[i].price} \u{433}\u{440}\u{43D}</p>
                          <button class="favorites-button" id=${tours[i].id}>\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{434}\u{43E} \u{43E}\u{431}\u{440}\u{430}\u{43D}\u{43E}\u{433}\u{43E}</button>
                          <button class="button">
                            <a href="./tours.html">\u{41F}\u{43E}\u{457}\u{445}\u{430}\u{43B}\u{438}!</a>
                          </button>
                        </div>
                      </div>
                        </div>
                        `;
        document.querySelector(".owl-carousel").addEventListener("click", function(el) {
            let elementId = el.target.id;
            if (el.target.matches(".favorites-button")) {
                favTours.push(tours.find((el)=>el.id == elementId));
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
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 2,
                    nav: true
                }
            }
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
        \u{414}\u{44F}\u{43A}\u{443}\u{454}\u{43C}\u{43E}, \u{449}\u{43E} \u{432}\u{438} \u{43E}\u{431}\u{440}\u{430}\u{43B}\u{438}<br />
        <span>Grofa Travel</span>
      </p>
      <p>\u{41E}\u{447}\u{456}\u{43A}\u{443}\u{439}\u{442}\u{435} \u{434}\u{437}\u{456}\u{43D}\u{43A}\u{430} \u{432}\u{456}\u{434} \u{43D}\u{430}\u{448}\u{43E}\u{433}\u{43E} \u{43C}\u{435}\u{43D}\u{435}\u{434}\u{436}\u{435}\u{440}\u{430}</p>
    </div>
  </div>
</div>
  `;
    document.querySelector(".close-button").onclick = ()=>{
        location.replace("./index.html");
    };
}
document.querySelector(".question-form").onsubmit = showFeedbackModal;
showSlider();

//# sourceMappingURL=index.695858c0.js.map
