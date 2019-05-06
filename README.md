# SYM-2.0

# Overview
SYM is a web application that creates simple budgets and calculates a annual return of a simualted portfolio.

# Senarios

Senario 1: Bob.
Bob is a young man trying to figure out his life. He is a college student who over the course of several semesters finds himself stumbling on his finances. He has taken out student loans and eats cup noodles every weekday. On the weekends, he plops himself on the couch to watch Game of Thrones. Before bed he looks at some inspirational Youtube videos and he decides that its time take control of his finances. He types in "budgeting sites" and comes across SYM. He starts to name his budget, creates categories, enters in his budget and expenses, and clicks the download button. Thus, Bob is able to keep track of his expenses. 

Senario 2: Julia.
Julia is the head chef a newly opened restaurant. One of her responsibilities is to order the ingredients they need and keep records of the purchase price. Initially she tries to manual write down every thing in her notebook, as the day goes it gets harder to write down every expense. Her friend, a fellow chef, recommends her to use SYM. Julia goes to SYM and starts typing down the expenses for the restuarant and downloading them to keep a record. She frequently uses the chart to help her visualize where they can cut expenses down. At the end of the day, Julia is able to keep her finances organized without the hassle of writing things down.

# Non Goals
1. Login Page/ Registration
2. Server Side Support

# SYM Flowchart
SYM consists of 3 main pages. Screens displayed here are not indicative of the final product, but provide a visual of the application and functionality.

# Home Page
The home serves 3 main purposes.
1. Allow users to see the functionalities
2. Allow users to choose to create a budget
3. Allow users to choose to simulate the return of a portfolio

<img src="homepage.png">

# Budgeting Page
The budgeting page looks like this.
<img src="budgeting_page.png">
To create a budget the user must do the following:
1. Select the month they want to create a budget for
2. Clicking on the plus button to add a new category
3. Input the category name, budget, and expenses
4. If the category name includes any special characters the application will reject the budget
5. If the budget or expense are not integers or floats the application will reject the budget
6. If all above is correct and filled out then the user can proceed with submitting the budget

On submission the bottom part of the page will look like this.
<img src="budget_summary.png">
As an option the user can name their budget file in the input form and click the download button to download their budget as a CSV file.

# Portfolio Page
The portfolio page looks like this.
<img src="portfolio_page.png">
To create a portfolio simulation the user must do the following:
1. Click on an asset or assets to add to their portfolio
2. Enter in the portfolio weight and expected annual return, if the input for these fields does not match an integer or float to 2 decimals the application will reject the form
3. If a user wants to remove a asset from their portfolio they can click on the red x mark inside a circle to remove it

On submission the page should look like this.
<img src="portfolio_summary.png">