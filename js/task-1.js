const items = document.querySelectorAll(".item");

console.log("Number of categories:", items.length);


items.forEach((item) => {

    const h2 = item.querySelector("h2").textContent;
    console.log("Category: ", h2)
    const liElements = item.querySelectorAll("li");
    console.log("Elements: ", liElements.length);   
})
