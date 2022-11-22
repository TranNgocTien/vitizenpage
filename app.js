const data = [
  {
    title: '2g yến tinh chế (yến vụn)',
    cost: 70000,
    imageUrl: './image/yenvunnho.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '8g yến tinh chế (yến vụn)',
    cost: 260000,
    imageUrl: './image/yenvunnho.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '8g yến tinh chế (yến sợi)',
    cost: 350000,
    imageUrl: './image/yensoinho.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '20g yến tinh chế (yến vụn)',
    cost: 800000,
    imageUrl: './image/yenvunlon.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '20g yến tinh chế (yến sợi)',
    cost: 900000,
    imageUrl: './image/yensoivua.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '50g yến tinh chế (yến vụn)',
    cost: 1600000,
    imageUrl: './image/yenvunlon.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '50g yến tinh chế (yến sợi)',
    cost: 1800000,
    imageUrl: './image/yensoi50.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },

  {
    title: '100g yến tinh chế (yến vụn)',
    cost: 2800000,
    imageUrl: './image/yenvunlon.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
  {
    title: '100g yến tinh chế (yến sợi)',
    cost: 3600000,
    imageUrl: './image/yensoi100.jpg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non?',
  },
];
const cart = [];
const acount = {
  owner: 'admin',
  pin: 1111,
};
const navBackground = document.querySelector('.navigation__background');
const navBackgroundCart = document.querySelector(
  '.navigation__background_cart'
);
const openOverlay = document.querySelector('.navigation__button');
const inputTitle = document.querySelector('.input_title');
const inputCost = document.querySelector('.input_cost_item');
const inputLinkImage = document.querySelector('.input_link_image');
const inputDescription = document.querySelector('.input_description');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputLoginUsername = document.querySelector('.login__input--user');
const btnLogin = document.querySelector('.login__btn');
const testimonialContainer = document.querySelector('.testimonial');
const containerApp = document.querySelector('.app');
const setOverLay = document.querySelector('.navigation__nav');
const setOverLayCart = document.querySelector('.navigation__nav_cart');
const labelWelcome = document.querySelector('.welcome');
const buttonAddItem = document.querySelector('.submit');
const navLogin = document.querySelector('.nav_login');
const buttonShoppingCart = document.querySelector('.navigation__button_cart');
const buttonAddCart = document.getElementsByClassName('testimonial__buy');
const navNone = document.getElementById('navigation__nav_none');
const navCarNone = document.getElementById('navigation__nav_cart_none');
const cartList = document.querySelector('.cart_list');
const removeButton = document.getElementsByClassName('testimonial__remove');

const displayTestimonial = function (testimonial) {
  testimonialContainer.innerHTML = '';

  testimonial.forEach(function (mov) {
    const html = `<div class="item__card">
        <h5 class="testimonial__header">${mov.title}</h5>
        <img src="${mov.imageUrl}" alt="" class="testimonial__photo" />
        <blockquote class="testimonial__text">
            ${mov.description}
          </blockquote>
          <address class="testimonial__author">
            <button class="testimonial__buy"><img class ="shopping-cart-icon" src="./image/shopping-cart.png"/></button>
            <p class="testimonial__location">${mov.cost}</p>
          </address>
        </div>
        `;
    testimonialContainer.insertAdjacentHTML('afterbegin', html);
  });
};
displayTestimonial(data);

buttonAddItem.addEventListener('click', function (e) {
  e.preventDefault();
  const item = {
    title: inputTitle.value,
    cost: Number(inputCost.value),
    imageUrl: inputLinkImage.value,
    description: inputDescription.value,
  };
  data.push(item);
  displayTestimonial(data);
});

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  if (
    acount?.pin === Number(inputLoginPin.value) &&
    acount?.owner === inputLoginUsername.value
  ) {
    // Display UI and message

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});
let open = false;
openOverlay.addEventListener('click', function (e) {
  e.preventDefault;
  open = !open;
  if (open) {
    setOverLay.style.opacity = 1;
    navBackground.style.zIndex = 1000;
    navBackground.style.backgroundImage =
      'radial-gradient(var(--color-white), var(--color-white-dark))';
    navLogin.style.zIndex = 100;
    setOverLay.style.top = 0;
    navNone.style.display = 'block';
  } else {
    setOverLay.style.opacity = 0;
    navBackground.style.zIndex = -1000;
    navBackground.style.backgroundImage = 'none';
    containerApp.style.opacity = 0;
    navLogin.style.zIndex = 0;
    setOverLay.style.top = -1000;
    navNone.style.display = 'none';
  }
});
const init = function () {
  setOverLayCart.style.opacity = 0;
  navBackgroundCart.style.zIndex = -1000;
  navBackgroundCart.style.backgroundImage = 'none';
  setOverLayCart.style.display = 'none';
  setOverLayCart.style.top = -1000;
  navCarNone.style.display = 'none';
  setOverLay.style.opacity = 0;
  navBackground.style.zIndex = -1000;
  navBackground.style.backgroundImage = 'none';
  containerApp.style.opacity = 0;
  navLogin.style.zIndex = 0;
  setOverLay.style.top = -1000;
  navNone.style.display = 'none';
  cartList.innerHTML = '';
};
init();
let buttonCart = false;
buttonShoppingCart.addEventListener('click', function (e) {
  e.preventDefault();
  buttonCart = !buttonCart;
  if (buttonCart) {
    setOverLayCart.style.opacity = 1;
    navBackgroundCart.style.zIndex = 1000;
    setOverLayCart.style.display = 'flex';
    setOverLayCart.style.zIndex = 1500;
    setOverLayCart.style.top = 0;
    navCarNone.style.display = 'block';
    navBackgroundCart.style.backgroundImage =
      'radial-gradient(var(--color-white), var(--color-white-dark))';
  } else {
    setOverLayCart.style.opacity = 0;
    navBackgroundCart.style.zIndex = -1000;
    navBackgroundCart.style.backgroundImage = 'none';
    setOverLayCart.style.display = 'none';
    setOverLayCart.style.top = -1000;
    navCarNone.style.display = 'none';
  }
});

console.log(buttonAddCart);
for (let i = 0; i < buttonAddCart.length; i++) {
  let button = buttonAddCart[i];
  button.addEventListener('click', function (event) {
    let buttonClicked = event.target;
    let shopItem = buttonClicked.parentElement.parentElement;
    let titleItem = shopItem.getElementsByClassName('testimonial__header')[0]
      .innerHTML;
    console.log(titleItem);
    let found = data.find((el) => el.title === titleItem);
    console.log(found);
    cart.push(found);
    console.log(cart);

    displayCartList(cart);
  });
}
console.log(cartList);
const displayCartList = function (cart) {
  cartList.innerHTML = '';
  cart.forEach(function (item) {
    const html = `<div class="item__card">
        <h5 class="testimonial__header">${item.title}</h5>
        <img src="${item.imageUrl}" alt="" class="testimonial__photo" />
        <blockquote class="testimonial__text">
            ${item.description}
          </blockquote>
          <address class="testimonial__author">
            <button class="testimonial__remove"><img class ="remove-item" src="./image/close.png"/></button>
            <p class="testimonial__location">${item.cost}</p>
          </address>
        </div>
        `;
    cartList.insertAdjacentHTML('afterbegin', html);
  });
};

console.log(removeButton);
for (let i = 0; i < removeButton.length; i++) {
  let button = removeButton[i];
  button.addEventListener('click', function (event) {
    let buttonClicked = event.target;
    console.log(buttonClicked);
    let shopItem = buttonClicked.parentElement.parentElement;
    console.log(shopItem);
    let titleItem = shopItem.getElementsByClassName('testimonial__header')[0]
      .innerHTML;
    let found = cart.find((item) => item.title === titleItem);
    console.log(found);
    for (let j = 0; j < cart.length; j++) {
      if (cart[j].title === found) {
        cart.splice(j, 1);
        console.log(cart);
        break;
      }
    }

    displayCartList(cart);
  });
}
