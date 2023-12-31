function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var arr = [2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081];

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



  