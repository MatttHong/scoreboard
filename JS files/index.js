let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")

const scoresH = new Map()
const scoresG = new Map()
scoresH.set('a', 0)
scoresG.set('b', 0)


let home = document.getElementsByName("scoreHome")
let guest = document.getElementsByName("scoreGuest")

function addOne(index){

    if(scoresH.has(index)){
        scoresH.set(index, scoresH.get(index) + 1);
        if(scoresH.get(index)>99){
            scoresH.set(index, 0);
        }
         scoreHome.textContent= scoresH.get(index)
    }
    if(scoresG.has(index)){
        scoresG.set(index, scoresG.get(index) + 1)
        if(scoresG.get(index)>99){
            scoresG.set(index, 0);
        }
        scoreGuest.textContent= scoresG.get(index)
    }
}
function addTwo(index){
    if(scoresH.has(index)){
        scoresH.set(index, scoresH.get(index) + 2);
        if(scoresH.get(index)>99){
            scoresH.set(index, 0);
        }
        scoreHome.textContent= scoresH.get(index)
    }
    if(scoresG.has(index)){
        scoresG.set(index, scoresG.get(index) + 2)
        if(scoresG.get(index)>99){
            scoresG.set(index, 0);
        }
        scoreGuest.textContent= scoresG.get(index)
    }
}
function addThree(index){
    if(scoresH.has(index)){
        scoresH.set(index, scoresH.get(index) + 3);
        if(scoresH.get(index)>99){
            scoresH.set(index, 0);
        }
        scoreHome.textContent= scoresH.get(index)
    }
    if(scoresG.has(index)){
        scoresG.set(index, scoresG.get(index) + 3)
        if(scoresG.get(index)>99){
            scoresG.set(index, 0);
        }
        scoreGuest.textContent= scoresG.get(index)
    }
}

function reset(){
    scoresH.set('a', 0);
    scoresG.set('b', 0);
    scoreHome.textContent= scoresH.get('a')
    scoreGuest.textContent= scoresG.get('b')

}

