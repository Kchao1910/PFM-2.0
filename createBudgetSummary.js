function createBudgetSummaryElements(body) {
  const categoryContainers = document.querySelectorAll(".category-containers");

  if (categoryContainers[0].hasChildNodes() === false) {
    alert("No categories to submit!");
    return;
  }

  // makes sure that duplicate summaries do not appear if user decides to click submit button more than one time
  if (document.querySelector("#budget-summary-container") !== null) {
    removeBudgetSummaryContainer(body);
  }

  // create summary (includes the following): summary header, total budget allocated, total expenses, and budget leftover/ budget exceeded
  // create summary container
  const budgetSummaryContainer = document.createElement("div");
  budgetSummaryContainer.setAttribute("id", "budget-summary-container");

  // create sub containers
  const budgetSummaryHeaderContainer = document.createElement("div");
  const totalBudgetTextContainer = document.createElement("div");
  const totalExpensesTextContainer = document.createElement("div");
  const budgetLeftoverTextContainer = document.createElement("div");
  const budgetChartContainer = document.createElement("canvas");
  budgetChartContainer.setAttribute("id", "budget-chart-container");

  // create summary header
  const budgetSummaryHeader = document.createElement("h2");

  // create total budget text
  const totalBudgetText = document.createElement("p");

  // create total expenses text
  const totalExpensesText = document.createElement("p");

  // create budget leftover/ budget exceeded text
  const budgetLeftoverText = document.createElement("p");

  // append to body of budget page
  body.appendChild(budgetSummaryContainer);

  // append sub containers
  budgetSummaryContainer.appendChild(budgetSummaryHeaderContainer);
  budgetSummaryContainer.appendChild(totalBudgetTextContainer);
  budgetSummaryContainer.appendChild(totalExpensesTextContainer);
  budgetSummaryContainer.appendChild(budgetLeftoverTextContainer);
  budgetSummaryContainer.appendChild(budgetChartContainer);

  // append summary element to summary container
  budgetSummaryHeaderContainer.appendChild(budgetSummaryHeader);
  totalBudgetTextContainer.appendChild(totalBudgetText);
  totalExpensesTextContainer.appendChild(totalExpensesText);
  budgetLeftoverTextContainer.appendChild(budgetLeftoverText);

  // setting the values for budget summary
  setBudgetSummaryValues(budgetSummaryHeader, totalBudgetText, totalExpensesText, budgetLeftoverText);

  // create csv download elements
  createCSVDownloadElements(body);
}

function setBudgetSummaryValues(budgetSummaryHeader, totalBudgetText, totalExpensesText, budgetLeftoverText) {
  // retrieving the values to set the values for the budget summary
  const monthSelectionValue = document.querySelector("#month-selection").value;
  const categoryValuesList = document.querySelectorAll(".category-input");
  const budgetValuesList = document.querySelectorAll(".budget-input");
  const expenseValuesList = document.querySelectorAll(".expense-input");

  // set budget summary header (shows month chosen)
  budgetSummaryHeader.innerHTML = "Budget Summary for " + monthSelectionValue;

  // set total budget allocated for particular month
  totalBudget = calculateTotalSum(budgetValuesList);
  totalBudgetText.innerHTML = "Total Budget: $" + totalBudget.toFixed(2);

  // set total expenses for particular month
  totalExpenses = calculateTotalSum(expenseValuesList);
  totalExpensesText.innerHTML = "Total Expenses: $" + totalExpenses.toFixed(2);

  // set budget leftover
  calculateBudgetLeftover(totalBudget, totalExpenses, budgetLeftoverText);
  createBudgetChart(totalBudget, totalExpenses);
}

function calculateTotalSum(valueList) {
  let sum = 0;

  // calculate budget sum
  for (let i = 0; i < valueList.length; i++) {
    sum = sum + parseFloat(valueList[i].value);
  }

  return sum;
}

