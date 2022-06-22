window.onload = function () {
    
    const click_li = document.querySelectorAll('li[name="cick_li"]');

    const img_li = document.querySelectorAll('img[class="z_index"]');

    //-----------------选项卡功能---------------

    [...click_li].forEach((item) => {
        
        item.addEventListener('mousemove', function (e) {
           
            [...img_li].forEach((items) => {
                items.style.zIndex = '1';
            });
            [...click_li].forEach((items) => {
                items.firstElementChild.style = 'border:0';
            });
            this.lastElementChild.style.zIndex = '2';
            // this.lastElementChild.style = 'pointer-events: none;';
            this.firstElementChild.style = 'border: 1px solid';
        });
    })

   //-----------------放大镜--------------------
    const imgbox = document.querySelector('.imgbox');
    const smalldiv = document.querySelector('.imgbox >.smalldiv');
    const bigimg = document.querySelector('div.bigimg');
    const big_img = document.querySelector('div.bigimg>img');

    imgbox.onmouseover = function (ev) { 
        smalldiv.style.display = 'block';
        bigimg.style.display = 'block';
    }


    imgbox.onmousemove = function (ev) { 
       
        smalldiv.style.zIndex = '3';
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
        
        big_img.style.left = -2 * x + 'px';
        big_img.style.top = -2 * y + 'px';

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
    
    
    
 }
