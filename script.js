const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

function getTime() {
   const now = new Date()
   const seconds = now.getSeconds()
   const minutes = now.getMinutes()
   const hours = now.getHours()
   const miliseconds = now.getMilliseconds()

   let secondX = seconds*6
   let minuteX = minutes*6
   let hourX = hour*24


   secondHand.style.transform = "rotate("+(secondX)+"deg)"
   minuteHand.style.transform = "rotate("+(minuteX)+"deg)"
   minuteHand.style.transform = "rotate("+(hourX)+"deg)"
}

setInterval(getTime, 100);