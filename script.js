// ***  PLAYER 1 ***
const Player1 = {
  // instead of identifying by name, use an ID to make it easier
  id: 1,
  // to be displayed on the panel
  name: "Chef Mathilde",
  avatar:
  '<img class="player1" src="styles/img/chef_whitehat.jpg" alt="Chef Mathilde">',
  health: 100,
  // default weapon
  weapon: {
    name: "Knife and Fork",
    image:
    '<div class="weapon"><img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default"></div>',
    damage: 10,
    oldWeapon: "" //just the string of the weapon name would do here.
  },
  //shield is not up yet.
  shield: false,
  // position is updated at the start of every game
  position: {
    col: 0,
    row: 0
  },
  oldPosition: {
    col: 0,
    row: 0
  }
};
// ***  PLAYER 2 ***
const Player2 = {
  id: 2,
  name: "Chef Jean",
  avatar:
  '<img class="player2" src="styles/img/chef_blackhat.jpg" alt="Chef Jean">',
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
  },
  oldPosition: {
    col: 0,
    row: 0
  }
};
// ***  WEAPONS ***
const Weapons = [
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
  },
  {
    name: "Ladle",
    image:
    '<img src="styles/img/ladle.png" alt="Ladle" class="weapon" id="ladle">',
    damage: 20
  },
  {
    name: "Knife and Fork",
    image:
    '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
    damage: 10,
  }
];
// ***  OBSTACLE ***
const Obstacle = {
  image:
  '<img src="styles/img/gas_cooker_obstacle.png" alt="obstacle" class="obstacle">'
};
// ***  HEALTHPACK ***
const healthPack = {
  image:
  '<img src="styles/img/health_pack.png" alt="health pack" class="healthPack">'
};

// CHECK FOR ADJACENT SQUARES
// check whether its a square on the grid and not off the grid
function isSquareOnGrid(square) {
  var width = 9, height = 9;
  var x = square[0], y = square[1];
  return x >= 1 && x <= width && y >= 1 && y <= height;
}

// returns an array of coordinates adjacent to player.
function getAdjacents(square) {
  var x = square[0], //argument format example: (2, 3)
  y = square[1],
  adjacents = [[x-1,y],[x+1,y],[x,y+1],[x,y-1]];
  return adjacents.filter(isSquareOnGrid);
}

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
    // nesting 'if' statements check everything wrapped in a single 'if' statement
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

    // when you click highlight,
    // call the movePlayer function
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

    // ***THINGS TO EXECUTE WHETHER THERE IS A WEAPON OR NOT***
    if ($(this).hasClass("highlight")) {

      // 1. Remove player image from old sq
      if (player.id === 1) {
        $(".player1").remove();  // remove all .player1 elements from the grid
      } else {
        $(".player2").remove();
      }

      // 2. Remove class 'full' from the current position.
      $(
        `[data-col="${player.position.col}"][data-row="${player.position.row}"]`
      ).removeClass("full");

      // 3. Place player avatar in new location and update the class to 'full'
      $(this).prepend(player.avatar); // use image from player object
      $(this).addClass("full");

      // 4. update the old player position
      player.oldPosition.col = player.position.col
      player.oldPosition.row = player.position.row

      // 5. update the new player position
      player.position.col = this.dataset.col;
      player.position.row = this.dataset.row;

      // DROP OLD WEAPON FUNCTION:
      // if player is carrying an oldWeapon:
      if (!!player.weapon.oldWeapon) {

        // a. Place the old weapon into the old position.
        $(
          `[data-col="${player.oldPosition.col}"][data-row="${player.oldPosition.row}"]`
        ).append(`<div class='weapon'>${player.weapon.oldWeapon}</div>`)

        // b. clear the oldWeapon from the player's object.
        player.weapon.oldWeapon = "";
      }

      // *** ADDITIONALLY, IF THERE IS A WEAPON IN THE NEW SQUARE... ***
      if ($(this).children().hasClass('weapon')) {

        // 1. UPDATE PLAYER OBJECT

        // a. update oldWeapon image
        player.weapon.oldWeapon = player.weapon.image

        // b. update new weapon image
        player.weapon.image = $(this).children('.weapon')[0].innerHTML; // add old weapon.

        // c. update weapon damage
        player.weapon.damage = $(this).children()[1].dataset.damage

        // d. update weapon name
        player.weapon.name = $(this).children()[1].firstChild.alt

        // 2. UPDATE PLAYER PANEL

        // a. update panel weapon image with the one from the new sq
        if (player.id === 1) {
          $('#player1>.card-body>.attack').children().attr('src', $(player.weapon.image)['0'].attributes['0'].value)
        }
        if (player.id === 2) {
          $('#player2>.card-body>.attack').children().attr('src', $(player.weapon.image)['0'].attributes['0'].value)
        }

        // b. update panel weapon damage
        $("#damage1").html(Player1.weapon.damage)
        $("#damage2").html(Player2.weapon.damage)

        // c. remove the weapon class within the new square
        $(this).children(".weapon").remove();
      }

      // If the square contains a healthpack...
      if ($(this).children().hasClass('healthPack')) {
        player.health = 100

        // replenish the health of the current player.
        if (currentPlayer === 1) {
          $('#health1')[0].attributes[1].value = player.health
        } else {
          $('#health2')[0].attributes[1].value = player.health
        }
        // remove the healthpack from the square.
        $(this).children(".healthPack").remove()
      }

      // REMOVE HIGHLIGHT CLASS, DISABLING "CLICK" LISTENER
      $("#map > div").removeClass("highlight");
      $("#map > div").off("click");
      $("#map > div").off("mouseenter")

      // check to see if players are about to battle.
      gameTurn.detectBattle()

    }
  }
}

