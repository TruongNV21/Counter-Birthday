const numberDay = document.querySelector('.number.day'),
  numberHour = document.querySelector('.number.hour'),
  numberMinute = document.querySelector('.number.minute'),
  numberSecond = document.querySelector('.number.second'),
  container = document.querySelector('.container');

const second = 1000,
  minute = second * 60,
  hour = minute  * 60,
  day = hour * 24;

const birthMonth = '10/21';
let birthDay = '';

let today = new Date(),
  dd = String(today.getDate()).padStart(2,'0'),
  mm = String(today.getMonth()+1).padStart(2,'0'),
  yyyy = today.getFullYear();

today = mm+'/'+dd+'/'+yyyy;
birthDay = birthMonth +'/' +yyyy;


if(today>birthDay){
  birthDay = birthMonth+'/'+(yyyy+1)
}

const countDown = new Date(birthDay).getTime()
let x = setInterval(()=>{
  let now = new Date().getTime(),
    distance = countDown - now;
    console.log(distance)
  if(distance > 0){
    numberDay.textContent = Math.floor(distance / (day));
    numberHour.textContent = String(Math.floor((distance % (day))/(hour))).padStart(2,'0');
    numberMinute.textContent = String(Math.floor((distance % (hour))/(minute))).padStart(2,'0');
    numberSecond.textContent = String(Math.floor((distance % (minute))/(second))).padStart(2,'0');
  }
  else{
    clearInterval(x)
    numberDay.textContent = '0';
    numberHour.textContent = '0';
    numberMinute.textContent = '0';
    numberSecond.textContent = '0';

    let p = document.createElement('p');
    p.classList.add('wish')
    p.textContent = 'Chúc mừng sinh nhật bạn!!!';
    container.appendChild(p);
  }
},1000)

