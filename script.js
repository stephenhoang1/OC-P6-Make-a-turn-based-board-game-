// ***  PLAYER 1 ***z
const Player1 = {
  // instead of identifying by name, use an ID to make it easier
  id: 1,
  // to be displayed on the panel
  name: "Chef Mathilde",
  avatar:
    "<img src='styles/img/chef_whitehat.jpg' class='player1' alt='Chef Mathilde'>",
  health: 100,
  // default weapon
  weapon: {
    name: "Knife and Fork",
    image:
      '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
    damage: 10,
    oldWeapon: ""
  },
  //shield is not up yet.
  shield: false,
  // position is updated at the start of every game
  position: {
    col: 0,
    row: 0
  }
};
// ***  PLAYER 2 ***
const Player2 = {
  id: 2,
  name: "Chef Jean",
  avatar:
    "<img src='styles/img/chef_blackhat.jpg' class='player2' alt='Chef Jean'>",
  health: 100,
  weapon: {
    name: "Knife and Fork",
    image:
      '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
    damage: 10,
    oldWeapon: ""
  },
  shield: false,
  position: {
    col: 0,
    row: 0
  }
};
// ***  WEAPONS ***
const Weapons = [
  {
    name: "Ladle",
    image:
      '<img src="styles/img/ladle.png" alt="Ladle" class="weapon" id="weaponLadle">',
    damage: 20
  },
  {
    name: "Dough Roller",
    image:
      '<img src="styles/img/dough-roller.png" alt="Dough Roller" class="weapon" id="weaponDoughRoller">',
    damage: 40
  },
  {
    name: "Cooking Pot",
    image:
      '<img src="styles/img/cooking-pot.png" alt="Cooking Pot" class="weapon" id="weaponCookingPot">',
    damage: 60
  },
  {
    name: "Meat Cleaver",
    image:
      '<img src="styles/img/meat-cleaver.png" alt="Meat Cleaver" class="weapon" id="weaponMeatCleaver">',
    damage: 80
  }
];
// ***  OBSTACLE ***
const Obstacle = {
  image:
    '<img src="styles/img/gas_cooker_obstacle.png" alt="obstacle" class="obstacle">'
};

