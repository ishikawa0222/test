var total_price = 0 //合計金額
var price = 30000 //価格
var amount = 130 //個数
var discount = 2000 //値引き
const TAX_RATE = 0.1 //税率

total_price = price * 5
total_price = total_price + total_price * TAX_RATE
total_price = total_price -discount
console.log(total_price)