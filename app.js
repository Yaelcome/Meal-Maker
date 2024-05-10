const menu = {
  _menu : '',
  _price : 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this.meal} for $ ${this.price}!`
    } else {
      return `Meal or price was not set correctly!`
    }
  }
};

menu._meal = 'Pizza';
menu._price = 8;
console.log(menu.todaysSpecial);



