const main = $(`<div></div>`);
main.addClass("main");
const body = $("body");
body.append(main);

const mainType = $(`<div></div>`);
mainType.addClass("main_Task");
main.append(mainType);

const search = $(`<input></input>`);
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
    category: "الوصفات الرئيسية",
    recipes: [
      { name: " المقلوبة" ,
       Ingredients: "لرؤرؤررؤالمكونات",
       discription: "  11111111111شرح" },
   
  
       { name: " 2المقلوبة" ,
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح" },
   
   
        { name: " 3المقلوبة" ,
            Ingredients: "لرؤرؤررؤالمكونات",
            discription: "  33333333333شرح" },
      ]
  },
  {
  category: "الأكلات التراثية",
    recipes: [
      { name: " المقلوبة" ,
       Ingredients: "لرؤرؤررؤالمكونات",
       discription: "  11111111111شرح" },
   
  
       { name: " 2المقلوبة" ,
        Ingredients: "لرؤرؤررؤالمكونات",
        discription: "  222222222222شرح" },
   
   
        { name: " 3المقلوبة" ,
            Ingredients: "لرؤرؤررؤالمكونات",
            discription: "  33333333333شرح" },
      ]
  },
 
];

mainRecipes.forEach((ele, i) => {
    console.log(ele);
    
  const type_food = $(`<div>${ele.category}</div>`);
  mainType.append(type_food);
//   type_food.on("click", () => {});

  const food = $(`<div>
 
    </div>`);
  meals.append(food);
  food.on("click", () => {});
});
