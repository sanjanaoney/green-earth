// const removeActive=()=>{
//   const allTreesButton=document.querySelectorAll(".category-btn")
//   allTreesButton.forEach(btn=> btn.classList.remove("active"))
// }
const removeActive = () => {
  const allCategoryButtons = document.querySelectorAll(".category-btn");

  allCategoryButtons.forEach((btn) => {
    btn.classList.remove("bg-[#15803D]", "text-white");
  });
};


// const loadPlants=()=>{
//   removeActive();
//   document.getElementById("all-trees-btn").classList.add("active")
//     const url=`https://openapi.programming-hero.com/api/plants`
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         displayPlants(data.plants)
//     })
// }

const loadPlants = () => {
  removeActive();

  document
    .getElementById("all-trees-btn")
    .classList.add("bg-[#15803D]", "text-white");

  const url = `https://openapi.programming-hero.com/api/plants`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
    });
};

const loadPlantDetail=(id)=>{
  const url=`https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
 displayPlantDetails(data.plants);
  })
}

const displayPlants=(plants)=>{
    const cardContainer=document.getElementById("card-container")
    cardContainer.innerHTML="";
    plants.forEach((plant)=>{
        const card=document.createElement("div");
        card.innerHTML=`
        <div class="flex flex-col bg-white rounded-lg shadow p-4 w-full h-full transition duration-200 hover:scale-105 hover:shadow-xl hover:bg-[#FEFCE8] ">
       

  <div class="image-container">
    <img src="${plant.image}" alt="" class="rounded-md w-full h-40 object-cover">
  </div>

  <div class="tree-name mt-3">
    <h1 onclick="loadPlantDetail(${plant.id})" class="text-normal text-black font-semibold cursor-pointer">${plant.name}</h1>
  </div>

  <div class="paragraph-container text-sm text-[#1F2937] mt-1">
    <p class="line-clamp-2">${plant.description}</p>
  </div>

  <div class="flex justify-between items-center mt-3">
    <div class="tree-category bg-[#DCFCE7] rounded-xl px-2 py-1 whitespace-nowrap ">
      <p class="text-[#15803D] text-center text-sm">${plant.category}</p>
    </div>
    <div class="font-semibold">
      <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
    </div>
  </div>

  <div class="mt-3">
    <button class="btn text-white bg-[#15803D] rounded-3xl hover:bg-[#F97316] border-none shadow-none w-full">
      Add to Cart
    </button>
  </div>

</div>

        `;
        cardContainer.append(card);
    })
}
loadPlants
();

 const displayPlantDetails=(plant)=>{
  const detailsBox=document.getElementById("plant-details-container")
  detailsBox.innerHTML=`
<div>
  <img src="${plant.image}" alt="">
</div>

<div>
  <h1 class="font-bold text-xl">${plant.name}</h1>
</div>
<div>
  <p>Category: ${plant.category}</p>
</div>
<div>
  <p>${plant.description}</p>
</div>
<div>
  <p>Price: <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
</div>
  `
  document.getElementById("plant_modal").showModal();
 }
 const loadCategories=()=>{
  const url=`https://openapi.programming-hero.com/api/categories`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    displayCategories(data.categories);
  })
 }

const displayCategories = (categories) => {
  const categoryContainer =
    document.getElementById("category-container");

  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");

    button.innerText = category.category_name;

    button.className = "category-btn text-left text-black";

    button.onclick = () => {
      removeActive();

      button.classList.add("bg-[#15803D]", "text-white");

      loadCategory(category.id);
    };

    categoryContainer.append(button);
  });
};
const loadCategory = (id) => {
  const url =
    `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
    });
};
loadPlants();
loadCategories();