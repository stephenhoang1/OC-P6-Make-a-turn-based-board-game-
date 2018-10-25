// ***  PLAYER 1 ***z
const Player1 = {
  // instead of identifying by name, use an ID to make it easier
  id: 1,
  // to be displayed on the panel
  name: "Chef Mathilde",
  avatar: "styles/img/chef_whitehat.jpg",
  health: 100,
  // default weapon
  weapon: {
      name: "Knife and Fork",
      image: '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
      damage: 10,
      oldWeapon: ""
  },
  //shield is not up yet.
  shield: false,
  // position is updated at the start of every game
  position: {
    col: 0,
    row: 0
  },
  class_css: "<div class='player1'></div>"
};
// ***  PLAYER 2 ***
const Player2 = {
  id: 2,
  name: "Chef Jean",
  avatar: "styles/img/chef_blackhat.jpg",
  health: 100,
  weapon: {
      name: "Knife and Fork",
      image: '<img src="styles/img/knife-fork.png" alt="Knife and Fork" class="weapon" id="default">',
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
    image: '<img src="styles/img/ladle.png" alt="Ladle" class="weapon" id="weaponLadle">',
    damage: 20
  },
  {
    name: "Dough Roller",
    image: '<img src="styles/img/dough-roller.png" alt="Dough Roller" class="weapon" id="weaponDoughRoller">',
    damage: 40
  },
  {
    name: "Cooking Pot",
    image: '<img src="styles/img/cooking-pot.png" alt="Cooking Pot" class="weapon" id="weaponCookingPot">',
    damage: 60
  },
  {
    name: "Meat Cleaver",
    image: '<img src="styles/img/meat-cleaver.png" alt="Meat Cleaver" class="weapon" id="weaponMeatCleaver">',
    damage: 80
  },
]
// ***  OBSTACLE ***
const Obstacle = {
  image: '<img src="styles/img/gas_cooker_obstacle.png" alt="obstacle" class="obstacle">'
}
//

const directions = [
  { col:  0, row: -1  }, // [0] --> up
  { col:  0, row:  1  }, // [1] --> down
  { col:  1, row:  0  }, // [2] --> left
  { col: -1, row:  0  }  // [3] --> right
];

// XY system
// UP Y - data-row - 1
// DOWN Y - data-row + 1
// LEFT  X - data-col + 1
// RIGHT  X - data-col - 1

