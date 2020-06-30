function getPeople(cb) {
  setTimeout(function () {
    console.log([
      {
        name: "Jonathan",
      },
      {
        name: "Jennifer",
      },
      {
        name: "Brad",
      },
      {
        name: "Phil",
      },
    ]);
    cb();
  }, 3000);
}
// getPeople(function() {
//     console.log("This should wait until the names have printed");
//     getStates();
// });

function getStates(cb) {
  setTimeout(function () {
    console.log(["Alabama", "Alaska", "Arizona", "Arkansas"]);
    cb();
  }, 3000);
}

function getPresidents() {
  setTimeout(function () {
    console.log([
      "Abraham Lincoln",
      "Thomas Jefferson",
      "George Washington",
      "John Adams",
    ]);
  }, 3000);
}

getPeople(function(){
    getStates(function(){
        getPresidents();
    })
});