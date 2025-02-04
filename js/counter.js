const minValue = 1;
const maxValue = 99;

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 1;
increaseBtn.onclick = function(){
    if(countLabel.value >= minValue && countLabel.value < maxValue){
        let count = countLabel.value;
        count++;
        countLabel.value = count;
    }
    else{
        let count = 1;
        countLabel.value = count;
    };
};

decreaseBtn.onclick = function(){
    if(countLabel.value >= minValue && countLabel.value <= maxValue && countLabel.value - 1 != 0){
        let count = countLabel.value;
        count--;
        countLabel.value = count;
    }
    else{
        let count = 1;
        countLabel.value = count;
    };
};