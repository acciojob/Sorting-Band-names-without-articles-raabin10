// Suppose an array that contains a list of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// Function to remove articles ('a', 'an', 'the') from a band name
function removeArticles(name) {
  // Regular expression to match articles at the beginning of the string
  const articleRegex = /^(a|an|the)\s+/i;
  return name.replace(articleRegex, ''); // Replace matched articles with an empty string
}

// Sort the band names in lexicographic order (excluding articles)
   touristSpotsNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with id 'band'
const touristSpots = document.getElementById('tourist');

// Create li elements and append them to the ul element
for (let i = 0; i < touristSpots.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent =  touristSpotsNames[i];
 touristSpots.appendChild(listItem);
}
