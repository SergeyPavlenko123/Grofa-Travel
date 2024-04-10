
let favTours = JSON.parse(localStorage.getItem('favTours'));
let favBlock =  document.querySelector('.favorites-block');

function showFavorite() {
    
    for(let i = 0;i < favTours.length;i++){
       favBlock.innerHTML += `
        <div class="frame">
            <div class="favorites-item" style="background-image: url(./img/slider/${favTours[i].cover})">
                <div class="favorites-item-content">
                    <button class="close-button" id="${i}"></button>
                    <div class="content-heading">${favTours[i].title}</div>
                    <p class="item-text">${favTours[i].date}</p>
                    <p class="item-text">${favTours[i].price} грн</p>
                    <button class="button" id=${favTours[i].id}>
                       Поїхали
                    </button>
                </div>
            </div>
        </div>
      
        `
      }
      if(favTours.length === 0) {
        favBlock.innerHTML = `<div><h1>Зараз тут нічого немає</h1></div>`
     }
      
    }


    favBlock.addEventListener('click',function(el){
        if(el.target.matches('.close-button')) {
       
         let i = el.target.id;
      
         favTours.splice(i,1);
         localStorage.setItem('favTours',JSON.stringify(favTours));
         favBlock.innerHTML = '';
         if(favTours.length === 0) {
            favBlock.innerHTML = `<div class="favorite-heading"><h1>Зараз тут нічого немає</h1></div>`
         }
         showFavorite()
        }
  
       })

favBlock.addEventListener('click',function(el){
   if(el.target.matches('.button')){
    var selected = favTours.find((el)=>el.id = el);
   }
document.querySelector('body').innerHTML =
    `
        <header class="header" style="background-image:url(./img/slider/${selected.cover})">
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
                  <a href="#">Галерея</a>
                </li>
                <li>
                  <a href="./tours.html">Тури</a>
                </li>
                <li>
                  <a href="#">Школа Off-Road</a>
                </li>
                <li>
                  <a href="#">Обране</a>
                </li>
                <li>
                  <a href="./contacts.html">Контакти</a>
                </li>
                <li>
                  <a href="#">Про нас</a>
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
                    <a href="#">Галерея</a>
                  </li>
                  <li>
                    <a href="./tours.html">Тури</a>
                  </li>
                  <li>
                    <a href="#">Школа Off-Road</a>
                  </li>
                  <li>
                    <a href="#">Обране</a>
                  </li>
                  <li>
                    <a href="./contacts.html">Контакти</a>
                  </li>
                  <li>
                    <a href="#">Про нас</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-title">
          <div class="title-name">${selected.title}</div>
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
              <div class="heading-title">${selected.title}</div>
            </div>
          <div class="description" data-aos="flip-left">
            <div class="content">
              <p class="text">
               ${selected.description}
              </p>
            </div>
            <div class="poster">
              <img src="../img/selected-tours-posters/poster-1.jpeg" alt="poster" />
            </div>
          </div>
  
          <div class="what-we-do" data-aos="flip-right">
            <div class="content">
              <h3>Що будемо робити:</h3>
              <ul>
                <li>
                  1 день Виїзд зі Львова – Тустань – водоспад Гуркало – Бубнище
                  (Скелі Довбуша) – с. Камянка (водоспад)
                </li>
                <li>
                  2 день Тухля – Великий Верх – Хащованя – водоспад Шипіт –
                  Боржава
                </li>
                <li>
                  3 день Бункер Арпада – кінна ферма – полонина Руна – Лумшори
                </li>
                <li>4 день Колочава. Похід на г. Стримба</li>
                <li>6 день Свидовець</li>
                <li>7 день Верховина, Писаний Камінь- вдсп.Гук</li>
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
              <h3>За що ви платите:</h3>
              <ul>
                <li>
                  за некомфортну,але з нами безпечну поїздку(спеціально
                  підготовленими позашляховиками)
                </li>
                <li>За паливо</li>
                <li>
                  за супровід гіда:ми знаємо місця,що лежать поза межами
                  туристичних маршрутів та афальтованих доріг
                </li>
                <li>за триразове харчування в польових умовах</li>
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
              <h3>Додатково оплачуються:</h3>
  
              <ul>
                <li>Проживання в готелях</li>
                <li>Прокат спорядження(намети,спальники)</li>
              </ul>
  
              <div class="text">
                <p>Звичайно, ми радо вислухаємо ваші побажання та пропозиції.</p>
                <p>Асфальтом їдемо __ км, поза асфальтом __ км.</p>
                <p>Маршрут проходить лісовими дорогами, без шкоди довкіллю.</p>
                <p>
                  Хочеш перевірити сили свого позашляховика в нашому турі – радо
                  обговоримо!
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
            <a href="./booking-page.html">Замовити тур</a>
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
              <li class="nav-link">Галерея</li>
              <li class="nav-link">Тури</li>
              <li class="nav-link">Школа Off-Road</li>
              <li class="nav-link">Цікаве</li>
              <li class="nav-link">Контакти</li>
              <li class="nav-link">Про нас</li>
            </ul>
          </nav>
          <div class="footer-heading">Відкрий Україну разом з нами!</div>
          <div class="footer-contact">
            <p>контакти</p>
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
    
    `
})       

showFavorite()
