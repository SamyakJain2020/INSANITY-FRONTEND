fetch(
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
)
  .then((response) => response.json())
  .then((json) => {
    let str = "";
    json.forEach((x, idx) => {
      if (idx != 0) {
        str += `<tr>
      <td>${x?.title}</td>
      <td>${x?.platform}</td>
      <td>${x?.score}</td>
      <td>${x?.genre}</td>
      <td>${x?.editors_choice}</td>
      </tr>`;
      }
    });
    document.getElementById("l").innerHTML =
      `<tr>
      <th>Title</th>
      <th>Platfrom</th>
      <th>Score</th>
      <th>Genere</th>
      <th>editors_choice</th>
      </tr>`+str;
  });

// json.forEach((x)=> console.log(`${x.title? x.title:''}`));
// json.forEach((x)=> console.log(`${x?.title}`));
// const my = new Set();
// json.forEach((x)=> {my.add(x.title? x.title:`LittleBigPlanet PS Vita`)});
// let t=[...my];
// console.log(t[2])
