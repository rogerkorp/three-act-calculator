let pageArray;
let chapterArray;

let pg01 = document.getElementById("pg01");
let pg02 = document.getElementById("pg02");
let pg03 = document.getElementById("pg03");
let pg04 = document.getElementById("pg04");
let pg05 = document.getElementById("pg05");
let pg06 = document.getElementById("pg06");
let pg07 = document.getElementById("pg07");
let pg08 = document.getElementById("pg08");
let pg09 = document.getElementById("pg09");
let pg10 = document.getElementById("pg10");
let pg11 = document.getElementById("pg11");
let pg12 = document.getElementById("pg12");

let ch01 = document.getElementById("ch01");
let ch02 = document.getElementById("ch02");
let ch03 = document.getElementById("ch03");
let ch04 = document.getElementById("ch04");
let ch05 = document.getElementById("ch05");
let ch06 = document.getElementById("ch06");
let ch07 = document.getElementById("ch07");
let ch08 = document.getElementById("ch08");
let ch09 = document.getElementById("ch09");
let ch10 = document.getElementById("ch10");
let ch11 = document.getElementById("ch11");
let ch12 = document.getElementById("ch12");

function pageCalculator(pageCount){
    let p01 = pageCount * 0.05;
    let p02 = pageCount * 0.15;
    let p03 = pageCount * 0.2;
    let p04 = pageCount * 0.35;
    let p05 = pageCount * 0.5;
    let p06 = pageCount * 0.65;
    let p07 = pageCount * 0.75;
    let p08 = pageCount * 0.8;
    let p09 = pageCount * 0.85;
    let p10 = pageCount * 0.9;
    let p11 = pageCount * 0.95;
    let p12 = pageCount;
    pageArray = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12];
    return pageArray;
}


function chapterCalculator(pageCount, chapterCount){
    let newChapterCount = pageCount / chapterCount;
    let c01 = (pageCount * 0.05) / newChapterCount;
    let c02 = (pageCount * 0.15) / newChapterCount;
    let c03 = (pageCount * 0.2) / newChapterCount;
    let c04 = (pageCount * 0.35) / newChapterCount;
    let c05 = (pageCount * 0.5) / newChapterCount;
    let c06 = (pageCount * 0.65) / newChapterCount;
    let c07 = (pageCount * 0.75) / newChapterCount;
    let c08 = (pageCount * 0.8) / newChapterCount;
    let c09 = (pageCount * 0.85) / newChapterCount;
    let c10 = (pageCount * 0.9) / newChapterCount;
    let c11 = (pageCount * 0.95) / newChapterCount;
    let c12 = pageCount / newChapterCount;
    chapterArray = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12];
    return chapterArray;
}

function runCalculator(){
   
    let pageCount = new Number (document.getElementById("page-count").value);
    let chapterCount = new Number (document.getElementById("chapter-count").value);
    let pageArray = pageCalculator(pageCount);
    let chapterArray = chapterCalculator(pageCount, chapterCount);

    console.log(pageArray);
    console.log(chapterArray);

    pg01.innerHTML = `Pg. ${Math.ceil(pageArray[0])}`;
    pg02.innerHTML = `Pg. ${Math.ceil(pageArray[1])}`;
    pg03.innerHTML = `Pg. ${Math.ceil(pageArray[2])}`
    pg04.innerHTML = `Pg. ${Math.ceil(pageArray[3])}`;
    pg05.innerHTML = `Pg. ${Math.ceil(pageArray[4])}`;
    pg06.innerHTML = `Pg. ${Math.ceil(pageArray[5])}`;
    pg08.innerHTML = `Pg. ${Math.ceil(pageArray[7])}`;
    pg07.innerHTML = `Pg. ${Math.ceil(pageArray[6])}`;
    pg09.innerHTML = `Pg. ${Math.ceil(pageArray[8])}`;
    pg10.innerHTML = `Pg. ${Math.ceil(pageArray[9])}`;
    pg11.innerHTML = `Pg. ${Math.ceil(pageArray[10])}`;
    pg12.innerHTML = `Pg. ${Math.ceil(pageArray[11])}`;
    
    ch01.innerHTML = `Pt. ${Math.ceil(chapterArray[0])}`;
    ch02.innerHTML = `Pt. ${Math.ceil(chapterArray[1])}`;
    ch03.innerHTML = `Pt. ${Math.ceil(chapterArray[2])}`;
    ch04.innerHTML = `Pt. ${Math.ceil(chapterArray[3])}`;
    ch05.innerHTML = `Pt. ${Math.ceil(chapterArray[4])}`;
    ch06.innerHTML = `Pt. ${Math.ceil(chapterArray[5])}`;
    ch07.innerHTML = `Pt. ${Math.ceil(chapterArray[6])}`;
    ch08.innerHTML = `Pt. ${Math.ceil(chapterArray[7])}`;
    ch09.innerHTML = `Pt. ${Math.ceil(chapterArray[8])}`;
    ch10.innerHTML = `Pt. ${Math.ceil(chapterArray[9])}`;
    ch11.innerHTML = `Pt. ${Math.ceil(chapterArray[10])}`;
    ch12.innerHTML = `Pt. ${Math.ceil(chapterArray[11])}`;

}