var finishedMoving = false;

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
    if(!$(`[data-col="${player.position.col}"][data-row="${north_1}"]`).hasClass('full')) {
        $(`[data-col="${player.position.col}"][data-row="${north_1}"]`).addClass('highlight')

        if(!$(`[data-col="${player.position.col}"][data-row="${north_2}"]`).hasClass('full')) {
            $(`[data-col="${player.position.col}"][data-row="${north_2}"]`).addClass('highlight')

            if(!$(`[data-col="${player.position.col}"][data-row="${north_3}"]`).hasClass('full')) {
                $(`[data-col="${player.position.col}"][data-row="${north_3}"]`).addClass('highlight')
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

    if(!$(`[data-col="${player.position.col}"][data-row="${south_1}"]`).hasClass('full')) {
        $(`[data-col="${player.position.col}"][data-row="${south_1}"]`).addClass('highlight')

        if(!$(`[data-col="${player.position.col}"][data-row="${south_2}"]`).hasClass('full')) {
            $(`[data-col="${player.position.col}"][data-row="${south_2}"]`).addClass('highlight')

            if(!$(`[data-col="${player.position.col}"][data-row="${south_3}"]`).hasClass('full')) {
                $(`[data-col="${player.position.col}"][data-row="${south_3}"]`).addClass('highlight')
            }
        }

    }




  },
  east: function(player) {
    var east_1 = Number(player.position.col) + 1;
    var east_2 = Number(player.position.col) + 2;
    var east_3 = Number(player.position.col) + 3;

    if(!$(`[data-col="${east_1}"][data-row="${player.position.row}"]`).hasClass('full')) {
        $(`[data-col="${east_1}"][data-row="${player.position.row}"]`).addClass('highlight')

        if(!$(`[data-col="${east_2}"][data-row="${player.position.row}"]`).hasClass('full')) {
            $(`[data-col="${east_2}"][data-row="${player.position.row}"]`).addClass('highlight')

            if(!$(`[data-col="${east_3}"][data-row="${player.position.row}"]`).hasClass('full')) {
                $(`[data-col="${east_3}"][data-row="${player.position.row}"]`).addClass('highlight')
            }

        }

    }

  },
  west: function(player) {

    var west_1 = Number(player.position.col) - 1;
    var west_2 = Number(player.position.col) - 2;
    var west_3 = Number(player.position.col) - 3;

    if(!$(`[data-col="${west_1}"][data-row="${player.position.row}"]`).hasClass('full')) {
        $(`[data-col="${west_1}"][data-row="${player.position.row}"]`).addClass('highlight')

        if(!$(`[data-col="${west_2}"][data-row="${player.position.row}"]`).hasClass('full')) {
            $(`[data-col="${west_2}"][data-row="${player.position.row}"]`).addClass('highlight')

            if(!$(`[data-col="${west_3}"][data-row="${player.position.row}"]`).hasClass('full')) {
                $(`[data-col="${west_3}"][data-row="${player.position.row}"]`).addClass('highlight')
            }

        }

    }




  },

  // shows possible moves of players by highlighting them.
  // ...by calling the methods in the north, south, east, west instances.
  showMovesPlayer1: function(){
    playerMovement.north(Player1);
    playerMovement.south(Player1);
    playerMovement.west(Player1);
    playerMovement.east(Player1);
  },
  showMovesPlayer2: function(){
    playerMovement.north(Player2);
    playerMovement.south(Player2);
    playerMovement.west(Player2);
    playerMovement.east(Player2);
  },

   //   MOVE PLAYER
  movePlayer: function(player) {

    var _this = this.movePlayer;

    //console.log('player',player)

    //var _this = document.querySelector(`[data-col="${player.position.col}"][data-row="${player.position.row}"]`);
    // UPDATE PLAYER POSITION OBJECT.

    console.log(_this)

    player.position.col = _this.dataset.col;
    player.position.row = _this.dataset.row;

    if($(_this).hasClass('highlight')) {
      console.log('movePlayer')

      // REMOVE OLD PLAYER IMAGE AND LEAVE OLD WEAPON
      if(player.id === 1) {
        $('.player1').parent().append(player.weapon.oldWeapon)

        $('.player1').remove()
      }else{
        $('.player2').parent().append(player.weapon.oldWeapon)

        $('.player2').remove()
      }
    }

    $(_this).removeClass('full')

    // PLACE PLAYER IMAGE IN NEW LOCATION AND UPDATE CLASS OF "FULL"
    $(_this).prepend(`<div class="player${player.id}"></div>`);
    $(_this).addClass('full')




    // REMOVE HIGHTLIGHT CLASS, DISABLING "CLICK" LISTENER
    $("#map>div").removeClass('highlight');
    $("#map>div").off('click');

    setTimeout(gameTurn.detectBattle, 500)
    /*

    // directions and number of squares
    var north_1 = Number(player.position.row) - 1;
    var north_2 = Number(player.position.row) - 2;
    var north_3 = Number(player.position.row) - 3;
    var south_1 = Number(player.position.row) + 1;
    var south_2 = Number(player.position.row) + 2;
    var south_3 = Number(player.position.row) + 3;
    var east_1 = Number(player.position.col) + 1;
    var east_2 = Number(player.position.col) + 2;
    var east_3 = Number(player.position.col) + 3;
    var west_1 = Number(player.position.col) - 1;
    var west_2 = Number(player.position.col) - 2;
    var west_3 = Number(player.position.col) - 3;

    // the actual position on the board
    var click_north_1 = `[data-col="${player.position.col}"][data-row="${north_1}"]`
    var click_north_2 = `[data-col="${player.position.col}"][data-row="${north_2}"]`
    var click_north_3 = `[data-col="${player.position.col}"][data-row="${north_3}"]`
    var click_south_1 = `[data-col="${player.position.col}"][data-row="${south_1}"]`
    var click_south_2 = `[data-col="${player.position.col}"][data-row="${south_2}"]`
    var click_south_3 = `[data-col="${player.position.col}"][data-row="${south_3}"]`
    var click_east_1  = `[data-col="${east_1}"][data-row="${player.position.row}"]`
    var click_east_2  = `[data-col="${east_2}"][data-row="${player.position.row}"]`
    var click_east_3  = `[data-col="${east_3}"][data-row="${player.position.row}"]`
    var click_west_1  = `[data-col="${west_1}"][data-row="${player.position.row}"]`
    var click_west_2  = `[data-col="${west_2}"][data-row="${player.position.row}"]`
    var click_west_3  = `[data-col="${west_3}"][data-row="${player.position.row}"]`

    // make current position so you can remove the full class
    var currentPosition = `[data-col="${player.position.col}"][data-row="${player.position.row}"]`

    // make an update object function and put it into the move function
    function updatePlayerObject() {

      if (currentPlayer === 1) {
        $(".highlight").click(function() {
          Player1.position.col = $(direction)[0].dataset.col
          Player1.position.row = $(direction)[0].dataset.col
        });
      } else {
        $(".highlight").click(function() {
          Player2.position.col = $(direction)[0].dataset.col
          Player2.position.row = $(direction)[0].dataset.col
        });
      }

    }

    // function for moving, taking the position as an argument
     function move(direction) {
       if (currentPlayer === 1) {
         $(direction).append($('.player1'))
         $(".highlight").click(function() {
           Player1.position.col = $(direction)[0].dataset.col
           Player1.position.row = $(direction)[0].dataset.col
         });
       }
       else {
         $(direction).append($('.player2'))
         $(".highlight").click(function() {
           Player2.position.col = $(direction)[0].dataset.col
           Player2.position.row = $(direction)[0].dataset.col
         });
       }
       // add player 1 to the chosen square
       // add the class 'full' to the chosen square
       $(direction).addClass('full');
       // remove the class 'full' from the original square
       $(currentPosition).removeClass('full')
       // remove 'highlight' class from all squares

       $(".highlight").removeClass()

       finishedMoving = true
};



     // click functions for each square
     $(click_north_1).click(function() {move(click_north_1)})
     $(click_north_2).click(function() {move(click_north_2)})
     $(click_north_3).click(function() {move(click_north_3)})
     $(click_south_1).click(function() {move(click_south_1)})
     $(click_south_2).click(function() {move(click_south_2)})
     $(click_south_3).click(function() {move(click_south_3)})
     $(click_east_1).click(function() {move(click_east_1)})
     $(click_east_2).click(function() {move(click_east_2)})
     $(click_east_3).click(function() {move(click_east_3)})
     $(click_west_1).click(function() {move(click_west_1)})
     $(click_west_2).click(function() {move(click_west_2)})
     $(click_west_3).click(function() {move(click_west_3)})
     */

  }
}

  // set Player1's Id to a variable called currentPlayer
var currentPlayer = Player1.id;
// ***  GAME TURNS ***
const gameTurn = {
  // In the detectTurn object, create a function to check whose turn it is.
  detectTurn: function(){
    console.log('player moved.')
// If the current player is player 1
    if(currentPlayer === 1) {
      // remove activePlayer class from player 2.
      $("#player2").removeClass('activePlayer')
      // add the 'activePlayer' class to the player 1 panel (#player1)
      $("#player1").addClass('activePlayer');
      // create a mouseenter event:
      // when you enter '.player1' trigger playerMovement.showMovesPlayer1
      $(".player1").parent().mouseenter(playerMovement.showMovesPlayer1)
        // or if it's player 2, do the same for that player.

    } else {
      $("#player1").removeClass('activePlayer')
      $("#player2").addClass('activePlayer');
      $(".player2").mouseenter(playerMovement.showMovesPlayer2)
    }

    finishedMoving = false

  },

  changeTurn: function() {
      console.log('turn Changed')
      if(finishedMoving === true) {
        if (currentPlayer === 1) {
          currentPlayer = 2
        } else {
          currentPlayer = 1
        }
        setTimeout(gameTurn.detectTurn, 500)
      }


  },

  detectBattle: function() {
    console.log('detectBattle')
  }


}

// ***  GENERATE GRID ***
  // create variables for columns and rows
  var map_col = 0;
  var map_row = 1;

  // generate divs and add them to a map id
  // loop to 81
  for(var i = 0; i < 81; i++) {
    // increment map_col
    map_col++;

    // To the map in HTML, attach a div
    // in the div, add a data-col with the number of the column and row.
    // keep incrementing the map_col as you make another div
    $("#map").append(`<div data-col="${map_col}" data-row="${map_row}"></div>`);

    // when the column gets to 9, bring it back down to 0
    // then increase the row by one
    // continue until the col reaches 9 again, and do the same.
    if(map_col === 9) {
      map_col = 0;
      map_row++;
    }
  }

// create array of squares to create a coordinate system
// This will be useful when we create the function to move players around
// select all the divs in the map div and make them into an array
// also for randomly selecting squares, to generate players, obstacles and weapons from.
var gridSquares = $("#map>div").toArray();



//Array system:
// north - currentIndex - 9
// south - currentIndex + 9
// east  - currentIndex + 1
// west  - currentIndex - 1

// ***  GENERATE OBSTACLE ***
var obstacle = '<div class="obstacle"></div>'
function genObstacle() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  while ($(randomSquare).hasClass('full')) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

  $(randomSquare).addClass('full');
  $(randomSquare).html(obstacle);
}

