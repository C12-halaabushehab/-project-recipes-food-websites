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
    <input  class="search" type="search" placeholder="ابحث عن وصفة"></input> <button id="looking"  >enter</button> </div>`);

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
        Ingredients: ` المكونات :
        دجاجة واحدة حجمها متوسط ومقطعة إلى أربع قطع. 
        ثلاثة أكواب من الأرز.
ثلاث حبات من بطاطا.
حبتان من الباذنجان.
بصلة واحدة مقطعة إلى مربعات.

ورقة واحدة من ورق الغار.
عود قرفة.
ملعقة صغيرة من البهارات المشكلة. ملعقة واحدة صغيرة من القرفة الناعمة.
 ملعقة صغيرة واحدة من الهال المطحون.
  ملعقة واحدة صغيرة من الكاري.
 ملعقة كبيرة واخدة من الزيت النباتي.
 ماء لسلق الدجاج.

        `,
        discription: `  
        طريقة التحضير :
        افرمي البصل وضعيه في قدر على الناء، ضعي فوقه ملعقة من الزيت النباتي، ثم قلبيه 
        جيداً وأضيفي الدجاج، ثم قلّيه جيداً
        أضيفي عود القرفة، وورقة الغار، وملعقة القرفة، ثم ضعي الماء حتى يغمر الدجاج، واتركيها على النار حتى تنضج.
بعد نقع الأرز لمدة نصف ساعة، صفيه جيداً من الماء، وضعي عليه البهارات الباقية وملعقتين من الملح. 
اقطعي البطاطا دوائر ثم اقليها، وذلك أيضاً بالنسبة للباذنجان والزهرة،
 بحيث نقطعها ونقليها. أخرجي الدجاج من المرق بعد نضجه، وصفيها من البهارات ثم اقليها. 
 أحضري قدر واسع، ثم ضعي القليل من الأرز المبهر في القاع، ثم ضعي قطع الدجاج المقلية،
  ثم بطاطا ثم الزهرة، وضعي ما تبقى من الأرز فوق المكونات،
   ثم اسكبي كمية من مرق الدجاج بعد تصفيته من البهارات حتى تغمري الأرز كله.
   ضعي القدر على النار،
    وعندما تغلي ويبدأ الأرز بامتصاص المرقة قومي بتخفيف النار إلى أقل درجة،
    واتركيها حتى تنضج. اقلبي القدر في صينية كبيرة،
     ثم اتركيها لمدة عشر دقائق وهي مقلوبة، ثم قومي برفع القدر وقدميها ساخنة.
    `,
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
    Ingredients: ` 
Sure! Here’s a short English paragraph:

"The importance of teamwork cannot be overstated in any successful organization. When individuals work together, they combine their strengths, share ideas, and support each other to achieve common goals. This collaboration not only leads to more innovative solutions but also fosters a positive work environment where everyone feels valued. Effective teamwork can significantly enhance productivity, drive better results, and create a sense of camaraderie among team members. Ultimately, it is through teamwork that challenges are overcome, and success is achieved."

If you need a paragraph on a specific topic, feel free to ask!
    
            `,
    discription: `  
Sure! Here’s a short English paragraph:

"The importance of teamwork cannot be overstated in any successful organization. When individuals work together, they combine their strengths, share ideas, and support each other to achieve common goals. This collaboration not only leads to more innovative solutions but also fosters a positive work environment where everyone feels valued. Effective teamwork can significantly enhance productivity, drive better results, and create a sense of camaraderie among team members. Ultimately, it is through teamwork that challenges are overcome, and success is achieved."

If you need a paragraph on a specific topic, feel free to ask!`,
  },

  {
    img: "مسخن.jpg",
    name: " 2المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "العكوب.jpg",
    name: " 3المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: "سلطة3.jpg",

    name: " 4المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "سلطة2.jpg",

    name: " 5المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "سلطة2.jpg",

    name: "6المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: "بابا غنوج.jpg",

    name: " 7المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "مخللات.jpg",

    name: " 8المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "فتة حمص.jpg",

    name: " 9المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },

  {
    img: "عصير الورد.jpg",

    name: " 10المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  11111111111شرح",
  },

  {
    img: "عصير الليمون.jpg",
    name: " 11المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  222222222222شرح",
  },

  {
    img: "عصير اللوز.webp  ",
    name: " 12المقلوبة",
    Ingredients: "لرؤرؤررؤالمكونات",
    discription: "  33333333333شرح",
  },
];

mainRecipes.forEach((ele, i) => {
  console.log(ele);

  const thelist = $(
    `<div  id="category${i}" class="category data-category ="category${i}  ">${ele.category}</div>`
  );
  mainType.append(thelist);
});

allrecipes.forEach((ele, i) => {
  const all_list =
    $(`<div  id="all${i}"class="all" data-list="list${i}"> <div class="border"> <img  class="img_size" src= "${ele.img}"/> 
  
        <h3 class="names"> ${ele.name} </h3> 
  
      
        <button  class="fav" id ="addtofav${i}" data-fav="fav${i} ">favourite </button>
        
        </div>



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
    console.log(this);
    your_fav_list.push("hello");
    console.log(your_fav_list);
    console.log("hi");
  });
});

 

 $(function () {
 $('.all').on("click",function(){
 const allId =$(this).attr("data-list");
 console.log("this all" , this)
//  alert("good chooice ! give me your rate")
 })

  });

 
