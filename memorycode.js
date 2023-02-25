let tiles = [];
let selectedTiles = [];
let score = 0;

function startGame() {
  // Reset game
  tiles = [];
  selectedTiles = [];
  score = 0;
  document.getElementById("game-container").innerHTML = "";
  
  // Create tiles
  for (let i = 1; i <= 8; i++) {
    tiles.push(i);
    tiles.push(i);
  }
  shuffleTiles(tiles);
  
  // Display tiles
  for (let i = 0; i < tiles.length; i++) {
    let tile = document.createElement("div");
    tile.classList.add("memory-tile");
    tile.setAttribute("data-tile", tiles[i]);
    tile.addEventListener("click", selectTile);
    document.getElementById("game-container").appendChild(tile);
  }
}

function shuffleTiles(tiles) {
  for (let i = tiles.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
}

function selectTile() {
  let tile = this;
  if (tile.classList.contains("selected")) {
    return;
  }
  tile.classList.add("selected");
  selectedTiles.push(tile);
  if (selectedTiles.length == 2) {
    let tile1 = selectedTiles[0];
    let tile2 = selectedTiles[1];
    if (tile1.getAttribute("data-tile") == tile2.getAttribute("data-tile")) {
      score++;
      tile1.classList.add("matched");
      tile2.classList.add("matched");
      if (score == 8) {
        alert("Congratulations! You win!");
      }
    } else {
      setTimeout(function() {
        tile1.classList.remove("selected");
        tile2.classList.remove("selected");
      }, 500);
    }
    selectedTiles = [];
  }
}
