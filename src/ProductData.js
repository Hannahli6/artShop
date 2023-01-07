import { type } from "@testing-library/user-event/dist/type";

const ProductData = [
  {
    type: "prints",
    products: [
      {
        name: "cat print",
        productId: "cat-print",
        price: "20",
        description: "this is a cat print!",
        imgSrc: "butterfly-print.jpg"
      },
      {
        name: "dog print",
        productId: "dog-print",
        price: "30",
        description: "this is a dog print!",
        imgSrc: "gojo-print.jpg"
      },
      {
        name: "dog print",
        productId: "dog-print",
        price: "30",
        description: "this is a dog print!",
        imgSrc: "strawberry-print.jpg"
      },
      {
        name: "dog print",
        productId: "dog-print",
        price: "30",
        description: "this is a dog print!",
        imgSrc: "sunset-print.jpg"
      }
    ],
  },
  {
    type: "stationary",
    products: [
      {
        name: "cat sticker",
        productId: "cat-sticker",
        price: "20",
        description: "this is a cat sticker!",
        imgSrc: "butterfly-notebook.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "gojo-notebook.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "sunset-notebook.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "lumine-pouch.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "strawberry-card.jpg"
      },
    ],
  },
  {
    type: "accessories",
    products: [
      {
        name: "cat sticker",
        productId: "cat-sticker",
        price: "20",
        description: "this is a cat sticker!",
        imgSrc: "boy-bag.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "bread-bag.jpg"
      },
      {
        name: "cat sticker",
        productId: "cat-sticker",
        price: "20",
        description: "this is a cat sticker!",
        imgSrc: "butterfly-bag.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "flower-bag.jpg"
      },
      {
        name: "cat sticker",
        productId: "cat-sticker",
        price: "20",
        description: "this is a cat sticker!",
        imgSrc: "sunset-bag.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "tangerine-bag.jpg"
      },
      {
        name: "dog sticker",
        productId: "dog-sticker",
        price: "30",
        description: "this is a dog sticker!",
        imgSrc: "strawberry-mug.jpg"
      },
    ],
  },
];

const MostPopularProductData = [
    {
      name: "cat print",
      productId: "cat-print",
      price: "20",
      description: "this is a cat print!",
      imgSrc: "butterfly-print.jpg",
      type: "prints"
    },
    {
      name: "dog print",
      productId: "dog-print",
      price: "30",
      description: "this is a dog print!",
      imgSrc: "gojo-print.jpg",
      type: "prints"
    },
    {
      name: "dog print",
      productId: "dog-print",
      price: "30",
      description: "this is a dog print!",
      imgSrc: "strawberry-print.jpg",
      type: "prints"
    }
]

const NewestProductData = [
  {
    name: "dog sticker",
    productId: "dog-sticker",
    price: "30",
    description: "this is a dog sticker!",
    imgSrc: "strawberry-mug.jpg",
    type: "accessories"
  },
]

export {ProductData, MostPopularProductData, NewestProductData} ;
