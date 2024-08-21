const main = $(`<div></div>`);
main.addClass("main");
const body = $("body");
body.append(main);





const mainType = $(`<div></div>`);
mainType.addClass("main_Type");
main.append(mainType);

var img_food = $('<img />', { 
    id: 'logo_food',
    src: 'logo_food.jpg',
  });
  img_food.appendTo($('#logo_food'));
mainType.append(img_food)


const search = $(`<input class="search"></input>`);

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

mainRecipes.forEach((ele, i) => {
  console.log(ele);

  const thelist = $(`<div class="category">${ele.category}</div>`);
  mainType.append(thelist);
  //   type_food.on("click", () => {});

  const food = $(`<div>
 
    </div>`);
  meals.append(food);
  food.on("click", () => {});
});
