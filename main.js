//要素を取得
const fill = document.querySelector('.fill'); //画像を取得
const empties = document.querySelectorAll('.empty'); //ドラッグする箱を取得

//ドラッグのトリガー
fill.addEventListener("dragstart" , dragStart);
fill.addEventListener("dragend" , dragEnd);

//1つ1つのEmptyを取得
for(const empty of empties){
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",dragDrop);
}

//ドラッグ関数
function dragStart(){
    console.log("start")
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    }, 0);
}

function dragEnd(){
    console.log("end");
    fill.className = "fill";
}

function dragOver(e){
    e.preventDefault();
    console.log("over")
}

function dragEnter(){
    console.log("enter")
    this.className += " hovered"
}

function dragLeave(){
    console.log("leave")
    this.className = "empty"
}

function dragDrop(){
    console.log("drop");
    this.className = "empty";
    this.appendChild(fill);
}