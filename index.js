let arr = Array.from({length: 3001}, (_, i) => i + 2000);


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var boxes = document.getElementsByClassName("box");

function numberChange(){
    arr=shuffle(arr);
    boxes[0].innerHTML = arr[0];
    boxes[1].innerHTML = arr[1];
    boxes[2].innerHTML = arr[2];
    boxes[3].innerHTML = arr[3];
    boxes[4].innerHTML = arr[4];
    boxes[5].innerHTML = arr[5];
    boxes[6].innerHTML = arr[6];
    boxes[7].innerHTML = arr[7];
    boxes[8].innerHTML = arr[8];
}

function numberChangeFix(){
    arr=shuffle(arr);
    boxes[0].innerHTML = arr[0];
    boxes[1].innerHTML = arr[1];
    boxes[2].innerHTML = arr[2];
    boxes[3].innerHTML = arr[3];
    boxes[4].innerHTML = 2066;
    boxes[5].innerHTML = arr[5];
    boxes[6].innerHTML = arr[6];
    boxes[7].innerHTML = arr[7];
    boxes[8].innerHTML = arr[8];
}

function showPrize(){
    document.getElementById("empty1").style.display="block";
    document.getElementById("prize").style.display="block";
    document.getElementById("empty2").style.display="block";
    if(screen.width <= 700)
    document.getElementById("container").style.marginTop = "50px"; 
}

function spin(){
    
    for (var i = 0; i < 90; i++) { 
        if(i<1){
            setTimeout(confetti, 4600);
            setTimeout(showPrize, 4600);
            setTimeout(numberChangeFix, (90-i)*50);
        }
        else{
            setTimeout(numberChange, (90-i)*50);
        }
    } 
}



  