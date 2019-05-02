function createPortfolioSummaryElements(body) {
  const assetSubContainer = document.querySelectorAll(".asset-sub-container");

  // retrieving the values to set the values for the budget summary
  const assetTypeValues = document.querySelectorAll(".asset-sub-container");
  const assetWeightInputValues = document.querySelectorAll(".asset-weight-input");
  const assetExpectedReturnValues = document.querySelectorAll(".asset-expected-return-input");

  if (assetSubContainer.length === 0) {
    alert("No asset(s) chosen!");
    return;
  }

  // check if user filled out all fields
  for (let i = 0; i < assetWeightInputValues.length; i++) {
    if (assetWeightInputValues[i].value === "" || assetExpectedReturnValues[i].value === "") {
      alert("Please fill in all input fields");
      return;
    }
  }

  // makes sure that duplicate summaries do not appear if user decides to click submit button more than one time
  if (document.querySelector("#portfolio-summary-container") !== null) {
    removePortfolioSummaryContainer(body);
  }

  // create summary (includes the following): summary header, total budget allocated, total expenses, and budget leftover/ budget exceeded
  // create summary container
  const portfolioSummaryContainer = document.createElement("div");
  portfolioSummaryContainer.setAttribute("id", "portfolio-summary-container");

  // create sub containers
  const portfolioSummaryHeaderContainer = document.createElement("div");
  const expectedReturnContainer = document.createElement("div");
  const portfolioChartContainer = document.createElement("canvas");
  portfolioChartContainer.setAttribute("id", "portfolio-chart-container");

  // create summary header
  const portfolioSummaryHeader = document.createElement("h2");

  // create expected return text
  const expectedReturnText = document.createElement("p");

  // append to body of budget page
  body.appendChild(portfolioSummaryContainer);

  // append sub containers
  portfolioSummaryContainer.appendChild(portfolioSummaryHeaderContainer);
  portfolioSummaryContainer.appendChild(expectedReturnContainer);
  portfolioSummaryContainer.appendChild(portfolioChartContainer);

  // append summary element to summary container
  portfolioSummaryHeaderContainer.appendChild(portfolioSummaryHeader);
  expectedReturnContainer.appendChild(expectedReturnText);

  // setting the values for budget summary
  setPortfolioSummaryValues(portfolioSummaryHeader, expectedReturnText, assetTypeValues, assetWeightInputValues, assetExpectedReturnValues);
}

function setPortfolioSummaryValues(portfolioSummaryHeader, expectedReturnText, assetTypeValues, assetWeightInputValues, assetExpectedReturnValues) {
  const regexCheck = validatePortfolioInput(assetWeightInputValues, assetExpectedReturnValues);
  // if at least one input doesn't match regex exit out of script
  if (regexCheck === false) {
    return;
  }

  checkTotalAssetWeight(assetWeightInputValues)

  // set portfolio summary header
  portfolioSummaryHeader.innerHTML = "Portfolio Summary";

  // set average expected return
  averageExpectedReturn = calculateAverageExpectedReturn(assetWeightInputValues, assetExpectedReturnValues);
  expectedReturnText.innerHTML = "Average Expected Return: <span style='color: green'>" + averageExpectedReturn.toFixed(2) + "%</span>";

  createPortfolioChart(assetTypeValues, assetWeightInputValues);
}

function validatePortfolioInput(assetWeightInputValues, assetExpectedReturnValues) {
  for (let i = 0; i < assetWeightInputValues.length; i++) {
    // sanitize portfolio weight and expected returns
    let assetInputSanitizeRegex = /^([0-9])+(\.[0-9]{2})*$/;

    if (assetInputSanitizeRegex.test(assetWeightInputValues[i].value) !== true) {
      console.log(categoryValuesList[i].value);
      alert("Asset Portfolio Weight #"  + String(i + 1) + " should only include alphanumeric characters!");
      return false;
    }
    if (assetInputSanitizeRegex.test(assetExpectedReturnValues[i].value) !== true) {
      alert("Asset Expected Return #" + String(i + 1) + " should only include integers and/or floats!");
      return false;
    }
  }
}

function checkTotalAssetWeight(assetWeightInputValues) {
  let totalAssetWeight = 0;
  for (let i = 0; i < assetWeightInputValues.length; i++) {
    let currentAssetWeight = parseFloat(assetWeightInputValues[i].value, 10);
    totalAssetWeight = totalAssetWeight + currentAssetWeight;
  }

  console.log(totalAssetWeight);

  if (totalAssetWeight != 100.00) {
    alert("Asset weights must add up to 100!");
    return;
  }
}

function calculateAverageExpectedReturn(assetWeightInputValues, assetExpectedReturnValues) {
  let averageExpectedReturnSum = 0;

  for (let i = 0; i < assetWeightInputValues.length; i++) {
    let currentAssetWeight = parseFloat(((assetWeightInputValues[i].value) / 100), 10);
    let currentAssetExpectedReturn = parseFloat(((assetExpectedReturnValues[i].value) / 100), 10);

    averageExpectedReturnSum = averageExpectedReturnSum + (currentAssetWeight * currentAssetExpectedReturn);
  }

  averageExpectedReturnSum = (averageExpectedReturnSum * 100);

  return averageExpectedReturnSum;
}

function createPortfolioChart(assetTypeValues, assetWeightInputValues) {

  let assetTypeValuesList = [];
  let assetWeightInputValuesList = [];

  for (let i = 0; i < assetTypeValues.length; i++) {
    assetTypeValuesList.push(assetTypeValues[i].getAttribute("value"));
    assetWeightInputValuesList.push(assetWeightInputValues[i].value);
  }

  let ctx = document.querySelector("#portfolio-chart-container").getContext("2d");
  
  Chart.defaults.global.defaultFontColor = 'black';

  let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: assetTypeValuesList,
      datasets: [{
        label: "Asset Weight Distribution",
        data: assetWeightInputValuesList,
        backgroundColor: [
          "rgb(45, 128, 86)",
          "rgb(166, 255, 210)",
          "rgb(90, 255, 173)",
          "rgb(83, 128, 105)",
          "rgb(71, 204, 138)"
        ]
      }],
    },
    options: {
      defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif",
      responsive: false,
      title: {
        display: true,
        fontSize: 24,
        text: "Asset Distribution Weight"
      },
      legend: {
        labels: {
          fontSize: 16
        }
      }
    }
  });
}