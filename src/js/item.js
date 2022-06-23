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

}).catch(xhr => {
  console.log(xhr.status);
});