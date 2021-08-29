let loadingLB = true;
let data = [];
let loadingLB2 = true;
let data2 = [];
let name = localStorage.getItem("name");
let lastScore = null;
let level = 1;

updateData = async () => {
  if (name) {
    let docRef = db
      .collection("bestscores")
      .doc("level" + level)
      .collection("scores")
      .doc(name);
    docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      lastScore = docSnapshot.data().time;
      document.getElementById("pbest").innerHTML =
        "Your personal best is " + lastScore + "s for Level " + level;
    } else {

      document.getElementById("pbest").innerHTML =
        "You haven't completed Level " + level;
    }
  }
  db.collection("bestscores")
    .doc("level" + level)
    .collection("scores")
    // .where("time", "<=", 30.12)
    .orderBy("time")
    .limit("10")
    // .limit("30")
    .get()
    .then((querySnapshot) => {
      data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      loadingLB = false;
      dataUpdated();
    });
  //   db.collection("highscores")
  //     .doc("level" + 1)
  //     .collection("scores")
  //     .where("time", ">", 30.12)
  //     .orderBy("time")
  //     .limit("10")
  //     .get()
  //     .then((querySnapshot) => {
  //       data2 = [];
  //       querySnapshot.forEach((doc) => {
  //         data2.push(doc.data());
  //       });
  //       loadingLB2 = false;
  //       data2Updated();
  //     });
}

window.addEventListener("load", updateData);
document.getElementById("levelNo").addEventListener("change", (e) => {
  level = parseInt(e.target.value);
  loadingLB = true;
  dataUpdated();
  updateData();
});

dataUpdated = () => {
  if (loadingLB === true) {
    document.getElementById("data").innerHTML = "Loading...";
  } else if (data) {
    let innerHTML = "";
    if (data.length == 0) {
      innerHTML = "Seems like no one has completed this level :)"
    }
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

// data2Updated = () => {
//   if (loadingLB2 === true) {
//     document.getElementById("data2").innerHTML = "Loading...";
//   } else if (data2) {
//     let innerHTML = "";
//     data2.forEach(
//       (score, i) =>
//         (innerHTML =
//           innerHTML +
//           `
//           <div class="score">
//               <span class="pos">${i + 1}</span>
//               <span class="name">${score.name}</span>
//               <span class="time">${score.time}</span>
//           </div>`)
//     );
//     document.getElementById("data2").innerHTML = innerHTML;
//   }
// };

dataUpdated();
