let shoppingcart =function ()  {
    // Defining shopping cart items
    let items = ["Headphone", "myphone", "hisphone", "iPhone"];

    let addToCart = (item) =>{
        console.log("Items are being added in cart");
        items.push(item);
    } 
    let removeFromCart = () => items.pop()

    let getItems=()=>{
        items.forEach(item => {
            console.log(item);
        });
    }

    return{
        addToCart:addToCart,
        removeFromCart:removeFromCart,
        getItems: getItems
    }
}

let myCart=new shoppingcart();
myCart.addToCart("Zen Phone");
myCart.getItems();