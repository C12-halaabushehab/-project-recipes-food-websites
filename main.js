const main = $(`<div></div>`);
main.addClass("main");
const body = $("body");
body.append(main);

const mainType = $(`<div></div>`);
mainType.addClass("main_Type");
main.append(mainType);

// var img_food = $("<img  />", {
//   id: "logo_food",
//   src: "f2b032a5464f8b065c4d7a3148f6e040.jpg",
// });
// img_food.appendTo($("#logo_food"));
// mainType.append(img_food);

const search = $(`<div class="search_list"> <label for="search">البحث</label>


    <input id="search"  type="text" placeholder="ابحث عن وصفة"    ></input>
    

    
    <button id="looking"  onclick="search()"  >enter</button>  
     <ul id="result"></ul></div>`);

mainType.append(search);

const chooseYor_list = $(
  `<div> <button class="fav_list"> fav list</button></div>`
);
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
        Ingredients: `<h2 >المكونات</h2>
<br>

        <br> كوبان ونصف من الأرز قصير الحبة.<br> ثمرة كبيرة من الباذنجان.<br>. كيلو واحد من الدجاج المسلوق.<br> ثلاثة أكواب ونصف من مرق الدجاج.<br> ملعقتان صغيرتان من الملح.<br> ملعقة صغيرة من البهارات المشكلة. <br>نصف ملعقة صغيرة من مسحوق الكركم.<br> نصف ملعقة صغيرة من مطحون القرفة.<br> ربع ملعقة صغيرة من حب الهال المطحون.<br> ربع ملعقة صغيرة من الفلفل الأسود.<br> ملعقتان كبيرتان من زيت الذرة. <br>كمية مناسبة من زيت الذرة للقلي.<br> كمية قليلة من الصنوبر المقلي.
`,
        discription: ` <h2>طريقة التحضير </h2><br>
        اغسلي الأرز جيداً ثم انقعيه بكمية مناسبة من الماء الدافئ لمدة خمس عشرة دقيقة. أحضري الباذنجان وقطعيه إلى شرائح، ثم رشي عليه القليل من<br> الملح واتركيه لبضع دقائق ثم أزيلي عنه الملح جيداً ولا تقومي بغسله. أحضري مقلاةً عميقة وضعي فيها زيت الذرة، ثم اقلي شرائح <br>الباذنجان حتى يصبح لونه ذهبياً واتركيه جانباً. قطعي الدجاج إلى أربع قطع، ثم أحضري قدراً مناسبة <br>الحجم وضعي فيها كمية قليلة من الأرز ثم شرائح الباذنجان ثم قطع الدجاج وأخيراً أضيفي كمية الأرز المتبقية.<br> اسكبي مرق الدجاج في إناء، ثم أضيفي إليه الفلفل، ومطحون حب الهال، والقرفة، والكركم، والبهارات، والملح، <br>وحركي المزيج جيداً. اسكبي المرق في قدر الأرز تدريجياً، ثم أضيفي ملعقتين من الزيت النباتي. ضعي قدر المقلوبة على<br> نارٍ قوية حتى تصل إلى درجة الغليان، ثم خففي النار وغطي القدر بإحكام. اتركي المقلوبة<br> على <br>النار لمدة نصف ساعة حتى ينضج الأرز تماماً. أحضري طبقاً واسعاً ثم اقلبي فيه قدر المقلوبة، بعد ذلك وزعي الصنوبر المقلي على الوجه وقدميها ساخنة.
 `,
      },
      {
        name: " المسخن",
        img: "مسخن.jpg",
        Ingredients: ` المكونات <br>  <br> دجاجتان مقطعتان إلى أنصاف.<br> بصلة متوسطة مقطعة إلى أرباع  . عودان من القرفة.<br> عشر حبات من الهيل الصحيح. ثلاث قطع من ورق الغار. <br> أربعة كيلو غرامات من البصل المفروم خشناً  .<br> ثلاثة أكواب من زيت الزيتون.<br> ملعقة كبيرة من الملح. ثلاث ملاعق كبيرة من السماق. <br>ملعقة صغيرة من الفلفل الأسود المطحون.<br> ثمانية أرغفة من الخبز الإيراني.<br> لبن زبادي <br>
`,

        discription: `  <br>  طريقة التحضير <br><br>وضع الدجاج في قدر وغمره بالماء ورفعه على نار متوسطة حتى يغلي، <br>والتخلص من الرغوة. إضافة ورق الغار والقرفة والفلفل والهيل والبصل والملح والفلفل، <br>وترك الدجاج مدة نصف ساعة حتى ينضج. وضع البصل في قدر متوسط ورفعه على نار متوسطة<br> وتحريك البصل مدة دقيقتين، وإضافة إليه الزيت وتغطية القدر، وترك البصل حتى ينضج لمدة ثلث ساعة،<br> ثم التتبيل بالفلفل والملح والسماق. وضع قطع الدجاج في صينية فرن ودهنا بزيت قلي البصل، ثم إدخال صينية الدجاج أسفل شواية الفرن وتحميرها حتى تتحمر قطع الدجاج.<br> تغليف صينية فرن بورق الألمنيوم ثم وضع رغيف خبز في الصينية<br> وثنيه ثم غمس أطرافه بزيت قلي البصل، وفرد الرغيف ثم توزيع البصل المقلي عليه، ورش السماق والصنوبر عليه،<br> ثم تحمير الصينية بشواية الفرن لمدّة تتراوح من ثلاث إلى أربع دقائق فقط.<br> وضع الدجاج والأرغفة في طبق التقديم، وتقديم اللبن الزبادي مع المسخن.`,
      },
      {
        name: " العكوب",
        img: "العكوب.jpg",
        Ingredients: `المكوّنات<br> كيلو من العكّوب المنظّف كيلو من العكّوب المنظّف.<br>
 كيلو من قطع اللّحم مع العظم. <br>
بصلة كبيرة مفرومة فرماً ناعماً.<br>
 ملعقة من الثّوم المهروس. <br>
ملعقة من البقدونس المفروم أو الكزبرة. <br>
أربع أكواب من اللّبن ( الرّائب، الجّميد، مخيض اللّبن ) .<br>
 أربع أكواب من الماء السّاخن. ربع كوب من زيت الذّرة.<br>
`,

        discription: `  طريقة التحضير <br>
 بدايةً قومي بتقطيع العكّوب، وفي قدرٍ على النّار ضعي ثلاث ملاعق من زيت الذّرة إضافةً إلى البصل، <br>
شوّحيه قليلاً حتّى يذبل، ثمّ أضيفي قطع اللّحم وقلّبيها قليلاً حتّى يتغيّر لونها. أضيفي الماء السّاخن على <br>
اللّحم وأغلقي القدر حتّى ينضج اللّحم، يمكنكِ زيادة نسبة الماء كلّما قلّت. قبل استواء اللحم بنصف ساعة أضيفي<br>
 العكّوب واتركيه مع اللحم على نار هادئة لمدة نصف ساعة كاملة. قومي بتجهيز اللّبن وتقليبه بواسطة مضربٍ يدويٍ،<br>
 ويفضّل إضافته إلى المرق واللّحم والعكّوب بارداً حتّى لا تتحلّل جزيئاته، مع مراعاة الاستمرار في التّقليب وصولاً <br>
لدرجة الغليان. بعد أنّ يغلي الطّبق تماماً يُترك على نارٍ هادئةٍ <br>
لمدّة ربع ساعة حتّى يتشرّب العكّوب
 نكهة وطعم اللّبن.<br>
 في مقلاة صغيرة يضاف ثلاث ملاعق من زيت الذرة
 وملعقة من الثوم المهروس وملعقة من الكزبرة أو البقدونس أو النّعناع حسب رغبتكِ وتُقلى <br>
المكوّنات قليلاً على النّار حتّى تفوح رائحتها وتُسكب فوق اللّبن. يُضاف الملح في <br>
المرحلة الأخيرة، ويجب مراعاة ملوحة اللّبن. قدّميه بجانب طبقٍ من الأرز الأبيض.`,
      },
    ],
  },

  {
    category: "المقبلات ",
    recipes: [
      {
        name: " فتة الحمص",
        img: "فتة حمص.jpg",
        Ingredients: `   المكونات <br>أوقية من الحمص حب. ثلاث ملاعق صغيرة من عصير الليمون.<br> فص كبير من الثوم المطحون ناعماً. <br>ربع ملعقة كبيرة من الكمون. ست ملاعق صغيرة من الطحينة.<br> ست ملاعق صغيرة من زيت الزيتون.<br> ست ملاعق صغيرة من الماء.<br> ربع ملعقة صغيرة من الملح. <br>رغيف متوسّط من الخبز العربي.<br> ربع كأس من البقدونس، المفروم ناعماً. أربع ملاعق صغيرة من اللوز.`,

        discription: `طريقة التحضير <br>نضع في وعاء عميق، عصير الليمون، والطحينة، والماء، والكمون، والثوم، والملح، <br>ونخلطهم جيداً بواسطة الخلاط الكهربائي. نضيف إلى الخليط السابق الحمص الحب، ولكن نترك منه أربع ملاعق صغيرة جانباً.<br> <br>نضيف زيت الزيتون إلى الخليط السابق، ونخلط مجدداً، حتى نحصل على خليط متجانس. نضع زيت الذرة في مقلاة صغيرة وعلى نار متوسطة، حتى يسخن الزيت قليلاً، ثم نضيف إليه اللوز، ونقلبه حتى يأخذ اللون الذهبي.<br> نضيف إلى خليط الحمص، اللوز المقليّ، والبقدونس، ولبن الزبادي، ونخلطهم جيداً بواسطة ملعقة خشبية كبيرة.<br> نضع فتة الحمص الجاهزة في طبق زجاجي، ونزيّن وجهها بالخبز المقلي، والكمية المتبقيّة من الحمص الحب، واللوز المقلي،<br> ثم نقدم الطبق ساخناً.
`      },
      {
        name: " المتبل",
        img: "بابا غنوج.jpg ",
        Ingredients: `المكونات <br>
        <br> الباذنجان : 2 حبة (كبير الحجم)
 <br>الطحينية : ربع كوب
 <br>لبن زبادي : 2 ملعقة كبيرة
 <br>الثوم : فصّان (مهروس)
 <br>ملح : نصف ملعقة صغيرة
 زيت الزيتون : 2 ملعقة كبيرة    `,
        discription: ` طريقة التحضير <br>  <br>اصنعي شقوقاً بحبات الباذنجان باستخدام السكين واشويها في الفرن.
<br>قشري حبات الباذنجان. وصبي القليل من عصير الليمون.
اهرسي الباذنجان المشوي بالشوكة.
أضيفي الملح، والثوم المهروس، والطحينية، واللبن الزبادي،<br> وعصير الليمون واخلطي المكونات حتى تتجانس.
اسكبي المتبل بطبق التقديم <br>وقدميه إلى جانب الخبز المحمص حسب الرغبة.  `,
      },
      {
        name: " المخللات",
        img: "مخللات.jpg",
        Ingredients: `  المكوّنات <br>اثنان كيلو غرام من الخيار ذي الحبّة الرفيعة.<br> سنون من الثوم (بالإمكان الاستغناء عنه).<br> محلول التخليل: ملعقة صغيرة ممتلئة ملح لكل كوب ماء.<br> نصف كوب خل.<br> ملعقة صغيرة سكر.<br> نصف ملعقة صغيرة ثوم مهروس.<br> نصف ملعقة صغيرة كزبرة مطحونة. <br>بضع حبّات من الفلفل الحار.<br> نصف ملعقة صغيرة فليفلة حمراء مطحونة.<br>`,

        discription: ` طريقة التحضير<br>  نعبئ الخيار في وعاء مناسب مع حبات الثوم.<br> تلحضير محلول التخليل: نملأ وعاء الخيار بالماء تدريجياً (كوباً كوباً) وذلك لعدّها لغايات إضافة الملح، نستمر بالإضافة حتى يغمر الماء حبات الخيار مع الانتباه إلى عدم ملء<br> الإناء بشكل كامل وترك مساحة للخل. نعيد تفريغ الماء في وعاء آخر عميق، ثمّ نضيف الملح بحسب ما هو مذكور في المكوّنات: (ملعقة صغيرة ممتلئة من الملح لكل كوب ماء ).<br> نضيف السكر والتوابل:<br> (ثوم، وكزبرة، وفليفلة، وفلفل حار ) والخل، ونحرّك جيداً حتّى يذوب الملح. نصبّ محلول التخليل في وعاء الخيار، ثمّ نغلق الإناء (المرطبان) جيداً ونتركه لعدّة أيام<br> حتّى تتم عملية التخليل. نحفظه في الثلاجة عند انتهاء عملية التخليل حتّى لا يفسد

   `,
      },
    ],
  },

  {
    category: "  الحلويات",
    recipes: [
      {
        name: " الكنافة",
        img: " كنافة.jpg   ",
        Ingredients: `  المكوّنات<br>  نصف كيلوغرام من الكنافة.<br> خمسمئة غرام من الجبن العكاوي.<br> ثلاثمئة غرام من جبن الموزاريلا.<br> كوب وربع من السمن المذاب. ربع كوب من السكر. <br>ملعقة صغيرة من ماء الزهر.<br> ملعقة صغيرة من ماء الورد.<br> نصف ملعقة صغيرة من صبغة الكنافة البودرة.<br> ثلاث ملاعق كبيرة من الزبدة.
`,
        discription: ` طريقة التحضير <br> تقطيع الجبن العكاوي، ونقعه مع تغيير الماء؛ للتخلّص من الملح. نقع جبن الموزاريلا بالماء، وتغيير الماء؛ <br>للتخلص من الملح. تصفية الجبن جيداً، وإضافة ماء الورد والزهر، والسكر، وتركه في مصفاة. خلط الكنافة مع كوب من السمن مع تفتيتها قدر الامكان. إحضار صينية مستديرة بقياس 22 سنتمتراً. وضع السمن والصبغة في الصينية، وفرك السمن مع اللون ليتغطى تماماً،<br> وتوزيعه<br> في قاع وجوانب الصينية. <br>وضع ثلاثة أرباع مقدار الكنافة في قاع الصينية، وترك حوالي سنتيمتر على الحواف من ارتفاع الكنافة. توزيع الجبن والضغط عليها، لتصبح بطبقة متساوية. <br>وضع قطعة من ورق المطبخ على سطح الجبن، والضغط عليها لامتصاص الماء الزائد من الجبن، ثمّ التخلّص من ورق المطبخ. توزيع بقية الكنافة على السطح، والضغط عليها بخفّة، ثمّ توزيع بقية السمن.<br> وضع الصينية في الفرن على درجة حرارة 200، و لمدّة 45 دقيقة، حتى تتحمّر الجوانب. ترك الصينية تبرد لبضع دقائق، ثمّ قلبها على طبق التقديم، <br>وتوزيع القطر والفستق.`

      },
      {
        name: " التمرية النابلسية",
        img: "تمرية.jpg",
        Ingredients: ` المكوّنات <br>العجينة ثلاثة أكوب من الدقيق.<br> نصف كوب من الزيت النباتيّ. <br>ملعقتان كبيرتان من سكر البودرة.<br> رشّة ملح. ماء.<br> الحشوة ثلاثة أكواب ونصف من الماء. <br>ربع كوب ماء ورد.<br> كوب من السميد.<br> كوب من السكر. نصف كوب من الحليب. <br>ملعقة صغيرة من المستكة المطحونة.`,
        discription: `طريقة التحضير<br> نخلط جميع مكونات الحشوة مع بعضها البعض وهي ( الماء مع ماء الورد والسميد والسكر والحليب ) على النار <br>ونخلط جيداً، حتى يتماسك الخليط، مع الحذر من عدم تكتل الخليط، وبذلك نكون<br> قد حصلنا على الحشوة. *نعجن كلاً من الطحين، والماء، والزيت، وسكر، والملح، وبعد العجن نتركها لتستريح مدّة قدرها<br> نصف ساعة، بعدها نقطّعها إلى كرات صغيرة الحجم. نرقّ العجين المقطّع لأكثر درجة ممكنة، وفي أثناء الرقّ تُدهن العجينة والمنضدة بالزيت النباتيّ حتّى لا تلتصق. نضع الحشوة<br> فوق العجينة المرقوقة، ثمّ نطويها على بعضها، ونقليها في زيت مغلي غزير. نضعها بعد القلي على ورق تنشيف للتخلّص من كميّة الزيوت الكبيرة منها، ثمّ نرشّ عليها سكّر البودرة وبعض <br>المكسرات.`
      },
      {
        name: " اليانسونية",
        img: "هريسة الاينسون.jpg",
        Ingredients: `  المكونات <br> 
       <br>  3 أكوب سميد
<br> نصف كوب دقيق
<br> ملعقة خميرة فورية
 <br> 2 ملعقة سكر
 <br> 3 ملاعق سمسم
 <br> 3 ملاعق حبة البركة
<br>  2 ملعقة يانسون ناعم
 <br>2 ملعقة دقة الكعك
ملعقة بيكينغ باودر   
  <br>
3 أرباع كوب زيت

كوب<br> ونصف ماء دافئ
كوب ونصف قطر<br>
<br>
طحينة لدهن الصينية    ` ,
        discription: ` طريقة التحضير <br> في وعاء، ينقع اليانسون الحب في الماء الساخن لمدة 1/4 ساعة.
<br>
في وعاء آخر، تخلط المكونات الجافة جيداً ثم يضاف الزيت وتعجن جيداً.
<br>
يضاف الماء المنقوع به اليانسون إلى الخليط ويعجن للحصول على عجينة لينة (قد تحتاج العجينة إلى إضافة القليل من الماء).
<br>
تفرد العجينة في صينية مدهونة بقليل من الزيت، تغطى وتترك لتتخمر لمدة ساعة.
<br>
تقطع العجينة مثل الهريسة وتدخل الصينية إلى الفرن على درجة حرارة 180 لتنضج.
<br>
تخرج الصينية من الفرن، يسكب عليها القطر البارد مباشرة ثم تترك لتبرد وتقدم. `,
      },
    ],
  },

  {
    category: " العصائر",
    recipes: [
      {
        name: " شؤاب اللوز",
        img: "عصير اللوز.webp  ",
        Ingredients: ` المكوّنات <br> ثمانية أكواب من الحليب الطازج.<br> كوبان من اللوز غير المقشور.<br> نصف كوب من اللوز المطحون.<br> ستة أكواب من السكر الناعم. نصف ملعقة صغيرة من ماء الزهر.<br> نصف ملعقة صغيرة من ماء الورد.<br> مكوّنات شراب اللوز: ثلاثة أكواب من الحليب الطازج البارد. كوب من مكعبات الثلج.`,
        discription: `  طريقة التحضير <br> نغسل جيداً شرش الحلاوة،<br> ونضعها في قدرٍ مغسولٍ مع خمسمئة ملليلترٍ من الماء<br>، ونترك المواد على نارٍ خفيفةٍ حتّى تصل كمية الماء المتبقية إلى مئة وخمسين ملليلتراً.<br> نخفق مئة وخمسين ملليلتراً من ماء شرش الحلاوة،<br> ثمّ نضيف إليها بالتدريج الحليب، وخلاصة اللوز،<br> وماء الزهر حتّى تتكوّن لدينا رغوةٌ ناعمةٌ وملساء وجامدة في نفس الوقت.<br> نضع في طبقٍ الحليب، والثلج، والمارزبان،<br> ونخفق جيداً حتّى يتكوّن خليطٌ متماسكٌ مع وجود رغوةٍ على الوجه. نصب الشراب في أكواب التقديم،<br> ونوزع فوقه رغوة الشرش.`


      },
      {
        name: " الكركديه",
        img: "كركديه.jpg",
        Ingredients: `  المكونات <br>  كوبان من أوراق الكركديه المنقوعة في الماء المغلي.<br> علبة صغيرة من شرائح الأناناس. كوب من السكر،<br> أو حسب الرغبة.<br> ماء بارد.` ,
      
        discription: `  طريقة التحضير <br>نصفّي أولاً عصير الكركديه ونتخلّص من الأوراق، ثمّ نضعه في وعاء جانباً.<br> نضع شرائح الأناناس في محضّرة الطعام مع عصيرها، ثمّ نخلط على سرعة متوسّطة.<br> نضيف عصير الكركديه والماء ونتابع الخلط، ثمّ نضيف السكر. نسكب عصير الكركديه والأناناس في أكواب التقديم، ونقدّمه بارداً.`
      },
      {
        name: "العرقسوس ",
        img: " 879.webp  ",
        Ingredients: `لالمكوّنات  <br>ستة إلى ثمانية أكواب من الماء البارد.<br> كوب من عرق السوس المجفف. <br>ملعقة كبيرة من كربونات الصودا.`,


        discription: ` طريقة التحضير<br> وضع عرق السوس في وعاء مصنوع من الفخّار. إضافة ثلاث ملاعق كبيرة من الماء.<br> إضافة كربونات الصودا، ثمّ تقليب المزيج إلى أن تمتزج المكوّنات بشكل جيد، <br>ويصبح عرق السوس مبللاً وملتصقاً ببعضه البعض. تغطِية الوعاء باستخدام شاش نظيفة، ثمّ وضع الوعاء في مكان مشمس لمدّة تتراوح بين الساعة إلى ساعتين إلى أن يتخمر. وضع المزيج في قطع الشاش، <br>وربطها جيداً. <br>جلب طبقٍ عميقٍ، ووضع الماء البارد فيه، ثمّ وضع لفة عرق السوس به ونقعها لمدّة ساعة. إخراج اللفة من الوعاء الزجاجي.`

      },
    ],
  },
];

mainRecipes.forEach((e, i) => {
  const thelist = $(
    `<div  id="category${i}" class="category" data-category ="category${i}">${e.category}</div>`
  );
  mainType.append(thelist);

  const filter_det=$(`<div><ul> ${e.recipes}</ul></div>`)
  thelist.on("click",function(){
    meals.hide()

  console.log(e)
  $(`.main`).append(filter_det);
  
  })
  
  





});






const myfav=[];

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
    <h1  class="detailes_h"  >${e.name}</h1>
    <img  class="detailes_img"src= "${e.img}"/> 
<p   class="detailes_p1" >${e.Ingredients}</p>
<p   class="detailes_p2"   >${e.discription}</p>
    </div>`);
    imageDiv.on("click", function () {
      $(".meals").hide();
      console.log(e);
      $(`.main`).append(detailes);

    });
    const  yourlist=$(`<div class="yourlist"> "hh"</div>`)
  content.on("click",function(){
      console.log(e);
    myfav.push(e);
    console.log(myfav)

    $('.fav_list').on("click" , ()=>{
      meals.hide()
  $(`.main`).append(yourlist);
      })
    })








    container.append(imageDiv);
    container.append(content);
    meals.append(container);

  });

  
});







