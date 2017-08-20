export function addNumber(goodsInfo, number) {
    var cartDataStr = localStorage.getItem("cartData") || "{}";
    var cartObj = JSON.parse(cartDataStr);
    var cartItem = cartObj[goodsInfo.id];
    if (cartItem) {
        cartItem.count = parseInt(cartItem.count) + parseInt(number);
    } else {
        cartItem = {};
        cartItem.id = goodsInfo.id;
        cartItem.title = goodsInfo.title;
        cartItem.price = goodsInfo.sell_price;
        cartItem.count = number;
    }
    ;
    cartObj[goodsInfo.id] = cartItem;
    localStorage.setItem("cartData", JSON.stringify(cartObj));
}

export function getTotalCount() {
    var totalCount = 0;
    var carObj = JSON.parse(localStorage.getItem("cartData") || "{}");
    for (var key in carObj) {
        totalCount += carObj[key].count;
    }
    ;
    return totalCount;
}

export function upDateTo(id, newNumber) {
    var cartDataStr = localStorage.getItem("cartData") || "{}";
    var cartObj = JSON.parse(cartDataStr);
    var cartItem = cartObj[id];
    cartItem.count = parseInt(newNumber);
    cartObj[id] = cartItem;
    localStorage.setItem("cartData", JSON.stringify(cartObj));
}

export function deleteItem(id) {
    var cartDataStr = localStorage.getItem("cartData") || "{}";
    var cartObj = JSON.parse(cartDataStr);
    delete cartObj[id];
    localStorage.setItem("cartData", JSON.stringify(cartObj));
}

export function getAll(){
    var cartDataStr = localStorage.getItem("cartData") || "{}";
    var cartObj = JSON.parse(cartDataStr);
    return cartObj;
}
export function getTop(e) {
    var offset=e.offsetTop;
    if(e.offsetParent!=null){
        offset+=getTop(e.offsetParent)
    }
    return offset
}
export function getLeft(e) {
    var offset=e.offsetLeft;
    if(e.offsetParent!=null){
        offset+=getLeft(e.offsetParent)
    }
    return offset
}


