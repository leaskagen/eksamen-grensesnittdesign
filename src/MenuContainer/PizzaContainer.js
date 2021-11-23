import './../css/menu.css';

//Creating Pizza Array
const pizzaContainer = {
  pizzas: [
    {
      id: '1',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P1.jpg',
      name: 'Ufo',
      description: 'Flyvende pizza toppet med pepperoni, skinke og ananas',
      allergies: 'Melk, nøtter, hvete',
      price: 169,
    },
    {
      id: '2',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P90.jpg',
      name: 'Carolina reaper triple cheese',
      description:
        'Landets sterkeste pizza. Kjøttdeig, løk, carolina reaper krydder, trippel ost',
      allergies: 'Soya, nøtter, egg',
      price: 200,
    },
    {
      id: '3',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P91.jpg',
      name: 'Svensken',
      description: 'Simpel pizza med skinke, ost og sopp',
      allergies: 'Melk, nøtter, soya.',
      price: 189,
    },
    {
      id: '4',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P92.jpg',
      name: 'Don Juan',
      description: 'Biffstrimler, sopp og løk',
      allergies: 'Gluten, hvete',
      price: 199,
    },
    {
      id: '5',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P12.jpg',
      name: 'Viking',
      description: 'Biff, paprika, løk og ananas. Toppet med bernaise',
      allergies: 'Gluten, egg og laktose',
      price: 199,
    },
    {
      id: '6',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P2.jpg',
      name: 'Hawaii',
      description: 'biff, pepperoni, løk',
      allergies: 'Gluten, egg og laktose',
      price: 189,
    },
    {
      id: '7',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P11.jpg',
      name: 'Tacospesial',
      description: 'Kjøttdeig, mais, paprika, løk, jalapenos og tortillachips',
      allergies: 'Gluten, egg og laktose',
      price: 199,
    },
    {
      id: '8',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P40.jpg',
      name: 'Vegetariano',
      description: 'Tomat og ost',
      allergies: 'Gluten, egg og laktose',
      price: 199,
    },
    {
      id: '9',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P47.jpg',
      name: 'The Wheelchair',
      description:
        'Vegansk pizza med avocado, oliven, sopp, løk, purreløk, vårløk og oregano',
      allergies: 'Gluten',
      price: 219,
    },
    {
      id: '11',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P30.jpg',
      name: 'The No Meat',
      description: 'Sopp, paprika, purreløk og oregano',
      allergies: 'Hvete, egg, soya',
      price: 179,
    },
    {
      id: '12',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P36.jpg',
      name: 'Rune Ali 1949',
      description: 'Pepperoni, bacon, løk, tomat',
      allergies: 'Hvete, egg, soya',
      price: 229,
    },
    {
      id: '13',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P13.jpg',
      name: 'Fourcheese',
      description: 'Mozarella, parmesan, cheddar og blåmuggost',
      allergies: 'Hvete, egg, soya',
      price: 209,
    },
    {
      id: '14',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P15.jpg',
      name: 'No gluten here, bitch!',
      description: 'Glutenfri deig, glutenfri ost, biff',
      allergies: 'Egg, soya',
      price: 299,
    },
    {
      id: '15',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P47.jpg',
      name: 'Love pizza',
      description:
        'Biff, champinjong, løk, purreløk, oliven, toppet med litt kjærlighet ;)',
      allergies: 'hvete, egg, soya',
      price: 179,
    },
    {
      id: '16',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P17.jpg',
      name: 'Shrimpy love',
      description: 'Reke, purreløk, paprika',
      allergies: 'Hvete, egg, soya',
      price: 899,
    },
  ]
};

//exporting module
export default pizzaContainer;