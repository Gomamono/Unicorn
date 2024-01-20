window.onload = function () {
    let my_audio = new Audio();

    //ボタンにクリックイベントを設定
    document.getElementById("tmrBtn").onclick = function () {
        my_audio.src = "./static/UC.mp3";
        my_audio.play();  //サウンドを再生
    }

    document.getElementById("vBtn").onclick = function () {
        my_audio.src = './static/UC.mp3#t=41';
        my_audio.play();  //サウンドを再生
    }

    document.getElementById("rtnBtn").onclick = function () {
        my_audio.pause();
    }
}