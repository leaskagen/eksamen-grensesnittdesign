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
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/P36.jpg',
      name: 'Rune Ali 1949',
      description: 'Pepperoni, bacon, løk, tomat',
      allergies: 'Hvete, egg, soya',
      price: 229,
    },
    {
      id: '8',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Fajita-pasta-e6e5b93.jpg',
      name: 'Pasta Tomato Penne',
      description: 'Pasta med tomatsaus og parmesan',
      allergies: 'Gluten, egg og laktose',
      price: 169,
    },
    {
      id: '9',
      img: 'https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/tulcxcntmwnys5ndgqvk/pasta-alfredo',
      name: 'Pasta Alfredo',
      description: 'Pasta Alfredo med kremet ostesaus',
      allergies: 'Gluten, egg og laktose',
      price: 199,
    },
    {
      id: '10',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/PRD.jpg',
      name: 'Rømmedressing',
      description:
        'Dressing laget med rømme',
      allergies: 'Laktose',
      price: 29,
    },

    {
      id: '11',
      img: 'https://www.peppes.no/produktbilder_pepp2013/600x300/BER.jpg',
      name: 'Béarnaise Saus',
      description: 'Saus laget med Béarnaise',
      allergies: 'Melk',
      price: 29,
    },

  ]
};

//exporting module
export default pizzaContainer;