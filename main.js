// Data: 20 Culinary Archive Recipes with Dynamic Difficulty Colors and HTML Methods
const RECIPES = [
  {
    id: 1,
    title: 'Cacio e Pepe',
    tag: 'Pasta',
    category: 'savory',
    time: '20 min',
    serves: '2',
    level: 'medium',
    desc: 'The Roman trinity of pasta, Pecorino, and black pepper. Deceptively simple, devastatingly good. The emulsification of cheese and starchy water is where mastery lives.',
    img: 'src/shutterstock_2527071203.jpg',
    ingredients: [
      '200g spaghetti or tonnarelli',
      '80g Pecorino Romano, finely grated',
      '40g Parmigiano Reggiano',
      '2 tsp black pepper, freshly cracked',
      'Kosher salt for pasta water'
    ],
    method: [
      'Toast cracked pepper in a dry skillet over medium heat until fragrant, 60 seconds.',
      'Cook pasta in well-salted boiling water. Reserve 1½ cups starchy water before draining.',
      'Add ½ cup pasta water to the pepper. Simmer to combine.',
      'Remove from heat. Add pasta and toss vigorously.',
      'Off heat, rain in cheeses gradually, adding pasta water to form a silky sauce.',
      'Serve immediately with extra pepper and cheese.'
    ]
  },
  {
    id: 2,
    title: 'Beef Tartare',
    tag: 'Appetizer',
    category: 'savory',
    time: '20 min',
    serves: '2',
    level: 'hard',
    desc: 'Raw, bold, and precise. Quality beef hand-cut to order, dressed in classic French technique. One of gastronomy\'s great raw preparations.',
    img: 'src/shutterstock_2461746061.jpg',
    ingredients: [
      '200g beef tenderloin, very cold',
      '1 tbsp capers, finely chopped',
      '1 shallot, minced fine',
      '1 tsp Dijon mustard',
      '1 egg yolk (pasteurized)',
      'Few dashes Worcestershire sauce',
      'Sea salt and black pepper'
    ],
    method: [
      'Hand-cut beef into tiny cubes — never grind. Keep cold at all times.',
      'Whisk egg yolk with mustard and Worcestershire.',
      'Fold capers, shallot, and dressing into beef.',
      'Season aggressively with salt and pepper.',
      'Mold on a chilled plate. Create a well in the center.',
      'Serve immediately with toasted baguette and cornichons.'
    ]
  },
  {
    id: 3,
    title: 'Miso Ramen',
    tag: 'Noodle Soup',
    category: 'savory',
    time: '3 hrs',
    serves: '4',
    level: 'hard',
    desc: 'A deeply savory, umami-charged broth built from tare, dashi, and fat. The kind of bowl that makes you feel understood.',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
    ingredients: [
      '4 portions fresh ramen noodles',
      '1L chicken or pork bone broth',
      '4 tbsp white miso paste',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '4 soft-boiled eggs, marinated',
      'Chashu pork, nori, corn, green onion'
    ],
    method: [
      'Simmer broth for at least 2 hours with aromatics for depth.',
      'Whisk miso with a ladle of hot broth until fully dissolved.',
      'Combine with remaining broth, soy, and sesame oil.',
      'Cook noodles al dente per package — rinse briefly.',
      'Warm bowls with hot water. Add noodles, ladle over hot broth.',
      'Top with chashu, halved marinated egg, nori, and spring onion.'
    ]
  },
  {
    id: 4,
    title: 'Chocolate Soufflé',
    tag: 'Dessert',
    category: 'sweet',
    time: '35 min',
    serves: '4',
    level: 'hard',
    desc: 'Architectural, ephemeral, and impossibly rich. The soufflé demands speed, precision, and a willingness to be fully present at the oven.',
    img: 'src/shutterstock_2391129013.jpg',
    ingredients: [
      '150g dark chocolate (70%), chopped',
      '4 egg yolks + 6 egg whites',
      '100g caster sugar',
      '30g unsalted butter, softened',
      '2 tbsp cocoa powder for dusting',
      'Pinch of cream of tartar'
    ],
    method: [
      'Butter ramekins generously, dust with cocoa. Chill in freezer.',
      'Melt chocolate over bain-marie. Cool slightly.',
      'Whisk yolks with half the sugar until pale and ribboned.',
      'Fold chocolate into yolk mixture.',
      'Whisk whites with cream of tartar, gradually adding remaining sugar to stiff peaks.',
      'Fold ⅓ of whites into chocolate base vigorously, then gently fold in the rest.',
      'Fill ramekins ¾ full. Run thumb around inside rim.',
      'Bake 200°C / 12 minutes. Serve with speed.'
    ]
  },
  {
    id: 5,
    title: 'Ceviche Clásico',
    tag: 'Seafood',
    category: 'seafood',
    time: '25 min',
    serves: '4',
    level: 'easy',
    desc: 'Peru\'s national dish. Firm white fish cured in tiger\'s milk — a citrus-chili marinade that transforms raw fish through acidity alone.',
    img: 'src/yasmine-duchesne-mFmI0dHyF7k-unsplash.jpg',
    ingredients: [
      '500g firm white fish (sea bass or halibut)',
      'Juice of 12 limes (about 200ml)',
      '1 ají amarillo, minced',
      '1 red onion, thinly sliced',
      '1 garlic clove, grated',
      'Salt, white pepper',
      'Cilantro, choclo, sweet potato to serve'
    ],
    method: [
      'Cube fish into 2cm pieces. Season with salt and rest 5 minutes.',
      'Blend half the lime juice with ají, garlic, and a cube of fish to make leche de tigre.',
      'Combine all lime juice with leche de tigre. Taste: must be aggressively sour.',
      'Add fish, onion, and toss. Cure for exactly 3 minutes.',
      'Serve immediately on cold plates with corn and sweet potato.',
      'Garnish with cilantro. Drink the leftover tiger\'s milk as a shooter.'
    ]
  },
  {
    id: 6,
    title: 'Mushroom Risotto',
    tag: 'Rice',
    category: 'vegetarian',
    time: '45 min',
    serves: '4',
    level: 'medium',
    desc: 'Carnaroli rice coaxed into a flowing, unctuous wave. Porcini and cremini mushrooms for layered earthiness. The mantecatura is everything.',
    img: 'src/shutterstock_2674969621.jpg',
    ingredients: [
      '320g Carnaroli rice',
      '200g mixed mushrooms, sliced',
      '30g dried porcini, rehydrated',
      '1.2L warm mushroom or vegetable stock',
      '1 shallot + 2 garlic cloves',
      '150ml dry white wine',
      '60g Parmigiano, grated',
      '40g cold butter, cubed'
    ],
    method: [
      'Sauté shallot and garlic in olive oil until translucent, 4 minutes.',
      'Add mushrooms and cook until golden and dry. Remove and reserve.',
      'Toast rice in same pan 2 minutes until translucent at edges.',
      'Deglaze with wine. Stir until absorbed.',
      'Add warm stock one ladle at a time, stirring continuously.',
      'After 18 minutes, fold in mushrooms. Remove from heat.',
      'Mantecatura: beat in cold butter and Parmigiano vigorously.',
      'Rest 90 seconds covered. Serve as a flowing wave, not a mound.'
    ]
  },
  {
    id: 7,
    title: 'Chicken Tagine',
    tag: 'Moroccan',
    category: 'savory',
    time: '1.5 hrs',
    serves: '6',
    level: 'medium',
    desc: 'Preserved lemon, olives, and a bouquet of warm spices slow-braised with chicken until the sauce becomes a complex, sweet-savoury reduction.',
    img: 'src/shutterstock_2398594203.jpg',
    ingredients: [
      '1 whole chicken, jointed into 8 pieces',
      '2 preserved lemons, quartered',
      '150g green olives',
      '2 tsp ras el hanout',
      '1 tsp turmeric, 1 tsp cumin',
      '1 large onion, grated',
      '4 garlic cloves, minced',
      'Cilantro and parsley to finish'
    ],
    method: [
      'Marinate chicken in spices, garlic, onion, and olive oil overnight.',
      'Brown chicken pieces in batches in a tagine or Dutch oven.',
      'Layer onion mixture and 300ml water over browned chicken.',
      'Add preserved lemon and olives. Cover and braise on low heat.',
      'Cook 1 hour until chicken is falling-tender and sauce is reduced.',
      'Adjust seasoning. Finish with masses of fresh herbs.',
      'Serve with couscous or warm bread to absorb the sauce.'
    ]
  },
  {
    id: 8,
    title: 'Crème Brûlée',
    tag: 'Dessert',
    category: 'sweet',
    time: '3 hrs',
    serves: '6',
    level: 'medium',
    desc: 'The crack of the caramel. A trembling vanilla custard beneath an amber glass shell. One of the definitive pleasures of the classical kitchen.',
    img: 'src/pexels-vladimir-sladek-127740023-10165701.jpg',
    ingredients: [
      '500ml heavy cream',
      '1 vanilla bean, split and scraped',
      '5 large egg yolks',
      '100g caster sugar',
      'Extra caster sugar for brûléeing'
    ],
    method: [
      'Infuse cream with vanilla over low heat. Do not boil. Rest 30 minutes.',
      'Whisk yolks and sugar until pale — not frothy.',
      'Temper cream slowly into yolks. Strain through fine sieve.',
      'Pour into ramekins. Bake in bain-marie at 150°C for 35–40 minutes.',
      'Custard should barely set — a gentle wobble at the center is correct.',
      'Chill completely, at least 4 hours.',
      'Dust with thin, even layer of sugar. Torch in concentric circles to amber glass.'
    ]
  },
  {
    id: 9,
    title: 'Bouillabaisse',
    tag: 'Seafood Stew',
    category: 'seafood',
    time: '2 hrs',
    serves: '8',
    level: 'hard',
    desc: 'Marseille\'s iconic fisherman\'s stew. A saffron-scented broth of rotating catch served with rouille and grilled bread. Theatre on a table.',
    img: 'src/shutterstock_1220701861.jpg',
    ingredients: [
      '1.5kg mixed fish (monkfish, sea bass, gurnard)',
      '500g mussels and clams',
      '400g ripe tomatoes, crushed',
      'Large pinch saffron',
      '1 fennel bulb, sliced',
      '1 leek, 1 onion, 4 garlic cloves',
      'Fish stock, Pernod',
      'Rouille and grilled bread to serve'
    ],
    method: [
      'Build a soffritto of fennel, leek, onion, and garlic in olive oil.',
      'Add tomatoes and cook until reduced and jammy.',
      'Bloom saffron in a splash of warm water. Add to pot.',
      'Pour in fish stock and Pernod. Simmer 20 minutes.',
      'Add firmest fish first, then more delicate pieces.',
      'Add shellfish last — cook until just opened.',
      'Ladle into wide bowls. Float croutes spread with rouille on the broth.'
    ]
  },
  {
    id: 10,
    title: 'Tiramisu',
    tag: 'Dessert',
    category: 'sweet',
    time: '30 min + chill',
    serves: '8',
    level: 'easy',
    desc: 'The Italian classic whose name means "pick me up." Mascarpone, espresso, and Savoiardi biscuits layered into a dessert that improves with patience.',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    ingredients: [
      '500g mascarpone, room temperature',
      '4 large eggs, separated',
      '120g icing sugar',
      '250ml strong espresso, cooled',
      '2 tbsp Marsala wine (or rum)',
      '24 Savoiardi ladyfinger biscuits',
      'Cocoa powder for dusting'
    ],
    method: [
      'Whisk yolks with sugar until thick, pale, and ribboned.',
      'Fold in mascarpone until just combined — do not overwork.',
      'Whisk whites to stiff peaks. Fold gently into mascarpone base.',
      'Combine espresso and Marsala. Dip each biscuit briefly — not soaking.',
      'Layer biscuits in dish. Spread half the cream.',
      'Repeat biscuit and cream layers. Smooth surface.',
      'Cover and refrigerate minimum 6 hours, ideally overnight.',
      'Dust generously with cocoa just before serving.'
    ]
  },
  {
    id: 11,
    title: 'Paella Valenciana',
    tag: 'Rice',
    category: 'savory',
    time: '1 hr',
    serves: '6',
    level: 'hard',
    desc: 'Spain\'s greatest rice dish. Bomba rice absorbing a saffron-scented stock over fire until the bottom forms the prized socarrat crust.',
    img: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80',
    ingredients: [
      '500g Bomba or Calasparra rice',
      '300g chicken thighs, bone-in',
      '200g rabbit pieces',
      '200g green beans and butter beans',
      'Large pinch saffron threads',
      '400g tomato, grated',
      '1.5L chicken stock, warm',
      'Smoked paprika, rosemary'
    ],
    method: [
      'Render chicken and rabbit in olive oil until golden. Remove.',
      'Fry green beans until blistered. Add tomato and cook to paste.',
      'Add paprika off heat. Pour in warm stock. Add saffron.',
      'Return meat. Bring to vigorous boil.',
      'Add rice spreading in an even layer — do not stir again.',
      'Cook on high 8 minutes, then reduce to medium-low 10 more.',
      'Raise heat final 2 minutes to form socarrat. Rest covered 5 minutes.'
    ]
  },
  {
    id: 12,
    title: 'Lobster Bisque',
    tag: 'Seafood',
    category: 'seafood',
    time: '1.5 hrs',
    serves: '4',
    level: 'hard',
    desc: 'A velvet-smooth, coral-hued soup of roasted lobster shells, cognac, and cream. The pinnacle of classical French seafood cookery.',
    img: 'src/shutterstock_535236646.jpg',
    ingredients: [
      '2 whole lobsters (or 500g shells)',
      '200ml cognac or brandy',
      '400ml double cream',
      '1 can crushed tomatoes',
      '1 carrot, 2 celery stalks, 1 onion',
      'Tarragon, bay leaf, thyme',
      '1L fish or shellfish stock',
      'Cayenne pepper, white pepper'
    ],
    method: [
      'Roast lobster shells in oven with olive oil at 220°C until red and fragrant.',
      'Build mirepoix in a heavy pan. Cook until soft.',
      'Add shells. Flambé with cognac until flames subside.',
      'Add tomatoes, herbs, and stock. Simmer 45 minutes.',
      'Strain through fine sieve, pressing to extract all liquid.',
      'Return to heat, add cream, and reduce until velvety.',
      'Season with cayenne. Serve with tarragon cream and lobster meat.'
    ]
  },
  {
    id: 13,
    title: 'Shakshuka',
    tag: 'Eggs',
    category: 'vegetarian',
    time: '30 min',
    serves: '4',
    level: 'easy',
    desc: 'Eggs poached in a spiced, smoky tomato and pepper sauce. A dish that works at all hours with equal conviction.',
    img: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80',
    ingredients: [
      '6 large eggs',
      '2 cans crushed tomatoes',
      '2 red peppers, diced',
      '1 onion, diced',
      '4 garlic cloves, minced',
      '2 tsp cumin, 1 tsp smoked paprika',
      '½ tsp chili flakes, salt',
      'Feta, fresh herbs, flatbread to serve'
    ],
    method: [
      'Sauté onion and peppers in olive oil until soft and slightly caramelised.',
      'Add garlic and spices. Cook 1 minute until fragrant.',
      'Add tomatoes. Season generously. Simmer 15 minutes to deepen.',
      'Create wells in sauce with the back of a spoon.',
      'Crack eggs into wells. Cover and cook over medium-low.',
      'Cook to desired doneness — yolks should remain slightly runny.',
      'Crumble feta over top. Serve directly from pan with warm flatbread.'
    ]
  },
  {
    id: 14,
    title: 'Duck Confit',
    tag: 'French',
    category: 'savory',
    time: '24 hrs',
    serves: '4',
    level: 'hard',
    desc: 'Legs cured then slow-cooked submerged in their own fat until impossibly tender. Finished skin-side down to a shattering lacquered crisp.',
    img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80',
    ingredients: [
      '4 duck legs',
      '1 tbsp fleur de sel',
      '4 garlic cloves, crushed',
      '2 bay leaves, thyme sprigs',
      '1 tsp black pepper, crushed',
      'Duck fat to cover (about 1kg)',
      '500g duck fat for confit'
    ],
    method: [
      'Cure duck legs with salt, garlic, herbs, and pepper overnight.',
      'Rinse and pat dry. Submerge completely in melted duck fat.',
      'Cook in 85°C oven for 8–10 hours until tender but not falling apart.',
      'Cool in fat. Store refrigerated for up to a month.',
      'To serve: remove from fat, scrape clean.',
      'Place skin-side down in cold oven-proof pan. Heat to render fat.',
      'Finish at 220°C until skin crackles. Rest 5 minutes.'
    ]
  },
  {
    id: 15,
    title: 'Tarte Tatin',
    tag: 'Dessert',
    category: 'sweet',
    time: '1 hr',
    serves: '6',
    level: 'medium',
    desc: 'The upside-down apple tart discovered by accident and perfected by French pastry. Caramelised apples on a butter-crisp pastry.',
    img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80',
    ingredients: [
      '6 Golden Delicious or Cox apples',
      '150g unsalted butter, cubed',
      '200g caster sugar',
      '1 sheet all-butter puff pastry',
      '1 vanilla bean',
      'Crème fraîche to serve'
    ],
    method: [
      'Peel, quarter, and core apples. Dry on paper towel.',
      'Melt butter and sugar in ovenproof 26cm pan to dark amber caramel.',
      'Remove from heat. Pack apples tightly, curved side down.',
      'Cook on hob 15 minutes until apples begin to soften.',
      'Drape pastry over, tucking edges down into the pan.',
      'Bake at 200°C for 25 minutes until pastry is golden.',
      'Rest 5 minutes only. Invert decisively onto a plate. Serve warm.'
    ]
  },
  {
    id: 16,
    title: 'Bún Bò Huế',
    tag: 'Vietnamese',
    category: 'savory',
    time: '3 hrs',
    serves: '6',
    level: 'hard',
    desc: 'The spicy, lemongrass-charged cousin of pho from Hue, Vietnam. A complex pork and beef broth with thick rice noodles and shrimp paste depth.',
    img: 'src/shutterstock_2345099837.jpg',
    ingredients: [
      '500g beef brisket, 500g pork hock',
      '2 lemongrass stalks, bruised',
      '2 tbsp shrimp paste (mắm ruốc)',
      '1 tbsp chili oil',
      '500g thick round rice noodles',
      'Fish sauce, sugar, salt',
      'Bean sprouts, banana blossom, herbs'
    ],
    method: [
      'Blanch meats in boiling water, discard water. Cover with fresh cold water.',
      'Add lemongrass, shallots, and salt. Bring to boil, skim, reduce to simmer.',
      'Cook 2 hours until meats are just tender. Remove and slice.',
      'Dissolve shrimp paste in a little warm broth. Strain and add to stock.',
      'Season broth with fish sauce, sugar. Finish with chili oil.',
      'Cook noodles. Divide into bowls with sliced meat.',
      'Ladle over boiling broth. Serve with herbs and lime.'
    ]
  },
  {
    id: 17,
    title: 'Sourdough Bread',
    tag: 'Baking',
    category: 'vegetarian',
    time: '24 hrs',
    serves: '1 loaf',
    level: 'hard',
    desc: 'A living culture of flour and water transformed into an open-crumb loaf with a shattering crust. Patience is the primary ingredient.',
    img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
    ingredients: [
      '450g strong white bread flour',
      '50g whole wheat flour',
      '100g active starter (100% hydration)',
      '375g water (76% hydration)',
      '10g fine sea salt'
    ],
    method: [
      'Mix flour and 325g water. Autolyse 1 hour.',
      'Add starter and remaining water. Incorporate fully.',
      'Add salt. Develop gluten through stretch-and-fold every 30 min × 4.',
      'Bulk ferment at room temp 4–5 hrs until 75% risen.',
      'Pre-shape and bench rest 30 minutes. Final shape tightly.',
      'Proof overnight in banneton in refrigerator 8–16 hours.',
      'Bake in Dutch oven: 250°C lid on 20 min, lid off 20 min.'
    ]
  },
  {
    id: 18,
    title: 'Mango Sticky Rice',
    tag: 'Dessert',
    category: 'sweet',
    time: '40 min',
    serves: '4',
    level: 'easy',
    desc: 'Thailand\'s most beloved street dessert. Sweet glutinous rice saturated with salted coconut cream alongside ripe, fragrant Ataulfo mango.',
    img: 'src/maira-salazar-igMApccu144-unsplash.jpg',
    ingredients: [
      '300g glutinous (sticky) rice',
      '400ml coconut cream',
      '60g palm sugar or brown sugar',
      '½ tsp fine sea salt',
      '2 ripe mangoes (Ataulfo or Nam Dok Mai)',
      'Toasted sesame seeds, coconut cream drizzle'
    ],
    method: [
      'Soak glutinous rice in cold water overnight or minimum 4 hours.',
      'Steam rice over simmering water 25–30 minutes until tender and translucent.',
      'Warm coconut cream with sugar and salt until dissolved.',
      'Pour two-thirds of coconut sauce over hot rice. Stir to absorb. Rest 20 min.',
      'Slice mangoes cleanly from stone. Fan on plate.',
      'Mound warm rice beside mango.',
      'Drizzle reserved coconut cream over. Finish with sesame seeds.'
    ]
  },
  {
    id: 19,
    title: 'Seared Scallops',
    tag: 'Seafood',
    category: 'seafood',
    time: '20 min',
    serves: '4',
    level: 'medium',
    desc: 'Dry sea scallops developed into a mahogany sear. Pea purée and bacon provide sweetness and salt. Precision over a screaming hot pan.',
    img: 'src/shutterstock_2267395603.jpg',
    ingredients: [
      '12 large dry sea scallops',
      '400g frozen peas, thawed',
      '6 slices smoked bacon or pancetta',
      '2 tbsp unsalted butter',
      '1 shallot, minced',
      'Mint, lemon, crème fraîche',
      'Fleur de sel, white pepper'
    ],
    method: [
      'Purée peas with shallot, butter, and mint. Season. Keep warm.',
      'Crisp bacon strips in a dry pan until lacquered. Reserve on paper.',
      'Pat scallops bone-dry with paper towels. Season one side only.',
      'Heat cast-iron pan until smoking. Add neutral oil.',
      'Place scallops seasoned-side down. Do not move for 90 seconds.',
      'Baste with butter. Flip. 45 more seconds. Scallop should release gold crust.',
      'Quenelle pea purée on plate. Place three scallops. Bacon. Lemon. Serve.'
    ]
  },
  {
    id: 20,
    title: 'Lemon Tart',
    tag: 'Tart',
    category: 'sweet',
    time: '2 hrs',
    serves: '8',
    level: 'medium',
    desc: 'A sharply acidic, silky lemon curd set in a shatteringly thin pâte sablée. The balance between sweet and sour is the entire point.',
    img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
    ingredients: [
      '200g plain flour',
      '100g cold butter, cubed',
      '50g icing sugar, 1 egg yolk',
      '4 whole eggs + 2 yolks',
      '180ml fresh lemon juice (5–6 lemons)',
      'Zest of 3 lemons',
      '200g caster sugar',
      '120g cold butter, cubed (curd)'
    ],
    method: [
      'Make pâte sablée: rub butter into flour and icing sugar until sandy.',
      'Add yolk and 1–2 tbsp cold water. Press together. Chill 1 hour.',
      'Roll thin and blind-bake at 170°C until golden and dry.',
      'Whisk eggs, sugar, lemon juice, and zest in a saucepan.',
      'Cook over medium heat, stirring constantly until 82°C / thickened.',
      'Off heat, blend in cold butter cubes. Strain through fine sieve.',
      'Pour into cool tart case. Set at room temp then chill minimum 3 hours.'
    ]
  }
];

