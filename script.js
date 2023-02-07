const addSauce = () => {
  const sauceRow = document.getElementById("sauces-row");
  const sauceCardHtml = createSauceCard("sauce");
  sauceRow.innerHTML += sauceCardHtml;
};

const addMermelade = () => {
  const sauceRow = document.getElementById("mermelades-row");
  const sauceCardHtml = createSauceCard("mermelade");
  sauceRow.innerHTML += sauceCardHtml;
};

const createSauceCard = (type) => {
  let imgRoute;
  let cardTitle;

  if (type === "sauce") {
    imgRoute = "./assets/img/sauce_1.png";
    cardTitle = "Salsa de chile morita";
  } else {
    imgRoute = "./assets/img/mermelade_1.png";
    cardTitle = "Ponche de frutas";
  }

  return `
    <div class="col-sm-4">
    <div class="card text-center border-0" style="width: 18rem">
      <img src=${imgRoute} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${cardTitle}</h5>
        <a
          href="#"
          class="btn btn-primary btn-lg border-0 btn-rounded"
          id="add-btn"
        >
          AÑADIR
        </a>
      </div>
    </div>
  </div>`;
};

async function test() {
  const resp = await fetch("./data.json");
  return resp;
}

const myJson = test();
console.log(myJson);
