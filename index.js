// console.log(document);
// console.log(btnPlus);
// const totalPrice = document.getElementById("total");
// const item = document.getElementsByTagName("i");
// const btnPlus2=document.querySelector(".plus")
// const check=document.querySelectorAll("input")
// console.log(check);
var btnPlus = document.getElementsByClassName("plus");
// console.log(btnPlus)
const checkboxs = document.querySelectorAll(".check");
// console.log(checkboxs);

for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  checkboxs[i].addEventListener("click", total);
}

function increment(event) {
  // console.log(event)
  const btn = event.target;
  // console.log(btn)
  const divElt = btn.parentElement;
  //   console.log(divElt)
  var quentityTag = divElt.querySelector("p");
  var quentityValue = Number(quentityTag.innerHTML);
  quentityValue++;
  quentityTag.innerHTML = quentityValue;
  //   console.log(quentityValue);
  const trElt = divElt.parentElement.parentElement;
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  // console.log(unitePriceValue)
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  // console.log(priceValue)
}
function total(e) {
  const checkBox = e.target;
  // console.log(checkBox)
  const trElt = checkBox.parentElement.parentElement;
  // console.log(trElt)
  const priceValue = Number(trElt.querySelector(".price").innerHTML);
  // console.log(priceValue)
  var totalTag = document.getElementById("total");
  // console.log(totalTag)
  var totalValue = Number(totalTag.innerHTML);
//   console.log(totalValue);
if (checkBox.checked===true) {
    totalValue+=priceValue
}
else{
    totalValue-=priceValue
}

totalTag.innerHTML=totalValue


}
