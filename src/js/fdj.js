window.onload = function () {
    
    const click_li = document.querySelectorAll('li[name="cick_li"]');

    const img_li = document.querySelectorAll('img[class="z_index"]');
    const bigimg = document.querySelector('div.bigimg');
    //-----------------选项卡功能---------------
console.log(bigimg);
    [...click_li].forEach((item) => {
        
        item.addEventListener('mousemove', function (e) {

            // if (e.target == img_li) {
                
                [...img_li].forEach((items) => {
                    items.style.zIndex = '0';
                });
                [...click_li].forEach((items) => {
                    items.firstElementChild.style = 'border:0';
                });
                this.lastElementChild.style.zIndex = '1';
                // this.lastElementChild.style = 'pointer-events: none;';
            this.firstElementChild.style = 'border: 1px solid';
            // console.log(this.lastElementChild.src);
            bigimg.firstElementChild.src=this.lastElementChild.src
            
            // }
           
            
        });
    })

   //-----------------放大镜--------------------
    const imgbox = document.querySelector('.imgbox');
    const smalldiv = document.querySelector('.imgbox >.smalldiv');
    // const bigimg = document.querySelector('div.bigimg');
    const main_left = document.querySelector('.main_content>div.main_left');
    console.log(main_left);

    imgbox.onmouseover = function (ev) { 
        smalldiv.style.display = 'block';
        bigimg.style.display = 'block';
    }

    main_left.onmousemove = function (ev) { 
        if (ev.target==imgbox) {
            smalldiv.style.zIndex = '6';
            let x = ev.offsetX-100;
            let y = ev.offsetY-100;
            // console.log(x,y);
            
            if (x <= 20) {
                x = 20;
            } else if (x >= 243) { x=243}
            if (y <= 20) { y = 20}else if(y >= 222) { y= 222 };
            smalldiv.style.left = x+'px';
            smalldiv.style.top = y + 'px';
            // console.log(ev.offsetX, ev.offsetY);
            // left:-376px；top:-400
            if (y <= 40) { y = 0}else if(y >= 200) { y = 200 };
            if (x <= 40) { x = 0}else if(x >= 190) { x= 190 };
            
            const big_img = document.querySelector('div.bigimg>img');
            big_img.style.left = -2 * x + 'px';
            big_img.style.top = -2 * y + 'px';
        }
     }

    imgbox.onmouseout = function (ev) { 
        smalldiv.style.display = 'none';
        bigimg.style.display = 'none';
    }
     
 //-------------------产品件数----------------
    const input = document.querySelector('#text_input');
    const top_icon = document.querySelector('#top_icon');
    const bot_icon = document.querySelector('#bot_icon');
    
    console.dir(input);
    top_icon.onclick = function (events) {
        
        input.value++;

        bot_icon.onclick = function (events) {
            if (input.value>1) {
                input.value--;
            } else {
                input.value=1;
             }
            
        }
    };

    input.oninput = function (ev) { 

        top_icon.onclick = function (events) {
        
            input.value++;

            bot_icon.onclick = function (events) {
                if (input.value>1) {
                    input.value--;; 
                } else {
                    input.value=1;
                 }
                
            }
        };
      

    }
    //-----------轮播图--------------
    
    const swiper1 = new Swiper('.lunbobox',{
        // effect:'cube',
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev1",
        },
        direction: "vertical",
        pagination: {
        el: '.swiper-pagination',
        clickable :true,
        },
        speed: 300,
        loop:true,
        autoplay: {
          disableOnInteraction: false,
          
        }
    });
    
    //---------------------点击选择---------------------------------------------
    const SelectionBox = document.querySelectorAll('#ProductSelection>div');
    const Selectionp = document.querySelectorAll('#ProductSelection>div>p');

    console.log(SelectionBox);
    let i = 0;
        [...Selectionp].forEach(items => {
            items.onclick = function (events) {
               
                [...Selectionp].forEach(items => {
                    items.removeAttribute('class');
                });
                this.classList.add('active');
                this.setAttribute('num', `${i++}`);
                if (this.getAttribute('num') % 2) {
                    this.classList.remove('active');
                };
                
                this.onmouseout = function () {

                    i = 0;

                 }
                // if (i > 10) {
                //     i = 0;
                // }
            //     if (this.hasAttribute('c4')) {
            //        console.log(1);
            //   }

            };

              

                
            
        })
 }