/* ── State ── */
let activeFilter = 'all';
let activeSearch = '';
let currentRecipeId = null;

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initReveal();
  renderGrid(RECIPES);
  initFilters();
  initSearch();
  initModal();
  initKeyboard();
  initContactLink();
});

/* ── Contact Navigation ── */
function initContactLink() {
  const contactLink = document.querySelector('.nav-contact-link');
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.querySelector('#contact, footer');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ── Cursor ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    trailX += (e.clientX - trailX) * 0.12;
    trailY += (e.clientY - trailY) * 0.12;
    trail.style.left = trailX + 'px';
    trail.style.top  = trailY + 'px';
  });

  function animateTrail() {
    trail.style.left = trailX + 'px';
    trail.style.top  = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  document.querySelectorAll('button, a, .recipe-card, input').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

/* ── Scroll Reveal ── */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

/* ── Render Grid ── */
function renderGrid(recipes) {
  const grid = document.getElementById('recipeGrid');
  const filtered = filterRecipes(recipes);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No recipes found. Try a different filter or search.</div>';
    return;
  }

  grid.innerHTML = filtered.map(r => buildCard(r)).join('');

  // Attach hover cursor update for new cards
  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mouseenter', () =>
      document.getElementById('cursor').classList.add('hovering'));
    card.addEventListener('mouseleave', () =>
      document.getElementById('cursor').classList.remove('hovering'));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `Recipe: ${card.dataset.title}. Hover to flip for details.`);
  });

  // Attach view buttons
  grid.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.closest('.recipe-card').dataset.id);
      openModal(id);
    });
  });

  // Staggered reveal
  grid.querySelectorAll('.recipe-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  });
}

