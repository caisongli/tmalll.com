import $ from './lib/jquery.esm.js';
import cookie from './lib/cookie.js';

let shop = cookie.get('shop');

shop = JSON.parse(shop);

let idList = shop.map(el => el.id).join();

$.ajax({
  type: "get",
  url: "../interface/shop.php",
  data: { idList },
  dataType: "json"
}).then(res => {
  let template = '';
  // console.log(res);
  res.forEach((el, i) => {
    let pic = JSON.parse(el.picture);
    // console.log(pic);

    let current = shop.filter(elm => elm.id === el.ID);
    // console.log(current);  
    template += `<div class="shop_product">
    <input type="checkbox" class="getGoods">
    <div class="product_img">
      <a href=""><img src="${pic[0].src}" alt=""></a>
    </div>
    <div class="product_info">
      <a href="">${el.title}</a>
      
    </div>
    <div class="product_size">
      <p>颜色：黑色</p>
      <p>尺码:L</p>
      <a href=""><span>修改</span></a>
    </div>
    <div class="product_message">
      <div class="product_price">
        <h3 class="now_price" style="color:red">${(+el.price).toFixed(2)}</h3>
      </div>
      <div class="product_amount">
        <a  class="add" data_id="${el.ID}" style="cursor: pointer; user-select: none;";>-</a>
        <i style="font-size: 16px;line-height:16px;" class="text-amount"  >${current[0].num}</i>
        <a class="reduce" data_id="${el.ID}" style="cursor: pointer; user-select: none;";>+</a>  
      </div>
      <div class="product_prices">${(+el.price * current[0].num).toFixed(2)}</div>
      <div class="user_operate">
        <span><a href="">移入收藏夹</a></span>
        <span ><a class="del" href="" data-id="${el.ID}">删除</a></span>
      </div>
    </div>
  </div>`;
  });

  $('#productContent').html(template);

  $('.user_operate .del').on('click', function () {
    let res = shop.filter(el => el.id != $(this).attr('data-id')); // 筛选被点击的元素
    cookie.set('shop', JSON.stringify(res)); // 剩余内容写回cookie
    location.reload();// 刷新页面
  });


  //------------------------
  getSum();
  $('.checkAll').eq(0).click(function () {
    $('.getGoods').prop('checked', true)
    getSum()
  }
  );//----全选----------
  $('.getGoods').click(function () {

    getSum();

  })//----用户选---------
  $('.checkAll').eq(1).click(function () {
    $('.getGoods').prop('checked', false);
    location.reload()
  }
  );

  $('.add').click(function () {
    let num = parseInt($(this).next().text());
    num--;
    // let res = shop.filter(el => el.id == $(this).attr('data-id'));
    // console.log(res); // 筛选被点击的元素
    // console.log(num);
    // addItem(res[0].id, num)
    // console.log(res[0].id);
    // addItem(res[0].id, +num);
    // location.reload()



    if (num > 0) {
      $(this).next().text(num);
      let prices = $(this).parent().prev().find('h3').text();
      $(this).parent().next().text(parseFloat(prices * num).toFixed(2));

      getSum();
    };
  });


  $('.reduce').click(function () {
    let numtwo = parseInt($(this).prev().text());
    numtwo++;
    $(this).prev().text(numtwo);
    let price = $(this).parent().prev().find('h3').text();;
    $(this).parent().next().text(parseFloat(price * numtwo).toFixed(2));
    getSum();

  })

  function getSum() {

    let numse = 0;
    let nums = 0;

    $('.product_prices').each(function (el, i) {

      if ($('.getGoods').eq(el).prop('checked'))
        numse += parseFloat($(i).text())
    });
    $('.total').text(numse.toFixed(2));
    //=============================================
    $('.text-amount').each(function (el, i) {
      if ($('.getGoods').eq(el).prop('checked')) {
        nums += parseInt($(i).text()
        )
      };
    })
    $('.numss').text(nums);
  };

  // function addItem(id, num) {
  //   let product = { id, num };

  //   let shop = cookie.get('shop'); // 从cookie中获得数据


  //   if (shop) { // 判断是否获得到数据
  //     shop = JSON.parse(shop);

  //     // 当商品id在cookie数据中已经存在时 需要修改数量 而不是添加商品
  //     if (shop.some(el => el.id == id)) {
  //       let index = shop.findIndex(elm => elm.id == id); // 获得商品对象在数组中的索引
  //       let count = parseInt(shop[index].num);
  //       count += parseInt(num);
  //       shop[index].num = count;
  //     }


  //   }

  //   cookie.set('shop', JSON.stringify(shop));  // 将数组转换成JSON字符串存入cookie
  // }

}).catch(xhr => {
  console.log(xhr.status);
});