// ***  GENERATE WEAPONS ***
function genWeapon() {

  var selectedNumber = Math.floor(Math.random() * gridSquares.length);
  var randomSquare = gridSquares[selectedNumber];

  var weaponsArray = Weapons;

  for (var x = 0; x < weaponsArray.length; x++) {


    while ($(randomSquare).hasClass('full')) {
      selectedNumber = Math.floor(Math.random() * gridSquares.length);
      randomSquare = gridSquares[selectedNumber];
    }

    selectedNumber = Math.floor(Math.random() * gridSquares.length);
    randomSquare = gridSquares[selectedNumber];

    $(randomSquare).html('<div class="weapon">' + weaponsArray[x].image + '</div>')

  }
}

// ***  GENERATE PLAYER 1 ***
var player1 = '<div class="player1"></div>'
function genPlayer1() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while ($(randomSquare).hasClass('full')) {
     selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

  $(randomSquare).addClass('full');
  $(randomSquare).html(player1)

  Player1.position.col = randomSquare.dataset.col
  Player1.position.row = randomSquare.dataset.row

}

// ***  GENERATE PLAYER 2 ***
var player2 = '<div class="player2"></div>'
function genPlayer2() {
  // choose an element at random from the gridSquares array
  var randomSquare = gridSquares[Math.floor(Math.random() * gridSquares.length)];

  while ($(randomSquare).hasClass('full')) {
     var selectedNumber = Math.floor(Math.random() * gridSquares.length);
     randomSquare = gridSquares[selectedNumber];
  }

var player1_X_axis = $('.player1')[0].parentNode.attributes[0]
var player1_Y_axis = $('.player1')[0].parentNode.attributes[1]

//
// var random_X_axis = $(randomSquare)[0].attributes[0].value
// var random_Y_axis = $(randomSquare)[0].attributes[1].value



  $(randomSquare).addClass('full');
  $(randomSquare).html(player2)
  Player2.position.col = randomSquare.dataset.col
  Player2.position.row = randomSquare.dataset.row
}


