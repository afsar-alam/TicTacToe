let boxes=document.querySelectorAll(".btn_box");
let reset_btn=document.querySelector(".reset_btn");
let newGamerbtn=document.querySelector(".new_btn");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector(".msg");
let turno=true;

const winpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
 const restGame=()=>{
turno=true;
enableBoxes();
msgcontainer.classList.add("hide");


  
 }

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turno){
    box.innerHTML="0";
    turno=false;
    } else{
      box.innerHTML="x";
       turno=true;
    }
    box.disabled=true;
    checkwinner();
  });

});
const disableboxes =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enableBoxes =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
  }
}

const showwinner=(winner)=>{
  msg.innerHTML=`Congratulation , Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();

}

const checkwinner = ()=>{
  for(let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerHTML;
   let pos2val=boxes[pattern[1]].innerHTML;
   let pos3val=boxes[pattern[2]].innerHTML;
   if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val===pos2val && pos2val===pos3val){
    console.log("winner");
    showwinner(pos1val);
   }
  }
  }
};
newGamerbtn.addEventListener("click",restGame);
reset_btn.addEventListener("click",restGame);
