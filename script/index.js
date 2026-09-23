let cart=[];
const removeActive = () => {
  const allCategoryButtons = document.querySelectorAll(".category-btn");
  allCategoryButtons.forEach((btn) => {
    btn.classList.remove("bg-[#15803D]", "text-white");
    // btn.classList.add("text-[#1F2937]", "hover:text-[#15803D]");
    btn.classList.add("!bg-transparent", "hover:!bg-transparent", "text-[#1F2937]", "hover:text-[#15803D]");
  });
};

const loadPlants = () => {
  removeActive();
  const allTreesBtn = document.getElementById("all-trees-btn");
  allTreesBtn.classList.remove("!bg-transparent", "hover:!bg-transparent", "text-[#1F2937]", "hover:text-[#15803D]");
  allTreesBtn.classList.add("bg-[#15803D]", "text-white");

  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
    });
};

const loadPlantDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlantDetails(data.plants);
    });
};

const displayPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="flex flex-col bg-white rounded-lg shadow p-4 w-full h-full transition duration-200 hover:scale-105 hover:shadow-xl hover:bg-[#FEFCE8]">

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
    <div class="tree-category bg-[#DCFCE7] rounded-xl px-2 py-1 whitespace-nowrap">
      <p class="text-[#15803D] text-center text-sm">${plant.category}</p>
    </div>
    <div class="font-semibold">
      <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
    </div>
  </div>

  <div class="mt-3">
    <button onclick="addToCart(${plant.id})" class="btn text-white bg-[#15803D] rounded-3xl hover:bg-[#F97316] border-none shadow-none w-full">
      Add to Cart
    </button>
  </div>

</div>
        `;
    cardContainer.append(card);
  });
};

const displayPlantDetails = (plant) => {
  const detailsBox = document.getElementById("plant-details-container");
  detailsBox.innerHTML = `
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
  `;
  document.getElementById("plant_modal").showModal();
};

const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    });
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category.category_name;
    button.className = "category-btn btn btn-block justify-start text-left text-sm !bg-transparent hover:!bg-transparent border-none mt-2 text-[#1F2937] hover:text-[#15803D]";

    button.onclick = () => {
      removeActive();
      button.classList.remove("!bg-transparent", "hover:!bg-transparent", "text-[#1F2937]", "hover:text-[#15803D]");
      button.classList.add("bg-[#15803D]", "text-white");
      loadCategory(category.id);
    };

    categoryContainer.append(button);
  });
};

const loadCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
    });
};
loadPlants();
loadCategories();
const addToCart=(id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
   const plant=data.plants;
   const existingPlant= cart.find((item)=>item.id===plant.id);
   if(existingPlant){
    existingPlant.quantity+=1;
   }
   else{
    cart.push({
      ...plant,
      quantity:1
    });
   }
   displayCart();
   updateTotal();
  });
}
const displayCart=()=>{
  const cartContainer=document.getElementById("cart-container");
  cartContainer.innerHTML="";
  cart.forEach((plant)=>{
  const cartItem=document.createElement("div");
  cartItem.innerHTML=`
  <div class="bg-[#DCFCE7] rounded-lg p-3 mb-2 flex justify-between items-center">
  <div>
  <h1 class="font-semibold text-sm text-[#1F2937]">${plant.name}</h1>
  <p class="text-sm text-black">
   <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}× ${plant.quantity}
  </p>
  </div>
  
     <button class="text-[#FF0000] text-xl">
                    <i class="fa-solid fa-xmark"></i>
                </button>
  
  </div>
  `;
  cartContainer.append(cartItem);
  })
}

const updateTotal=()=>{
  let total=0;
  cart.forEach((plant)=>{
    total+=plant.price*plant.quantity;
  });
document.getElementById("cart-total").innerText=total;
};