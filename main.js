const searchBtn=document.getElementById('search-btn');
const mealList=document.getElementById('meal');
const mealDetailsContent=document.querySelector('.meal-details-content');
const recipeCloseBtn=document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click',getMealList);

function getMealList(){
	let search=document.getElementById('search-input').value.trim();
	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
	.then(res=>res.json())
	.then(data=>{
		console.log(data);
		let html="";
		if(data.meals){
			data.meals.forEach(meal => {
				html+=`<div class="meal-item" data-id="${meal.idMeal}">
				<div class="meal-img">
				<img src="${meal.strMealThumb}" alt="food">
				</div><div class="meal-name">
				<h3>${meal.strMeal}</h3>
				<a href="#" class="recipe-btn">Order</a></div> </div>
				`;
			});
		}else{
			html=`<h1 class="a">Sorry,we didn't find any meal!</h1>`;
		}

		mealList.innerHTML=html;
	})
}