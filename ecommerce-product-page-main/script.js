var cart = document.querySelector('.actions__cart');
var cart_box = document.querySelector('.actions__cart-box');
var sub = document.querySelector('.sub');
var add = document.querySelector('.add');
var count = document.querySelector('.count');
var cart__badge = document.querySelector('.cart__badge');
var cart__count = document.querySelector('.cart__count');
var cart__item_count = document.querySelector('.cart__item_count');
var cart__item__amount = document.querySelector('.cart__item__amount');
var cart__item = document.querySelector('.cart__item');
var checkout = document.querySelector('.checkout');
var cart__item_remove = document.querySelector('.cart__item_remove');
var add_to_cart = document.querySelector('.add_to_cart');
var empty = document.querySelector('.action__cart-body > p');
var close = document.querySelector('.action__close');
var product_image = document.querySelector('.product__preview_image');
var mobile_menu = document.querySelector('.mobile_menu');
var mobile_menu__backdrop = document.querySelector('.mobile_menu__backdrop');
var mobile_close = document.querySelector('.mobile-close');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var thumbnails = document.querySelectorAll('.product__preview-thumbnails__items li');
var thumb1 = thumbnails[0];
var thumb2 = thumbnails[1];
var thumb3 = thumbnails[2];
var thumb4 = thumbnails[3];

function clear_thumbnail() {
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('thumbnail-active');
        thumbnails[i].lastElementChild.classList.remove('thumbnail-overlay');
    }
}

var products = [
    'image-product-1.jpg',
    'image-product-2.jpg',
    'image-product-3.jpg',
    'image-product-4.jpg',
];

var current_image_index = 0;

var cart_count = 0;

// open or close cart dialog
cart.addEventListener('click', show_or_close_cart);

close.addEventListener('click', show_or_close_cart);


// open mobile menu
mobile_menu.addEventListener('click', () => {
    mobile_menu__backdrop.style.display = 'flex';
})

// close mobile menu
mobile_close.addEventListener('click', () => {
    mobile_menu__backdrop.style.display = 'none';
})

function show_or_close_cart() {
    console.log(cart_box.style.display)
    if (cart_box.style.display !== 'flex')
        cart_box.style.display = 'flex';
    else
        cart_box.style.display = 'none';
}

// increase cart item count
add.addEventListener('click', () => {
    cart_count = parseInt(count.innerHTML) + 1;
    count.innerHTML = cart_count;
    if (checkout.style.display !== 'none')
        show_cart_count()
})

// deduct cart item count
sub.addEventListener('click', () => {
    cart_count = parseInt(count.innerHTML) - 1;
    if (cart_count >= 0) {
        count.innerHTML = cart_count;
    }
    if (checkout.style.display !== 'none')
        show_cart_count()
})

add_to_cart.addEventListener('click', () => {
    show_cart_count();
})

// remove from cart
cart__item_remove.addEventListener('click', () => {
    const temp_count = cart_count;
    cart_count = 0;
    show_cart_count();
    cart_count = temp_count;
})

function show_cart_count() {
    if (cart_count > 0) {
        cart__badge.style.display = 'flex';
        cart__item.style.display = 'flex';
        checkout.style.display = 'block';
        empty.style.display = 'none';
    } else {
        cart__item.style.display = 'none';
        checkout.style.display = 'none';
        cart__badge.style.display = 'none';
        empty.style.display = 'flex';
    }
    cart__count.innerHTML = cart_count;
    cart__item_count.innerHTML = cart_count;
    cart__item__amount.innerHTML = `$${125 * cart_count}`;
}

show_cart_count();

// thumbnails actions

thumb1.addEventListener('mouseenter', () => {
    thumb1.lastElementChild.classList.add('thumbnail-overlay')
})
thumb1.addEventListener('mouseleave', () => {
    if (!thumb1.classList.contains('thumbnail-active'))
        thumb1.lastElementChild.classList.remove('thumbnail-overlay')
})
thumb1.addEventListener('click', () => {
    clear_thumbnail()
    thumb1.classList.add('thumbnail-active')
    thumb1.lastElementChild.classList.add('thumbnail-overlay')
    product_image.src = `images/${products[0]}`
    current_image_index = 0;
})


thumb2.addEventListener('mouseenter', () => {
    thumb2.lastElementChild.classList.add('thumbnail-overlay')
})
thumb2.addEventListener('mouseleave', () => {
    if (!thumb2.classList.contains('thumbnail-active'))
        thumb2.lastElementChild.classList.remove('thumbnail-overlay')
})
thumb2.addEventListener('click', () => {
    clear_thumbnail()
    thumb2.classList.add('thumbnail-active')
    thumb2.lastElementChild.classList.add('thumbnail-overlay')
    product_image.src = `images/${products[1]}`
    current_image_index = 1;
})


thumb3.addEventListener('mouseenter', () => {
    thumb3.lastElementChild.classList.add('thumbnail-overlay')
})
thumb3.addEventListener('mouseleave', () => {
    if (!thumb3.classList.contains('thumbnail-active'))
        thumb3.lastElementChild.classList.remove('thumbnail-overlay')
})
thumb3.addEventListener('click', () => {
    clear_thumbnail()
    thumb3.classList.add('thumbnail-active')
    thumb3.lastElementChild.classList.add('thumbnail-overlay')
    product_image.src = `images/${products[2]}`
    current_image_index = 2;
})

thumb4.addEventListener('mouseenter', () => {
    thumb4.lastElementChild.classList.add('thumbnail-overlay')
})
thumb4.addEventListener('mouseleave', () => {
    if (!thumb4.classList.contains('thumbnail-active'))
        thumb4.lastElementChild.classList.remove('thumbnail-overlay')
})
thumb4.addEventListener('click', () => {
    clear_thumbnail()
    thumb4.classList.add('thumbnail-active')
    thumb4.lastElementChild.classList.add('thumbnail-overlay')
    product_image.src = `images/${products[3]}`
    current_image_index = 3;
})

function setThumbnail() {
    clear_thumbnail()
    switch (current_image_index) {
        case 0:
            thumb1.classList.add('thumbnail-active')
            thumb1.lastElementChild.classList.add('thumbnail-overlay')
            break;
        case 1:
            thumb2.classList.add('thumbnail-active')
            thumb2.lastElementChild.classList.add('thumbnail-overlay')
            break;
        case 2:
            thumb3.classList.add('thumbnail-active')
            thumb3.lastElementChild.classList.add('thumbnail-overlay')
            break;
        default:
            thumb4.classList.add('thumbnail-active')
            thumb4.lastElementChild.classList.add('thumbnail-overlay')
            break;
    }
}

left.addEventListener('click', () => {
    if (current_image_index > 0) {
        current_image_index--;
        product_image.src = `images/${products[current_image_index]}`;
        setThumbnail();
    }
})

right.addEventListener('click', () => {
    if (current_image_index < products.length - 1) {
        current_image_index++;
        product_image.src = `images/${products[current_image_index]}`;
        setThumbnail();
    }
})