import React from 'react'

// I'll create a fn to disply my name on the screen. <Embeded exp>

//JSX expression | embeded expression

function Practice(User) {
  return User.firstname + ' ' + User.lastname 
}

const User = {
    firstname: "Sachin",
    lastname : "Tendulkar"
}

const element  = (
    <h2>
        Hello, {Practice(User)}!
    </h2>
)

export default Practice;