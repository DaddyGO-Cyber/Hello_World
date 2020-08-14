let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
var second = document.querySelector("#second")

let date = new Date()
var sec = 6 * date.getSeconds() + 90
let min =  90 + (6 * date.getMinutes())
let hrBtw = date.getMinutes()/2
let hr = 90 + hrBtw + (date.getHours() * 30) 

//console.log("Minutes", date.getMinutes(), min)
//console.log("Seconds", date.getSeconds(), sec)
//console.log("Hour:", date.getHours(), hr )

minute.style.transform = `rotateZ(${min}deg)`
hour.style.transform = `rotateZ(${hr}deg)`

let secCounter = sec;
        function sChanger(){
            second.style.transform = `rotateZ(${secCounter += 6 }deg)`; 
        }
    setInterval(sChanger,1000)
let minCounter = min;
        function mChanger(){
        minute.style.transform = `rotateZ(${minCounter += 6 }deg)`}
     setInterval(mChanger,60000)
let hrCounter = hr
        function hChanger(){
            hour.style.transform = `rotateZ(${hr += 0.625}deg)`
        }
    setInterval(hChanger, 60000)

let btn   = document.querySelector('button')
let back = document.querySelector('body')


const myArray = [ "white", "beige", 'acqua','chartreuse','coral','darkgrey','gold','lightcoral','magenta','white' ]
back.style.backgroundColor = `${myArray[number]}`

   var number = 0;
   function backChange(){
       if(number <= myArray.length){ number++;
        back.style.backgroundColor = `${myArray[number]}` 
       }
       else{ number = 1 }
   }   
   btn.addEventListener('click', backChange)
   
