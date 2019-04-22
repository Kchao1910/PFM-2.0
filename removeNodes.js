function removeNodesFromMainSite() {
  const body = document.getElementById("body");
  
  for (let i = 0; i < body.childElementCount - 1; i++) {
    body.removeChild(body.lastChild);
  }

  return body;
}

function removeNodesFromCategoryContainers() {
  const categoryContainers = document.querySelectorAll(".category-containers");

  if (categoryContainers[0].hasChildNodes() === false) {
    alert("No more categories to remove!");
    return;
  }

  // remove category from budget
  for (let i = 7; i < categoryContainers.length; i--) {
    if (categoryContainers[i].hasChildNodes() === true) {
      for (let j = 0; j < 6; j++) {
        categoryContainers[i].removeChild(categoryContainers[i].firstChild);
      }
      break;
    } else {
      continue;
    }
  }
}

function removeBudgetSummaryContainer(body) {
  body.removeChild(body.lastChild);
  body.removeChild(body.lastChild);
}

