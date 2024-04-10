let btns = document.querySelectorAll(".tour-button");
function getData() {
    fetch("https://run.mocky.io/v3/7ae64052-c659-4c35-b6af-f46601a202a5").then(function(response) {
        return response.json();
    }).then(function(data) {
        btns.forEach((element)=>{
            element.addEventListener("click", function(el) {
                document.querySelector("body").innerHTML = `
        <header class="header" style="background-image:url(./img/slider/${data[el.target.id].cover})">
        <div class="nav-bar">
          <div class="logo">
            <a href="../index.html">
              <img src="../img/header/Logo.png" alt="Grofa" />
            </a>
          </div>
          <nav class="navigation">
            <div class="nav-top-block">
              <div class="phone">+38(097)9674976</div>
              <div class="lang">ua | en</div>
              <div class="social">
                <img src="../img/header/Facebook.png" alt="Facebook" />
                <img src="../img/header/instagram.png" alt="instagram" />
              </div>
            </div>
            <div class="nav-menu">
              <ul class="nav-list">
                <li>
                  <a href="#">\u{413}\u{430}\u{43B}\u{435}\u{440}\u{435}\u{44F}</a>
                </li>
                <li>
                  <a href="./tours.html">\u{422}\u{443}\u{440}\u{438}</a>
                </li>
                <li>
                  <a href="#">\u{428}\u{43A}\u{43E}\u{43B}\u{430} Off-Road</a>
                </li>
                <li>
                  <a href="#">\u{41E}\u{431}\u{440}\u{430}\u{43D}\u{435}</a>
                </li>
                <li>
                  <a href="./contacts.html">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}\u{438}</a>
                </li>
                <li>
                  <a href="#">\u{41F}\u{440}\u{43E} \u{43D}\u{430}\u{441}</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="mobile-navigation">
            <button
              class="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img src="../img/header/nav-button.png" alt="menu" />
            </button>
  
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <div class="logo">
                  <img src="../img/header/Logo.png" alt="" />
                </div>
                <button
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <img src="../img/header/Close-button.png" alt="close" />
                </button>
              </div>
              <div class="offcanvas-body">
                <ul class="nav-list">
                  <li>
                    <a href="#">\u{413}\u{430}\u{43B}\u{435}\u{440}\u{435}\u{44F}</a>
                  </li>
                  <li>
                    <a href="./tours.html">\u{422}\u{443}\u{440}\u{438}</a>
                  </li>
                  <li>
                    <a href="#">\u{428}\u{43A}\u{43E}\u{43B}\u{430} Off-Road</a>
                  </li>
                  <li>
                    <a href="#">\u{41E}\u{431}\u{440}\u{430}\u{43D}\u{435}</a>
                  </li>
                  <li>
                    <a href="./contacts.html">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}\u{438}</a>
                  </li>
                  <li>
                    <a href="#">\u{41F}\u{440}\u{43E} \u{43D}\u{430}\u{441}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-title">
          <div class="title-name">${data[el.target.id].title}</div>
          <div class="orange-mountain"></div>
        </div>
      </header>
      <main class="main">
        <div class="container">
          <div class="heading">
              <div class="heading-line">
                <img
                  src="./img/slider/heading-line.svg"
                  alt="#"
                />
              </div>
              <div class="heading-title">${data[el.target.id].title}</div>
            </div>
          <div class="description" data-aos="flip-left">
            <div class="content">
              <p class="text">
               ${data[el.target.id].description}
              </p>
            </div>
            <div class="poster">
              <img src="../img/selected-tours-posters/poster-1.jpeg" alt="poster" />
            </div>
          </div>
  
          <div class="what-we-do" data-aos="flip-right">
            <div class="content">
              <h3>\u{429}\u{43E} \u{431}\u{443}\u{434}\u{435}\u{43C}\u{43E} \u{440}\u{43E}\u{431}\u{438}\u{442}\u{438}:</h3>
              <ul>
                <li>
                  1 \u{434}\u{435}\u{43D}\u{44C} \u{412}\u{438}\u{457}\u{437}\u{434} \u{437}\u{456} \u{41B}\u{44C}\u{432}\u{43E}\u{432}\u{430} \u{2013} \u{422}\u{443}\u{441}\u{442}\u{430}\u{43D}\u{44C} \u{2013} \u{432}\u{43E}\u{434}\u{43E}\u{441}\u{43F}\u{430}\u{434} \u{413}\u{443}\u{440}\u{43A}\u{430}\u{43B}\u{43E} \u{2013} \u{411}\u{443}\u{431}\u{43D}\u{438}\u{449}\u{435}
                  (\u{421}\u{43A}\u{435}\u{43B}\u{456} \u{414}\u{43E}\u{432}\u{431}\u{443}\u{448}\u{430}) \u{2013} \u{441}. \u{41A}\u{430}\u{43C}\u{44F}\u{43D}\u{43A}\u{430} (\u{432}\u{43E}\u{434}\u{43E}\u{441}\u{43F}\u{430}\u{434})
                </li>
                <li>
                  2 \u{434}\u{435}\u{43D}\u{44C} \u{422}\u{443}\u{445}\u{43B}\u{44F} \u{2013} \u{412}\u{435}\u{43B}\u{438}\u{43A}\u{438}\u{439} \u{412}\u{435}\u{440}\u{445} \u{2013} \u{425}\u{430}\u{449}\u{43E}\u{432}\u{430}\u{43D}\u{44F} \u{2013} \u{432}\u{43E}\u{434}\u{43E}\u{441}\u{43F}\u{430}\u{434} \u{428}\u{438}\u{43F}\u{456}\u{442} \u{2013}
                  \u{411}\u{43E}\u{440}\u{436}\u{430}\u{432}\u{430}
                </li>
                <li>
                  3 \u{434}\u{435}\u{43D}\u{44C} \u{411}\u{443}\u{43D}\u{43A}\u{435}\u{440} \u{410}\u{440}\u{43F}\u{430}\u{434}\u{430} \u{2013} \u{43A}\u{456}\u{43D}\u{43D}\u{430} \u{444}\u{435}\u{440}\u{43C}\u{430} \u{2013} \u{43F}\u{43E}\u{43B}\u{43E}\u{43D}\u{438}\u{43D}\u{430} \u{420}\u{443}\u{43D}\u{430} \u{2013} \u{41B}\u{443}\u{43C}\u{448}\u{43E}\u{440}\u{438}
                </li>
                <li>4 \u{434}\u{435}\u{43D}\u{44C} \u{41A}\u{43E}\u{43B}\u{43E}\u{447}\u{430}\u{432}\u{430}. \u{41F}\u{43E}\u{445}\u{456}\u{434} \u{43D}\u{430} \u{433}. \u{421}\u{442}\u{440}\u{438}\u{43C}\u{431}\u{430}</li>
                <li>6 \u{434}\u{435}\u{43D}\u{44C} \u{421}\u{432}\u{438}\u{434}\u{43E}\u{432}\u{435}\u{446}\u{44C}</li>
                <li>7 \u{434}\u{435}\u{43D}\u{44C} \u{412}\u{435}\u{440}\u{445}\u{43E}\u{432}\u{438}\u{43D}\u{430}, \u{41F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{439} \u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C}- \u{432}\u{434}\u{441}\u{43F}.\u{413}\u{443}\u{43A}</li>
              </ul>
            </div>
            <div class="poster">
              <img
                src="../img/selected-tours-posters/poster-2.jpeg"
                alt="poster"
              />
            </div>
          </div>
          <div class="what-you-pay-for" data-aos="flip-left">
            <div class="content">
              <h3>\u{417}\u{430} \u{449}\u{43E} \u{432}\u{438} \u{43F}\u{43B}\u{430}\u{442}\u{438}\u{442}\u{435}:</h3>
              <ul>
                <li>
                  \u{437}\u{430} \u{43D}\u{435}\u{43A}\u{43E}\u{43C}\u{444}\u{43E}\u{440}\u{442}\u{43D}\u{443},\u{430}\u{43B}\u{435} \u{437} \u{43D}\u{430}\u{43C}\u{438} \u{431}\u{435}\u{437}\u{43F}\u{435}\u{447}\u{43D}\u{443} \u{43F}\u{43E}\u{457}\u{437}\u{434}\u{43A}\u{443}(\u{441}\u{43F}\u{435}\u{446}\u{456}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}
                  \u{43F}\u{456}\u{434}\u{433}\u{43E}\u{442}\u{43E}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{43C}\u{438} \u{43F}\u{43E}\u{437}\u{430}\u{448}\u{43B}\u{44F}\u{445}\u{43E}\u{432}\u{438}\u{43A}\u{430}\u{43C}\u{438})
                </li>
                <li>\u{417}\u{430} \u{43F}\u{430}\u{43B}\u{438}\u{432}\u{43E}</li>
                <li>
                  \u{437}\u{430} \u{441}\u{443}\u{43F}\u{440}\u{43E}\u{432}\u{456}\u{434} \u{433}\u{456}\u{434}\u{430}:\u{43C}\u{438} \u{437}\u{43D}\u{430}\u{454}\u{43C}\u{43E} \u{43C}\u{456}\u{441}\u{446}\u{44F},\u{449}\u{43E} \u{43B}\u{435}\u{436}\u{430}\u{442}\u{44C} \u{43F}\u{43E}\u{437}\u{430} \u{43C}\u{435}\u{436}\u{430}\u{43C}\u{438}
                  \u{442}\u{443}\u{440}\u{438}\u{441}\u{442}\u{438}\u{447}\u{43D}\u{438}\u{445} \u{43C}\u{430}\u{440}\u{448}\u{440}\u{443}\u{442}\u{456}\u{432} \u{442}\u{430} \u{430}\u{444}\u{430}\u{43B}\u{44C}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{445} \u{434}\u{43E}\u{440}\u{456}\u{433}
                </li>
                <li>\u{437}\u{430} \u{442}\u{440}\u{438}\u{440}\u{430}\u{437}\u{43E}\u{432}\u{435} \u{445}\u{430}\u{440}\u{447}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{432} \u{43F}\u{43E}\u{43B}\u{44C}\u{43E}\u{432}\u{438}\u{445} \u{443}\u{43C}\u{43E}\u{432}\u{430}\u{445}</li>
              </ul>
            </div>
            <div class="poster">
              <img
                src="../img/selected-tours-posters/poster-3.jpeg"
                alt="poster"
              />
            </div>
          </div>
          <div class="additional-services">
            <div class="content">
              <h3>\u{414}\u{43E}\u{434}\u{430}\u{442}\u{43A}\u{43E}\u{432}\u{43E} \u{43E}\u{43F}\u{43B}\u{430}\u{447}\u{443}\u{44E}\u{442}\u{44C}\u{441}\u{44F}:</h3>
  
              <ul>
                <li>\u{41F}\u{440}\u{43E}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{432} \u{433}\u{43E}\u{442}\u{435}\u{43B}\u{44F}\u{445}</li>
                <li>\u{41F}\u{440}\u{43E}\u{43A}\u{430}\u{442} \u{441}\u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}(\u{43D}\u{430}\u{43C}\u{435}\u{442}\u{438},\u{441}\u{43F}\u{430}\u{43B}\u{44C}\u{43D}\u{438}\u{43A}\u{438})</li>
              </ul>
  
              <div class="text">
                <p>\u{417}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E}, \u{43C}\u{438} \u{440}\u{430}\u{434}\u{43E} \u{432}\u{438}\u{441}\u{43B}\u{443}\u{445}\u{430}\u{454}\u{43C}\u{43E} \u{432}\u{430}\u{448}\u{456} \u{43F}\u{43E}\u{431}\u{430}\u{436}\u{430}\u{43D}\u{43D}\u{44F} \u{442}\u{430} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}.</p>
                <p>\u{410}\u{441}\u{444}\u{430}\u{43B}\u{44C}\u{442}\u{43E}\u{43C} \u{457}\u{434}\u{435}\u{43C}\u{43E} __ \u{43A}\u{43C}, \u{43F}\u{43E}\u{437}\u{430} \u{430}\u{441}\u{444}\u{430}\u{43B}\u{44C}\u{442}\u{43E}\u{43C} __ \u{43A}\u{43C}.</p>
                <p>\u{41C}\u{430}\u{440}\u{448}\u{440}\u{443}\u{442} \u{43F}\u{440}\u{43E}\u{445}\u{43E}\u{434}\u{438}\u{442}\u{44C} \u{43B}\u{456}\u{441}\u{43E}\u{432}\u{438}\u{43C}\u{438} \u{434}\u{43E}\u{440}\u{43E}\u{433}\u{430}\u{43C}\u{438}, \u{431}\u{435}\u{437} \u{448}\u{43A}\u{43E}\u{434}\u{438} \u{434}\u{43E}\u{432}\u{43A}\u{456}\u{43B}\u{43B}\u{44E}.</p>
                <p>
                  \u{425}\u{43E}\u{447}\u{435}\u{448} \u{43F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440}\u{438}\u{442}\u{438} \u{441}\u{438}\u{43B}\u{438} \u{441}\u{432}\u{43E}\u{433}\u{43E} \u{43F}\u{43E}\u{437}\u{430}\u{448}\u{43B}\u{44F}\u{445}\u{43E}\u{432}\u{438}\u{43A}\u{430} \u{432} \u{43D}\u{430}\u{448}\u{43E}\u{43C}\u{443} \u{442}\u{443}\u{440}\u{456} \u{2013} \u{440}\u{430}\u{434}\u{43E}
                  \u{43E}\u{431}\u{433}\u{43E}\u{432}\u{43E}\u{440}\u{438}\u{43C}\u{43E}!
                </p>
              </div>
            </div>
            <div class="poster" data-aos="flip-right">
              <img
                src="../img/selected-tours-posters/poster-4.jpeg"
                alt="poster"
              />
            </div>
          </div>
          <button class="button white">
            <a href="./booking-page.html">\u{417}\u{430}\u{43C}\u{43E}\u{432}\u{438}\u{442}\u{438} \u{442}\u{443}\u{440}</a>
          </button>
        </div>
      </main>
      <footer class="footer">
        <div class="container">
        <div class="logo">
        <a href="./index.html">
          <img src="../img/header/Logo.png" alt="Grofa"
        /></a>
        <a href="./index.html"
          ><img src="../img/footer/black-logo.png" alt="Grofa"
        /></a>
      </div>
          <nav class="nav-menu">
            <ul class="nav-list">
              <li class="nav-link">\u{413}\u{430}\u{43B}\u{435}\u{440}\u{435}\u{44F}</li>
              <li class="nav-link">\u{422}\u{443}\u{440}\u{438}</li>
              <li class="nav-link">\u{428}\u{43A}\u{43E}\u{43B}\u{430} Off-Road</li>
              <li class="nav-link">\u{426}\u{456}\u{43A}\u{430}\u{432}\u{435}</li>
              <li class="nav-link">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}\u{438}</li>
              <li class="nav-link">\u{41F}\u{440}\u{43E} \u{43D}\u{430}\u{441}</li>
            </ul>
          </nav>
          <div class="footer-heading">\u{412}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{439} \u{423}\u{43A}\u{440}\u{430}\u{457}\u{43D}\u{443} \u{440}\u{430}\u{437}\u{43E}\u{43C} \u{437} \u{43D}\u{430}\u{43C}\u{438}!</div>
          <div class="footer-contact">
            <p>\u{43A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}\u{438}</p>
            <p>+38(097)9674976</p>
            <p>travel@grofa.club</p>
          </div>
          <div class="social">
            <div>
              <img value="white" src="../img/header/Facebook.png" alt="facebook" />
              <img
                value="black"
                src="../img/footer/Facebook-black.png"
                alt="facebook"
              />
            </div>
            <div>
              <img
                value="white"
                src="../img/header/instagram.png"
                alt="instagram"
              />
              <img
                value="black"
                src="../img/footer/Instagram-black.png"
                alt="instagram"
              />
            </div>
          </div>
        </div>
        `;
            });
        });
    });
}
AOS.init();
getData();

//# sourceMappingURL=tours.b2d9bdd1.js.map
