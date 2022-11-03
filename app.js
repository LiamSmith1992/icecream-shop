const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

let total = 0

function buyIceCream(iceCreamName) {
  let foundIceCream = iceCream.find(i => i.name == iceCreamName)
  foundIceCream.quantity++
  console.log('buy ice cream', foundIceCream)
  let template = `
  <div class="col-md-4 col-12 cardy bg-dark text-light mt-3">
  ${foundIceCream.name}, $${foundIceCream.price}
  </div>
  `
  price = foundIceCream.price
  total += price
  console.log("Total:", total)
  document.getElementById("cart").innerHTML += template
  drawTotal()
}

function buyVessel(vesselName) {
  let foundVessel = vessels.find(i => i.name == vesselName)
  foundVessel.quantity++
  console.log('buy vessel', foundVessel)
  let template = `
  <div class="col-md-4 col-12 cardy bg-dark text-light mt-3">
  ${foundVessel.name}, $${foundVessel.price}
  </div>
  `
  price = foundVessel.price
  total += price
  console.log('price', total)
  document.getElementById("cart").innerHTML += template
  drawTotal()
}

function buyToppings(toppingName) {
  let foundTopping = toppings.find(i => i.name == toppingName)
  foundTopping.quantity++
  console.log('buy topping', foundTopping)
  let template = `
  <div class="col-md-4 col-12 cardy bg-dark text-light mt-3">
  ${foundTopping.name}, $${foundTopping.price}
  </div>
  `
  total += foundTopping.price
  console.log('total toppins', total)


  document.getElementById("cart").innerHTML += template
  drawTotal()
}

function drawCart() {
  let template = ''

}


function drawIceCream() {
  let template = ''
  iceCream.forEach(i => template += `
  <div onclick="buyIceCream('${i.name}')" class="col-12 col-md-3 ice icecream-card  mx-3">
                <img class="card-img-top mt-2"
                  src="${i.image}" alt="">
                  <div class="">
                <p class=" text-center">${i.name}</p>
                <p class="text-center">$${i.price}</p>
                </div>
              </div>
  `)
  document.getElementById('flavors').innerHTML = template
}
drawIceCream()


function drawVessels() {
  let template = ''
  vessels.forEach(v => template += `
  <div onclick="buyVessel('${v.name}')" class="col-12 col-md-4 cone-card mx-3">
                <img class="img-fluid"
                  src="${v.image}" alt="">
                  <div class="">
                <p class="text-center">${v.name}</p>
                <p class="text-center">$${v.price}</p>
                
              </div>
              </div>
  `)
  document.getElementById('vessels').innerHTML = template
}
drawVessels()

function drawToppings() {
  let template = ''
  toppings.forEach(t => template += `
  <div onclick="buyToppings('${t.name}')" class="col-12 col-md-4 toppings-card">
                <img class="img-fluid"
                  src="${t.image}"
                  alt="">
                  <div class="">
                  <p class="text-center">${t.name}</p>
                <p class="text-center">$${t.price}</p>
                
              </div>
              </div>
  `)
  document.getElementById('toppings').innerHTML = template
}

function drawTotal() {
  template = `<div class="col-12 icecream-card d-flex justify-content-between bg-dark">
  Total: $${total}
  </div>
  `
  document.getElementById('total').innerHTML = template

}

drawToppings()