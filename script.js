// Suppose an array that contains a list of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// Function to remove articles ('a', 'an', 'the') from a band name
function removeArticles(name) {
  // Regular expression to match articles at the beginning of the string
  const articleRegex = /^(a|an|the)\s+/i;
  return name.replace(articleRegex, '').trim(); // Replace matched articles with an empty string
}

// Sort the band names in lexicographic order (excluding articles)
   touristSpots.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

const ul = document.createElement('ul');
ul.id = 'band';

// Iterate through the sorted band names and create li elements
touristSpots.forEach((touristSpot) => {
  const li = document.createElement('li');
  li.textContent = touristSpot;
  ul.appendChild(li);
});

// Add the ul to the document's body
document.body.appendChild(ul);