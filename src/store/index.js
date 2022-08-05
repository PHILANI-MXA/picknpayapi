import { createStore } from 'vuex'
import HomeViewVue from '@/views/HomeView.vue'

export default createStore({
  state: {
    products: [
      {
        productname: 'Rama',
        productimg: 'https://i.postimg.cc/JhzZDG3Y/rama.jpg',
        productprice: '50',
        productsize: '1kg',
      },
      {
        productname: 'Cooking oil',
        productimg: 'https://i.postimg.cc/5yxnRP5n/cooking-oil.jpg',
        productprice: '105',
        productsize: '2L',
      },
      {
        productname: 'Mayonnaise',
        productimg: 'https://i.postimg.cc/VNhrJ4k5/Mayonnaise.jpg',
        productprice: 'R42',
        productsize: '750g',
      },
      {
        productname: 'Potatoes',
        productimg: 'https://i.postimg.cc/7ZYfXjCf/potatoes.jpg',
        productprice: 'R95',
        productsize: '7kg',
      },
      {
        productname: 'Apple Juice',
        productimg: 'https://i.postimg.cc/j5R9J630/applejuice.jpg',
        productprice: 'R48',
        productsize: '2L',
      },
      {
        productname: 'White Bread',
        productimg: 'https://i.postimg.cc/rpkZvCk0/Whitebread.jpg',
        productprice: 'R20',
        productsize: '800g',
      },
      {
        productname: 'Brown Bread',
        productimg: 'https://i.postimg.cc/GtXH1jVc/brownbread.jpg',
        productprice: 'R19',
        productsize: '800g',
      },
       {
        productname: 'Sugar',
        productimg: 'https://i.postimg.cc/1XR53q1J/Sugar.jpg',
        productprice: 'R57',
        productsize: '3kg',
      },
        {
        productname: 'Coke',
        productimg: 'https://i.postimg.cc/J4PMP0CW/coke.jpg',
        productprice: 'R29',
        productsize: '2L',
      },
         {
        productname: 'Chicken',
        productimg: 'https://i.postimg.cc/XqKFTFcL/chicken.jpg',
        productprice: 'R186',
        productsize: '5kg',
      },
          {
        productname: 'Eggs',
        productimg: 'https://i.postimg.cc/XvDg8wQy/eggs.jpg',
        productprice: '108',
        productsize: '60s',
      },
           {
        productname: 'Polony',
        productimg: 'https://i.postimg.cc/Y0xGX7My/polony.jpg',
        productprice: 'R90',
        productsize: '2.5kg',
      },
    ],

    SingleProduct : [
      {
        id: '1',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',

      },
      {
           id: '2',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '3',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },

      {
           id: '4',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '5',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '6',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '7',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '8',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '9',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '10',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '11',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
      {
           id: '12',
         productname: 'Polony',
        productimg: '',
        productprice: 'R90',
        productsize: '2.5kg',
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
