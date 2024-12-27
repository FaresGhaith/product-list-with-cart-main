const products_container = document.querySelector('.dessert .container')
const cart_container = document.querySelector('.cart .container')
const confirm_order = document.querySelector('.cart .btn')
const total_price = document.querySelector('.cart .total b')
const total = document.querySelector('.cart .total ')
const cart_num = document.querySelector('.cart .sec-title span')
const warn = document.querySelector('.cart .container .warn')
const del = document.querySelector('.fa-circle-xmark')
const confirmed = document.querySelector('.confirmed')


















const products = [
  {
    "image": {
      "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
      "mobile": "./assets/images/image-waffle-mobile.jpg",
      "tablet": "./assets/images/image-waffle-tablet.jpg",
      "desktop": "./assets/images/image-waffle-desktop.jpg"
    },
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": 6.50
  },
  {
    "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
          },
          "name": "Vanilla Bean Crème Brûlée",
          "category": "Crème Brûlée",
          "price": 7.00
        },
        {
          "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
          },
          "name": "Macaron Mix of Five",
          "category": "Macaron",
          "price": 8.00
        },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
          },
          "name": "Classic Tiramisu",
          "category": "Tiramisu",
          "price": 5.50
        },
        {
          "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
          },
          "name": "Pistachio Baklava",
          "category": "Baklava",
          "price": 4.00
        },
     {
        "image": {
          "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
      },
     {
        "image": {
          "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
          "mobile": "./assets/images/image-cake-mobile.jpg",
          "tablet": "./assets/images/image-cake-tablet.jpg",
          "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
      },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
      },
      {
        "image": {
          "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
          "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
          "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
          "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
      }
    ]

    let cartnum = 0
    
function setItems(){
    let items = ''

    
    for(let i = 0 ; i < products.length ; i++ ){
        items+=`
        <div class="card">
        <div class="img">
        <img src="${products[i].image.desktop}" alt="">
        <button onclick="addcart(${i})" class="btn"><img src="assets/images/icon-add-to-cart.svg" alt="">Add to cart</button>
      </div>
      <div class="details">
        <p>${products[i].category}</p>
        <b>  ${products[i].name}</b>
        <span>$${products[i].price}</span>
      </div>

    </div>
        `
      
    }

    products_container.innerHTML = items

}
setItems()

let cart = []


function addcart(number){
cart.push(products[number])
display()
}



function display(){
    let card = ''
    let tot = 0
    
   
 
  cart.map((value , i)=>{
    card+=`
      <div class="card">
    <div class="details">
      <b>${value.name}</b>
      <div class="price">
        <span>1X</span>
        <p>$${value.price}</p>
      </div>
    </div>
    <div class="icon">
      <i onclick="dele(${i})" class="fa-regular fa-circle-xmark"></i>
    </div>
  </div>
  
    `
    tot += value.price
    
})
cartnum += 1 
cart_container.innerHTML = card
  total_price.innerHTML = tot
  cart_num.innerHTML = cartnum

  if(cartnum >= 1 ){
    warn.style.display = 'none'
    confirm_order.style.display = 'block'
    total.style.display = 'flex'
    }
}



function dele(number){
    cartnum -= 2 
    cart.splice(number , 1)
    cart_num.innerHTML = cartnum
    display()
    if(cartnum === 0 ){
        warn.style.display = 'flex'
        confirm_order.style.display = 'none'
        total.style.display = 'none'
    }

}



function confirm(){
 confirmed.style.display = 'flex'
}

function neworder(){
  confirmed.style.display = 'none'
  cart.length = 0
  display()
  warn.style.display = 'flex'
  confirm_order.style.display = 'none'
  total.style.display = 'none'
  cartnum = 0
  cart_num.innerHTML = cartnum

  
}


if (cartnum === 0){
  warn.style.display = 'flex'
}
