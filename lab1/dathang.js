var itemList = {
    "sp001":{   "name":"Sữa Chua Vị Kiwi", 
                "price":21000, 
                "photo":"./images/sanpham/kiwi.jpg"},
    "sp002":{   "name":"Sữa Chua Vị Xoài", 
                "price":22000, 
                "photo":"./images/sanpham/mango.jpg"},
    "sp003":{   "name":"Sữa Chua Vị Dưa lưới", 
                "price":23000, 
                "photo":"./images/sanpham/cantaloupe.jpg"},
    "sp004":{   "name":"Sữa Chua Vị Mâm Xôi", 
                "price":24000, 
                "photo":"./images/sanpham/blackberry.jpg"},
    "sp005":{   "name":"Sữa Chua Vị Dâu Tây", 
                "price":25000, 
                "photo":"./images/sanpham/strawberry.jpg"},
    "sp006":{   "name":"Sữa Chua Vị Việt Quất", 
                "price":26000, 
                "photo":"./images/sanpham/blueberry.jpg"},
    "sp007":{   "name":"Sữa Chua Vị Bưởi", 
                "price":27000, 
                "photo":"./images/sanpham/grapes.jpg"},
    "sp008":{   "name":"Sữa Chua Vị Táo Xanh", 
                "price":28000, 
                "photo":"./images/sanpham/green-apple.jpg"},
    "sp009":{   "name":"Sữa Chua Vị Dứa", 
                "price":29000, 
                "photo":"./images/sanpham/pineapple.jpg"}
};

var addCard = (code) => {
        if (typeof localStorage[code] === 'undefined') {
            console.log(document.getElementById(code).value)
            window.localStorage.setItem(code, document.getElementById(code).value)
        }
        else {
            number=parseInt(document.getElementById(code).value);
            current=parseInt(window.localStorage.getItem(code));
            if (current + number <= 100)
                window.localStorage.setItem(code,current+number);
            else 
            window.localStorage.setItem(code,100);
        }
        console.log(window.localStorage)
}
console.log(window.localStorage)
var tb = document.getElementById('cardtb')
let item = document.createElement('tr')
tb.appendChild(item)
var showCart = () => {
    tb.innerHTML=`<tr>
                    <th>Hình SP</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành Tiền</th>
                    <th></th>
                </tr>`;
    let sumTien = 0;
    for (let i = 0; i <window.localStorage.length; i++) {
        let key = window.localStorage.key(i)
        let item = window.localStorage.getItem(window.localStorage.key(i))
        console.log(itemList[key]);
        sumTien += parseInt(itemList[key].price) * parseInt(item)
        let inin = `<tr>
                        <td> <img src="${itemList[key].photo}" width="100px"/> </td>
                        <td> ${itemList[key].name} </td>
                        <td> ${item}</td>
                        <td> ${parseInt(itemList[key].price)} </td>
                        <td>${parseInt(itemList[key].price) * parseInt(item)} </td>
                        <td> <button onclick="removeCart('${key}')"> <i class="fa fa-trash icon-pink   "></i> </button></td>
                    </tr`
        tb.innerHTML += inin;
    }
    tb.innerHTML += `<td colspan=6 id="sumTien">Tổng tiền: ${sumTien} </td>`
}

showCart()
// console.log(window.localStorage)

// console.log(tb.children)

function removeCart(code) {
    if(typeof window.localStorage[code] !== "undefined") {
    //xóa sản phẩm khỏi localStorage 
    window.localStorage.removeItem(code); //Xóa nội dung của phần thân của bảng (<tbody>) 
    tb.innerHTML=`<tr>
                        <th>Hình SP</th>
                        <th>Tên SP</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Thành Tiền</th>
                        <th></th>
                </tr>`;
    //Hiển thị lại nội dung chi tiết của đơn hàng 
    showCart(); }
}

window.onstorage = ()=> {
    showCart()
}