// ***  GAME TURNS ***
const gameTurn = {
  // In the detectTurn object, create a function to check whose turn it is.
  detectTurn: function() {
    // If the current player is player 1
    if (currentPlayer === 1) {
      // a. remove activePlayer class from player 2.
      $("#player2").removeClass("activePlayer");
      // b. add the 'activePlayer' class to the player 1 panel (#player1)
      $("#player1").addClass("activePlayer");
      // c. create a mouseenter event:
      // when you enter '.player1' trigger playerMovement.showMovesPlayer1
      $(".player2").parent().off('mouseenter')
      // d. show moves.
      $(".player1").parent().mouseenter(playerMovement.showMovesPlayer1);

    } else {
      $("#player1").removeClass("activePlayer");
      $("#player2").addClass("activePlayer");
      $(".player1").parent().off('mouseenter')
      $(".player2").parent().mouseenter(playerMovement.showMovesPlayer2);
    }
  },

  // *** CHANGE CURRENT PLAYER VARIABLE ***
  changeTurn: function() {
    switch (true) {
      case currentPlayer === 1:
      currentPlayer = 2;
      break;
      case currentPlayer === 2:
      currentPlayer = 1;
      break;
    }
    // proceed to start of turn cycle again
    gameTurn.detectTurn()
  },

  // *** CHECK TO SEE IF ANYONE'S WON ***
  checkDefeat: function() {
    if (Player1.health <= 0) {
      showGameOver()
      gameTurn.endGame()
    }
    if (Player2.health <= 0) {
      showGameOver()
      gameTurn.endGame()
    }
  },

  endGame: function() {

    if ($("#health1").val() <= 0) {
      $('.p1_pic').css('filter', 'grayscale(100%)')
    }
    if ($("#health2").val() <= 0) {
      $('.p2_pic').css('filter', 'grayscale(100%)')
    }
    $("#map>div").empty();
  },

  enterBattle: function() {
    // 1. when the active player enters an adjacent square, the battle function is triggered. *T*
    // 2. the active player has the first chance to attack. *T*
    $('.player2').parent().data('clickedPreviously', false)
    $('.player1').parent().data('clickedPreviously', false)

    // PLAYER 1 ATTACK
    function player1Attack() {
      $('.player1').parent().off('click');

      // create data that registers 'true' when player is clicked.
      if ($('.player1').parent().data('clickedPreviously') == true) {
        // When this happens, show the response modal
        showBattleResponseText()
        // then reset the attribute back to 'false'
        $('.player1').parent().data('clickedPreviously', false)
      }

      $('.player2').parent().on('click', function() {
        // if player 2's shield is down...

        if (Player2.shield == false) {
          Player2.health -= Player1.weapon.damage // Player 1 attacks with full power of weapon
        }
        else {
          Player2.health -= Player1.weapon.damage / 2 // Player 1 attacks with half power of weapon
        }
        // update player health on panel
        $('#health2')[0].attributes[1].value = Player2.health

        // register that the opponent has been attacked
        if($('.player2').parent().data('clickedPreviously', false)) {
           $('.player2').parent().data('clickedPreviously', true)
         }

         // remove highlights from grid
        $('#map>div').removeClass('highlight')

        // check to see if anyone has been defeated.
        gameTurn.checkDefeat()

        // switch over to the next player.
        gameTurn.changeTurn()

        // change to next player, continues the battle chain.
        setTimeout(player2Attack, 100)
      })
    }

    // PLAYER 2 ATTACK
    function player2Attack() {
      $('.player2').parent().off('click');

      if ($('.player2').parent().data('clickedPreviously') == true) {
        showBattleResponseText()
        $('.player2').parent().data('clickedPreviously', false)
      }

      $('.player1').parent().on('click', function() {

        if (Player1.shield == false) {
          Player1.health -= Player2.weapon.damage // Player 2 attacks with full power of weapon
        }
        else {
          Player1.health -= Player2.weapon.damage / 2 // Player 2 attacks with half power of weapon
        }
        $('#health1')[0].attributes[1].value = Player1.health

        if($('.player1').parent().data('clickedPreviously', false)) {
           $('.player1').parent().data('clickedPreviously', true)
         }

        $('#map>div').removeClass('highlight')
        gameTurn.checkDefeat()
        gameTurn.changeTurn()
        setTimeout(player1Attack, 100)
      })

    }

    // starts the battle chain
    if (currentPlayer == Player1.id) {
      player1Attack()
    }
    else if (currentPlayer == Player2.id) {
      player2Attack()
    }

  },
  // DETECT WHETHER PLAYERS ARE NEXT TO EACH OTHER. TRIGGER A BATTLE IF THEY ARE.
  detectBattle: function() {
    var player1Coordinates = [Number(Player1.position.col), Number(Player1.position.row)]
    var player2Coordinates = [Number(Player2.position.col), Number(Player2.position.row)]
    var adjacentSquares = getAdjacents(player1Coordinates)

    function isBattle() {
      for (x in adjacentSquares) {
        if (JSON.stringify(adjacentSquares[x]) === JSON.stringify(player2Coordinates)) {
          return true
        }
      }
    }

    if (isBattle() == true) {
      gameTurn.enterBattle()
    } else {
      gameTurn.shieldStatus()
      gameTurn.changeTurn()
    }

  },
  // ASK PLAYER IF THEY WANT TO ENABLE SHIELD
  shieldStatus: function() {

    // make shield modal appear
    $("#shieldModal").css("display", "block");
    // when you click either shield button:
    $(".shieldButton").on("click", function() {

      // IF PLAYER CHOOSES SHIELD UP, UPDATE PLAYER OBJECT AND PANEL
      // if you click shield up
      if ($(this).attr("id") === "shieldUp") {
        if (currentPlayer === 2) {
          Player1.shield = true;
          inputUpdate($("#shield1"));
          $("#shield1").html("UP");
        } else if (currentPlayer === 1) {
          Player2.shield = true;
          inputUpdate($("#shield2"));
          $("#shield2").html("UP");
        }
        // IF PLAYER CHOOSES SHIELD DOWN, UPDATE PLAYER OBJECT AND PANEL
      } else if ($(this).attr("id") === "shieldDown") {
        if (currentPlayer === 2) {
          Player1.shield = false;
          inputUpdate($("#shield1"));
          $("#shield1").html("DOWN");
        } else if (currentPlayer === 1) {
          Player2.shield = false;
          inputUpdate($("#shield2"));
          $("#shield2").html("DOWN");
        }
      }

      // DISABLE CLICK LISTENER FOR SHIELD AND HIDE MODAL
      $(".shieldButton").off();
      $("#shieldModal").css("display", "none");
      ;
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

// ***  GENERATE OBSTACLE ***
var obstacle = '<div class="obstacle"></div>';
function genObstacle() {
  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  if(!$(randomSquare).hasClass("full")) {
    $(randomSquare).addClass("full");
    $(randomSquare).html(obstacle);
  } else {
    genObstacle()
  }
}

// ***  GENERATE HEALTH ***
function genHealthPack() {
  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  if(!$(randomSquare).hasClass("full")) {

    $(randomSquare).html(healthPack.image);
  } else {
    genHealthPack()
  }
}

// ***  GENERATE WEAPONS ***
function genWeapon() {


  var weaponsArray = Weapons;

  // select a random square.
  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  var x = 0
  while (x < 4) {
    var selectedNumber = Math.floor(Math.random() * gridSquares.length);
    var randomSquare = gridSquares[selectedNumber];

    if ( !$(randomSquare).is('.full, .weapon') ) {
      $(randomSquare).html(
        '<div class="weapon" data-damage="' + weaponsArray[x].damage + '" >' + weaponsArray[x].image + "</div>"
      )
      x += 1
    }
  }
}

// ***  GENERATE PLAYER 1 ***
function genPlayer1() {
  // choose an element at random from the gridSquares array
  var randomSquare =
  gridSquares[Math.floor(Math.random() * gridSquares.length)];

  if(!$(randomSquare).hasClass("full")) {
    $(randomSquare).addClass("full"); //adds the class 'full'
    $(randomSquare).html(Player1.avatar); //adds the player avatar

    Player1.position.col = randomSquare.dataset.col;
    Player1.position.row = randomSquare.dataset.row;

  }else{
    genPlayer1()
  }


}

// ***  GENERATE PLAYER 2 ***
function genPlayer2() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  var p1AdjacentSquares = getAdjacents([Number(Player1.position.col), Number(Player1.position.row)])
  var player2coord = [Number(randomSquare.dataset.col), Number(randomSquare.dataset.row)]

  for (x in p1AdjacentSquares) {
    if (JSON.stringify(p1AdjacentSquares[x]) == JSON.stringify(player2coord)) {
      $("#map>div").removeClass('player2')
      randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)]
    }
  }

   if (!$(randomSquare).hasClass("full")) {
    $(randomSquare).addClass("full");
    $(randomSquare).html(Player2.avatar);

    Player2.position.col = randomSquare.dataset.col;
    Player2.position.row = randomSquare.dataset.row;

  }else{
    genPlayer2()
  }
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
function newGame() {
  // start a new game
  $("#newGame").on("click", function() {

    currentPlayer = Player1.id

    // 1. GRID SETUP
    // empty the map before you populate it, to get rid of the previous session
    $("#map>div").removeClass("full highlight");
    $("#map>div").empty();
    // remove the winner modal from previous game, if it is showing
    $('#gameOverModal').css('display', 'none')

    // 2. PLAYER SETUP
    // assign the health of player 1 to 100
    Player1.health = 100
    Player2.health = 100
    $("#health1").val(100);
    $("#health2").val(100);

    $(".p2_pic").removeAttr("style")
    $(".p1_pic").removeAttr("style")

    // set default weapon to knife and fork for both players..
    // by making a copy of the object
    Player1.weapon = { ...Weapons[4] }
    Player2.weapon = { ...Weapons[4] }

    // assign the health of player 1 to the default weapon in the player1 object
    // (probably 10)
    $("#damage1").html(Player1.weapon.damage);
    $("#damage2").html(Player2.weapon.damage);

    // revert shield object back to false:
    Player1.shield = false
    Player2.shield = false

    // revert shield back to false on panel:
    $("#shield1").html("DOWN")
    $("#shield2").html("DOWN")

    // 3. PLACE ELEMENTS ON GRID

    // Generate 12 obstacles
    for (var i = 0; i < 12; i++) {
      genObstacle();
    }
    // generate players to a random sq
    genPlayer1();
    genPlayer2();

    // generate weapons to a random square
    genWeapon();
    genHealthPack()

    // checks to see whose turn it is, adds a few classes. player 1 is assigned to current player
    gameTurn.detectTurn();

  });

}

newGame()

// *** MODALS ***

// RULES MODAL
  // Open  rules box
$('#gameRules').on('click', function() {
  $('body').addClass('open');
  $('#rulesModal').css('display', 'block');
});
  // close rules box
$('#closeRules').on('click', function() {
  $('body').removeClass('open');
  $('#rulesModal').css('display', 'none');
})

// BATTLE RESPONSE MODAL
function showBattleResponseText() {
  $('#battleResponseModal').css('display', 'block')
  $('#battleResponseModal').html(
    `<p>You were hit, Player ${currentPlayer}! <br><br> Fight back by clicking your opponent
    , or run away by clicking on a red square.</p>`)
  $(document).click(function () {
    $('#battleResponseModal').css('display', 'none')
  })
}


// GAME OVER MODAL
function showGameOver() {
  $('#gameOverModal').css('display', 'block')

  $('#gameOverModal').html(
    `<p>Player ${currentPlayer} is the winner!</p>
     <br>
     <div class="wrapper">
     <button id="playAgain" class="btn btn-dark">Play again</button>
     </div>`)

  $('#playAgain').on('click', function() {
    $('#newGame').click()
  })
}
