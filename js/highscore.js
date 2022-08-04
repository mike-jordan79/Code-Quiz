document.getElementById("goback").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
  
  let clearScoreBtn = document.getElementById("clearscores");
  
  clearScoreBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    localStorage.clear();
    displayHighScores()
  });
  
  
  function displayHighScores() {
    let highScoreArr = JSON.parse(localStorage.getItem("highScoreList"));
  
    if (highScoreArr !== null) {
      highScoreArr.sort(function (a, b) {
        return b.score - a.score;
      });
  
      let str = "";
      highScoreArr.forEach((item) => {
        str += `<li>${item.initials}:  Score ${item.score}</li>`;
      });
  
      document.getElementById("highscore-list").innerHTML = str;
    } else {
      document.getElementById("highscore-list").innerHTML = ""
    }
    
  }
  
  displayHighScores();
  