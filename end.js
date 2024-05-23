function getDataFromUrl() {
    var queryString = window.location.search.substring(1);
    var score = queryString.split("=")[1];
    return score;
  }
  
var receivedData = getDataFromUrl();
document.getElementById("score").textContent = receivedData;
  