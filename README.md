# Dataviz-p5js

## Sketches
- [01 - sketches/01-Sans-boucle](sketches/01-Sans-boucle)
  - Pas de boucle (!).
  - Utilisation de la propriété `height` du canvas.
- [02a - sketches/02-Array-a](sketches/02-Array-a)
  - Stockage des données dans un `Array` (tableau).
  - Boucle `for(let i = 0; i < n; i++){ }` pour parcourir le tableau.
  - Fonction `map()` pour calculer la position x des `rect(x,y,largeur,hauteur)`.
    - La fonction `map()` en détail : [00 - Functions/map](sketches/00-Functions/map)
    - Une horloge avec `map()` : [00 - Functions/clock](sketches/00-Functions/clock)
  - `push()` et `pop()` pour isoler les transformations `rotate(radians)` et `translate(x,y)` (sinon tout le canvas est transformé).
- [02b - sketches/02-Array-b](sketches/02-Array-b)
  - Boucle `for` pour calculer le total et positionner les nouveaux rectangles du diagramme.
- [03a - sketches/03-loadCSV-a](sketches/03-loadCSV-a)
  - Données stockées dans un fichier .csv externe (données séparées par des virgules)
  - Chargement des données dans une fonction globale `preload()` avec `loadTable()`
  - Propriétés et fonctions de l'objet table : `table.columns` (header des colonnes) ; `getRowCount()` (renvoie le nombre de lignes) ; `getColumn()` (stocke les valeurs d'une colonne dans un tableau).
  - Variable `t` qui augmente de 1 tant qu'elle est plus petite que 40. Condition `if(){ }`.
  - Fonction `text(variable, x, y)`;
- [03b - sketches/03-loadCSV-b](sketches/03-loadCSV-b)
  - Fonction `translate(x,y)` pour décaler le canvas en fonction de la position de la souris `mouseX`.
- [03c - sketches/03-loadCSV-c](sketches/03-loadCSV-c)
  - Tracé vectoriel de la ligne avec `beginShape()` et `endShape()`, et la fonction `curveVertex()`.
  - Modulo `%` pour savoir si un nombre est un multiple d'un autre nombre. Pour savoir si un nombre est un multiple de 50, on évalue le reste de la division du nombre par 50 : `if(h%50==0)`. Si il reste 0, ce nombre est bien un multiple de 50;
