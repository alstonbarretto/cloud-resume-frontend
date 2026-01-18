const apiUrl = "https://2339g1xza6.execute-api.eu-west-2.amazonaws.com/prod/count";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").innerText = data.count;
  })
  .catch(error => {
    console.error("Error fetching visitor count:", error);
    document.getElementById("visitor-count").innerText = "Error";
  });