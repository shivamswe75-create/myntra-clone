function page(){
let display_item=document.querySelector('.all_product');
if(!display_item){
    return;
};
let newhtml='';
product.forEach(product=>{
    newhtml+=`<div class="item_container">
                <img src="${product.item_image}" id="image">
                <div class="rating">
                    ${product.rating.stars} Stars || ${product.rating.review}k
                </div>
                <div class="company_name">${product.company_name}</div>
                <div class="item_name">${product.item_name}</div>
                <div class="price">
                    <span>₹ ${product.current_price}</span>
                     <span id="original_price"> ${product.original_price}</span>
                      <span>(${product.discount}% OF)</span>
                </div>
                <button id="add_to_bag" onclick="addtobag(${product.id});">Add to bag</button>
                </div>`;
                
});
 
    display_item.innerHTML=newhtml;
 
};


let product = [
  {
    id: '1',
    item_image: 'https://loremflickr.com/600/800/anarkali,kurta',
    item_name: 'Anarkali Kurta',
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 2.8,
      review: 32
    },
    current_price: 643,
    original_price: 715,
    discount: 10,
    return_days: 15,
    delivery_date: '12 sep 2026',
  },

  {
    id: '2',
    item_image: 'https://loremflickr.com/600/800/printed,kurta',
    item_name: 'Printed Cotton Kurta',
    company_name: 'ROADSTER',
    rating: {
      stars: 4.2,
      review: 41
    },
    current_price: 799,
    original_price: 999,
    discount: 20,
    return_days: 14,
    delivery_date: '14 sep 2026',
  },

  {
    id: '3',
    item_image: 'https://loremflickr.com/600/800/floral,dress,women',
    item_name: 'Floral Print Dress',
    company_name: 'HERE&NOW',
    rating: {
      stars: 4.4,
      review: 45
    },
    current_price: 899,
    original_price: 1499,
    discount: 40,
    return_days: 15,
    delivery_date: '15 sep 2026',
  },

  {
    id: '4',
    item_image: 'https://loremflickr.com/600/800/women,top',
    item_name: 'Regular Fit Top',
    company_name: 'SASSAFRAS',
    rating: {
      stars: 3.9,
      review: 40
    },
    current_price: 499,
    original_price: 799,
    discount: 38,
    return_days: 15,
    delivery_date: '16 sep 2026',
  },

 
  {
    id: '6',
    item_image: 'https://loremflickr.com/600/800/men,jeans',
    item_name: 'Slim Fit Jeans',
    company_name: 'LEVIS',
    rating: {
      stars: 4.5,
      review: 44
    },
    current_price: 1299,
    original_price: 2499,
    discount: 48,
    return_days: 15,
    delivery_date: '18 sep 2026',
  },

  {
    id: '7',
    item_image: 'https://loremflickr.com/600/800/women,pants',
    item_name: 'Women Straight Pants',
    company_name: 'VERO MODA',
    rating: {
      stars: 4.1,
      review: 40
    },
    current_price: 1099,
    original_price: 1999,
    discount: 45,
    return_days: 15,
    delivery_date: '19 sep 2026',
  },

  {
    id: '8',
    item_image: 'https://loremflickr.com/600/800/men,tshirt',
    item_name: 'Printed T-Shirt',
    company_name: 'HRX',
    rating: {
      stars: 4.0,
      review: 41
    },
    current_price: 599,
    original_price: 999,
    discount: 40,
    return_days: 14,
    delivery_date: '20 sep 2026',
  },

 

  {
    id: '10',
    item_image: 'https://loremflickr.com/600/800/casual,sneakers',
    item_name: 'Casual Sneakers',
    company_name: 'PUMA',
    rating: {
      stars: 4.4,
      review: 43
    },
    current_price: 1799,
    original_price: 2999,
    discount: 40,
    return_days: 30,
    delivery_date: '22 sep 2026',
  },

  {
    id: '11',
    item_image: 'https://loremflickr.com/600/800/anarkali,kurta,women',
    item_name: 'Anarkali Kurta',
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 3.8,
      review: 32
    },
    current_price: 643,
    original_price: 715,
    discount: 10,
    return_days: 15,
    delivery_date: '23 sep 2026',
  },

  {
    id: '12',
    item_image: 'https://loremflickr.com/600/800/indian,saree,women',
    item_name: 'Saree',
    company_name: 'MYNTRA',
    rating: {
      stars: 4.2,
      review: 32
    },
    current_price: 904,
    original_price: 1560,
    discount: 42,
    return_days: 15,
    delivery_date: '24 sep 2026',
  },

  {
    id: '13',
    item_image: 'https://loremflickr.com/600/800/indian,kurta',
    item_name: 'Granthva Fab Kurta',
    company_name: 'AMAZON',
    rating: {
      stars: 2.4,
      review: 12
    },
    current_price: 550,
    original_price: 715,
    discount: 23,
    return_days: 15,
    delivery_date: '25 sep 2026',
  },

  {
    id: '14',
    item_image: 'https://loremflickr.com/600/800/women,printed,dress',
    item_name: 'KLOSIA Women Printed Dress',
    company_name: 'MYNTRA',
    rating: {
      stars: 4.2,
      review: 22
    },
    current_price: 339,
    original_price: 515,
    discount: 34,
    return_days: 15,
    delivery_date: '26 sep 2026',
  },

  {
    id: '15',
    item_image: 'https://loremflickr.com/600/800/kurta,dupatta,women',
    item_name: 'Kurta & Dupatta',
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 3.3,
      review: 22
    },
    current_price: 342,
    original_price: 1560,
    discount: 78,
    return_days: 15,
    delivery_date: '27 sep 2026',
  },

 

  {
    id: '17',
    item_image: 'https://loremflickr.com/600/800/women,long,shirt',
    item_name: 'Long Shirt for Women',
    company_name: 'MICROSOFT',
    rating: {
      stars: 3.4,
      review: 22
    },
    current_price: 346,
    original_price: 450,
    discount: 23,
    return_days: 15,
    delivery_date: '29 sep 2026',
  },

  {
    id: '18',
    item_image: 'https://loremflickr.com/600/800/frock,dress,girl',
    item_name: 'Stylish Frock Dress',
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 4.2,
      review: 32
    },
    current_price: 1089,
    original_price: 1676,
    discount: 35,
    return_days: 15,
    delivery_date: '30 sep 2026',
  },

  {
    id: '19',
    item_image: 'https://loremflickr.com/600/800/indian,women,fashion',
    item_name: 'SWORNOF',
    company_name: 'MYNTRA',
    rating: {
      stars: 3.8,
      review: 16
    },
    current_price: 555,
    original_price: 730,
    discount: 24,
    return_days: 15,
    delivery_date: '1 oct 2026',
  },

  {
    id: '20',
    item_image: 'https://loremflickr.com/600/800/indian,saree',
    item_name: 'TAASHI Saree',
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 3.5,
      review: 22
    },
    current_price: 1206,
    original_price: 1370,
    discount: 12,
    return_days: 15,
    delivery_date: '2 oct 2026',
  },

 

  {
    id: '22',
    item_image: 'https://loremflickr.com/600/800/women,rayon,dress',
    item_name: "Women's Rayon Blend",
    company_name: 'CARLTON LONDON',
    rating: {
      stars: 2.9,
      review: 17
    },
    current_price: 444,
    original_price: 600,
    discount: 26,
    return_days: 15,
    delivery_date: '4 oct 2026',
  }
];
 