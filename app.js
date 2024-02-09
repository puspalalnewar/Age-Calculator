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

    todayDisplayDate.innerHTML = `${tDay}-${tMonth}-${tYear}`;

const calculateAge = ()=>{
    let userDate = new Date(input.value);

    let bDay = userDate.getDate();
    let bMonth = userDate.getMonth() + 1;
    let bYear = userDate.getFullYear();

    // Difference Of Day/Month/Year
    let dd, dm, dy;

    dy = tYear - bYear;

    if(tMonth >= bMonth){
        dm = tMonth - bMonth;
    }else{
        dy--;
        dm = 12 + tMonth - bMonth;
    }

    if(tDay >= bDay){
        dd = tDay - bDay;
    }else{
        dm--;
        dd = getDaysInMonth(bYear, bMonth) + tDay - bDay;
    }
    if(dm < 0){
        dm = 11;
        dy--;
    }
    year.innerHTML = `Year : ${dy}`;
    month.innerHTML = `Month : ${dm}`;
    day.innerHTML = `Day : ${dd}`;

    console.log(dy, dm, dd);
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

const clear = ()=>{
    input.value= "''";
}



