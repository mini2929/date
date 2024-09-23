const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
// 외국에서 일자의 시작은 일요일

const now = new Date();
console.log(now);

// 년도값 반환
console.log(now.getFullYear());

// 월 반환 (순서값)
console.log(month[now.getMonth()]);

// 일
console.log(now.getDate());

// 요일 (순서값)
console.log(days[now.getDay()]);

// 시간
console.log(now.getHours());

// 분
console.log(now.getMinutes());

// 초
console.log(now.getSeconds());

// 우리나라 시간대를 전세계 표준시 변환해서 반환
// const gmtNow = now.toGMTString();

const gmtNow = now.toUTCString();

console.log(gmtNow);
// 우리나라 시간 9시간 빠름 - UTC기준 시간


// mission1 - new Date()를 활용해서 시간, 분, 초를 각각 span안에 출력
/*
const time = document.querySelectorAll('span');

const hour = time[0].classList.add("hour")
const minute = time[1].classList.add("minute")
const second = time[2].classList.add("second")


time[0].textContent = now.getHours();
time[1].textContent = now.getMinutes();
time[2].textContent = now.getSeconds();

미션 실패

*/

/*
// mission2 - 현재시간이 13시를 넘기면 em 안쪽의 'am'을 'pm'으로 출력

const title = document.querySelector("h1");

// 배열 구조 분해 할당(destructuring assignment)문법 사용
// 자식요소에 title이라는 DOM요소의 자식 노드 목록 HTMLCollection 객체를 반환

const [em, spanHr, spanMin, spanSec] = title.children;

setInterval(() => {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

// 현재 시간값을 활용해 am,pm 표시 - 삼항연산자로 분기처리
    let apm = hr < 13 ? "am":"pm";

    em.innerText = apm;
    spanHr.innerText = hr;
    spanMin.innerText = min;
    spanSec.innerText = sec;

}, 1000);

// setInterval : 특정 함수를 일정시간마다 반복 호출
// setInterval(함수, 인터벌 시간) : 인터벌간격마다 함수 반복 호출

*/

const numbers = document.querySelectorAll(".screen span");

setInterval(() => {
    getTime().forEach((num, idx) => setTime(num, idx))
}, 1000);



// 시간값을 구해서 반환하는 함수
function getTime() {
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    return [hr, min, sec];
}

// 반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
    // 전달받은 첫번째 인수값이 한자리 숫자면 앞에 "0" 붙여 출력
    // 그렇지 않으면 그냥 값 출력
    num = num < 10 ? "0" + num : num;
    
    // 각 span 배열에서 두번째 인수로 전달받은 index 번째 요소에 위에서 가공한 num값을 출력
    numbers[index].innerText = num;

}

/*

//시간에 따른 테마 변경 함수
function changeTheme() {
    const hr = new Date().getHours();

    if (hr >= 5 && hr < 11) {
    }
}

*/

  //시간에 따른 테마 변경 함수
function changeTheme() {
    const hr = new Date().getHours();

    if (hr >= 5 && hr < 11) {
    main.className = "";
    main.classList.add("morning");
    }
    if (hr >= 11 && hr < 16) {
    main.className = "";
    main.classList.add("afternoon");
    }
    if (hr >= 16 && hr < 20) {
    main.className = "";
    main.classList.add("evening");
    }
    if (hr >= 20 || hr < 5) {
    main.className = "";
    main.classList.add("night");
    }
}

const main = document.querySelector("main");




import { themeData } from "./data.js"; 