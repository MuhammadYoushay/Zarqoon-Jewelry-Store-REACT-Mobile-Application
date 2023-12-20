const mongoose = require("mongoose");
const Product = require("../models/products"); // Import your Product model

mongoose.connect("mongodb+srv://youshay:34145207-Home@cluster0.f2pzn1r.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample product data
const sampleProducts = [  
  {
  
  "name": "Diamond Solitaire Necklace",
  
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6hQCRXWk0i1Z5H3ysh01YTFJPis1dGef2A&usqp=CAU",
  
  "mrp": 599,
  
  "price": 479,

  "category": "Necklaces",
  
  "disc_perc": 20,
  
  "discount": 120,
  
  "description": "A classic solitaire diamond pendant necklace, perfect for everyday wear.",
  "new": false,
  "trending":false
  
  },
  {
  
  "name": "Pearl Choker Necklace",
  
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejjz2rLDb8kAY9nSUBLsUupW2m2atBo8hZg&usqp=CAU",
  
  "mrp": 299,
  
  "price": 239,

  "category": "Necklaces",
  
  "disc_perc": 20,
  
  "discount": 60,
  
  "description": "A beautiful pearl choker necklace with a vintage-inspired design.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Gold Chain Necklace",
  
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ7UPN_Rwi45q-0srRyndP7GojbcRRANOiA&usqp=CAU",
  
  "mrp": 399,
  
  "price": 319,

  "category": "Necklaces",
  
  "disc_perc": 20,
  
  "discount": 80,
  
  "description": "A classic 14K gold chain necklace with a lobster clasp closure.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Emerald Pendant Necklace",
  
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK2UWwcd9JheyMRhr74V4n_2gUxgOGlurXg&usqp=CAU",
  
  "mrp": 799,
  
  "price": 639,

  "category": "Necklaces",
  
  "disc_perc": 20,
  
  "discount": 160,
  
  "description": "A brilliant emerald pendant set in 14K white gold on a delicate chain.",
  "new": false,
  "trending":false
  },
  
  {
  
  "name": "Diamond Tennis Necklace",
  
  "image": "https://images.unsplash.com/photo-1570891836868-673ee4818f81?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwbmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 1999,
  
  "price": 1599,

  "category": "Necklaces",
  
  "disc_perc": 20,
  
  "discount": 400,
  
  "description": "A dazzling diamond tennis necklace with 100 diamonds set in platinum.",
  "new": false,
  "trending":false
  
  },
  {
  
  "name": "Diamond Stud Earrings",
  
  "image": "https://images.unsplash.com/photo-1616121341778-0dd435d03d23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEVhcnJpbmdzfGVufDB8fDB8fHww",
  
  "mrp": 599,
  
  "price": 479,

  "category": "Earrings",
  
  "disc_perc": 20,
  
  "discount": 120,
  
  "description": "Brilliant round diamond stud earrings set in 14K white gold.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Hoop Earrings",
  
  "image": "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 150,
  
  "price": 120,

  "category": "Earrings",
  
  "disc_perc": 20,
  
  "discount": 30,
  
  "description": "Sleek 14K gold hoop earrings for a polished everyday look.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Pearl Drop Earrings",
  
  "image": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 200,
  
  "price": 160,

  "category": "Earrings",
  
  "disc_perc": 20,
  
  "discount": 40,
  
  "description": "Graceful freshwater pearl drop earrings on a 14K gold post.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Ruby Stud Earrings",
  
  "image": "https://images.unsplash.com/photo-1622584940190-0cedd29ebaa8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fEVhcnJpbmdzfGVufDB8fDB8fHww",
  
  "mrp": 799,
  
  "price": 639,

  "category": "Earrings",
  
  "disc_perc": 20,
  
  "discount": 160,
  
  "description": "Exquisite ruby stud earrings set in 14K rose gold.",
  "new": false,
  "trending":true
  
  },
  
  {
  
  "name": "Sapphire Drop Earrings",
  
  "image": "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVhcnJpbmdzfGVufDB8fDB8fHww",
  
  "mrp": 399,
  
  "price": 319,

  "category": "Earrings",
  
  "disc_perc": 20,
  
  "discount": 80,
  
  "description": "Stunning sapphire and diamond drop earrings in platinum.",
  "new": false,
  "trending":true
  
  },
  
  {
  
  "name": "Tennis Bracelet",
  
  "image": "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 1299,
  
  "price": 1039,

  "category": "Bracelets",
  
  "disc_perc": 20,
  
  "discount": 260,
  
  "description": "A dazzling diamond tennis bracelet with a timeless elegant design.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Bangle Bracelet",
  
  "image": "https://plus.unsplash.com/premium_photo-1673285096704-f94a6712c243?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 399,
  
  "price": 319,

  "category": "Bracelets",
  
  "disc_perc": 20,
  
  "discount": 80,
  
  "description": "Sleek and stackable 14K gold bangle bracelet.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Charm Bracelet",
  
  "image": "https://images.unsplash.com/photo-1611235116292-df7f928f3a0f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 350,
  
  "price": 280,

  "category": "Bracelets",
  
  "disc_perc": 20,
  
  "discount": 70,
  
  "description": "Personalized charm bracelet with whimsical charms.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Pearl Bracelet",
  
  "image": "https://images.unsplash.com/photo-1632670549675-952dca613fe6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJyYWNlbGV0fGVufDB8fDB8fHww",
  
  "mrp": 250,
  
  "price": 200,

  "category": "Bracelets",
  
  "disc_perc": 20,
  
  "discount": 50,
  
  "description": "Beautiful pearl bracelet with 14K white gold clasp.",
  "new": false,
  "trending":true
  
  },
  {
  
  "name": "Diamond Solitaire Ring",
  
  "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 1299,
  
  "price": 1039,

  "category": "Rings",
  
  "disc_perc": 20,
  
  "discount": 260,
  
  "description": "A classic diamond solitaire ring set in platinum.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Sapphire Cocktail Ring",
  
  "image": "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 599,
  
  "price": 479,

  "category": "Rings",
  
  "disc_perc": 20,
  
  "discount": 120,
  
  "description": "Stunning sapphire cocktail ring accented with diamonds.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Ruby Ring",
  
  "image": "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpbmd8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 799,
  
  "price": 639,

  "category": "Rings",
  
  "disc_perc": 20,
  
  "discount": 160,
  
  "description": "Vibrant ruby gemstone ring set in 14K rose gold.",
  "new": true,
  "trending":false
  
  },
  
  {
  
  "name": "Pearl Ring",
  
  "image": "https://images.unsplash.com/photo-1481980235850-66e47651e431?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJpbmd8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 299,
  
  "price": 239,

  "category": "Rings",
  
  "disc_perc": 20,
  
  "discount": 60,
  
  "description": "Classic pearl ring with a 14K white gold band.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Emerald Cut Diamond Ring",
  
  "image": "https://images.unsplash.com/photo-1613945407943-59cd755fd69e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJpbmd8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 2499,
  
  "price": 1999,

  "category": "Rings",
  
  "disc_perc": 20,
  
  "discount": 500,
  
  "description": "Breathtaking emerald cut diamond ring set in platinum.",
  "new": false,
  "trending":true
  
  },
  

  {
  
  "name": "Diamond Solitaire Pendant",
  
  "image": "https://images.unsplash.com/photo-1574814073364-e865c9b6a3a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 799,
  
  "price": 639,

  "category": "Pendants",
  
  "disc_perc": 20,
  
  "discount": 160,
  
  "description": "Sparkling round diamond solitaire pendant in 14K white gold.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Ruby Pendant",
  
  "image": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 599,
  
  "price": 479,

  "category": "Pendants",
  
  "disc_perc": 20,
  
  "discount": 120,
  
  "description": "Vibrant ruby gemstone pendant set in 14K rose gold.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Sapphire Pendant",
  
  "image": "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 699,
  
  "price": 559,

  "category": "Pendants",
  
  "disc_perc": 20,
  
  "discount": 140,
  
  "description": "Stunning sapphire pendant on a delicate 14K white gold chain.",
  "new": true,
  "trending":true
  
  },
  
  {
  
  "name": "Pearl Pendant",
  
  "image": "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 299,
  
  "price": 239,

  "category": "Pendants",
  
  "disc_perc": 20,
  
  "discount": 60,
  
  "description": "Lustrous freshwater pearl pendant on a 14K yellow gold chain.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Emerald Pendant",
  
  "image": "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 1299,
  
  "price": 1039,

  "category": "Pendants",
  
  "disc_perc": 20,
  
  "discount": 260,
  
  "description": "Mesmerizing emerald pendant surrounded by diamonds.",
  "new": false,
  "trending":false  
  },
  
  {
  
  "name": "Diamond Bangle",
  
  "image": "https://plus.unsplash.com/premium_photo-1681276170281-1caea3d5f670?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZ2xlc3xlbnwwfHwwfHx8MA%3D%3D",
  
  "mrp": 1299,
  
  "price": 1039,

  "category": "Bangles",
  
  "disc_perc": 20,
  
  "discount": 260,
  
  "description": "Slim diamond tennis bracelet bangle in 14K white gold.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Gemstone Bangle",
  
  "image": "https://images.unsplash.com/photo-1617191880362-aac615de3c26?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhbmdsZXN8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 399,
  
  "price": 319,

  "category": "Bangles",
  
  "disc_perc": 20,
  
  "discount": 80,
  
  "description": "Colorful gemstone bangle with carved details.",
  "new": false,
  "trending":false
  
  },
  
  {
  
  "name": "Gold Bangle",
  
  "image": "https://images.unsplash.com/photo-1606293926249-ed22e446d476?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmdsZXN8ZW58MHx8MHx8fDA%3D",
  
  "mrp": 599,
  
  "price": 479,

  "category": "Bangles",
  
  "disc_perc": 20,
  
  "discount": 120,
  
  "description": "Polished 14K yellow gold engraved bangle.",
  "new": true,
  "trending":false
  
  },
];
  

// Insert sample products into the database
Product.insertMany(sampleProducts)
  .then((products) => {
    console.log("Sample products inserted successfully:", products);
  })
  .catch((err) => {
    console.error("Error inserting sample products:", err);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the database connection after inserting data
  });
