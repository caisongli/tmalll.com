import cookie from './lib/cookie.js';
import $ from './lib/jquery.esm.js';

let id = location.search.split('=')[1];
console.log(location.search);
console.log(id);

$.ajax({
  type: "get",
  url: "../interface/getitem.php",
  data: { id },
  dataType: "json"
}).then(res => {
  let pic = JSON.parse(res.details);
  let picture = JSON.parse(res.picture);
  // let price = JSON.parse(res.price);
  console.log(res);
  console.log(picture);
  let template1 = `
    <img src="./${pic[0].src}"> <img src="./${pic[0].src}"> <img src="./${pic[0].src}"> 
  `;
//-----小图框--------------
  let template2 = `
  <img src="./${picture[0].src}">
  <img
  src="${picture[0].src}"
  alt=""
  class="z_index"
  style="z-index:1"
/>
`;
  
  let template3 = ` <img src="./${picture[0].src}">`;

  // let template4 = ` <img src="./${picture[0].src}">`;

  $('.rightContent>.imgbox').html(template1);

  $('li[class=ImgBox]').html(template2);

  $('div[class=bigimg]').html(template3);

  $('#price').html(`¥ ${res.price}`);

  $('#h1_title').html(`${res.title}`);

  $('#joinshopCart').on("click", function (e) {
    addItem(res.ID,$('#text_input').val());
  })

}).catch(xhr => {
  console.log(xhr.status);
});

function addItem(id, num) {
  let product = { id, num };
  console.log(product);

  let shop = cookie.get('shop');
  if (shop) {
     shop = JSON.parse(shop);
    // 当商品id在cookie数据中已经存在时 需要修改数量 而不是添加商品
    if (shop.some(el => el.id == id)) {
      let index = shop.findIndex(elm => elm.id == id); // 获得商品对象在数组中的索引
      let count = parseInt(shop[index].num);
      count += parseInt(num);
      shop[index].num = count;
    } else {
      shop.push(product);
    }
  } else {
    shop = [];
    shop.push(product);
  }

  cookie.set('shop', JSON.stringify(shop));
}