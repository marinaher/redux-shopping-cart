const INIT_STATE = [
  { id: 1, title: 'Tooth paste', link: 'http://www.colgate.com/CP15/en/us/oc/products/toothpaste/images/total-whiteningpaste-tube.png'},
  { id: 2, title: 'Toothbrush Head Replacement', link: 'https://images.philips.com/is/image/PhilipsConsumer/HX9043_64-IMS-en_US?wid=494&hei=435&$pnglarge$'},
  { id: 3, title: 'Water', link: 'http://www.coca-colacompany.com/content/dam/journey/us/en/private/2010/01/smartwater-bfef6f5e.jpg'},
  { id: 5, title: 'iPhone', link: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqr8ypRVv9LnqD7ttDagEzRfFl1lwKSXwXZeBTmv8R_iUMPeG2'},
  { id: 6, title: 'Apple Watch Series 2', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LejJK3_5hWKEMLbW_0mGTo3TH74C0zIn8XMaq-MMFFKDGMEQ'},
];

// In a situation where a state is not provided to us, we need to make sure that we have some default value

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}