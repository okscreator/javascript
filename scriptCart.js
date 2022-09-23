"use strict";
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Product:</b> ${good.product_name}</div>
                    <div><b>Price per 1:</b> ${good.price}</div>
                    <div><b>Quantity:</b> ${good.quantity}</div>
                    <div><b>Price:</b> ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 111,
            product_name: 'Jacket',
            price: 7500,
            quantity: 1,
        },
        {
            id_product: 112,
            product_name: 'Shirt',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 303,
            product_name: 'Socks',
            price: 300,
            quantity: 5,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `<b>В корзине: ${this.goods.length} товаров на сумму:${this.getCartPrice()} (рублей).</b>`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();
