let currentYear = '2018';
const btn2018 = document.getElementById("2018btn");
const btn2019 = document.getElementById("2019btn");
const numbers = Array.from(document.getElementsByClassName("that"));
const foodNum = document.getElementById("foodNum");
const foodName = document.getElementById("foodName");
const holder = document.getElementById("placeholder");
foodNum.style.display = "none";
foodName.style.display = "none";
holder.style.display = "block";


console.log(numbers);

function yearChange(year) {
    currentYear = year;
    console.log(year);
    document.getElementById("headyear").innerHTML = year;
    if (year === "2018") {
        btn2018.style.background = "var(--ksu-purple)";
        btn2018.style.color = "white";
        btn2018.style.border = "transparent";
        btn2019.style.background = "transparent";
        btn2019.style.color = "var(--ksu-purple)";
        btn2019.style.border = "3px solid var(--ksu-purple)";
    } else {
        btn2019.style.background = "var(--ksu-purple)";
        btn2019.style.color = "white";
        btn2019.style.border = "transparent";
        btn2018.style.background = "transparent";
        btn2018.style.color = "var(--ksu-purple)";
        btn2018.style.border = "3px solid var(--ksu-purple)";
    }
}

function changeFood(event) {
    console.log(event.target.innerText);
    foodNum.innerText = event.target.innerText;
    foodName.innerText = topTenList[currentYear][event.target.innerText - 1].name;
    foodName.style.display = "block";
    foodNum.style.display = "block";
    holder.style.display = "none";


}

numbers.forEach((number, index) => {
    number.addEventListener("mouseover", changeFood);
})

function placeholder() {
    foodNum.style.display = "none";
    foodName.style.display = "none";
    holder.style.display = "block";
}

numbers.forEach((number, index) => {
    number.addEventListener("mouseleave", placeholder);
})




