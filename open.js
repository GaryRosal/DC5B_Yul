
  const csv = require('csv-parser');
  const fs = require('fs');
  let count = 0;

fs.createReadStream('exercice.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    count+2;
    if (count === 20) {
      process.exit();
    }
  })
  .on('end', () => {
    console.log('CSV file OK');
  });

const data = [
  { name: 'John Doe', age: 40, city: 'New York' },  // Tableau d'objets représentant les données à écrire dans le fichier .csv
  { name: 'Jane Doe', age: 35, city: 'London' },
  { name: 'Jim Brown', age: 45, city: 'Paris' }
];

let csvContent = 'name,age,city\n';  // Initialise la chaîne de caractères qui sera écrite dans le fichier .csv

data.forEach(function(row) {  // Boucle à travers chaque objet dans le tableau 'data'
  csvContent += `${row.name},${row.age},${row.city}\n`;  // Concatène les propriétés de l'objet courant au format .csv à la chaîne 'csvContent'
});

fs.writeFile('file.csv', csvContent, function(err) {  // Utilise la méthode 'fs.writeFile()' pour écrire la chaîne 'csvContent' dans un fichier nommé 'file.csv'
  if (err) throw err;  // Si une erreur se produit, elle est levée
  console.log('The file has been saved!');  // Affiche un message indiquant que le fichier a été enregistré
});