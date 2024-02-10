let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let todayDisplayDate = document.querySelector("#today-date");

const input = document.getElementById("input");
input.max = new Date().toISOString().split("T")[0];

let todayDate = new Date();
let tDay = todayDate.getDate();
let tMonth = todayDate.getMonth() + 1;
let tYear = todayDate.getFullYear();

if(tDay < 10 && tMonth < 10){
    todayDisplayDate.innerHTML = `0${tDay}-0${tMonth}-${tYear}`;
}else if(tDay < 10){
    todayDisplayDate.innerHTML = `0${tDay}-${tMonth}-${tYear}`;
}else if(tMonth < 10){
    todayDisplayDate.innerHTML = `${tDay}-0${tMonth}-${tYear}`;
}else{
    todayDisplayDate.innerHTML = `${tDay}-${tMonth}-${tYear}`;
}

const calculateAge = () => {
    let userDate = new Date(input.value);

    let bDay = userDate.getDate();
    let bMonth = userDate.getMonth() + 1;
    let bYear = userDate.getFullYear();

    // Difference Of Day/Month/Year
    let dd, dm, dy;

    dy = tYear - bYear;

    if (tMonth >= bMonth) {
        dm = tMonth - bMonth;
    } else {
        dy--;
        dm = 12 + tMonth - bMonth;
    }

    if (tDay >= bDay) {
        dd = tDay - bDay;
    } else {
        dm--;
        dd = getDaysInMonth(bYear, bMonth) + tDay - bDay;
    }
    if (dm < 0) {
        dm = 11;
        dy--;
    }
    if(dy < 10){
        year.innerHTML = `Year : 0${dy}`;
    }else{
        year.innerHTML = `Year : ${dy}`;
    }
    if(dm < 10){
        month.innerHTML = `Month : 0${dm}`;
    }else{
        month.innerHTML = `Month : ${dm}`;
    }
    if(dd < 10){
        day.innerHTML = `Day : 0${dd}`;
    }else{
        day.innerHTML = `Day : ${dd}`;
    }
    

    console.log(dy, dm, dd);
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

const clear = () => {
    input.value = "";
}



