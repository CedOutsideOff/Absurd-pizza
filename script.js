const quotes = [

        "Mozzarella", "Parmesan", "Gorgonzola", "Emmental", "Cheddar", "Feta", "Ricotta", "Brie", "Fromage de chèvre", "Pecorino",
        "Provolone", "Bleu d'Auvergne", "Gouda", "Camembert", "Mascarpone", "Taleggio", "Gruyère", "Burrata", "Scamorza fumée", "Fontina",
        "Pepperoni", "Jambon", "Saucisse italienne", "Poulet", "Prosciutto", "Lardons", "Pancetta", "Salami", "Rosbif", "Chorizo",
        "Anchois", "Viande hachée", "Jambon de dinde", "Jambon de Parme", "Pastrami", "Boeuf épicé", "Bacon canadien", "Saucisse chorizo",
        "Saucisson sec", "Dinde fumée", "Tomates", "Oignons rouges", "Poivrons rouges", "Champignons de Paris", "Épinards", "Roquette",
        "Artichauts", "Olives noires", "Olives vertes", "Courgettes", "Aubergines", "Piments jalapeños", "Poivrons verts", "Brocoli",
        "Champignons shiitake", "Tomates cerises", "Maïs", "Asperges", "Patate douce", "Carottes", "Poivrons grillés", "Champignons portobello",
        "Courges rôties", "Oignons caramélisés", "Piments doux grillés", "Aubergines grillées", "Pommes de terre rôties", "Choux de Bruxelles rôtis",
        "Tomates séchées", "Fenouil rôti", "Basilic frais", "Origan", "Thym", "Persil", "Romarin", "Ciboulette", "Estragon", "Ail",
        "Piment d'Espelette", "Piment de Cayenne", "Flocons de piment rouge", "Gingembre râpé", "Graines de fenouil", "Cumin", "Coriandre fraîche",
        "Feuilles de menthe", "Muscade", "Curcuma", "Curry", "Graines de sésame", "Sauce tomate", "Pesto", "Crème fraîche", "Sauce barbecue",
        "Sauce Alfredo", "Sauce Buffalo", "Sauce moutarde", "Tapenade", "Sauce piquante", "Miel", "Ananas", "Figues", "Raisins secs", "Poires",
        "Pommes", "Abricots secs", "Mangues", "Pêches", "Cerises", "Raisins frais", "Myrtilles", "Framboises", "Kiwis", "Noix de coco râpée",
        "Grenade", "Bananes", "Papaye", "Groseilles", "Melon", "Mandarines", "Noix", "Pignons de pin", "Amandes effilées", "Noisettes concassées",
        "Pistaches", "Graines de courge", "Graines de lin", "Graines de chia", "Cacahuètes concassées", "Noix de macadamia", "Crevettes", "Calamars",
        "Thon", "Crabe", "Saumon fumé", "Moules", "Anchois", "Homard", "Coquilles Saint-Jacques", "Huîtres", "Fromage de noix de cajou",
        "Fromage de soja", "Tofu", "Tempeh", "Falafel émietté", "Seitan", "Pois chiches rôtis", "Haricots noirs", "Cannelle", "Poivre", "Sel",
        "Fromage de noix de macadamia", "Huile d'olive", "Vinaigre balsamique", "Huile de truffe", "Vinaigre de cidre", "Huile de sésame",
        "Huile de basilic", "Huile d'ail", "Huile de noix", "Huile pimentée", "Huile de graines de courge", "Harissa", "Houmous", "Tapenade de poivrons",
        "Sauce tzatziki", "Sauce aux arachides", "Nori (algue)", "Wasabi", "Kimchi", "Gomasio", "Ajvar (sauce aux poivrons des Balkans)", 
        "Magret de canard fumé", "Ribs émincés", "Saumon mariné", "Filet de porc", "Jambon fumé", "Côtelettes de porc", "Veau mariné",
        "Poulpe mariné", "Bacon fumé", "Charcuterie italienne", "Chocolat noir râpé", "Chocolat blanc", "Miel à la truffe", "Confiture de figues",
        "Sirop d'érable", "Gelée de piments", "Zestes de citron", "Zestes d'orange", "Confiture de fraises", "Sauce au caramel", "Œuf",
        "Chapelure croustillante", "Champignons truffés", "Courgettes marinées", "Blé concassé", "Bresaola (bœuf séché)", "Chou frisé (kale)",
        "Herbes de Provence", "Filets de sardine", "Pousses de pois", "Commandez juste une margarita au pire",

    
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


