// Get the current URL
var currentLocation = "Halifax"
var outputDiv = document.getElementById("output");

// Check if the URL contains the string "halifax"
if (currentLocation == "Halifax") {
    // If in Halifax, display a message on the website
    outputDiv.innerHTML = "<p>You are in Halifax! Your local airport is Halifax Standfield, YHZ. Their number is 123-456-7890.</p>";
} else {
    // If not in Halifax, display a different message or perform other actions
    outputDiv.innerHTML= "<p>You are not in Halifax. I cannot help you yet</p>";
}