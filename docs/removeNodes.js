function removeAsset(assetContainer) {
  assetContainer.remove();
}

function removeNodesFromMainSite() {
  const body = document.getElementById("body");
  let bodyLength = body.childNodes.length;
  
  for (let i = bodyLength - 1; i > 3; i--) {
    body.removeChild(body.childNodes[i]);
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

function removePortfolioSummaryContainer(body) {
  body.removeChild(body.lastChild);
}