const playerMovement = {
  north: function(player) {
    // set 3 possible north movements as variables
    // player's position - 1 in the row (1 gridSquares north)
    var north_1 = Number(player.position.row) - 1;
    // player's position - 2 in the row (2 gridSquares north)
    var north_2 = Number(player.position.row) - 2;
    // player's position - 1 in the row (3 gridSquares north)
    var north_3 = Number(player.position.row) - 3;

    // if [north_1's row and  player's col] does NOT have a class of 'full',
    // add a class called 'highlight' to that position.
    if (
      !$(`[data-col="${player.position.col}"][data-row="${north_1}"]`).hasClass(
        "full"
      )
    ) {
      $(`[data-col="${player.position.col}"][data-row="${north_1}"]`).addClass(
        "highlight"
      );

      if (
        !$(
          `[data-col="${player.position.col}"][data-row="${north_2}"]`
        ).hasClass("full")
      ) {
        $(
          `[data-col="${player.position.col}"][data-row="${north_2}"]`
        ).addClass("highlight");

        if (
          !$(
            `[data-col="${player.position.col}"][data-row="${north_3}"]`
          ).hasClass("full")
        ) {
          $(
            `[data-col="${player.position.col}"][data-row="${north_3}"]`
          ).addClass("highlight");
        }
      }
    }

    // if [north_2's row and  player's col] does NOT have a class of 'full',
    // and if north sq_1 doesnt have a class called full,
    // add a class called 'highlight' to that position.

    // if [north_3's row and  player's col] does NOT have a class of 'full',
    // add a class called 'highlight' to that position.
  },
  south: function(player) {
    var south_1 = Number(player.position.row) + 1;
    var south_2 = Number(player.position.row) + 2;
    var south_3 = Number(player.position.row) + 3;

    if (
      !$(`[data-col="${player.position.col}"][data-row="${south_1}"]`).hasClass(
        "full"
      )
    ) {
      $(`[data-col="${player.position.col}"][data-row="${south_1}"]`).addClass(
        "highlight"
      );

      if (
        !$(
          `[data-col="${player.position.col}"][data-row="${south_2}"]`
        ).hasClass("full")
      ) {
        $(
          `[data-col="${player.position.col}"][data-row="${south_2}"]`
        ).addClass("highlight");

        if (
          !$(
            `[data-col="${player.position.col}"][data-row="${south_3}"]`
          ).hasClass("full")
        ) {
          $(
            `[data-col="${player.position.col}"][data-row="${south_3}"]`
          ).addClass("highlight");
        }
      }
    }
  },
  east: function(player) {
    var east_1 = Number(player.position.col) + 1;
    var east_2 = Number(player.position.col) + 2;
    var east_3 = Number(player.position.col) + 3;

    if (
      !$(`[data-col="${east_1}"][data-row="${player.position.row}"]`).hasClass(
        "full"
      )
    ) {
      $(`[data-col="${east_1}"][data-row="${player.position.row}"]`).addClass(
        "highlight"
      );

      if (
        !$(
          `[data-col="${east_2}"][data-row="${player.position.row}"]`
        ).hasClass("full")
      ) {
        $(`[data-col="${east_2}"][data-row="${player.position.row}"]`).addClass(
          "highlight"
        );

        if (
          !$(
            `[data-col="${east_3}"][data-row="${player.position.row}"]`
          ).hasClass("full")
        ) {
          $(
            `[data-col="${east_3}"][data-row="${player.position.row}"]`
          ).addClass("highlight");
        }
      }
    }
  },
  west: function(player) {
    var west_1 = Number(player.position.col) - 1;
    var west_2 = Number(player.position.col) - 2;
    var west_3 = Number(player.position.col) - 3;

    if (
      !$(`[data-col="${west_1}"][data-row="${player.position.row}"]`).hasClass(
        "full"
      )
    ) {
      $(`[data-col="${west_1}"][data-row="${player.position.row}"]`).addClass(
        "highlight"
      );

      if (
        !$(
          `[data-col="${west_2}"][data-row="${player.position.row}"]`
        ).hasClass("full")
      ) {
        $(`[data-col="${west_2}"][data-row="${player.position.row}"]`).addClass(
          "highlight"
        );

        if (
          !$(
            `[data-col="${west_3}"][data-row="${player.position.row}"]`
          ).hasClass("full")
        ) {
          $(
            `[data-col="${west_3}"][data-row="${player.position.row}"]`
          ).addClass("highlight");
        }
      }
    }
  },

  // shows possible moves of players by highlighting them.
  // ...by calling the methods in the north, south, east, west instances.
  showMovesPlayer1: function() {
    playerMovement.north(Player1);
    playerMovement.south(Player1);
    playerMovement.west(Player1);
    playerMovement.east(Player1);

    $(".highlight").on("click", function() {
      playerMovement.movePlayer.call(this, Player1);
    });
  },
  showMovesPlayer2: function() {
    playerMovement.north(Player2);
    playerMovement.south(Player2);
    playerMovement.west(Player2);
    playerMovement.east(Player2);

    $(".highlight").on("click", function() {
      playerMovement.movePlayer.call(this, Player2);
    });
  },

  // ON HIGHLIGHT CLICK, MOVE PLAYER/UPDATE WEAPON
  movePlayer: function(player) {
    if ($(this).hasClass("highlight")) {
      // REMOVE OLD PLAYER IMAGE AND LEAVE OLD WEAPON IN PREVIOUS SQUARE
      if (player.id === 1) {
        $(".player1")
          .parent()
          .append(player.weapon.oldWeapon);
        player.weapon.oldWeapon = "";
        $(".player1").remove();
      } else {
        $(".player2")
          .parent()
          .append(player.weapon.oldWeapon);
        player.weapon.oldWeapon = "";
        $(".player2").remove();
      }

      $(
        `[data-col="${player.position.col}"][data-row="${player.position.row}"]`
      ).removeClass("full");

      // PLACE PLAYER IMAGE IN NEW LOCATION + UPDATE CLASS OF "FULL"
      $(this).prepend(player.avatar);
      $(this).addClass("full");

      // IF WEAPON IN GRID, SWAP WEAPONS AND UPDATE PLAYER PANEL
      if (
        $(this)
          .children()
          .is("img.weapon")
      ) {
        player.weapon.oldWeapon = player.weapon.image;
        player.weapon.image = $(this)
          .children(".weapon")
          .prop("outerHTML");
        $("#" + player.type + "WeaponPanel")
          .children("img")
          .remove();
        $("#" + player.type + "WeaponPanel").prepend(player.weapon.image);
        inputUpdate($("#" + player.type + "AttackInput"));
        $("#" + player.type + "AttackInput").html(
          $(this)
            .children(".weapon")
            .attr("data-damage")
        );
        player.weapon.damage = Number(
          $(this)
            .children(".weapon")
            .attr("data-damage")
        );
        $(this)
          .children(".weapon")
          .remove();
      }

      // UPDATE PLAYER POSITION
      player.position.col = this.dataset.col;
      player.position.row = this.dataset.row;

      // REMOVE HIGHLIGHT CLASS, DISABLING "CLICK" LISTENER
      $("#map > div").removeClass("highlight");
      $("#map > div").off("click");

      // MOVE ON TO DETECT BATTLE FUNCTION
      setTimeout(gameTurn.detectBattle, 500);
    }
  }
};

