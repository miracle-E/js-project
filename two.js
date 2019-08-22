// Get a random integer from 1 to 10 inclusive
// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const guess = prompt('Guess the number between 1 and 10 inclusive');
//  if (guess == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+guess);



function myFunction() {
    // alert("fjkds fjlsd sfi");

    var person = prompt("Please enter your name", "Mary");

    if (person !== "") {

        document.getElementById("guess").innerHTML =

            "Hello " + person + "! How are you today?";

    } else if (person === "") {

        document.getElementById("guess").innerHTML = "Hello!! GET A NAME PLEASE!!!";

    }

}



function num() {
    const num = Math.ceil(Math.random() * 10);
    var state = false;

    do{
        //   console.log(num);
        const guess = prompt('Guess the number between 1 and 10 inclusive');
        if (guess !== num && typeof (num) == "number" || "integer") {
            if (guess > 10) { //greater than9 10
                document.getElementById("number").innerHTML = "OUT OF RANGE";
            } else if (guess < 1) { //less than 1
                document.getElementById("number").innerHTML = "BELOW RANGE";
            }

            // document.getElementById("number").innerHTML = "Not matched";
        }
        if (isNaN(guess)) {
            document.getElementById("number").innerHTML = "not a valid input";
           }
        // if input is letters or characters 'Not a valid input'

        if (guess == num) {
            document.getElementById("number").innerHTML = "Matched";
            state = true;
        }

    }while(state === false);
    
}
