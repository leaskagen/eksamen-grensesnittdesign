const PizzaContainer = (function () {
  //Creating Pizza Array
  let pizzaContainer = [
    {
      img: "images/menu/Food/ufo.jpg",
      name: "Ufo",
      description: "Flyvende pizza toppet med pepperoni, skinke og ananas",
      allergies: "Melk, nøtter, hvete",
      price: 169,
    },
    {
      img: "images/menu/Food/kebabpizza.jpg",
      name: "Carolina reaper triple cheese",
      description:
        "Landets sterkeste pizza. Kjøttdeig, løk, carolina reaper krydder, trippel ost",
      allergies: "Soya, nøtter, egg",
      price: 200,
    },
    {
      img: "images/menu/Food/svensken.jpg",
      name: "Svensken",
      description: "Simpel pizza med skinke, ost og sopp",
      allergies: "Melk, nøtter, soya.",
      price: 189,
    },
    {
      img: "images/menu/Food/donjuan.jpg",
      name: "Don Juan",
      description: "Biffstrimler, sopp og løk",
      allergies: "Gluten, hvete",
      price: 199,
    },
    {
      img: "images/menu/Food/viking.jpg",
      name: "Viking",
      description: "Biff, paprika, løk og ananas. Toppet med bernaise",
      allergies: "Gluten, egg og laktose",
      price: 199,
    },
    {
      img: "images/menu/Food/nomeat.jpg",
      name: "Hawaii",
      description: "biff, pepperoni, løk",
      allergies: "Gluten, egg og laktose",
      price: 189,
    },
    {
      img: "images/menu/Food/tacospesial.jpg",
      name: "Tacospesial",
      description: "Kjøttdeig, mais, paprika, løk, jalapenos og tortillachips",
      allergies: "Gluten, egg og laktose",
      price: 199,
    },
    {
      img: "images/menu/Food/fourcheese.jpg",
      name: "Vegetariano",
      description: "Tomat og ost",
      allergies: "Gluten, egg og laktose",
      price: 199,
    },
    {
      img: "images/menu/Food/ufo.jpg",
      name: "The Wheelchair",
      description:
        "Vegansk pizza med avocado, oliven, sopp, løk, purreløk, vårløk og oregano",
      allergies: "Gluten",
      price: 219,
    },
    {
      img: "images/menu/Food/kebabpizza.jpg",
      name: "Rango",
      description: "Kjøttdeig, jalapeño, paprika, sopp, mais, tacosaus",
      allergies: "Hvete, egg, soya",
      price: 199,
    },
    {
      img: "images/menu/Food/nomeat.jpg",
      name: "The No Meat",
      description: "Sopp, paprika, purreløk og oregano",
      allergies: "Hvete, egg, soya",
      price: 179,
    },
    {
      img: "images/menu/Food/svensken.jpg",
      name: "Rune Ali 1949",
      description: "Pepperoni, bacon, løk, tomat",
      allergies: "Hvete, egg, soya",
      price: 229,
    },
    {
      img: "images/menu/Food/fourcheese.jpg",
      name: "Fourcheese",
      description: "Mozarella, parmesan, cheddar og blåmuggost",
      allergies: "Hvete, egg, soya",
      price: 209,
    },
    {
      img: "images/menu/Food/donjuan.jpg",
      name: "No gluten here, bitch!",
      description: "Glutenfri deig, glutenfri ost, biff",
      allergies: "Egg, soya",
      price: 299,
    },
    {
      img: "images/menu/Food/viking.jpg",
      name: "Love pizza",
      description:
        "Biff, champinjong, løk, purreløk, oliven, toppet med litt kjærlighet ;)",
      allergies: "hvete, egg, soya",
      price: 179,
    },
    {
      img: "images/menu/Food/tacospesial.jpg",
      name: "Shrimpy love",
      description: "Reke, purreløk, paprika",
      allergies: "Hvete, egg, soya",
      price: 899,
    },
  ];



  //Returning the whole object
  const getPizzaContainer = () => pizzaContainer;
  const getPizzaByName = (name) =>
    pizzaContainer.find((pizza) => pizza.name === name);

  return { getPizzaContainer, getPizzaByName };
})();

//exporting module
export default PizzaContainer;
