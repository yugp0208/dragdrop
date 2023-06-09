//要素を取得
const fill = document.querySelector('.fill'); //画像を取得
const empties = document.querySelectorAll('.empty'); //ドラッグする箱を取得

//ドラッグのトリガー
fill.addEventListener("dragstart" , dragStart); //ドラッグを開始した際のイベント設定
fill.addEventListener("dragend" , dragEnd); //ドラッグが終わった際のイベント設定

//1つ1つのEmptyを取得 
for(const empty of empties){ //for文で配列を1つ1つ展開。
    empty.addEventListener("dragover",dragOver); //要素の上に乗った時のイベント
    empty.addEventListener("dragenter",dragEnter); //要素の箱に入った時のイベント
    empty.addEventListener("dragleave",dragLeave); //要素の箱から離れた時のイベント
    empty.addEventListener("drop",dragDrop); //ドロップされた時のイベントss
}

// ドラッグ開始の際の処理関数
function dragStart(){
    console.log("start")
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    }, 0);
}

// ドラッグ終了の際の処理関数
function dragEnd(){
    console.log("end");
    fill.className = "fill";
}

// ドラッグして箱の上に乗った時の処理関数
function dragOver(e){
    e.preventDefault();
}

// ドラッグして箱の上に乗った時の処理関数
function dragEnter(){
    this.className += " hovered"
}

// ドラッグして箱から離れた時の処理関数
function dragLeave(){
    this.className = "empty"
}

// ドロップした時の処理関数
function dragDrop(){
    this.className = "empty";
    this.appendChild(fill);
}