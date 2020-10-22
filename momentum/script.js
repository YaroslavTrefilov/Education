const time = document.querySelector('.time'),
  dayInfo = document.querySelector('.day-info'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    dayOfWeek = today.getDay();
    dateOfMonth = today.getDate();
    month = today.getMonth();
    
  switch (dayOfWeek) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      break;
  }
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  // Output day
  dayInfo.innerHTML = `${dayOfWeek}, ${dateOfMonth} ${month}`;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}
  <span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// 
const setBg = () => {
  let today = new Date(),
    hour = today.getHours();
  const base = `../momentum/assets/images/bg/`;
  const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];

  let imagesSrcList = [];

  for (let i = 0; i < images.length; i++) {
    imagesSrcList.push(imageSrc = base + images[i])
  }

  const viewBgImage = (index, increment = false) => {
    const body = document.querySelector('body');
    const src = imagesSrcList[index];
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {      
      body.style.backgroundImage = `url(${src})`;
    };
    setInterval(() => {

      index++;
      const src = imagesSrcList[index];
      const img = document.createElement('img');
      img.src = src;
      body.style.backgroundImage = `url(${src})`;

      index = (index + imagesSrcList.length) % imagesSrcList.length;
    }, 3600000);
  };

  if ((hour <= 12) && (hour >= 6)) {
    viewBgImage(0);
  } else if ((hour <= 18) && (hour > 12)) {
    viewBgImage(6);
  } else  if ((hour > 18) && (hour <= 24)){
    viewBgImage(12);
  }
  else  if ((hour > 24) && (hour < 6)){
    viewBgImage(18);
  }



// доделать кнопку переключения фона
  const getImage = () => {
    const body = document.querySelector('body');
    let currentBgImage =  body.style.backgroundImage;
    let currentBgInArray = imagesSrcList.find(image => image = currentBgImage);
    console.log(imagesSrcList);

    

    btn.disabled = true;
    setTimeout(function() { btn.disabled = false }, 1000);
  };


  if ((hour <= 12) && (hour >= 6)) {
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if ((hour <= 18) && (hour > 12)) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else  if ((hour > 18) && (hour <= 24)){
    // Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    // document.body.style.color = 'white';
  }
  else  if ((hour > 24) && (hour < 6)){
  // Nigth
  document.body.style.backgroundImage =
    "url('https://i.ibb.co/924T2Wv/night.jpg')";
  greeting.textContent = 'Good Nigth, ';
  // document.body.style.color = 'white';
  }
  const btn = document.querySelector('.btn-bg');
  btn.addEventListener('click', getImage);
};



//

function getName() {
  if ((localStorage.getItem('name') === null)||
  (localStorage.getItem('name') === '')) {
    name.value = '[Enter Name]';
  } else {
    name.value = localStorage.getItem('name');
  }
};
const setName = (e) => {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if ((name.value === null)||
      (name.value === '')) {
        name.value = '[Enter Name]';
        name.blur();
      } else {
        localStorage.setItem('name', e.target.value);
        name.blur();
      }
    }
  } else {
    localStorage.setItem('name', e.target.value);
  }
};
const clearName = (event) => {
  if (event.target === name) {
    name.value = '';
    localStorage.setItem('name', name.value)
  }
};
const resetName = (event) => {
  if (event.target !== name) {
    if ((name.value === null)||
    (name.value === '')) {
      name.value = '[Enter Name]';
    }
  } else {
    name.value = localStorage.getItem('name');
  }
}

function getFocus() {
  if ((localStorage.getItem('focus') === null) ||
  (localStorage.getItem('focus') === '')) {
    focus.value = '[Enter Focus]';
  } else {
    focus.value = localStorage.getItem('focus');
  }
}
// 
const setFocus = (e) => {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if ((focus.value === null)||
      (focus.value === '')) {
        focus.value = '[Enter Focus]';
        focus.blur();
      } else {
        localStorage.setItem('focus', e.target.value);
        focus.blur();
      }
    }
  } else {
    localStorage.setItem('focus', e.target.value);
  }
};
const clearFocus = (event) => {
  if (event.target === focus) {
    focus.value = '';
    localStorage.setItem('focus', focus.value)
  }
};
const resetFocus = (e) => {
  if (e.target !== focus) {
    if ((focus.value === null)||
    (focus.value === '')) {
      focus.value = '[Enter Focus]';
    }
  } else {
    focus.value = localStorage.getItem('focus');
  }
}
window.addEventListener('click', resetName);
name.addEventListener('click', clearName);
name.addEventListener('change', setName);
name.addEventListener('keypress', setName)


window.addEventListener('click', resetFocus);
focus.addEventListener('click', clearFocus);
focus.addEventListener('change', setFocus);
focus.addEventListener('keypress', setFocus)

const quote = () => {
  const blockquote = document.querySelector('blockquote');
  const figcaption = document.querySelector('figcaption');
  const btn = document.querySelector('.btn-quote');

  async function getQuote() {  
    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
    const res = await fetch(url);
    const data = await res.json(); 
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
  }
  document.addEventListener('DOMContentLoaded', getQuote);
  btn.addEventListener('click', getQuote);
};

const getWeatherForCity = () => {
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const city = document.querySelector('.city');
  
  async function getWeather() {
    if (city.innerHTML !== localStorage.getItem(city)) {
      city.innerHTML = localStorage.getItem('city');
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }
  
  function setCity(event) {
    if (event.code === 'Enter') {
      localStorage.setItem('city',city.innerHTML );
      getWeather();
      city.blur(); 
    }
  }
  
  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);
};




// getWeatherForCity();
// quote();
getFocus();
getName();
showTime();

setBg();
