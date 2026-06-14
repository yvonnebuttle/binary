// === Binary — canonical category taxonomy ===
// NOTE: index.html does NOT import this file. It is the single source of truth
// for the `binary-keeper` Cloudflare Worker (the OpenAI classifier). The old
// version of this file used a different, stale taxonomy ("Food & Dining",
// "Dates", "Beverages") that did not match the app — this version matches the
// ALL_CATEGORIES list the app actually uses.
//
// Keep this list in sync with ALL_CATEGORIES in index.html. The keywords are
// only seed hints for the model / a fallback; the model should still reason.

export const CATEGORIES = [
  'Food', 'Coffee', 'Pints', 'Wine', 'Cheese', 'People', 'Activities',
  'Culture', 'Music', 'Things', 'Places', 'Books', 'Movies', 'Ideas', 'Other'
];

export const categories = {
  'Food': ['restaurant','meal','dinner','lunch','breakfast','brunch','food','dish','ate','pizza',
    'burger','sushi','pasta','salad','sandwich','soup','steak','chicken','fish','seafood','curry',
    'ramen','taco','noodles','roast','lasagne','dumplings','takeout','delivery','bakery','deli',
    'thai','indian','chinese','japanese','mexican','italian','french','bbq','grill','dessert','kitchen'],
  'Coffee': ['coffee','cafe','espresso','latte','cappuccino','americano','mocha','macchiato','cortado',
    'flat white','cold brew','iced coffee','barista','brew','tea','chai','matcha','smoothie','juice'],
  'Pints': ['pint','pints','pub','bar','beer','guinness','stout','ale','lager','cider','whiskey','vodka',
    'gin','rum','tequila','cocktail','martini','mojito','margarita','negroni','brewery','tavern','drinks'],
  'Wine': ['wine','red wine','white wine','rose','champagne','prosecco','sparkling','merlot','cabernet',
    'pinot','chardonnay','sauvignon','riesling','rioja','malbec','shiraz','natural wine','winery'],
  'Cheese': ['cheese','cheddar','brie','gouda','mozzarella','parmesan','feta','blue cheese','camembert',
    'gruyere','manchego','halloumi','burrata','ricotta','goat cheese','cashel','gubbeen','durrus'],
  'People': ['friend','met','colleague','coworker','boss','neighbour','acquaintance','conversation',
    'chat','party','gathering','meetup','hangout','catchup','reunion','networking'],
  'Activities': ['tennis','game','match','workout','gym','run','running','cycling','swimming','yoga',
    'pilates','hike','hiking','climbing','class','date','dating','wedding','anniversary','hobby',
    'painting','knitting','baking','gardening','gaming','pottery','kayaking'],
  'Culture': ['cinema','show','theatre','play','musical','comedy','standup','museum','gallery','exhibition',
    'gig','concert','festival','opera','ballet','podcast','anime','manga','performance'],
  'Music': ['music','song','album','playlist','spotify','band','rock','hip hop','rap','jazz','classical',
    'indie','pop','dj','vinyl'],
  'Things': ['bought','purchased','shopping','store','shop','product','clothes','shoes','sneakers',
    'gadget','tech','phone','laptop','furniture','appliance','brand'],
  'Places': ['visited','trip','travel','vacation','holiday','hotel','airbnb','resort','beach','mountain',
    'park','island','lake','castle','cathedral','landmark','monument','city','sightseeing'],
  'Books': ['read','reading','novel','memoir','biography','poetry','book','author','fiction','nonfiction'],
  'Movies': ['movie','film','documentary','series','episode','netflix','disney','watched','cinema'],
  'Ideas': ['article','essay','blog','newsletter','substack','opinion','philosophy','politics','theory',
    'argument','debate','economics','ethics','perspective','idea'],
};
