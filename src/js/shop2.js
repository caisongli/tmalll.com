
window.onload = function () {

    const mian = document.querySelector('.main_mid');

    mian.onmoumove = function (ev) {
        const input = document.querySelectorAll('.shop_product>input[type="checkbox"]');
        const checkAll = document.querySelector('input[class=checkAll]');
        if (ev.target == checkAll) {
            ev.target.onclick = function () {
                if (ev.target.checked) {

                    [...input].map((item) => {

                        item.setAttribute('checked', 'checked')
                    });


                } else {
                    [...input].map((item) => {

                        item.removeAttribute('checked')
                    })
                };

            };
        };

        [...input].forEach((item) => {
            if (ev.target == item) {
                ev.target.onclick = function () {

                    if (this.checked) {
                        this.setAttribute('date', '1');
                    } else {
                        checkAll.checked = false;
                        this.removeAttribute('date');
                    }
                    let num = [];
                    let res = [...input].map((item) => {

                        if (item.hasAttribute('date')) {
                            num.push(+item.getAttribute('date'))
                        }
                        return num
                    });
                    // console.log(input.length);
                    // console.log(res.flat(Infinity).length);
                    if (res.flat(Infinity).length / input.length == input.length) {
                        checkAll.setAttribute('checked', 'checked');
                        console.log('duil');

                    } else {
                        console.log('错了');
                        checkAll.removeAttribute('checked')

                    };

                };

            }
        })
    }

}
{/* <input type="text"  value="${current[0].num}" class="text text-amount J_ItemAmount" data-max="85" data-now="2" autocomplete="off"> */ }
// $('.total').parent().parent().prev().find('input.getGoods').prop('checked')