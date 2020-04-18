"use strict";

// Variabelen + dom selecteren
var btnAdd = document.querySelector("#btnAdd");
var btnRemove = document.querySelector("#btnRemove");
var cbToggleFlex = document.querySelector("#toggle-flex");
var flexContainer = document.querySelector(".flex-container");
// Flex-direction
var btnRow = document.querySelector("#btnRow");
var btnRowReverse = document.querySelector("#btnRowReverse");
var btnColumn = document.querySelector("#btnColumn");
var btnColumnReverse = document.querySelector("#btnColumnReverse");
// Flex-wrap
var btnNoWrap = document.querySelector("#btnNoWrap");
var btnWrap = document.querySelector("#btnWrap");
var btnWrapReverse = document.querySelector("#btnWrapReverse");
// Justify-content
var btnJsFlexStart = document.querySelector("#btnJsFlexStart");
var btnJsFlexEnd = document.querySelector("#btnJsFlexEnd");
var btnjsCenter = document.querySelector("#btnjsCenter");
var btnJsSpaceBetween = document.querySelector("#btnJsSpaceBetween");
var btnJsSpaceAround = document.querySelector("#btnJsSpaceAround");
var btnJsSpaceEvenly = document.querySelector("#btnJsSpaceEvenly");
// Align-items
var btnAiFlexStart = document.querySelector("#btnAiFlexStart");
var btnAiFlexEnd = document.querySelector("#btnAiFlexEnd");
var btnAiCenter = document.querySelector("#btnAiCenter");
var btnAiStretch = document.querySelector("#btnAiStretch");
var btnAiBaseline = document.querySelector("#btnAiBaseline");
// Align-Content
var btnAcFlexStart = document.querySelector("#btnAcFlexStart");
var btnAcFlexEnd = document.querySelector("#btnAcFlexEnd");
var btnAcCenter = document.querySelector("#btnAcCenter");
var btnAcSpaceBetween = document.querySelector("#btnAcSpaceBetween");
var btnAcSpaceAround = document.querySelector("#btnAcSpaceAround");
var btnAcStretch = document.querySelector("#btnAcStretch");

btnAdd.addEventListener("click", AddItem);
btnRemove.addEventListener("click", RemoveItem);
cbToggleFlex.addEventListener("change", showFlex);

btnNoWrap.addEventListener("click", MoveFlex);
btnWrap.addEventListener("click", MoveFlex);
btnWrapReverse.addEventListener("click", MoveFlex);
// flex-Direction
btnRow.addEventListener("click", MoveFlex);
btnRowReverse.addEventListener("click", MoveFlex);
btnColumn.addEventListener("click", MoveFlex);
btnColumnReverse.addEventListener("click", MoveFlex);
// flex-wrap
btnNoWrap.addEventListener("click", MoveFlex);
btnWrap.addEventListener("click", MoveFlex);
btnWrapReverse.addEventListener("click", MoveFlex);
// justify-content
btnJsFlexStart.addEventListener("click", MoveFlex);
btnJsFlexEnd.addEventListener("click", MoveFlex);
btnjsCenter.addEventListener("click", MoveFlex);
btnJsSpaceBetween.addEventListener("click", MoveFlex);
btnJsSpaceAround.addEventListener("click", MoveFlex);
btnJsSpaceEvenly.addEventListener("click", MoveFlex);
// Align-items
btnAiFlexStart.addEventListener("click", MoveFlex);
btnAiFlexEnd.addEventListener("click", MoveFlex);
btnAiCenter.addEventListener("click", MoveFlex);
btnAiStretch.addEventListener("click", MoveFlex);
btnAiBaseline.addEventListener("click", MoveFlex);
// Align-Content
btnAcFlexStart.addEventListener("click", MoveFlex);
btnAcFlexEnd.addEventListener("click", MoveFlex);
btnAcCenter.addEventListener("click", MoveFlex);
btnAcSpaceBetween.addEventListener("click", MoveFlex);
btnAcSpaceAround.addEventListener("click", MoveFlex);
btnAcStretch.addEventListener("click", MoveFlex);

var counter = document.querySelector(".flex-container");

function AddItem() {
  if (counter.childElementCount <= 35) {
    let newItem = document.createElement("div");
    newItem.setAttribute("class", "item");
    newItem.innerHTML = "Flexbox Item ";
    flexContainer.appendChild(newItem);
  }
}

// Moet herzien worden!!
function RemoveItem() {
  if (counter.childElementCount >= 2) {
    counter.removeChild(counter.lastChild);
  }
}

function showFlex() {
  let isChecked = cbToggleFlex.checked;
  if (isChecked) {
    flexContainer.style.display = "flex";
  } else {
    flexContainer.style.display = "inline";
  }
}

// Functies
function MoveFlex(e) {
  let flexName = e.target.name;
  let property = e.target.value;

  switch (flexName) {
    case "flexDirection":
      flexContainer.style.flexDirection = property;
      break;
    case "flexWrap":
      flexContainer.style.flexWrap = property;
      break;
    case "justifyContent":
      flexContainer.style.justifyContent = property;
      break;
    case "alignItems":
      flexContainer.style.alignItems = property;
      break;
    case "alignContent":
      flexContainer.style.alignContent = property;
      break;
  }
}
