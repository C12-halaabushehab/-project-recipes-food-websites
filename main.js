const main = $(`<div></div>`);
main.addClass("main");
const body = $("body");
body.append(main);

const mainType = $(`<div></div>`);
mainType.addClass("main_Type");
main.append(mainType);

var img_food = $("<img />", {
  id: "logo_food",
  src: "logo_food.jpg",
});
img_food.appendTo($("#logo_food"));
mainType.append(img_food);

const search = $(`<div class="search_list"> <label for="search">البحث</label>
    <input class="search" id="search"  type="search" placeholder="ابحث عن وصفة"></input> <button id="looking"  >enter</button>   <ul id="result"></ul></div>`);

mainType.append(search);

const chooseYor_list = $(`<div></div>`);
chooseYor_list.addClass("choose_list");
main.append(chooseYor_list);

const meals = $(`<div></div>`);
meals.addClass("meals");
main.append(meals);

const tag_tape = $(`<div></div>`);
tag_tape.addClass("tag_tape");
main.append(tag_tape);

const meals_1 = $(".meals_1");
const meals_2 = $(".meals_2");
const meals_3 = $(".meals_3");
const meals_4 = $(".meals_4");
const meals_5 = $(".meals_5");
const meals_6 = $(".meals_6");
const meals_7 = $(".meals_7");
const meals_8 = $(".meals_8");
const meals_9 = $(".meals_9");
const meals_10 = $(".meals_10");
const meals_11 = $(".meals_11");
const meals_12 = $(".meals_12");
// const menu=$(".menu")
const mainMenu=$('#mainMenu  ')
const mainDish=$('#mainDish ')
const appetizers=$('#appetizers')
const Desserts=$('#Desserts')
const drinks=$('#drinks')
$(function () {
  meals_1.hide();
  meals_2.hide();
  meals_3.hide();
  meals_4.hide();
  meals_5.hide();
  meals_6.hide();
  meals_7.hide();
  meals_8.hide();
  meals_9.hide();
  meals_10.hide();
  meals_11.hide();
  meals_12.hide();
//   menu.hide();
mainMenu.hide();
mainDish.hide();
appetizers.hide();
Desserts.hide();
drinks.hide();
});

const mainRecipes = [
  {
    category: "الأكلات التراثية",
  },

  {
    category: "الوصفات الرئيسية",
    recipes: [
      {
        name: " المقلوبة",
        Ingredients: ` hh`,
        discription: ` hh `,
      },

      {
        name: " 2المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح",
      },

      {
        name: " 3المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  33333333333شرح",
      },
    ],
  },

  {
    category: "المقبلات ",
    recipes: [
      {
        name: " المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  11111111111شرح",
      },

      {
        name: " 2المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح",
      },

      {
        name: " 3المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  33333333333شرح",
      },
    ],
  },

  {
    category: "  ..السلطات",
    recipes: [
      {
        name: " 1المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  11111111111شرح",
      },

      {
        name: " 2المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح",
      },

      {
        name: " 3المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  33333333333شرح",
      },
    ],
  },

  {
    category: " العصائر",

    recipes: [
      {
        name: " 4المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  11111111111شرح",
      },

      {
        name: " 5المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح",
      },

      {
        name: " 6المقلوبة",
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  33333333333شرح",
      },
    ],
  },
];

const allrecipes = [
  {
    img: "مقلوبة.webp",

    name: " المقلوبة",
    Ingredients: `hh `,
    discription: ` hh`,
  },

  {
    img: "مسخن.jpg",
    name: " المسخن",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "العكوب.jpg",
    name: " العكوب",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: "بابا غنوج.jpg ",

    name: "متبل",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "فتة حمص.jpg",

    name: "فتة الحمص ",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "مخللات.jpg",

    name: "مخلللات",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: " كنافة.jpg   ",

    name: " الكنافة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "تمرية.jpg",

    name:  " تمرية نابلسية",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "هريسة الاينسون.jpg",

    name: " اليانسونية",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: "شاي 6.jpg",

    name: "شاي على الفحم",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "كركديه.jpg",
    name: " كركديه",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "عصير اللوز.webp  ",
    name: " شراب اللوز",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },
];

mainRecipes.forEach((ele, i) => {
  console.log(ele);

  const thelist = $(
    `<div  id="category${i}" class="category" data-category ="category${i}  ">${ele.category}</div>`
  );
  mainType.append(thelist);
});

allrecipes.forEach((ele, i) => {
  const all_list =
    $(`<div  id="all${i}"class="all" data-list="list${i}"> <div class="border" id="border${i}"  data-border="border${i}"  > <img  class="img_size" src= "${ele.img}"/> 
  
        <h3 class="names"> ${ele.name} </h3> 
  
     
        
        </div>

 
        <button  class="fav" id ="addtofav${i}" data-fav="fav${i} ">favourite </button>

<div class="container"> 
        <h6>Please rate the recipe</h6>
<div class="star">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

        
        </div>  
 `);
  meals.append(all_list);
});

$(function () {
  const your_fav_list = [];
  $(".fav").on("click", function () {
    const favId = $(this).attr("data-fav");
    console.log(your_fav_list);
    your_fav_list.push($('data-border'));
    console.log(your_fav_list);
    console.log("hi");
  });
});

 

 $(function () {
 $('.border').on("click",function(){
 const allId =$(this).attr("data-border");
 console.log("this all" , this)
 $('.meals').html($ ('.meals_1' ).show(1000))
 })
  });



  $(function () {
 
    $('.category').on("click", function(){
        const categoryId=$(this).attr("data-category")
        console.log(this)
        $('.category').html( mainMenu.show(1000).toggel())
    })
     });
   


     $(function () {
 
        $('.#search').keyup(function(){
$('#result').html('');
const  searchFeild=$('#search').val();
const exp=new RegExp(searchFeild , i);
$.getJSON('data.json',function(data){
    $.each(data,function(key , value){







    })
})   })
 
         });
       
    
    