// ***  GAME TURNS ***
const gameTurn = {
  // In the detectTurn object, create a function to check whose turn it is.
  detectTurn: function() {
    // If the current player is player 1
    if (currentPlayer === 1) {
      // remove activePlayer class from player 2.
      $("#player2").removeClass("activePlayer");
      // add the 'activePlayer' class to the player 1 panel (#player1)
      $("#player1").addClass("activePlayer");
      // create a mouseenter event:
      // when you enter '.player1' trigger playerMovement.showMovesPlayer1
      $(".player1")
        .parent()
        .mouseenter(playerMovement.showMovesPlayer1);
      // or if it's player 2, do the same for that player.
    } else {
      $("#player1").removeClass("activePlayer");
      $("#player2").addClass("activePlayer");
      $(".player2")
        .parent()
        .mouseenter(playerMovement.showMovesPlayer2);
    }

    console.log("turn", currentPlayer);

    // finishedMoving = false;
  },

  // CHANGE CURRENT PLAYER VARIABLE
  changeTurn: function() {
    switch (true) {
      case currentPlayer === 1:
        currentPlayer = 2;
        break;
      case currentPlayer === 2:
        currentPlayer = 1;
        break;
    }
    // PROCEED TO START OF TURN CYCLE AGAIN
    setTimeout(gameTurn.detectTurn, 500);
  },

  detectBattle: function() {
    setTimeout(gameTurn.shieldStatus, 700);
  },

  // ASK PLAYER IF THEY WANT TO ENABLE SHIELD
  shieldStatus: function() {
    $("#shieldModal").css("display", "block");
    $(".shieldButton").on("click", function() {
      // IF PLAYER CHOOSES SHIELD UP, UPADTE PLAYER OBJECT AND PANEL
      if ($(this).attr("id") === "shieldUp") {
        if (currentPlayer === 1) {
          Player1.shield = true;
          inputUpdate($("#shield1"));
          $("#shield1").html("UP");
        } else if (currentPlayer === 2) {
          Player2.shield = true;
          inputUpdate($("#shield2"));
          $("#shield2").html("UP");
        }
        // IF PLAYER CHOOSES SHIELD DOWN, UPADTE PLAYER OBJECT AND PANEL
      } else if ($(this).attr("id") === "shieldDown") {
        if (currentPlayer === 1) {
          Player1.shield = false;
          inputUpdate($("#shield1"));
          $("#shield1").html("DOWN");
        } else if (currentPlayer === 2) {
          Player2.shield = false;
          inputUpdate($("#shield2"));
          $("#shield2").html("DOWN");
        }
      }
      // DISABLE CLICK LISTENER FOR SHIELD AND HIDE MODAL
      $(".shieldButton").off();
      $("#shieldModal").css("display", "none");
      // PROCEED TO CHANGE TURN FUNCTION
      setTimeout(gameTurn.changeTurn, 500);
    });
  }
};

// ***  GENERATE GRID ***
// create variables for columns and rows
var map_col = 0;
var map_row = 1;

