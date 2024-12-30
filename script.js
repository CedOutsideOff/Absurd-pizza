const quotes = [

        "Mozzarella", "Parmesan", "Gorgonzola", "Emmental", "Cheddar", "Feta", "Ricotta", "Brie", "Goat Cheese", "Pecorino",
"Provolone", "Bleu d'Auvergne", "Gouda", "Camembert", "Mascarpone", "Taleggio", "Gruyère", "Burrata", "Smoked Scamorza", "Fontina",
"Pepperoni", "Ham", "Italian Sausage", "Chicken", "Prosciutto", "Bacon Bits", "Pancetta", "Salami", "Roast Beef", "Chorizo",
"Anchovies", "Ground Beef", "Turkey Ham", "Parma Ham", "Pastrami", "Spicy Beef", "Canadian Bacon", "Chorizo Sausage",
"Dry Sausage", "Smoked Turkey", "Tomatoes", "Red Onions", "Red Peppers", "Button Mushrooms", "Spinach", "Arugula",
"Artichokes", "Black Olives", "Green Olives", "Zucchini", "Eggplants", "Jalapeño Peppers", "Green Peppers", "Broccoli",
"Shiitake Mushrooms", "Cherry Tomatoes", "Corn", "Asparagus", "Sweet Potato", "Carrots", "Grilled Peppers", "Portobello Mushrooms",
"Roasted Squash", "Caramelized Onions", "Grilled Sweet Peppers", "Grilled Eggplants", "Roasted Potatoes", "Roasted Brussels Sprouts",
"Sun-Dried Tomatoes", "Roasted Fennel", "Fresh Basil", "Oregano", "Thyme", "Parsley", "Rosemary", "Chives", "Tarragon", "Garlic",
"Espelette Pepper", "Cayenne Pepper", "Red Pepper Flakes", "Grated Ginger", "Fennel Seeds", "Cumin", "Fresh Cilantro",
"Mint Leaves", "Nutmeg", "Turmeric", "Curry", "Sesame Seeds", "Tomato Sauce", "Pesto", "Crème Fraîche", "Barbecue Sauce",
"Alfredo Sauce", "Buffalo Sauce", "Mustard Sauce", "Tapenade", "Hot Sauce", "Honey", "Pineapple", "Figs", "Raisins", "Pears",
"Apples", "Dried Apricots", "Mangoes", "Peaches", "Cherries", "Fresh Grapes", "Blueberries", "Raspberries", "Kiwis", "Grated Coconut",
"Pomegranate", "Bananas", "Papaya", "Currants", "Melon", "Mandarins", "Walnuts", "Pine Nuts", "Sliced Almonds", "Crushed Hazelnuts",
"Pistachios", "Pumpkin Seeds", "Flax Seeds", "Chia Seeds", "Crushed Peanuts", "Macadamia Nuts", "Shrimp", "Calamari",
"Tuna", "Crab", "Smoked Salmon", "Mussels", "Anchovies", "Lobster", "Scallops", "Oysters", "Cashew Cheese",
"Soy Cheese", "Tofu", "Tempeh", "Crumbled Falafel", "Seitan", "Roasted Chickpeas", "Black Beans", "Cinnamon", "Pepper", "Salt",
"Macadamia Nut Cheese", "Olive Oil", "Balsamic Vinegar", "Truffle Oil", "Apple Cider Vinegar", "Sesame Oil",
"Basil Oil", "Garlic Oil", "Walnut Oil", "Chili Oil", "Pumpkin Seed Oil", "Harissa", "Hummus", "Bell Pepper Tapenade",
"Tzatziki Sauce", "Peanut Sauce", "Nori (seaweed)", "Wasabi", "Kimchi", "Gomasio", "Ajvar (Balkan Pepper Sauce)",
"Smoked Duck Breast", "Sliced Ribs", "Marinated Salmon", "Pork Fillet", "Smoked Ham", "Pork Chops", "Marinated Veal",
"Marinated Octopus", "Smoked Bacon", "Italian Charcuterie", "Grated Dark Chocolate", "White Chocolate", "Truffle Honey", "Fig Jam",
"Maple Syrup", "Chili Jelly", "Lemon Zest", "Orange Zest", "Strawberry Jam", "Caramel Sauce", "Egg",
"Crispy Breadcrumbs", "Truffle Mushrooms", "Marinated Zucchini", "Cracked Wheat", "Bresaola (Dried Beef)", "Kale",
"Herbes de Provence", "Sardine Fillets", "Pea Shoots", "Just order a margarita pizza if you're overwhelmed."


    
];

const quoteElement = document.getElementById('quote')
const button = document.getElementById('bouton')


function changeQuote () {
    const RandomIndex  = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[RandomIndex];
    quoteElement.textContent = newQuote;

};



button.addEventListener('click', changeQuote);



function toggleAudio() {
    var audio = document.getElementById("audio");

    
    if (audio.paused) {
        audio.play();
        document.getElementById("audioControl").textContent = "⏸️";
    } else {
        
        audio.pause();
        document.getElementById("audioControl").textContent = "🎵";
    }
}


