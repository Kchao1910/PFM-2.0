// This function serves to create the instructions to create a budget and the base layout for budgeting
function createBudgetPage() {
  // This is to prevent the web app to create a second budget page if the user is already on the budgeting page
  if (document.querySelector("#budget-container") != null) {
    alert("You are already on the budgeting page!");
    return;
  }

  // This is done to stay on the same page but to remove the unnecessary elements from the page
  const body = removeNodesFromMainSite();

  // Create directions for interactions
  // 1 instruction to decide the month to select
  // 1 instruction to direct the user to either add a new category or remove an existing category

  // create budget container
  const budgetContainer = document.createElement("div");
  budgetContainer.setAttribute("id", "budget-container");

  // create containers for header, month selection, and buttons
  const budgetHeaderContainer = document.createElement("div");
  const budgetMonthSelectionContainer = document.createElement("div");
  const budgetAddRemoveCategoryContainer = document.createElement("div");
  budgetMonthSelectionContainer.setAttribute("id", "budget-month-selection-container");

  // create budget header
  const budgetHeader = document.createElement("h1");
  budgetHeader.innerHTML = "Budgeting";

  //create month selection instructions
  const monthSelectionInstructions = document.createElement("label");
  monthSelectionInstructions.innerHTML = "Choose the month you would like to create a budget for.&ensp;";

  // create month selection
  const monthSelection = document.createElement("select");
  monthSelection.setAttribute("id", "month-selection");

  // create month options
  const january = document.createElement("option");
  const february = document.createElement("option");
  const march = document.createElement("option");
  const april = document.createElement("option");
  const may = document.createElement("option");
  const june = document.createElement("option");
  const july = document.createElement("option");
  const august = document.createElement("option");
  const september = document.createElement("option");
  const october = document.createElement("option");
  const november = document.createElement("option");
  const december = document.createElement("option");

  // set values for month options
  january.setAttribute("value", "January");
  february.setAttribute("value", "February");
  march.setAttribute("value", "March");
  april.setAttribute("value", "April");
  may.setAttribute("value", "May");
  june.setAttribute("value", "June");
  july.setAttribute("value", "July");
  august.setAttribute("value", "August");
  september.setAttribute("value", "September");
  october.setAttribute("value", "October");
  november.setAttribute("value", "November");
  december.setAttribute("value", "December");

  // set inner text for month options
  january.innerHTML = "January";
  february.innerHTML = "February";
  march.innerHTML = "March";
  april.innerHTML = "April";
  may.innerHTML = "May";
  june.innerHTML = "June";
  july.innerHTML = "July";
  august.innerHTML = "August";
  september.innerHTML = "September";
  october.innerHTML = "October";
  november.innerHTML = "November";
  december.innerHTML = "December";

  // create instructions for adding a new category and removing an existing category
  const categoryInstructions = document.createElement("label");
  categoryInstructions.innerHTML = "Click on the <span style='color: green'>'&plus;'</span> button to add a category or the <span style='color: red'>'&minus;'</span> button to remove a category.&ensp;";

  // create add category button
  const addCategoryButton = document.createElement("button");
  addCategoryButton.innerHTML = "<i class='fas fa-plus-circle'></i>";
  addCategoryButton.setAttribute("id", "add-category-button");
  addCategoryButton.setAttribute("class", "category-buttons");

  // set onclick event for add category button
  addCategoryButton.onclick = function() {
    addCategory();
  }

  // create remove category button
  const removeCategoryButton = document.createElement("button");
  removeCategoryButton.innerHTML = "<i class='fas fa-minus-circle'></i>";
  removeCategoryButton.setAttribute("id", "remove-category-button");
  removeCategoryButton.setAttribute("class", "category-buttons");

  // set onclick event for remove category button
  removeCategoryButton.onclick = function() {
    removeNodesFromCategoryContainers();
  }

  // create containers for generated categories
  const mainCategoryContainer = document.createElement("div");
  mainCategoryContainer.setAttribute("id", "main-category-container");

  // create 2 sub containers to host 4 containers inside in row format
  const budgetSubContainer1 = document.createElement("div");
  const budgetSubContainer2 = document.createElement("div");
  budgetSubContainer1.setAttribute("class", "budget-sub-containers");
  budgetSubContainer2.setAttribute("class", "budget-sub-containers");

  // create 8 sub containers for categories
  const category1Container = document.createElement("div");
  const category2Container = document.createElement("div");
  const category3Container = document.createElement("div");
  const category4Container = document.createElement("div");
  const category5Container = document.createElement("div");
  const category6Container = document.createElement("div");
  const category7Container = document.createElement("div");
  const category8Container = document.createElement("div");
  category1Container.setAttribute("class", "category-containers");
  category2Container.setAttribute("class", "category-containers category-containers-margin-left");
  category3Container.setAttribute("class", "category-containers category-containers-margin-right");
  category4Container.setAttribute("class", "category-containers");
  category5Container.setAttribute("class", "category-containers");
  category6Container.setAttribute("class", "category-containers category-containers-margin-left");
  category7Container.setAttribute("class", "category-containers category-containers-margin-right");
  category8Container.setAttribute("class", "category-containers");

  // create budget submit button
  const budgetSubmitButtonContainer = document.createElement("div");
  const budgetSubmitButton = document.createElement("button");
  budgetSubmitButtonContainer.setAttribute("id", "budget-submit-button-container");
  budgetSubmitButton.setAttribute("class", "feature-description-buttons");
  budgetSubmitButton.innerHTML = "Submit";
  budgetSubmitButton.onclick = function() {
    createBudgetSummaryElements(body);
  }

  // append budget container to body
  body.appendChild(budgetContainer);
  
  // append budget header, month selection, and add/remove containers to main budget container
  budgetContainer.appendChild(budgetHeaderContainer);
  budgetContainer.appendChild(budgetMonthSelectionContainer);
  budgetContainer.appendChild(budgetAddRemoveCategoryContainer);
  
  // append budget header to header container
  budgetHeaderContainer.appendChild(budgetHeader);

  // append months to month selection container
  budgetMonthSelectionContainer.appendChild(monthSelectionInstructions);
  budgetMonthSelectionContainer.appendChild(monthSelection);

  // append months to month selection
  monthSelection.appendChild(january);
  monthSelection.appendChild(february);
  monthSelection.appendChild(march);
  monthSelection.appendChild(april);
  monthSelection.appendChild(may);
  monthSelection.appendChild(june);
  monthSelection.appendChild(july);
  monthSelection.appendChild(august);
  monthSelection.appendChild(september);
  monthSelection.appendChild(october);
  monthSelection.appendChild(november);
  monthSelection.appendChild(december);
  // // // // // // // // // // // // // // // // //

  // append buttons to add/remove category container
  budgetAddRemoveCategoryContainer.appendChild(categoryInstructions);
  budgetAddRemoveCategoryContainer.appendChild(addCategoryButton);
  budgetAddRemoveCategoryContainer.appendChild(removeCategoryButton);

  // append container to host newly created categories
  body.appendChild(mainCategoryContainer);

  // append sub containers
  mainCategoryContainer.appendChild(budgetSubContainer1);
  mainCategoryContainer.appendChild(budgetSubContainer2);

  // append 4 container to each sub container
  budgetSubContainer1.appendChild(category1Container);
  budgetSubContainer1.appendChild(category2Container);
  budgetSubContainer1.appendChild(category3Container);
  budgetSubContainer1.appendChild(category4Container);

  budgetSubContainer2.appendChild(category5Container);
  budgetSubContainer2.appendChild(category6Container);
  budgetSubContainer2.appendChild(category7Container);
  budgetSubContainer2.appendChild(category8Container);
  
  // append submit button to body
  body.appendChild(budgetSubmitButtonContainer);
  budgetSubmitButtonContainer.appendChild(budgetSubmitButton);
}

