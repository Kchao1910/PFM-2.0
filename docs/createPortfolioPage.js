function createPortfolioPage() {
  // This is to prevent the web app to create a second portfolio page if the user is already on the portfolio page
  if (document.querySelector("#portfolio-container") != null) {
    alert("You are already on the portfolio page!");
    return;
  }

  // This is done to stay on the same page but to remove the unnecessary elements from the page
  const body = removeNodesFromMainSite();

  // create portfolio container
  const portfolioContainer = document.createElement("div");
  portfolioContainer.setAttribute("id", "portfolio-container");

  // create container for header
  const portfolioHeaderContainer = document.createElement("div");

  // create portfolio header
  const portfolioHeader = document.createElement("h1");
  portfolioHeader.innerHTML = "Portfolio Simulation";

  // create container for instructions
  const portfolioInstructionsContainer = document.createElement("div");

  // create portfolio instructions
  const portfolioInstructions = document.createElement("label");
  portfolioInstructions.innerHTML = "Choose an asset to add to your portfolio.";
  portfolioInstructionsContainer.setAttribute("id", "portfolio-instructions-container")

  // create asset container
  const portfolioAssetChioceContainer = document.createElement("div");
  portfolioAssetChioceContainer.setAttribute("id", "portfolio-asset-choice-container")

  // create asset choices
  const cashAsset = document.createElement("button");
  const equityAsset = document.createElement("button");
  const bondAsset = document.createElement("button");
  const propertyAsset = document.createElement("button");
  const commodityAsset = document.createElement("button");

  // set classes for asset choices
  cashAsset.setAttribute("class", "portfolio-asset-buttons");
  equityAsset.setAttribute("class", "portfolio-asset-buttons");
  bondAsset.setAttribute("class", "portfolio-asset-buttons");
  propertyAsset.setAttribute("class", "portfolio-asset-buttons");
  commodityAsset.setAttribute("class", "portfolio-asset-buttons");

  // set asset names
  cashAsset.innerHTML = "Cash";
  equityAsset.innerHTML = "Equities";
  bondAsset.innerHTML = "Bonds";
  propertyAsset.innerHTML = "Property";
  commodityAsset.innerHTML = "Commodities";

  // create portfolio-main asset container
  const portfolioAssetContainer = document.createElement("div");
  portfolioAssetContainer.setAttribute("id", "portfolio-asset-container");

  const portfolioAssetSubContainer = document.createElement("div");
  portfolioAssetSubContainer.setAttribute("id", "portfolio-asset-sub-container");

  // set onclick events
  cashAsset.onclick = function() {
    addCashAsset(portfolioAssetSubContainer);
  }

  equityAsset.onclick = function() {
    addEquityAsset(portfolioAssetSubContainer);
  }

  bondAsset.onclick = function() {
    addBondAsset(portfolioAssetSubContainer);
  }

  propertyAsset.onclick = function() {
    addPropertyAsset(portfolioAssetSubContainer);
  }

  commodityAsset.onclick = function() {
    addCommodityAsset(portfolioAssetSubContainer);
  }

  // create budget submit button
  const portfolioSubmitButtonContainer = document.createElement("div");
  const portfolioSubmitButton = document.createElement("button");
  portfolioSubmitButtonContainer.setAttribute("id", "portfolio-submit-button-container");
  portfolioSubmitButton.setAttribute("class", "feature-description-buttons");
  portfolioSubmitButton.innerHTML = "Submit";
  portfolioSubmitButton.onclick = function() {
    createPortfolioSummaryElements(body);
  }

  // create asset header
  const assetHeader = document.createElement("h2");
  assetHeader.innerHTML = "Assets"

  // append portfolio container to body
  body.appendChild(portfolioContainer);
  body.appendChild(portfolioAssetContainer);
  
  // append portfolio header to main portfolio container
  portfolioContainer.appendChild(portfolioHeaderContainer);
  portfolioContainer.appendChild(portfolioInstructionsContainer);
  portfolioContainer.appendChild(portfolioAssetChioceContainer);

  // append portfolio header to header container
  portfolioHeaderContainer.appendChild(portfolioHeader);

  // append instructions to portfolio instructions container
  portfolioInstructionsContainer.appendChild(portfolioInstructions);

  // append assest choices to container
  portfolioAssetChioceContainer.appendChild(cashAsset);
  portfolioAssetChioceContainer.appendChild(bondAsset);
  portfolioAssetChioceContainer.appendChild(equityAsset);
  portfolioAssetChioceContainer.appendChild(propertyAsset);
  portfolioAssetChioceContainer.appendChild(commodityAsset);

  // append to asset container
  portfolioAssetContainer.appendChild(assetHeader);
  portfolioAssetContainer.appendChild(portfolioAssetSubContainer);
  portfolioAssetContainer.appendChild(portfolioSubmitButtonContainer);

  // append submit button
  portfolioSubmitButtonContainer.appendChild(portfolioSubmitButton);
}