// generate divs and add them to a map id
// loop to 81
for (var i = 0; i < 81; i++) {
  // increment map_col
  map_col++;

  // To the map in HTML, attach a div
  // in the div, add a data-col with the number of the column and row.
  // keep incrementing the map_col as you make another div
  $("#map").append(`<div data-col="${map_col}" data-row="${map_row}"></div>`);

  // when the column gets to 9, bring it back down to 0
  // then increase the row by one
  // continue until the col reaches 9 again, and do the same.
  if (map_col === 9) {
    map_col = 0;
    map_row++;
  }
}

// create array of squares to create a coordinate system
// This will be useful when we create the function to move players around
// select all the divs in the map div and make them into an array
// also for randomly selecting squares, to generate players, obstacles and weapons from.
var gridSquares = $("#map>div").toArray();

// CURRENT PLAYER (STARTS AS PLAYER 1)
var currentPlayer = Player1.id;

//Array system:
// north - currentIndex - 9
// south - currentIndex + 9
// east  - currentIndex + 1
// west  - currentIndex - 1

// ***  GENERATE OBSTACLE ***
var obstacle = '<div class="obstacle"></div>';
function genObstacle() {
  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  while ($(randomSquare).hasClass("full")) {
    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];
  }

  $(randomSquare).addClass("full");
  $(randomSquare).html(obstacle);
}

// ***  GENERATE WEAPONS ***
function genWeapon() {
  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  var weaponsArray = Weapons;

  for (var x = 0; x < weaponsArray.length; x++) {
    while ($(randomSquare).hasClass("full")) {
      selectedNumber = Math.floor(Math.random() * gridSquares.length);
      randomSquare = gridSquares[selectedNumber];
    }

    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];

    $(randomSquare).html(
      '<div class="weapon">' + weaponsArray[x].image + "</div>"
    );
  }
}

// ***  GENERATE PLAYER 1 ***
function genPlayer1() {
  // choose an element at random from the gridSquares array
  var randomSquare =
    gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while ($(randomSquare).hasClass("full")) {
    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];
  }

  $(randomSquare).addClass("full");
  $(randomSquare).html(Player1.avatar);

  Player1.position.col = randomSquare.dataset.col;
  Player1.position.row = randomSquare.dataset.row;
}

// ***  GENERATE PLAYER 2 ***
function genPlayer2() {
  // choose an element at random from the gridSquares array
  var randomSquare =
    gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while ($(randomSquare).hasClass("full")) {
    var selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];
  }

  var player1_X_axis = $(".player1")[0].parentNode.attributes[0];
  var player1_Y_axis = $(".player1")[0].parentNode.attributes[1];

  //
  // var random_X_axis = $(randomSquare)[0].attributes[0].value
  // var random_Y_axis = $(randomSquare)[0].attributes[1].value

  $(randomSquare).addClass("full");
  $(randomSquare).html(Player2.avatar);
  Player2.position.col = randomSquare.dataset.col;
  Player2.position.row = randomSquare.dataset.row;
}

// FLASH COLOUR ON INPUT FIELD UPON CHANGE OF CONTENT
function inputUpdate(updateItem) {
  updateItem.addClass("valueChanged");
  setTimeout(function() {
    updateItem.removeClass("valueChanged");
  }, 1500);
}

// ******************************************************

// ***  START A NEW GAME ***
$(function() {
  // start a new game
  $("#newGame").on("click", function() {
    // empty the map before you populate it, to get rid of the previous session
    $("#map>div").removeClass("full highlight");
    $("#map>div").empty();
    // assign the health of player 1 to the current health in the player1 object
    // (probably 100)
    $("#health1").val(Player1.health);
    // assign the health of player 1 to the default weapon in the player1 object
    // (probably 10)
    $("#damage1").html(Player1.weapon.damage);
    // Generate 12 obstacles
    for (var i = 0; i < 12; i++) {
      genObstacle();
    }

    // generate players to a random sq
    genPlayer1();
    genPlayer2();

    // generate weapons to a random square
    genWeapon();

    // checks to see whose turn it is, adds a few classes. player 1 is assigned to current player
    gameTurn.detectTurn();
  });
});
