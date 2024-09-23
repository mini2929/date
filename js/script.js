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
// 우리나라 시간 9시간 빠름 - 