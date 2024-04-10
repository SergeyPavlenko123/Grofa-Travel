function submitBooking() {
    document.querySelector('body').innerHTML = 
    `
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
    `
    document.querySelector('.close-button').onclick = ()=>{location.replace('./main-page.html')}
}


document.querySelector('.booking-form').onsubmit = submitBooking;