function calculateBudgetLeftover(totalBudget, totalExpenses, budgetLeftoverText) {
  let budgetLeftover = totalBudget - totalExpenses;

  // set different text depending if the amount is under/over budget
  if (totalBudget >= totalExpenses) {
    budgetLeftoverText.innerHTML = "You have " + "<span style='color: green'>$" + budgetLeftover.toFixed(2) + "</span> left in your budget.";
  } else {
    budgetLeftoverText.innerHTML = "You are over budget by " + "<span style='color: red'>$" + Math.abs(budgetLeftover).toFixed(2) + "</span>.";
  }
}


function createBudgetChart(totalBudget, totalExpenses) {
  let ctx = document.querySelector("#budget-chart-container").getContext("2d");
  
  Chart.defaults.global.defaultFontColor = 'black';

  let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Total Budget", "Total Expenses"],
      datasets: [{
        label: "Total Budget vs Total Expenses",
        data: [totalBudget, totalExpenses],
        backgroundColor: [
          "rgb(106, 252, 106)",
          "rgb(252, 106, 107)"
        ]
      }],
    },
    options: {
      defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif",
      responsive: false,
      title: {
        display: true,
        fontSize: 24,
        text: "Total Budget vs Total Expenses"
      },
      legend: {
        labels: {
          fontSize: 16
        }
      }
    }
  });
}

function createCSVDownloadElements(body) {
  //create csv container
  const csvDownloadContainer = document.createElement("div");
  csvDownloadContainer.setAttribute("id", "csv-download-container");

  // create sub containers
  const csvInstructionsContainer = document.createElement("div");
  const csvDownloadInputNButtonContainer = document.createElement("div");

  // guide user with correct input syntax
  const csvDownloadInstructions = document.createElement("p");
  csvDownloadInstructions.innerHTML = "Enter in the name of your file (don't include .csv)";

  // create input area for naming csv file
  const csvInput = document.createElement("input");
  csvInput.setAttribute("id", "csv-filename-input");

  // create download button
  const csvDownloadButton = document.createElement("button");
  csvDownloadButton.innerHTML = "Download";
  csvDownloadButton.setAttribute("class", "feature-description-buttons");
  csvDownloadButton.onclick = function() {
    createCSVDownload();
  }

  // append elements to body and sub containers
  body.appendChild(csvDownloadContainer);
  csvDownloadContainer.appendChild(csvInstructionsContainer);
  csvDownloadContainer.appendChild(csvDownloadInputNButtonContainer);
  csvInstructionsContainer.appendChild(csvDownloadInstructions);
  csvDownloadInputNButtonContainer.appendChild(csvInput);
  csvDownloadInputNButtonContainer.appendChild(csvDownloadButton);
}

function createCSVDownload() {
  // get file name
  const csvFileName = document.querySelector("#csv-filename-input").value;

  // get values for categories, budgets, and expenses
  const categoryValuesList = document.querySelectorAll(".category-input");
  const budgetValuesList = document.querySelectorAll(".budget-input");
  const expenseValuesList = document.querySelectorAll(".expense-input");

  // list for storing individual values 
  var categoryList = [];
  var budgetList = [];
  var expenseList = [];
  var totalLeftList = [];
    
  // this row is for csv formatting
  var row = [];

  // list values 
  for (i = 0; i < categoryValuesList.length; i++) {
    var categoryValue = categoryValuesList[i].value;
    categoryList[i] = categoryValue;
    var budgetValue = parseFloat(budgetValuesList[i].value);
    budgetList[i] = budgetValue;
    var expenseValue = parseFloat(expenseValuesList[i].value);
    expenseList[i] = expenseValue;
    var totalLeftValue = budgetValue - expenseValue;
    totalLeftList[i] = totalLeftValue;
  }

  // row creation
  for (i = 0; i < categoryList.length; i++) {
      row[i] = [categoryList[i], budgetList[i], expenseList[i], totalLeftList[i]];
  }

  // inserting rows into correct format
  var csv = 'Category Name, Budget, Expenses, Total Left\n';
  row.forEach(function(rowList) {
    csv += rowList.join(',');
    csv += "\n";
  });
 
  // make hyperlink download
  var link = document.createElement('a');
  link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  link.target = '_blank';
  link.download = csvFileName + ".csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}