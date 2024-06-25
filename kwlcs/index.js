document.getElementById("on").onclick = function(){
    let led = document.getElementById("ledNum").value;
    let numbers = led.match(/\d+/g);
    for (let number of numbers) {
        let endpoint = "https://kwlcs-api.kioydio.com/on/?id="+number
        const Http = new XMLHttpRequest();
        Http.open("GET", endpoint);
        Http.send();
    }
}

document.getElementById("off").onclick = function(){
    let led = document.getElementById("ledNum").value;
    let numbers = led.match(/\d+/g);
    for (let number of numbers) {
        let endpoint = "https://kwlcs-api.kioydio.com/off/?id="+number
        const Http = new XMLHttpRequest();
        Http.open("GET", endpoint);
        Http.send();
    }
}

document.getElementById("allOn").onclick = function(){
    let endpoint = "https://kwlcs-api.kioydio.com/allOn/"


    const Http = new XMLHttpRequest();
    Http.open("GET", endpoint);
    Http.send();

    // Http.onreadystatechange=(e)=>{
    //     console.log(Http.response);
    // }
}

document.getElementById("allOff").onclick = function(){
    let endpoint = "https://kwlcs-api.kioydio.com/clear/"


    const Http = new XMLHttpRequest();
    Http.open("GET", endpoint);
    Http.send();

    // Http.onreadystatechange=(e)=>{
    //     console.log(Http.response);
    // }
}

document.getElementById("displayLayout").onclick = function(){
    document.getElementById("displayLayout").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("LEDS").style.opacity = 1;
        document.getElementById("hideLayout").style.opacity = 1;
    },1000)
}

document.getElementById("hideLayout").onclick = function(){
    document.getElementById("LEDS").style.opacity = 0;
    document.getElementById("hideLayout").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("displayLayout").style.opacity = 1;
    },1000)
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime()

function getState(id) {
    let endpoint = "https://kwlcs-api.kioydio.com/getState/?id=" + id;


    const Http = new XMLHttpRequest();
    Http.open("GET", endpoint);
    Http.send();

    Http.onloadend = (e) => {
        let apiReply= Http.responseText;
        let inputObject = JSON.parse(apiReply);
        let value = inputObject["2"];
        if (value == false) {
            window.alert(`${id} is off`)
        }
        else if (value == true) {
            window.alert(`${id} is on`)
        }
    }
}