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

const search = $(`<input class="search" placeholder="ابحث عن وصفة"></input>`);

mainType.append(search);

const chooseYor_list = $(`<div></div>`);
chooseYor_list.addClass("choose_list");
main.append(chooseYor_list);

const meals = $(`<div></div>`);
meals.addClass("meals");
main.append(meals);

const help_link = $(`<div></div>`);
chooseYor_list.addClass("help_link");
main.append(help_link);

const tag_tape = $(`<div></div>`);
tag_tape.addClass("tag_tape");
main.append(tag_tape);

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

  const thelist = $(`<div id="list_need${[i]} "  class="category">${ele.category}</div>`);
  mainType.append(thelist);
});

allrecipes.forEach((ele, i) => {
  const all_list =
    $(`<div id="dish ${[i]}"   class="all"> <div class="border"> <img  class="img_size" src= "${ele.img}"/> <h3 class="names"> ${ele.name} </h3> 
        </div>
<div class="container"> 
        <h6>rateing</h6>
<div class="star">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>

        </div> 
        
       <button id ="addtofav${[i]}  ">favourite </button>
        
        
        
        </div>  
 `);
  meals.append(all_list);
});



 const show_contant =()=>{
   $('#dish1').on("click" ,()=>{
console.log("hi")
    $('.meals').hide();

    // mainRecipes.forEach((ele, i) => {
    //     const dish = $(`<div>${ele.name} ${ele.Ingredients}</div>`);
    //   $(all1).append(dish);
      
    //   });
     show_contant()
} )

}

 show_contant();





































    // $('.category') .on("click" ,()=>{
    
    //     mainRecipes.forEach((ele, i) => {
    //         const thelist = $(`<div class="category">${ele. discription }</div>`);
    //         mainType.append(thelist);
    //       });
    

    // })







































// if (level === maxlevel) {
//     div.style.display = "none";
//     end.style.display = "block";

//     end.addEventListener("click", lettrs);}
  

// });
// }

// };

// start.addEventListener("click", () => {
// alert("welcome " );
// info.style.display = "none";
// div.style.display = "block";
// });











//  const stars=$('.star svg')

// starse.forEach((elem,i)=>{
// elem.on("click" ,()=>
// stars.forEach((star ,i_1)=>{

//     i >=i_1 ? star.addClass.add("active"):star.addClass.remove("active")

// })
// )

// })






