function getPeople() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const people = [
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
      ];
      resolve(people);
    }, 3000);
  });
}

function getStates() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const states = ["Alabama", "Alaska", "Arizona", "Arkansas"];
      resolve(states);
    }, 3000);
  });
}

function getPresidents() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
    //   reject(new Error("This is a made up error"));
      const presidents = [
        "Abraham Lincoln",
        "Thomas Jefferson",
        "George Washington",
        "John Adams",
      ];
      resolve(presidents);
    }, 3000);
  });
}

async function makeAPICalls() {
  try {
    const people = await getPeople();
    const states = await getStates();
    const presidents = await getPresidents();
    console.log(people);
    console.log(states);
    console.log(presidents);
  } catch (err) {
    console.log(err);
    // retry mechanism
  }
}

makeAPICalls();

//   getPeople().then(function (data) {
//     console.log(data);
//     getStates().then((arrayOfStates) => {
//       console.log(arrayOfStates);
//       getPresidents().then((arrayOfPresidents) => {
//         console.log(arrayOfPresidents);
//       });
//     });
//   });
