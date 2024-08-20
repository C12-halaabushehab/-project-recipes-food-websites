const main = $(`<div></div>`);
main.addClass("main")
const body = $("body");
body.append(main);


const mainType = $(`<div></div>`);
mainType.addClass("main_Task")
main.append(mainType);


const search= $(`<input></input>`);
mainType.append(search);



const chooseYor_list= $(`<div></div>`);
chooseYor_list.addClass("choose_list")
main.append(chooseYor_list);





const help_link= $(`<div></div>`);
chooseYor_list.addClass("help_link")
main.append(help_link);


const chooseYor_list= $(`<div></div>`);
chooseYor_list.addClass("main_Task")
main.append(chooseYor_list);


const mainRecipes = [ 
    {category : "وصفات الرئيسية " ,recipes: [{name : " المقلوبة"} ,{Ingredients:"المكونات"},{discription:"  شرح"} ]},




    {category : "سلطات التقليدية " ,recipes: [{name : "kabseh"}]},
    {category : "مقبلات تقليدية" ,recipes: [{name : "cesier"} , {name:"greek"}]},
    {category : "المشروبات التقليدية " ,recipes: [{name : "kabseh"}]},


]

mainRecipes.forEach((ele)=>{
    const oneELe= $(`<div>${ele.category}</div>`)
    mainType.append(oneELe)
    oneELe.on("click",()=>{

    })
})