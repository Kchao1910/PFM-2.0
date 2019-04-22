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