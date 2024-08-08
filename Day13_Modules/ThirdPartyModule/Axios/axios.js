const axios = require("axios");

axios
  .get("https://api.github.com/users/github")
  .then((response) => {
    console.log("User Info:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
