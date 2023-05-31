const btns = document.querySelectorAll(".btn");
const btnReset = document.querySelector(".btn-reset");
const voteCounts = document.querySelectorAll(".vote-count");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    candidat = document.querySelector(".vote-" + this.id);
    let count = Number(candidat.textContent);
    count++;
    candidat.textContent = count;
  });
});

btnReset.addEventListener("click", function (e) {
  voteCounts.forEach(function (voteCount) {
    count = 0;
    voteCount.textContent = count;
  });
});
