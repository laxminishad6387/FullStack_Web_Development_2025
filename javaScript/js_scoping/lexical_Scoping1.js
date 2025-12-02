// --------------------------------------------
// LEXICAL SCOPING / SCOPE CHAINING
// --------------------------------------------
// A variable can be accessed inside its own scope
// AND inside child (inner) scopes.
// But child scope variables CANNOT be accessed from outer scopes.

let a = 10; // GLOBAL SCOPE (accessible everywhere below)

if (true) {
    let b = 20; // PARENT BLOCK SCOPE (inside this `if` only)

    if (true) {
        let c = 30; // LOCAL / INNER MOST SCOPE (this `if` only)

        // ✔ Allowed because:
        // c → defined here
        // b → available in parent scope
        // a → available in global scope
        console.log(a, " : ", b, " : ", c);  // Output → 10 : 20 : 30
    }

    // ❌ console.log(c);  // NOT allowed → c is inside inner scope only
}

// ❌ console.log(b);  // NOT allowed → b is block scoped inside first if
// ❌ console.log(c);  // NOT allowed → c is inside second if only
