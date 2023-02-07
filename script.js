const myFunc = () => {
  const sauceRow = document.getElementById("sauces-row");
  const sauceCardHtml = createSauceCard();
  sauceRow.innerHTML += sauceCardHtml;
};

const createSauceCard = () => {
  return `
    <div class="col-4">
    <div class="card text-center border-0" style="width: 18rem">
      <img src="img/sauce.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Salsa 2</h5>
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
