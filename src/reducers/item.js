const INIT_STATE = [
  { id: 1, title: 'Tooth paste', link: 'http://www.colgatetotal.com/toothpaste/whitening?_ga=1.40144230.592160904.1492625469'},
  { id: 2, title: 'Toothbrush Head Replacement', link: 'http://www.usa.philips.com/c-p/HX9043_64/sonicare-adaptiveclean-standard-sonic-toothbrush-heads'},
  { id: 3, title: 'Water', link: 'https://www.drinksmartwater.com/'},
  { id: 4, title: 'Hoodie', link: 'https://shop.spreadshirt.com/overplayedpodcast/overplayed+squad-A58b79299aa0c6d1f84b86172?department=2&productType=1061&color=383D41&appearance=136&view=1'},
  { id: 5, title: 'iPhone', link: 'https://www.apple.com/shop/buy-iphone/iphone-7/4.7-inch-display-128gb-black-verizon-wireless'},
  { id: 6, title: 'Apple Watch Series 2', link: 'https://www.apple.com/shop/buy-watch/apple-watch'},
];

// In a situation where a state is not provided to us, we need to make sure that we have some default value

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}