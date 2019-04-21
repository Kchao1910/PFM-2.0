function addCategory() {
  // getting the container to append elements needed to create a new category
  const categoryContainers = document.querySelectorAll(".category-containers");

  // this makes sure that the user creates at most 8 categories per budget
  if (categoryContainers[7].hasChildNodes() === true) {
    alert("You have reached the maximum amount of categories allowed!");
  }

  // create category name, budget amount input, and expense amount input
  // create category name element and set attribute 
  const categoryLabel = document.createElement("label");
  const categoryInput = document.createElement("input");
  categoryLabel.setAttribute("class", "category-label");
  categoryLabel.innerHTML = "Category Name";
  categoryInput.setAttribute("class", "category-input");
  categoryInput.placeholder = "Rent";

  // create label and input for budget amount
  const budgetLabel = document.createElement("label");
  const budgetInput = document.createElement("input");
  budgetLabel.setAttribute("class", "budget-label");
  budgetLabel.innerHTML = "Budget Amount";
  budgetInput.setAttribute("class", "budget-input");
  budgetInput.placeholder = "1000";

  // create label and input for expense amount
  const expenseLabel = document.createElement("label");
  const expenseInput = document.createElement("input");
  expenseLabel.setAttribute("class", "expense-label");
  expenseLabel.innerHTML = "Expense Amount";
  expenseInput.setAttribute("class", "expense-input");
  expenseInput.placeholder = "500";

  for (let i = 0; i < categoryContainers.length; i++) {
    if (categoryContainers[i].childElementCount == 0) {
      categoryContainers[i].appendChild(categoryLabel);
      categoryContainers[i].appendChild(categoryInput);
      categoryContainers[i].appendChild(budgetLabel);
      categoryContainers[i].appendChild(budgetInput);
      categoryContainers[i].appendChild(expenseLabel);
      categoryContainers[i].appendChild(expenseInput);
      break;
    } else {
      continue;
    }

  }

}