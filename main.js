const main = $(`<div></div>`);
main.addClass("main");
const body = $("body");
body.append(main);

const mainType = $(`<div></div>`);
mainType.addClass("main_Type");
main.append(mainType);

// var img_food = $("<img />", {
//   id: "logo_food",
//   src: "logo_food.jpg",
// });
// img_food.appendTo($("#logo_food"));
// mainType.append(img_food);

const search = $(`<div class="search_list"> <label for="search">البحث</label>
    <input class="search" id="search"  type="search" placeholder="ابحث عن وصفة"></input> <button id="looking"  >enter</button>   <ul id="result"></ul></div>`);

mainType.append(search);

const chooseYor_list = $(`<div> <button id="fan_list"> fav list</button></div>`);
chooseYor_list.addClass("choose_list");
main.append(chooseYor_list);

const meals = $(`<div></div>`);
meals.addClass("meals");
main.append(meals);

const tag_tape = $(`<div></div>`);
tag_tape.addClass("tag_tape");

const mainRecipes = [
  {
    category: "الوصفات الرئيسية",
    recipes: [
      {
        name: " المقلوبة",
        img: "مقلوبة.webp",
        Ingredients: ` 1111`,
        discription: ` hh `,
      },
      {
        name: " المسخن",
        img: "مسخن.jpg",
        Ingredients: "333لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح",
      },
      {
        name: " العكوب",
        img: "العكوب.jpg",
        Ingredients: "222لرؤرؤررؤالمكونات",
        discription: "  33333333333شرح",
      },
    ],
  },

  {
    category: "المقبلات ",
    recipes: [
      {
        name: " فتة الحمص",
        img: "بابا غنوج.jpg ",
        Ingredients: "4444لرؤرؤررؤالمكونات",
        discription: "  44444",
      },
      {
        name: " المتبل",
        img: "فتة حمص.jpg",
        Ingredients: "5555لرؤرؤررؤالمكونات",
        discription: "  55555",
      },
      {
        name: " المخللات",
        img: "مخللات.jpg",
        Ingredients: "6666لرؤرؤررؤالمكونات",
        discription: "  66666666",
      },
    ],
  },

  {
    category: "  الحلويات",
    recipes: [
      {
        name: " الكنافة",
        img: " كنافة.jpg   ",
        Ingredients: "7777لرؤرؤررؤالمكونات",
        discription: "  11111177711111شرح",
      },
      {
        name: " التمرية النابلسية",
        img: "تمرية.jpg",
        Ingredients: "8888لرؤرؤررؤالمكونات",
        discription: "  2888822222222222شرح",
      },
      {
        name: " اليانسونية",
        img: "هريسة الاينسون.jpg",
        Ingredients: "999لرؤرؤررؤالمكونات",
        discription: "  999999999",
      },
    ],
  },

  {
    category: " العصائر",
    recipes: [
      {
        name: " شاي على الفحم",
        img: "شاي 6.jpg",
        Ingredients: "100لرؤرؤررؤالمكونات",
        discription: "  101010",
      },
      {
        name: " الكركديه",
        img: "كركديه.jpg",
        Ingredients: "111198لرؤرؤررؤالمكونات",
        discription: "  1111",
      },
      {
        name: " اللوز",
        img: "عصير اللوز.webp  ",
        Ingredients: "12لرؤرؤررؤالمكونات",
        discription: "  121212",
      },
    ],
  },
];

mainRecipes.forEach((e, i) => {
  const thelist = $(
    `<div  id="category${i}" class="category" data-category ="category${i}">${e.category}</div>`
  );
  mainType.append(thelist);
});

const onClickCategory = function (elem) {
  console.log(elem);
};

mainRecipes.forEach((e, i) => {
  mainRecipes[i].recipes.forEach((e, i) => {
    const imageDiv =
      $(`<div class="border" id="border${i}"  data-border="border${i}"> 
                <img  class="img_size" src= "${e.img}"/> 
            <h3 class="names"> ${e.name} </h3> 
      </div>`);

    const content =
      $(`<button  class="fav" id ="addtofav${i}" data-fav="fav${i} ">
                favourite 
        </button>


        <div class="container"> 
        </div>   
                   <h4>Please rate the recipe</h4>
        <div class="star">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
         </div>   `);

    const container = $(`
    
    <div id="show"  > </div>
    
   `);
    const detailes = $(`<div class="detailes">
    <h1>${e.name}</h1>
    <img src= "${e.img}"/> 
<p>${e.Ingredients}</p>
<p>${e.discription}</p>

    </div>`);
    imageDiv.on("click", function () {
      $(".meals").hide();
      console.log(e);
      $(`.main`).append(detailes);
    });

    container.append(imageDiv);
    container.append(content);
    meals.append(container);
  });
});

// $(function () {
//   const your_fav_list = [];
//   $(".fav").on("click", function () {
//     const favId = $(this).attr("data-fav");
//     console.log(your_fav_list);
//     your_fav_list.push($("data-border"));
//     console.log(your_fav_list);
//     console.log("hi");
// const showRecipes=$(`<div id="showRecipes"> </div>`)

//   });
// });

// $(function () {
//   $(".#search").keyup(function () {
//     $("#result").html("");
//     const searchFeild = $("#search").val();
//     const exp = new RegExp(searchFeild, i);
//     $.getJSON("data.json", function (data) {
//       $.each(data, function (key, value) {});
//     });
//   });
// });
