// ===============================
// DriveSense Dashboard Simulation
// ===============================

let speed = 0;
let rpm = 900;
let fuel = 100;
let temp = 90;
let battery = 12.6;
let odometer = 12548;
let accelerating = true;

// DOM Elements
const speedEl = document.getElementById("speed");
const rpmEl = document.getElementById("rpm");
const fuelBar = document.getElementById("fuelBar");
const fuelText = document.getElementById("fuelText");
const tempBar = document.getElementById("tempBar");
const tempText = document.getElementById("tempText");
const batteryEl = document.getElementById("battery");
const odometerEl = document.getElementById("odometer");
const warningEl = document.getElementById("warning");

const left = document.getElementById("left");
const right = document.getElementById("right");
const headlight = document.getElementById("headlight");
const seatbelt = document.getElementById("seatbelt");

// ===============================
// CLOCK
// ===============================

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

}

updateClock();
setInterval(updateClock,1000);

// ===============================
// DASHBOARD UPDATE
// ===============================

function updateDashboard(){

    if(accelerating){

        speed += 2;

        if(speed >= 180){

            accelerating = false;

        }

    }else{

        speed -= 2;

        if(speed <= 0){

            accelerating = true;

        }

    }

    rpm = Math.floor(speed * 35 + 900);

    fuel -= 0.08;

    if(fuel <= 0){

        fuel = 100;

    }

    temp = 85 + Math.random()*25;

    battery = (12.3 + Math.random()*0.5).toFixed(1);

    odometer += speed/5000;

    // Update values

    speedEl.innerHTML = Math.floor(speed);

    rpmEl.innerHTML = rpm;

    fuelBar.style.width = fuel + "%";

    fuelText.innerHTML = Math.floor(fuel) + "%";

    tempBar.style.width = Math.min(temp,100) + "%";

    tempText.innerHTML = Math.floor(temp) + " °C";

    batteryEl.innerHTML = battery + " V";

    odometerEl.innerHTML = odometer.toFixed(1) + " km";

    // Warning Logic

    if(fuel < 20){

        warningEl.innerHTML = "⛽ LOW FUEL";

        warningEl.style.background = "#dc2626";

    }

    else if(temp > 105){

        warningEl.innerHTML = "🔥 ENGINE OVERHEAT";

        warningEl.style.background = "#ea580c";

    }

    else{

        warningEl.innerHTML = "✅ ALL SYSTEMS NORMAL";

        warningEl.style.background = "#166534";

    }

}

setInterval(updateDashboard,200);

// ===============================
// STATUS LIGHTS
// ===============================

setInterval(()=>{

    left.classList.toggle("active");

    right.classList.toggle("active");

},700);

setInterval(()=>{

    headlight.classList.toggle("active");

},2500);

setInterval(()=>{

    seatbelt.classList.toggle("active");

},3500);