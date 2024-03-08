// QUESTION:-1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.

// Ans:1

let trafficLight = "red";

if(trafficLight == "red"){
    console.log("Vehicles must stop.")
}
else if(trafficLight == "orange"){
    console.log("Vehicles must wait. The signal is changing to red or green.")
}
else if(trafficLight == "green"){
    console.log("Vehicles may proceed with caution.")
}
else{
    console.log("Invalid traffic light.")
}


// OUTPUT:-  Vehicles must stop.