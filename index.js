function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var arr = [2165,2166,2167,2168,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2181,2182,2183,2184,2185,2186,2187,2188,2189,2190,2191,2192,2193,2194,2195,2196,2197,2198,2199,2200,2201,2202,2203,2204,2205,2206];

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
    boxes[4].innerHTML = 2196;
    boxes[5].innerHTML = arr[5];
    boxes[6].innerHTML = arr[6];
    boxes[7].innerHTML = arr[7];
    boxes[8].innerHTML = arr[8];
}

function showPrize(){
    document.getElementById("empty1").style.display="block";
    document.getElementById("prize").style.display="block";
    document.getElementById("empty2").style.display="block";
    document.getElementById("container").style.marginTop = "50px"; 
}

function spin(){
    
    for (var i = 0; i < 70; i++) { 
        if(i<1){
            setTimeout(confetti, 3600);
            setTimeout(showPrize, 3600);
            setTimeout(numberChangeFix, (70-i)*50);
        }
        else{
            setTimeout(numberChange, (70-i)*50);
        }
    } 
}



  