function addCashAsset(portfolioAssetSubContainer) {
  if (document.querySelector("#cash-asset-sub-container") !== null) {
    alert("Cash asset has been already added to portfolio.");
    return;
  }

  const cashAssetContainer = document.createElement("div");
  cashAssetContainer.setAttribute("class", "asset-sub-container");
  cashAssetContainer.setAttribute("id", "cash-asset-sub-container");
  cashAssetContainer.setAttribute("value", "Cash");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "remove-asset-button");
  deleteButton.innerHTML = "<i class='fal fa-times-circle'></i>";
  deleteButton.onclick = function() {
    removeAsset(cashAssetContainer);
  }

  const cashAssetHeader = document.createElement("h4");
  cashAssetHeader.innerHTML = "Cash";

  const cashPortfolioWeightLabel = document.createElement("label");
  cashPortfolioWeightLabel.innerHTML = "Portfolio Weight (%)";

  const cashPortfolioWeightInput = document.createElement("input");
  cashPortfolioWeightInput.setAttribute("class", "asset-weight-input");
  cashPortfolioWeightInput.placeholder = "10";

  const cashPortfolioExpectedReturnLabel = document.createElement("label");
  cashPortfolioExpectedReturnLabel.innerHTML = "Expected Return (%)";

  const cashPortfolioExpectedReturnInput = document.createElement("input");
  cashPortfolioExpectedReturnInput.setAttribute("class", "asset-expected-return-input");
  cashPortfolioExpectedReturnInput.placeholder = "10";

  portfolioAssetSubContainer.appendChild(cashAssetContainer)
  cashAssetContainer.appendChild(deleteButton);
  cashAssetContainer.appendChild(cashAssetHeader);
  cashAssetContainer.appendChild(cashPortfolioWeightLabel);
  cashAssetContainer.appendChild(cashPortfolioWeightInput);
  cashAssetContainer.appendChild(cashPortfolioExpectedReturnLabel);
  cashAssetContainer.appendChild(cashPortfolioExpectedReturnInput);
}

function addEquityAsset(portfolioAssetSubContainer) {
  if (document.querySelector("#equity-asset-sub-container") !== null) {
    alert("Equity asset has been already added to portfolio.");
    return;
  }

  const equityAssetContainer = document.createElement("div");
  equityAssetContainer.setAttribute("class", "asset-sub-container");
  equityAssetContainer.setAttribute("id", "equity-asset-sub-container");
  equityAssetContainer.setAttribute("value", "Equity");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "remove-asset-button");
  deleteButton.innerHTML = "<i class='fal fa-times-circle'></i>";
  deleteButton.onclick = function() {
    removeAsset(equityAssetContainer);
  }

  const equityAssetHeader = document.createElement("h4");
  equityAssetHeader.innerHTML = "Equities";

  const equityPortfolioWeightLabel = document.createElement("label");
  equityPortfolioWeightLabel.innerHTML = "Portfolio Weight (%)";

  const equityPortfolioWeightInput = document.createElement("input");
  equityPortfolioWeightInput.setAttribute("class", "asset-weight-input");
  equityPortfolioWeightInput.placeholder = "10";

  const equityPortfolioExpectedReturnLabel = document.createElement("label");
  equityPortfolioExpectedReturnLabel.innerHTML = "Expected Return (%)";

  const equityPortfolioExpectedReturnInput = document.createElement("input");
  equityPortfolioExpectedReturnInput.setAttribute("class", "asset-expected-return-input");
  equityPortfolioExpectedReturnInput.placeholder = "10";

  portfolioAssetSubContainer.appendChild(equityAssetContainer)
  equityAssetContainer.appendChild(deleteButton);
  equityAssetContainer.appendChild(equityAssetHeader);
  equityAssetContainer.appendChild(equityPortfolioWeightLabel);
  equityAssetContainer.appendChild(equityPortfolioWeightInput);
  equityAssetContainer.appendChild(equityPortfolioExpectedReturnLabel);
  equityAssetContainer.appendChild(equityPortfolioExpectedReturnInput);
}

function addBondAsset(portfolioAssetSubContainer) {
  if (document.querySelector("#bond-asset-sub-container") !== null) {
    alert("Bond asset has been already added to portfolio.");
    return;
  }

  const bondAssetContainer = document.createElement("div");
  bondAssetContainer.setAttribute("class", "asset-sub-container");
  bondAssetContainer.setAttribute("id", "bond-asset-sub-container");
  bondAssetContainer.setAttribute("value", "Bond");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "remove-asset-button");
  deleteButton.innerHTML = "<i class='fal fa-times-circle'></i>";
  deleteButton.onclick = function() {
    removeAsset(bondAssetContainer);
  }

  const bondAssetHeader = document.createElement("h4");
  bondAssetHeader.innerHTML = "Bonds";

  const bondPortfolioWeightLabel = document.createElement("label");
  bondPortfolioWeightLabel.innerHTML = "Portfolio Weight (%)";

  const bondPortfolioWeightInput = document.createElement("input");
  bondPortfolioWeightInput.setAttribute("class", "asset-weight-input");
  bondPortfolioWeightInput.placeholder = "10";

  const bondPortfolioExpectedReturnLabel = document.createElement("label");
  bondPortfolioExpectedReturnLabel.innerHTML = "Expected Return (%)";

  const bondPortfolioExpectedReturnInput = document.createElement("input");
  bondPortfolioExpectedReturnInput.setAttribute("class", "asset-expected-return-input");
  bondPortfolioExpectedReturnInput.placeholder = "10";  

  portfolioAssetSubContainer.appendChild(bondAssetContainer);
  bondAssetContainer.appendChild(deleteButton);
  bondAssetContainer.appendChild(bondAssetHeader);
  bondAssetContainer.appendChild(bondPortfolioWeightLabel);
  bondAssetContainer.appendChild(bondPortfolioWeightInput);
  bondAssetContainer.appendChild(bondPortfolioExpectedReturnLabel);
  bondAssetContainer.appendChild(bondPortfolioExpectedReturnInput);
}

