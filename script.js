let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');


const data = new Date();
const todayYear= data.getFullYear(); 
const todayMonth=data.getMonth(); 
const todayDate = data.getDate();
const todayDay = data.getDay();

const a = ['Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const b = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerHTML = (todayDate<10?"0":"")+todayDate;
day.innerHTML = a[todayDay];
month.innerHTML = b[todayMonth]; 
year.innerHTML = todayYear;
