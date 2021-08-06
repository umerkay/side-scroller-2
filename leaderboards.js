let loadingLB = true;
let data = [];

window.addEventListener("load", () => {
  db.collection("highscores")
    .doc("level" + 1)
    .collection("scores")
    .orderBy("time")
    .limit(10)
    .get()
    .then((querySnapshot) => {
      data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      loadingLB = false;
      dataUpdated();
    });
});

dataUpdated = () => {
  if (loadingLB === true) {
    document.getElementById("data").innerHTML = "Loading...";
  } else if (data) {
    let innerHTML = "";
    data.forEach(
      (score, i) =>
        (innerHTML =
          innerHTML +
          `
        <div class="score">
            <span class="pos">${i + 1}</span>
            <span class="name">${score.name}</span>
            <span class="time">${score.time}</span>
        </div>`)
    );
    document.getElementById("data").innerHTML = innerHTML;
  }
};

dataUpdated();