function addPropertyAsset(portfolioAssetSubContainer) {
  if (document.querySelector("#property-asset-sub-container") !== null) {
    alert("Property asset has been already added to portfolio.");
    return;
  }

  const propertyAssetContainer = document.createElement("div");
  propertyAssetContainer.setAttribute("class", "asset-sub-container");
  propertyAssetContainer.setAttribute("id", "property-asset-sub-container");
  propertyAssetContainer.setAttribute("value", "Property");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "remove-asset-button");
  deleteButton.innerHTML = "<i class='fal fa-times-circle'></i>";
  deleteButton.onclick = function() {
    removeAsset(propertyAssetContainer);
  }

  const propertyAssetHeader = document.createElement("h4");
  propertyAssetHeader.innerHTML = "Property";

  const propertyPortfolioWeightLabel = document.createElement("label");
  propertyPortfolioWeightLabel.innerHTML = "Portfolio Weight (%)";

  const propertyPortfolioWeightInput = document.createElement("input");
  propertyPortfolioWeightInput.setAttribute("class", "asset-weight-input");
  propertyPortfolioWeightInput.placeholder = "10";

  const propertyPortfolioExpectedReturnLabel = document.createElement("label");
  propertyPortfolioExpectedReturnLabel.innerHTML = "Expected Return (%)";

  const propertyPortfolioExpectedReturnInput = document.createElement("input");
  propertyPortfolioExpectedReturnInput.setAttribute("class", "asset-expected-return-input");
  propertyPortfolioExpectedReturnInput.placeholder = "10";

  portfolioAssetSubContainer.appendChild(propertyAssetContainer)
  propertyAssetContainer.appendChild(deleteButton);
  propertyAssetContainer.appendChild(propertyAssetHeader);
  propertyAssetContainer.appendChild(propertyPortfolioWeightLabel);
  propertyAssetContainer.appendChild(propertyPortfolioWeightInput);
  propertyAssetContainer.appendChild(propertyPortfolioExpectedReturnLabel);
  propertyAssetContainer.appendChild(propertyPortfolioExpectedReturnInput);
}

function addCommodityAsset(portfolioAssetSubContainer) {
  if (document.querySelector("#commodity-asset-sub-container") !== null) {
    alert("Commodity asset has been already added to portfolio.");
    return;
  }

  const commodityAssetContainer = document.createElement("div");
  commodityAssetContainer.setAttribute("class", "asset-sub-container");
  commodityAssetContainer.setAttribute("id", "commodity-asset-sub-container");
  commodityAssetContainer.setAttribute("value", "Commodity");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "remove-asset-button");
  deleteButton.innerHTML = "<i class='fal fa-times-circle'></i>";
  deleteButton.onclick = function() {
    removeAsset(commodityAssetContainer);
  }

  const commodityAssetHeader = document.createElement("h4");
  commodityAssetHeader.innerHTML = "Commodities";

  const commodityPortfolioWeightLabel = document.createElement("label");
  commodityPortfolioWeightLabel.innerHTML = "Portfolio Weight (%)";

  const commodityPortfolioWeightInput = document.createElement("input");
  commodityPortfolioWeightInput.setAttribute("class", "asset-weight-input");
  commodityPortfolioWeightInput.placeholder = "10";

  const commodityPortfolioExpectedReturnLabel = document.createElement("label");
  commodityPortfolioExpectedReturnLabel.innerHTML = "Expected Return (%)";

  const commodityPortfolioExpectedReturnInput = document.createElement("input");
  commodityPortfolioExpectedReturnInput.setAttribute("class", "asset-expected-return-input");
  commodityPortfolioExpectedReturnInput.placeholder = "10";

  portfolioAssetSubContainer.appendChild(commodityAssetContainer)
  commodityAssetContainer.appendChild(deleteButton);
  commodityAssetContainer.appendChild(commodityAssetHeader);
  commodityAssetContainer.appendChild(commodityPortfolioWeightLabel);
  commodityAssetContainer.appendChild(commodityPortfolioWeightInput);
  commodityAssetContainer.appendChild(commodityPortfolioExpectedReturnLabel);
  commodityAssetContainer.appendChild(commodityPortfolioExpectedReturnInput);
}