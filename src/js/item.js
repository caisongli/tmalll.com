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
 console.log(res);
  let template = `
    <img src="./${pic[0].src}"> <img src="./${pic[0].src}"> <img src="./${pic[0].src}"> 
  `;
  $('.rightContent>.imgbox').html(template);
}).catch(xhr => {
  console.log(xhr.status);
});