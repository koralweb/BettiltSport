import {action, makeObservable, observable} from 'mobx';
import products from '../data/products';

class Product {
  list = products;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      clearCart: action,
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  removeProducts() {
    this.list.forEach(el => {
      el.added = false;
      el.count = 1;
    });
  }

  clearCart() {
    this.list = [...this.list].map(el => ({
      ...el,
      added: false,
      count: 1,
    }));
  }
}

const product = new Product();

export default product;
