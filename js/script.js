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
*/


// mission2 - 현재시간이 13시를 넘기면 em 안쪽의 'am'을 'pm'으로 출력

const title = document.querySelector("h1");

// 배열 구조 분해 할당(destructuring assignment)문법 사용
// 자식요소에 title이라는 DOM요소의 자식 노드 목록 HTMLCollection 객체를 반환

const [em, spanHr, spanMin, spanSec] = title.children;

const hr = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

// 현재 시간값을 활용해 am,pm 표시 - 삼항연산자로 분기처리
let apm = hr < 13 ? "am":"pm";

em.innerText = apm;
spanHr.innerText = hr;
spanMin.innerText = min;
spanSec.innerText = sec;