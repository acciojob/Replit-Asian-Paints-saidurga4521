//your JS code here. If required.
const blockId=document.getElementById('block_id');
const color=document.getElementById('colour-id');
const changeColor=document.getElementById('change-button');
const reset=document.getElementById('reset_button');
changeColor.addEventListener('click',()=>{
	var gridItem=document.querySelectorAll('.grid-item');
	gridItem.forEach((item)=>{
		item.style.backgroundColor="transparent";
	})
	document.getElementById(blockId.value).style.backgroundColor=color.value;
})
reset.addEventListener('click',()=>{
	var gridItem=document.querySelectorAll('.grid-item');
	gridItem.forEach((item)=>{
		item.style.backgroundColor="transparent";
	})
})