function buildCard(r) {
  // Determine difficulty class based on value
  let levelClass = '';
  if (r.level.toLowerCase() === 'medium') {
    levelClass = 'difficulty-medium';
  } else if (r.level.toLowerCase() === 'hard' || r.level.toLowerCase() === 'expert') {
    levelClass = 'difficulty-hard';
  } else {
    levelClass = 'difficulty-easy';
  }

  const ingrPreview = r.ingredients.slice(0, 5);
  return `
    <div class="recipe-card" data-id="${r.id}" data-title="${escHtml(r.title)}" data-category="${r.category}">
      <div class="recipe-card-inner">
        <div class="card-front">
          <div class="card-number">${String(r.id).padStart(2,'0')}</div>
          <div class="card-level-dot ${levelClass}" title="${r.level}"></div>
          <img
            class="card-front-img"
            src="${r.img}"
            alt="${escHtml(r.title)}"
            loading="lazy"
            width="800" height="533"
          >
          <div class="card-front-body">
            <div class="card-tag">${escHtml(r.tag)}</div>
            <div class="card-title">${escHtml(r.title)}</div>
            <div class="card-meta">
              <span>${r.time}</span>
              <span>Serves ${r.serves}</span>
            </div>
          </div>
          <div class="card-flip-hint">Hover to flip ↻</div>
        </div>
        <div class="card-back" aria-hidden="true">
          <div class="back-header">
            <div class="back-title">${escHtml(r.title)}</div>
            <div class="back-time-row">
              <span><strong>${r.time}</strong></span>
              <span>Serves <strong>${r.serves}</strong></span>
              <span class="${levelClass}"><strong>${r.level.toUpperCase()}</strong></span>
            </div>
          </div>
          <div class="back-ingredients">
            <div class="back-ing-title">Key Ingredients</div>
            <ul class="back-ing-list">
              ${ingrPreview.map(i => `<li>${escHtml(i)}</li>`).join('')}
              ${r.ingredients.length > 5 ? `<li>+${r.ingredients.length - 5} more…</li>` : ''}
            </ul>
          </div>
          <div class="back-cta">
            <button class="btn-view" aria-label="View full recipe for ${escHtml(r.title)}">
              View Full Recipe →
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

/* ── Filters ── */
function initFilters() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      activeFilter = pill.dataset.filter;
      renderGrid(RECIPES); // Renders filtered recipes
    });
  });
}

/* ── Search ── */
function initSearch() {
  const input = document.getElementById('searchInput');
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      activeSearch = input.value.toLowerCase().trim();
      renderGrid(RECIPES);
    }, 200);
  });
}

function filterRecipes(recipes) {
  return recipes.filter(r => {
    const matchCat = activeFilter === 'all' || r.category === activeFilter;
    const matchSearch = activeSearch === '' ||
      r.title.toLowerCase().includes(activeSearch) ||
      r.tag.toLowerCase().includes(activeSearch) ||
      r.ingredients.some(i => i.toLowerCase().includes(activeSearch));
    return matchCat && matchSearch;
  });
}

/* ── Modal ── */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
}

function openModal(id) {
  const r = RECIPES.find(rec => rec.id === id);
  if (!r) return;
  currentRecipeId = id;

  document.getElementById('modalImg').src = r.img;
  document.getElementById('modalImg').alt = r.title;
  document.getElementById('modalImgBadge').textContent = r.tag;
  document.getElementById('modalKicker').textContent = `Recipe No. ${String(r.id).padStart(2,'0')} — ${r.category.toUpperCase()}`;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalDesc').textContent = r.desc;
  document.getElementById('modalTime').textContent = r.time;
  document.getElementById('modalServes').textContent = r.serves;

  // Add the appropriate dynamic class to the modal indicator
  const levelNode = document.getElementById('modalLevel');
  levelNode.textContent = r.level.toUpperCase();
  levelNode.className = 'meta-val';
  if (r.level.toLowerCase() === 'medium') {
    levelNode.classList.add('difficulty-medium');
  } else if (r.level.toLowerCase() === 'hard' || r.level.toLowerCase() === 'expert') {
    levelNode.classList.add('difficulty-hard');
  } else {
    levelNode.classList.add('difficulty-easy');
  }

  document.getElementById('modalIngredients').innerHTML =
    r.ingredients.map(i => `<li>${escHtml(i)}</li>`).join('');
  document.getElementById('modalMethod').innerHTML =
    r.method.map(s => `<li>${escHtml(s)}</li>`).join('');

  const overlay = document.getElementById('modalOverlay');
  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Reset animation
  const panel = document.getElementById('modalPanel');
  panel.style.animation = 'none';
  panel.offsetHeight; // reflow
  panel.style.animation = '';

  // Focus close button for accessibility
  setTimeout(() => document.getElementById('modalClose').focus(), 100);
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
  currentRecipeId = null;
}

/* ── Keyboard navigation ── */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Allow Enter/Space to trigger card view button when card is focused
  document.getElementById('recipeGrid').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.recipe-card');
      if (card) {
        e.preventDefault();
        const id = parseInt(card.dataset.id);
        openModal(id);
      }
    }
  });
}

/* ── Helpers ── */
function escHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}