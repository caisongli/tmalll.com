import $ from './lib/jquery.esm.js';

$.ajax({
  type: "get",
  url: "../interface/getitems.php",
  dataType: "json"
}).then(res => {

  let template = '';
// console.log(2);
  res.forEach(el => {
    let pic = JSON.parse(el.picture);
    console.log(pic);
    template += ` <div>
    <a href="./details_page.html?id=${el.ID}">
      <img src="${pic[0].src}" alt="${pic[0].alt}"/>
      <p>${el.title}</p>
      <h4>￥${el.price}</h4>
    </a>
  </div>
  `;
  });


  $('.imgContent_1').html(template);

}).catch(xhr => {
  console.log(xhr.status);
});

console.log(JSON.stringify([
  {
      "src" : 
   "./img/logimg/jingyou/10038.jpg",
      "alt":"picture-1"
  },
{
      "src" : 
 "./img/logimg/jingyou/10038.jpg",
      "alt":"picture-1"
  },
{
      "src" : "./img/logimg/jingyou/10038.jpg",
      "alt":"picture-1"
  }
]));