const loadPlants=(id)=>{
    const url=`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        displayPlants(data.plants)
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
    <h1 class="text-normal text-black font-semibold">${plant.name}</h1>
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