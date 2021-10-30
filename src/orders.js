export let currentOrder = {
  pain: null,
  viande: null,
  salade: false,
  tomate: false,
  oignon: false,
  sauces: [],
};

export let ingredients = [
  { name: "Pain", categorie: "pains", image: "https://..." },
  { name: "Galette", categorie: "pains", image: "https://..." },
  { name: "Baguette", categorie: "pains", image: "https://..." },

  { name: "Viande", categorie: "viandes", image: "https://..." },
  { name: "Tofu", categorie: "viandes", image: "https://..." },

  { name: "Salade", categorie: "salade", image: "https://..." },
  { name: "Tomate", categorie: "tomate", image: "https://..." },
  { name: "Oignon", categorie: "oignon", image: "https://..." },

  { name: "Blanche", categorie: "sauces", image: "https://..." },
  { name: "Harissa", categorie: "sauces", image: "https://..." },
  { name: "Andalouse", categorie: "sauces", image: "https://..." },
  { name: "BBQ", categorie: "sauces", image: "https://..." },
  { name: "Ketchup", categorie: "sauces", image: "https://..." },
  { name: "Curry", categorie: "sauces", image: "https://..." },
];
