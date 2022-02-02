let pageArrayMin;
let pageArrayMax;
let chapterArrayMin;
let chapterArrayMax;


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

function pageCalculatorMin(pageCount){
    let p01 = pageCount * 0; //The Hook
    let p02 = pageCount * 0.05;  // The Inciting Incident
    let p03 = pageCount * 0.2; // The First Plot Point
    let p04 = pageCount * 0.30; // The First Pinch Point
    let p05 = pageCount * 0.45; // The Midpoint
    let p06 = pageCount * 0.60; // The Second Pinch Point
    let p07 = pageCount * 0.75; // The Third Plot Point
    let p08 = pageCount * 0.75;
    let p09 = pageCount * 0.80;
    let p10 = pageCount * 0.85;
    let p11 = pageCount * 0.95;
    let p12 = pageCount * 0.95;
    pageArrayMin = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12];
    return pageArrayMin;
}

function pageCalculatorMax(pageCount){
    let p01 = pageCount * 0.05; //The Hook
    let p02 = pageCount * 0.15; // The Inciting Incident
    let p03 = pageCount * 0.20; // The First Plot Point
    let p04 = pageCount * 0.35; // The First Pinch Point 
    let p05 = pageCount * 0.50; // The Midpoint
    let p06 = pageCount * 0.65; // The Second Pinch Point
    let p07 = pageCount * 0.75; // The Third Plot Point
    let p08 = pageCount * 0.80;
    let p09 = pageCount * 0.85;
    let p10 = pageCount * 0.95;
    let p11 = pageCount * 0.95;
    let p12 = pageCount;
    pageArrayMax = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12];
    return pageArrayMax;
}


function chapterCalculator(pageCount, chapterCount){
    let newChapterCount = pageCount / chapterCount;
    let c01 = (pageCount * 0.05) / newChapterCount; //Hook
    let c02 = (pageCount * 0.15) / newChapterCount; //Inciting Incident
    let c03 = (pageCount * 0.20) / newChapterCount; //1st Plot Point
    let c04 = (pageCount * 0.35) / newChapterCount; //1st Pinch Point
    let c05 = (pageCount * 0.50) / newChapterCount; //Midpoint
    let c06 = (pageCount * 0.65) / newChapterCount; //2nd Pinch Point
    let c07 = (pageCount * 0.75) / newChapterCount; //3rd Plot Point
    let c08 = (pageCount * 0.80) / newChapterCount; //Hour of Darkness
    let c09 = (pageCount * 0.85) / newChapterCount; //Recovery
    let c10 = (pageCount * 0.90) / newChapterCount; //Climax
    let c11 = (pageCount * 0.95) / newChapterCount; //Climactic Moment
    let c12 = pageCount / newChapterCount; //Resolution
    chapterArray = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12];
    return chapterArray;
}


function runCalculator(){
   
    let pageCount = new Number (document.getElementById("page-count").value);
    let chapterCount = new Number (document.getElementById("chapter-count").value);
    let pageArrayMin = pageCalculatorMin(pageCount);
    let pageArrayMax = pageCalculatorMax(pageCount);
    let chapterArray = chapterCalculator(pageCount, chapterCount);


    pg01.innerHTML = `${Math.ceil(pageArrayMin[0])} - ${Math.ceil(pageArrayMax[0])}`;
    pg02.innerHTML = `${Math.ceil(pageArrayMin[1])} - ${Math.ceil(pageArrayMax[1])}`;
    pg03.innerHTML = `${Math.ceil(pageArrayMin[2])}`;
    pg04.innerHTML = `${Math.ceil(pageArrayMin[3])} - ${Math.ceil(pageArrayMax[3])}`;
    pg05.innerHTML = `${Math.ceil(pageArrayMin[4])} - ${Math.ceil(pageArrayMax[4])}`;
    pg06.innerHTML = `${Math.ceil(pageArrayMin[5])} - ${Math.ceil(pageArrayMax[5])}`;
    pg07.innerHTML = `${Math.ceil(pageArrayMin[6])}`;
    pg08.innerHTML = `${Math.ceil(pageArrayMin[7])} - ${Math.ceil(pageArrayMax[7])}`;
    pg09.innerHTML = `${Math.ceil(pageArrayMin[8])} - ${Math.ceil(pageArrayMax[8])}`;
    pg10.innerHTML = `${Math.ceil(pageArrayMin[9])} - ${Math.ceil(pageArrayMax[9])}`;
    pg11.innerHTML = `${Math.ceil(pageArrayMin[10])}`;
    pg12.innerHTML = `${Math.ceil(pageArrayMin[11])} - ${Math.ceil(pageArrayMax[11])}`;
    
    ch01.innerHTML = `${Math.ceil(chapterArray[0])}`;
    ch02.innerHTML = `${Math.ceil(chapterArray[1])}`;
    ch03.innerHTML = `${Math.ceil(chapterArray[2])}`;
    ch04.innerHTML = `${Math.ceil(chapterArray[3])}`;
    ch05.innerHTML = `${Math.ceil(chapterArray[4])}`;
    ch06.innerHTML = `${Math.ceil(chapterArray[5])}`;
    ch07.innerHTML = `${Math.ceil(chapterArray[6])}`;
    ch08.innerHTML = `${Math.ceil(chapterArray[7])}`;
    ch09.innerHTML = `${Math.ceil(chapterArray[8])}`;
    ch10.innerHTML = `${Math.ceil(chapterArray[9])}`;
    ch11.innerHTML = `${Math.ceil(chapterArray[10])}`;
    ch12.innerHTML = `${Math.ceil(chapterArray[11])}`;

}



