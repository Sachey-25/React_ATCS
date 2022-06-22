import Practice from "./Practice";

function getGreeting(User){
    if(User){
        return <h2> Hello, {Practice(User)} </h2>
    }
    return <h2> Hello, Stranger.. </h2>
}

export default getGreeting;