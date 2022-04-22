
const workingHour = document.querySelector('#workingHour');
const workingLastWeek = document.querySelector('#workingLastWeek');
const playingHour = document.querySelector('#playingHour');
const playingLastWeek = document.querySelector('#playingLastWeek')
const studyingHour = document.querySelector('#studyingHour');
const studingLastWeek = document.querySelector('#studingLastWeek');
const  exercisingHour = document.querySelector('#exercisingHour');
const  exercisingLastWeek = document.querySelector('#exercisingLastWeek');
const socilizingHour = document.querySelector('#socilizingHour');
const socializingLastWeek = document.querySelector('#socializingLastWeek');
const caringHour = document.querySelector('#caringHour');
const caringLastWeek = document.querySelector('#caringLastWeek');
const daily =  document.querySelector('#daily');
const weekly =  document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');



const handleDailyClick = () => {
   daily.classList.add('active');
   weekly.classList.remove('active');
   monthly.classList.remove('active');
   rendertime("daily");
 }

 const handleWeeklyClick = () => {
   
    weekly.classList.add('active');
    daily.classList.remove('active');
   monthly.classList.remove('active');
   rendertime("weekly");
 }
 const handleMonthlyClick = () => {
    
    monthly.classList.add('active');
   daily.classList.remove('active');
   weekly.classList.remove('active');
   rendertime("monthly");
}
let myData;
fetch('/data.json')

.then(response => response.json())
.then(data =>   {
    myData = data;
    rendertime("weekly");

});

function rendertime (key){
   workingHour.innerHTML = myData[0].timeframes[key].current + ' hrs';
   workingLastWeek.innerHTML =  " Last Week - " + myData[0].timeframes[key].previous + ' hrs';
   playingHour.innerHTML = myData[1].timeframes[key].current + ' hrs';
   playingLastWeek.innerHTML =  " Last Week - " + myData[1].timeframes[key].previous + ' hrs';
   studyingHour.innerHTML = myData[2].timeframes[key].current + ' hrs';
   studingLastWeek.innerHTML =  " Last Week - " + myData[2].timeframes[key].previous + ' hrs';
   exercisingHour.innerHTML = myData[3].timeframes[key].current + ' hrs';
   exercisingLastWeek.innerHTML =  " Last Week - " + myData[3].timeframes[key].previous + ' hrs';
   socilizingHour.innerHTML = myData[4].timeframes[key].current + ' hrs';
   socializingLastWeek.innerHTML =  " Last Week - " + myData[4].timeframes[key].previous + ' hrs';
   caringHour.innerHTML = myData[5].timeframes[key].current + ' hrs';
   caringLastWeek.innerHTML =  " Last Week - " + myData[5].timeframes[key].previous + ' hrs';
   caringHour.innerHTML = myData[6].timeframes[key].current + ' hrs';
   caringLastWeek.innerHTML =  " Last Week - " + myData[6].timeframes[key].previous + ' hrs';
}
// rendertime("daily");
daily.addEventListener("click",handleDailyClick );

// rendertime("weekly");
 weekly.addEventListener("click",handleWeeklyClick );

  // rendertime("monthly");
 monthly.addEventListener("click",handleMonthlyClick );