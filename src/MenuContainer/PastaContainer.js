const PastaCointainerModule = (function() {
    const pastaContainer = [{
        img: "images/menu/Food/pasta1.jpg",
        name: "Pasta bolognese",
        description: "Tomato souce all the way",
        Allergies: "Soya, egg",
        price: 159
    }, 
    {
        img: "images/menu/Food/pasta2.jpg",
        name: "Pasta carbonara",
        description: "Creamy fresh",
        Allergies: "Soya, egg, milk",
        price: 159
    }, 
    {
        img: "images/menu/Food/pasta3.jpg",
        name: "Pasta Salad",
        description: "Our special pasta salad",
        Allergies: "Soya, egg, healthy",
        price: 119
    }, 
];

//return the whole object
const getPastaContainer  = () => pastaContainer;

return {
    getPastaContainer
}

}());

export default PastaCointainerModule;