// ******************************************************

// ***  START A NEW GAME ***
$(function() {
  // start a new game
  $("#newGame").on("click", function() {
  // empty the map before you populate it, to get rid of the previous session
  $("#map>div").empty();
  // assign the health of player 1 to the current health in the player1 object
  // (probably 100)
  $('#health1').val(Player1.health)
  // assign the health of player 1 to the default weapon in the player1 object
  // (probably 10)
  $('#damage1').html(Player1.weapon.damage)
    // Generate 12 obstacles
    for (var i = 0; i < 12; i++) {
      genObstacle();
    }

// generate players to a random sq
    genPlayer1()
    genPlayer2()

// generate weapons to a random square
    genWeapon()


// assigns movement to both players when a highlighted square is clicked on.
// SUGGESTION: MAYBE CALL THIS FUNCTION ONLY DURING THE PLAYERS TURN? ADD THE FUNCTION IN AN IF STATEMENT
    playerMovement.movePlayer(Player1)
    playerMovement.movePlayer(Player2)

// checks to see whose turn it is, adds a few classes. player 1 is assigned to current player
    gameTurn.detectTurn()

// changes the current player.
    gameTurn.changeTurn()

  });



  });

  $('#endTurn').on('click', function() {
    if(finishedMoving === true) {
    if (currentPlayer === 1) {
      currentPlayer = 2
      alert("player 2 ready")
    }
    else {
      currentPlayer = 1
      alert("player 1 ready")
    }
      gameTurn.detectTurn()
    }
  })
