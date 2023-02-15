
const container = document.getElementById('product');
const singleFoodContainer = document.getElementById('single-product-container')

document.getElementById('search-func').addEventListener('click', mealsData)



function mealsData() {

    let getInput = document.getElementById('searched-meal').value.trim();
    // console.log(getInput);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${getInput}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let htmlElement = "";
            // console.log(meal.meals[0].strMeal);
            if (data.meals) {
                data.meals.forEach(meal => {
                    // console.log(meal.strMealThumb);
                    htmlElement += `
                    <div class="single-product" data-id="${meal.idMeal}">
                        <img src="${meal.strMealThumb}">
                        <h3>${meal.strMeal}</h3>
                        <button onClick="singleMealInfo(${meal.idMeal})">Recipe</button>
                    </div>
                    `;
                    container.style.display = 'grid'
                });
                container.classList.remove('err-message');
                singleFoodContainer.style.display = 'none'; !important

            } else {
                htmlElement = "Sorry We didn't find any Food";
                container.classList.add('err-message');
            }

            container.innerHTML = htmlElement;
            
        });        
}

const singleMealInfo = id =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(meal => showDetails(meal.meals[0]))
    singleFoodContainer.style.display = 'block'
    container.style.display = 'none';
}


// Apply Details from here

const showDetails = (meal) =>{
    console.log(meal);
    
    const htmlFormat = `
    <div class="single-product-details">
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <h4>Ingredients</h4>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient1}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient2}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient3}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient4}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient5}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient6}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient7}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient8}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient9}</p>
        <p><i class="fa-solid fa-square-check icon"></i> ${meal.strIngredient10}</p>
    </div>
    `
    singleFoodContainer.innerHTML = htmlFormat;

    

}