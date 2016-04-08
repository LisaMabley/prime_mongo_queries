// Find bios that have awards: WORKS
db.bios.find({"awards": {$exists:true , $ne: {$size: 0} }}).pretty();

// Find bios that don't have awards: WORKS
db.bios.find({"awards": {$exists:false }}).pretty();

// Find bios that have contributed to OOP or UNIX: WORKS
db.bios.find({$or: [ { "contribs": "OOP"}, { "contribs": "UNIX"} ]}).pretty();

// Find bios with "Turing Award" awards: WORKS
db.bios.find( {"awards.award": { $in: ["Turing Award"] } } ).pretty();
