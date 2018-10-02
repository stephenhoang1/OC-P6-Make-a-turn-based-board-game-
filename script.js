//make an array 1-100
var squares_array = []
for (var x = 1; x <= 100; x++) {
    squares_array.push(x)
}

//randomly choose a number
function shuffle_arr(num) {
    var x

    for (i = squares_array.length - 1; i > 0; i--) {
        random = Math.floor(Math.random() * (i + 1));
        x = squares_array[i];
        squares_array[i] = squares_array[random];
        squares_array[random] = x;
    }

    return squares_array.slice(0, num);
}

//set default mode of squares as 'empty'
$('div.row').addClass('empty');

//assign positions of obstacles, weapons and players
function assign_positions(num, x, y, z) {
  var arr =  shuffle_arr(num)

 for (let n = 0; n < num; n++) {
     $("#sq_" + arr[n]).css("background-color", "red");
   if (n >= x) {
     $("#sq_" + arr[n]).css("background-color", "blue");
   }
   if (n >= (x + y)) {
     $("#sq_" + arr[n]).css("background-color", "yellow")
   }
 }
}

//assign_positions(18, 12, 4, 2)
