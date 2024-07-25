let products = document.querySelector(".products");

fetch("https://fakestoreapi.com/products?limit=20")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (let product of data) {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h1");
        let price = document.createElement("li");
        let rating = document.createElement("li");
        let list = document.createElement("ul");

        title.textContent = product.title;
        price.textContent = product.price + "$";
        rating.textContent = product.rating.rate +"Reyting";
        
        image.src = product.image;
        image.alt = product.title;

        card.classList.add("card");

        list.appendChild(price);
        list.appendChild(rating);

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(list);

        products.appendChild(card);
    };
});