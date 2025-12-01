// Switch case syntax
// switch(expression) {
//     case value1:   → Runs only if expression === value1
//         code
//         break;     → Stops the switch block
//     case value2:
//         code
//         break;
//     default:       → Runs if no case matches
//         code
// }


let day = "Monday";

// Example: Switch to print message based on day
switch(day) {
    case "Monday":
        console.log("Fully charged and excited!");   // match found → printed
        break;                                       // stop execution here

    case "Wednesday":
        console.log("Mid week blues!");
        break;

    case "Thurday":                                  // spelling mistake: Thursday
        console.log("A lot of work!");
        break;

    case "Friday":
        console.log("Nice and chill, until we don't get issues after 5");
        break;

    case "Saturday":
        console.log("Pretty code chill, with adhrak chai, and almond cake!");
        break;

    case "Sunday":
        console.log("Very bad day of the week!");
        break;

    default:
        console.log("No clue!");                     // if no case matches
}



// Same concept using If-Else ladder
let x = 2;

if (x == 1) {
    console.log("One!");
} else if (x == 2) {
    console.log("Two!");     // this prints because x = 2
} else if (x == 3) {
    console.log("Three!");
} else if (x == 4) {
    console.log("Four!");
} else {
    console.log("I do not know!");
}

console.log("end of program!");



// Missing `break` case example
let x1 = 2;
switch(x1) {
    case 1:
        console.log("One!");
        break;

    case 2:
        console.log("Two!");     // printed (x1 = 2)
        // no break → execution continues to next case   ⬇
    case 3:
        console.log("Three");    // printed because fall-through
        // no break → continues   ⬇
    case 4:
        console.log("Four!");    // printed because fall-through
        // no break → continues   ⬇
    default:
        console.log("I do not know!"); // printed because fall-through reached default
}
// Output for x1 = 2 will be:
// Two!
// Three
// Four!
// I do not know!
