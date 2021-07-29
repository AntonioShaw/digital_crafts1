let startersArray = dishes.filter((dish) => dish.course === "Starters");
let entreesArray = dishes.filter((dish) => dish.course === "Entrees");
let dessertsArray = dishes.filter((dish) => dish.course === "Desserts");

const startersButton = document.getElementById("btnStarters");
const entreesButton = document.getElementById("btnEntrees");
const dessertsButton = document.getElementById("btnDesserts");
const contentDiv = document.getElementById("contentDiv");

btnStarters.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  startersArray.map((dish) => {
    const starterItems = `
        <ul id="Starters"
        <li>
        <img src=${dish.imageURL} width=125px height=100px/>
        <h1>${dish.title}</h1>
        <h2>${dish.description}</h2>
        <h4>${dish.price}</h4>
        </li>
        </ul>
        `
    contentDiv.insertAdjacentHTML("beforeend", starterItems);
  });
});

btnEntrees.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    entreesArray.map((dish) => {
      const entreeItems = `
          <ul id="Entrees"
          <li>
          <img src=${dish.imageURL} width=125px height=100px/>
          <h1>${dish.title}</h1>
          <h2>${dish.description}</h2>
          <h4>${dish.price}</h4>
          </li>
          </ul>
          `
      contentDiv.insertAdjacentHTML("beforeend", entreeItems);
    });
  });

  btnDesserts.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    dessertsArray.map((dish) => {
      const dessertItems = `
          <ul id="Starters"
          <li>
          <img src=${dish.imageURL} width=125px height=100px/>
          <h1>${dish.title}</h1>
          <h2>${dish.description}</h2>
          <h4>${dish.price}</h4>
          </li>
          </ul>
          `
      contentDiv.insertAdjacentHTML("beforeend", dessertItems);
    });
  });
  