let clickCount= 0
// click starts off at 0 and after clicked the li's cannot append to dom again


  document.querySelector("button").addEventListener("click", function() {
    let api = "https://api.harvardartmuseums.org/exhibition?apikey=9467beb0-a293-11e9-827f-c183c6a6bb8c&";
    fetch(api)
    .then(res => res.json())
    .then(response => {

      console.log(response);
      let infoRes = document.getElementById("result");
      let hold = response;
      if(count == 0){
      for (let i = 0; i < hold.records.length; i++) {
        let final = hold.records[i].title;
        let items = document.createElement("li");
        items.appendChild(document.createTextNode(final));
        clickCount = "no more clicks"
        console.log(count)
        infoRes.appendChild(items);
      }
      }

    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    })
  });
