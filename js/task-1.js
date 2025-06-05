const list = document.querySelector("#categories");
const item = document.querySelectorAll(".item");
const titles = document.querySelectorAll("h2");
const categoriesItem = list.querySelectorAll("ul")
const elements = document.querySelectorAll("li");


// підрахунок категорій

let countCat = 0;

item.forEach(() => {
    countCat++;
});

console.log(`Number of categories: ${countCat}`);


// додавання класу назві категорії


let countTitles = 0;

titles.forEach((titleItem) => {
    countTitles++;
    titleItem.classList.add(`title-${countTitles}`);
})



// додавання класу категорії

let countCategoriesItem = 0;

categoriesItem.forEach((catItem) => {
    countCategoriesItem++;
    catItem.classList.add(`categories-${countCategoriesItem}`);
})



// додавання класу елементу категорії

elements.forEach((element) => {
    
    if (element.classList.length === 0) {
        element.classList.add("position");        
    }
})


// Підрахунок елементів категорії

const list1 = document.querySelector('.categories-1');
const title1 = document.querySelector(".title-1");
const textTitle1 = `Category: ${title1.textContent}`;
list1.classList.replace(list1.classList.value, `list${title1.textContent}`);
title1.classList.replace(title1.classList.value, `title${title1.textContent}`);
console.log(textTitle1);

const item1 = list1.querySelectorAll(".position")

let count1 = 0;

item1.forEach(() => {
    count1++;
});
console.log(`Elements: ${count1}`);


// Підрахунок елементів категорії

const list2 = document.querySelector('.categories-2');
const title2 = document.querySelector(".title-2");
const textTitle2 = `Category: ${title2.textContent}`;
list2.classList.replace(list2.classList.value, `list${title2.textContent}`);
title2.classList.replace(title2.classList.value, `title${title2.textContent}`);
console.log(textTitle2);

const item2 = list2.querySelectorAll(".position")

let count2 = 0;

item2.forEach(() => {
    count2++;
});
console.log(`Elements: ${count2}`);


// Підрахунок елементів категорії

const list3 = document.querySelector('.categories-3');
const title3 = document.querySelector(".title-3");
const textTitle3 = `Category: ${title3.textContent}`;
list3.classList.replace(list3.classList.value, `list${title3.textContent}`);
title3.classList.replace(title3.classList.value, `title${title3.textContent}`);
console.log(textTitle3);

const item3 = list3.querySelectorAll(".position")

let count3 = 0;

item3.forEach(() => {
    count3++;
});
console.log(`Elements: ${count3}`);

// table style

const secondLevelHeadings = document.querySelectorAll("h2");

secondLevelHeadings.forEach((secondLevelHeading) => {
    secondLevelHeading.style.fontFamily = "'Montserrat', sans-serif";
    secondLevelHeading.style.fontWeight = "600";
    secondLevelHeading.style.fontSize = "24px";
    secondLevelHeading.style.lineHeight = "1.33";
    secondLevelHeading.style.letterSpacing = "0.04em";
    secondLevelHeading.style.color = "#2e2f42";
    secondLevelHeading.style.padding = "0";
    secondLevelHeading.style.margin = "0 0 16px 0";
})


const unorderLists = document.querySelectorAll("ul");

unorderLists.forEach((unorderList) => {

    unorderList.style.listStyleType = "none";
    unorderList.style.padding = "0";
    unorderList.style.margin = "0";
})


const items = document.querySelectorAll(".item");

items.forEach((item) => {

    item.style.borderRadius = "8px";
    item.style.padding = "16px";
    item.style.width = "392px";
    item.style.background = "#f6f6fe";
    item.style.marginBottom = "24px";
});


const positions = document.querySelectorAll(".position");

positions.forEach((position) => {

    position.style.fontSize = "16px";
    position.style.fontFamily = "Montserrat";
    position.style.fontWeight = "400";
    position.style.letterSpacing = "0.04em";
    position.style.color = "#2e2f42";
    position.style.border = "1px solid #808080";
    position.style.borderRadius = "4px";
    position.style.width = "360px";
    position.style.padding = "6px 16px";
    position.style.marginTop = "8px";
    position.style.height = "40px";
});