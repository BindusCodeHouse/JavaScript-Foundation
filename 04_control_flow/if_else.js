/*
    comparison operator ::
    <  >  <=  >=  ==  ===  !=  !==
*/

if(2 !== "2") {
    console.log("yes")
} 

loginWithEmail = true;
loginWithGoogle = false;

// implicite if condition :
// in which you can write without creating scope but required to write ; at the end.
if(loginWithEmail || loginWithGoogle) console.log("User LoggedIn"); 