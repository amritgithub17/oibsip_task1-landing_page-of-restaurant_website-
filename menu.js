const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 280,
    img: "item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 180,
    img: "item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 100,
    img: "item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 100,
    img: "item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 200,
    img: "item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 250,
    img: "item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 150,
    img: "item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 200,
    img: "item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 210,
    img: "item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "dinner",
    price: 250,
    img: "item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");//we have used section center only because it is the parent item and will contain all images,article,headings,etc;

//selecting buttons
const container=document.querySelector(".btn-container");


//load items
window.addEventListener("DOMContentLoaded",function(){//DOMContentLoaded is an event which fires when HTML document loads into the web browser
                                                      //window is an object which appears first when a browser opens and document is a property of it
  dispalyMenuItems(menu);

 dispalyMenuButtons()


});







//a function to display menu items
function dispalyMenuItems(menuItems)
{
  let displaymenu=menuItems.map(function(item){//map function is used to change the elements of the array
    //console.log(item);
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="menu-item" >
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">₹${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;////here i have used "backticks" which is used to dynamically upgrade the string

  });
  displaymenu=displaymenu.join("");//the display menu will contain all the 9 elements of the above array with all its properties but it will be discrete and to concatenate the different elements of the above array we have usde "JOIN" method
  sectionCenter.innerHTML = displaymenu;//it will put the whole concatenated string under section-center
}

function dispalyMenuButtons(){
  //we have a problem:if we are including any other category except all,lunch,breakfast,shakes then the button of dinner will not be shown ; it is included only in "all " section
//So to resolve this problem we have to follow basic three steps
//1)get only unique categories - HARDEST ONE
//2)iterate over categories return buttons
//3)make sure to select buttons whn they are available

  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category)){//done to include unique category items
      values.push(item.category);
    }
    return values;
  },['all']);
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  container.innerHTML=categoryBtns;
  const filterbtns = document.querySelectorAll(".filter-btn");
  //filter items
  //now i am going to add the button functionality
  filterbtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const category = e.currentTarget.dataset.id;//for accessing the element
      //console.log(category);
      const menuCategory = menu.filter(function(menuItems){
        if(menuItems.category == category)
        {
          return menuItems;
        }
      });
      if(category == "all")
      {
        dispalyMenuItems(menu);
      }
      else
      {
        dispalyMenuItems(menuCategory);
      }
    });
  });
  ////the above step is basically done to filter the item smeans if we click on 'all' then all item should be shown but if we click on 'breakfast' then item swhich have category as breakfast will be shown
  
};

