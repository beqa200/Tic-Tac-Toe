const indexPage = document.getElementById('index-page');
const PlayerPage = document.getElementById('vsplayer-page');

//index page variables
const pick = document.querySelectorAll('.for-flex div');
const player = document.querySelectorAll('.for-flex div img');
const StartButtonPlayer = document.querySelector('.vs-player')
const startPlayVsCpu = document.querySelector('.vs-cpu');

//ingame page variables
const main1 = document.querySelector('.main');
const cube = document.querySelectorAll('.main div');
const xIcons = document.querySelectorAll('.main .x');
const xWinIcons = document.querySelectorAll('.main .x-win');
const oWinIcons = document.querySelectorAll('.main .o-win');
const oIcons = document.querySelectorAll('.main .o');
const turn = document.querySelectorAll('.turn img'); 
const restart = document.querySelector('.restart');
const tiesScore = document.querySelector('.score .ties-score-p');
const xScore = document.querySelector('.score .x-score-p');
const oScore = document.querySelector('.score .o-score-p');
const restartDiv = document.querySelector('.restart-div');
const cancelButton = document.querySelector('.restart-div .cancel-button');
const restartButton = document.querySelector('.restart-div .restart-button');
const winDiv = document.querySelector('.win-div');
const winDivImgs = document.querySelectorAll('.win-div img');
const winDivHeader = document.querySelector('.win-div h2');
const tiedDivHeader = document.querySelector('.win-div .tied')
const winDivP = document.querySelector('.win-div p');
const nextButton = document.querySelector('.win-div .next-button');
const quitButton = document.querySelector('.quit-button');
const playerTexts = document.querySelectorAll('.p1');

//counters
let count = 0;
let winCountX = 0;
let winCountO = 0;
let tiesCount = 0;
let arrX = [];
let arrO = [];
let k = 0;
let winnerNumX = 0;
let winnerNumO = 0;
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let random;
let index;
let targetIndex;
let winX=false;
let winO=false;


function reset() {
    count = 0;
    winCountX = 0;
    winCountO = 0;
    tiesCount = 0;
    arrX = [];
    arrO = [];
    k = 0;
    winnerNumX = 0;
    winnerNumO = 0;
    values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    targetIndex;
    winX=false;
    winO=false;
    xScore.textContent = 0;
    oScore.textContent = 0;
    tiesScore.textContent = 0;

}

function appearTiedDiv() {
    winDiv.style.display="initial";
    winDivImgs[0].style.display="none";
    winDivImgs[1].style.display="none";
    winDivP.style.display="none";
    winDivHeader.style.display="none"
    tiedDivHeader.style.display="initial";
}

for(var i = 0; i < cube.length; i++) {
    cube[i].value = 0 + i;
}


//pick player buttons
pick[0].addEventListener("click", () => {
    pick[0].style.backgroundColor = "#A8BFC9";
    pick[1].style.backgroundColor = "";
    player[0].style.display = "none";
    player[1].style.display = "initial";
    player[2].style.display = "initial";
    player[3].style.display = "none";


    StartButtonPlayer.addEventListener("click", () =>{
        indexPage.style.display = "none";
        PlayerPage.style.display = "initial";
        
        arrX = [];
        arrO = [];
        count = 0;

        for(var i = 0; i < cube.length; i++) {
            cube[i].removeEventListener("click", main2);
            cube[i].removeEventListener("click", main3);
            cube[i].addEventListener("click", main);
            cube[i].querySelector(".x").style.display = "none";

        }

                

        playerTexts[0].textContent = "X (P1)"
        playerTexts[2].textContent = "O (P2)"

        nextButton.addEventListener("click", () => { 
            for(var i = 0; i < cube.length; i++) {
                cube[i].querySelector('.x').style.display = "none";
                cube[i].style.pointerEvents = "auto";   
                cube[i].removeEventListener("click", main3);
            } 
            count = 0;
            arrX = [];
            arrO = [];
        })
    })
    
    startPlayVsCpu.addEventListener("click", () => {
        indexPage.style.display = "none";
        PlayerPage.style.display = "initial";
        values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        arrX = [];
        arrO = [];
        count = 0;
        for(var i = 0; i < cube.length; i++) {
            
            cube[i].removeEventListener("click", main);
            cube[i].removeEventListener("click", main3);
            cube[i].addEventListener("click", main2);
            cube[i].style.pointerEvents = "auto";
            cube[i].querySelector(".x").style.display = "none";
        }

        turn[0].style.display = "initial";
        turn[1].style.display = "none";

        playerTexts[0].textContent = "X (YOU)"
        playerTexts[2].textContent = "O (CPU)"
        
        nextButton.addEventListener("click", () => { 
            for(var i = 0; i < cube.length; i++) {
                cube[i].querySelector('.x').style.display = "none";
                cube[i].style.pointerEvents = "auto";  
                cube[i].removeEventListener("click", main3);
            } 
            values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            arrX = [];
            arrO = [];
            count = 0;
        })
    
    })

    

})

pick[1].addEventListener("click", () => {
    pick[1].style.backgroundColor = "#A8BFC9";
    pick[0].style.backgroundColor = "";
    player[0].style.display = "initial";
    player[1].style.display = "none";
    player[2].style.display = "none";
    player[3].style.display = "initial";



    StartButtonPlayer.addEventListener("click", () =>{
        indexPage.style.display = "none";
        PlayerPage.style.display = "initial";
    
        for(var i = 0; i < cube.length; i++) {
            cube[i].addEventListener("click", main);
            cube[i].removeEventListener("click", main2);
            cube[i].removeEventListener("click", main3);
        }

        playerTexts[0].textContent = "X (P2)"
        playerTexts[2].textContent = "O (P1)"

        nextButton.addEventListener("click", () => { 
            for(var i = 0; i < cube.length; i++) {
                cube[i].querySelector('.x').style.display = "none";
                cube[i].style.pointerEvents = "auto";  
                cube[i].removeEventListener("click", main3);
            } 
            count = 0;
            arrX = [];
            arrO = [];
        })
    }) 

    startPlayVsCpu.addEventListener("click", () => {
        for(var i = 0; i < cube.length; i++) {
            cube[i].addEventListener("click", main3);
            cube[i].removeEventListener("click", main2);
            cube[i].removeEventListener("click", main);
            cube[i].querySelector('.x').style.display = "none";
        }

        playerTexts[0].textContent = "X (CPU)"
        playerTexts[2].textContent = "O (YOU)"

        indexPage.style.display = "none";
        PlayerPage.style.display = "initial";
        count = 1;
        
            
            turn[1].style.display = "initial";
            turn[0].style.display = "none";
           
        
        random =  values[Math.floor((Math.random()*values.length))];
        index = values.indexOf(random);
        values.splice(index, 1);
        arrX.push(cube[index].value);
        cube[index].querySelector(".x").style.display = "initial";
        cube[index].style.pointerEvents = "none";
       
        nextButton.addEventListener("click", () => {
            indexPage.style.display = "none";
            PlayerPage.style.display = "initial";
            for(var i = 0; i < cube.length; i++) {
                cube[i].querySelector('.x').style.display = "none";
                cube[i].addEventListener("click", main3);
                cube[i].style.pointerEvents = "auto";
            }
            values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            arrX = [];
            arrO = [];
            count = 1;
            random =  values[Math.floor((Math.random()*values.length))];
            index = values.indexOf(random);
            values.splice(index, 1);
            arrX.push(cube[index].value);
            
            cube[index].querySelector(".x").style.display = "initial";
            cube[index].style.pointerEvents = "none";    
        });
    
    })
})



//event target buttons
function main(e) {
    if(count % 2 == 0){
        e.target.querySelector(".x").style.display = "initial";
        turn[1].style.display = "initial";
        turn[0].style.display = "none";
        arrX.push(e.target.value);
       
    } else {
        e.target.querySelector(".o").style.display = "initial";
        turn[0].style.display = "initial";
        turn[1].style.display = "none";
        arrO.push(e.target.value);
    
    }

    count++;

    e.target.style.pointerEvents = "none";
    
    winCheck(arrX);
    winCheck(arrO);
    if(count == 9 && winX === false && winO === false){
        tiesCount++;
        appearTiedDiv();  
        tiesScore.textContent = tiesCount;
    }    
}

function main2(e) {
    targetIndex = values.indexOf(e.target.value);
    console.log(e.target.value);
    values.splice(targetIndex, 1);
    random =  values[Math.floor((Math.random()*values.length))];
    index = values.indexOf(random);
    values.splice(index, 1);
    arrX.push(e.target.value);
    e.target.querySelector(".x").style.display = "initial";
    e.target.style.pointerEvents = "none";

    count++;
           
    winCheck(arrX);
    
    for(var i = 0; i < cube.length; i++) {

        if(cube[i].value == random && winX === false) {
            cube[i].querySelector(".o").style.display = "initial";
            arrO.push(cube[i].value);
            cube[i].style.pointerEvents = "none";
            count++;
        }
                
                    
    }   
    
    winCheck(arrO);
   
    if(count == 9 && winX === false && winO === false){
        tiesCount++;
        appearTiedDiv();
        tiesScore.textContent = tiesCount;    
    }
    
    if(winX === true) {
        winDivP.textContent = "YOU WON!"
    }
    else {
        winDivP.textContent = "OH NO, YOU LOST…"
    }
        
        
}

function main3(e) {
    targetIndex = values.indexOf(e.target.value);
    values.splice(targetIndex, 1);
    random =  values[Math.floor((Math.random()*values.length))];
    index = values.indexOf(random);
    values.splice(index, 1);
    arrO.push(e.target.value);
    e.target.querySelector(".o").style.display = "initial";
    e.target.style.pointerEvents = "none";

    
    
    count++;
           
    
    winCheck(arrO);      
    for(var i = 0; i < cube.length; i++) {
        cube[i].removeEventListener("click", main);
        cube[i].removeEventListener("click", main2);
        if(cube[i].value == random && winO === false) {
            cube[i].querySelector(".x").style.display = "initial";
            arrX.push(cube[i].value);
            cube[i].style.pointerEvents = "none";
            count++;
            
        }
                
                    
    }   
    winCheck(arrX);    
    

    if(count == 9 && winX === false && winO === false){
        tiesCount++;
        appearTiedDiv();
        tiesScore.textContent = tiesCount;    
    }
    if(winO === true) {
        winDivP.textContent = "YOU WON!"
    }
    else {
        winDivP.textContent = "OH NO, YOU LOST…"
    }
}


//buttons
restart.addEventListener("click", restartFunc);
function restartFunc() {
    restartDiv.style.display="initial";
    for(var i = 0; i < cube.length; i++) {
        cube[i].style.pointerEvents = 'none';;
    }
}

cancelButton.addEventListener("click", cancelFunc);
function cancelFunc() {
    restartDiv.style.display = "none";
    for(var i = 0; i < cube.length; i++) {
        cube[i].style.pointerEvents = 'auto';
    }
}

nextButton.addEventListener("click", nextButtonFunc);
function nextButtonFunc() {
    for(var i = 0; i < cube.length; i++) {
        cube[i].querySelector(".x").style.display = "none";
        cube[i].querySelector(".o").style.display = "none";
        cube[i].querySelector(".x-win").style.display = "none";
        cube[i].querySelector(".o-win").style.display = "none";
        cube[i].style.background = "";
        cube[i].style.pointerEvents = "auto";    
    }
    
    arrX = [];
    arrO = [];
    values = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    count = 0;
    winDiv.style.display = "none";
    turn[0].style.display = "initial";
    turn[1].style.display = "none";
    main1.style.pointerEvents = "auto";
    winX=false;
    winO=false;
}

quitButton.addEventListener("click", restartAndQuitButtonFunc);
restartButton.addEventListener("click", restartAndQuitButtonFunc);
function restartAndQuitButtonFunc() {
    PlayerPage.style.display = "none";
    indexPage.style.display = "initial";
    for(var i = 0; i < cube.length; i++) {
        cube[i].querySelector(".x").style.display = "none";
        cube[i].querySelector(".o").style.display = "none";
        cube[i].querySelector(".x-win").style.display = "none";
        cube[i].querySelector(".o-win").style.display = "none";
        cube[i].style.background = "";
        cube[i].style.pointerEvents = 'auto';
    }
    restartDiv.style.display = "none";
    winDiv.style.display = "none";

    turn[0].style.display = "initial";
    turn[1].style.display = "none";

    reset();
}



//win check
function winCheck(arr) {
    for(var i = 0; i < arr.length; i++) {
        
        if(arr[i] == 0) {
            //winningCase N1
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 1){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 2){
                            for(var i = 0; i < cube[0].children.length; i++){
                                if(xIcons[0].style.display === "initial"){
                                    for(var i = 0; i < 3; i++){
                                        
                                        cube[i].style.background = "#31C3BD";
                                        xIcons[i].style.display = "none";
                                        xWinIcons[i].style.display = "initial";
                                    }
                                    winCountX++;
                                    Xwin();
                                    
                                    
                                    
                                } 
                                    
                                
                                else if(oIcons[0].style.display === "initial" && winX === false){
                                    for(var i = 0; i < 3; i++){
                                        cube[i].style.background = "#F2B137";
                                        oIcons[i].style.display = "none";
                                        oWinIcons[i].style.display = "initial";   
                                    }
                                    winCountO++;
                                    Owin();

                                }
                                
                            }
                            
                        };
                    }
                }
            }        
            //winningCase N2
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 3){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 6){
                            for(var i = 0; i < cube[0].children.length; i++){
                                if(xIcons[0].style.display === "initial"){
                                    for(var i = 0; i < 7; i+=3){
                                        cube[i].style.background = "#31C3BD";
                                        xIcons[i].style.display = "none";
                                        xWinIcons[i].style.display = "initial";
                                    }
                                    winCountX++;
                                    Xwin();
                                    
                                } 
                                else if(oIcons[0].style.display === "initial" && winX === false){
                                    for(var i = 0; i < 7; i+=3){
                                    cube[i].style.background = "#F2B137";
                                    oIcons[i].style.display = "none";
                                    oWinIcons[i].style.display = "initial";   
                                    }
                                    winCountO++;
                                    Owin();
                                }

                                
                            }
                        };
                    }
                }
            } 
            //winningCase N3
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 4){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 8){
                            for(var i = 0; i < cube[0].children.length; i++){
                                if(xIcons[0].style.display === "initial"){
                                    for(var i = 0; i < 10; i+=4){
                                        cube[i].style.background = "#31C3BD";
                                        xIcons[i].style.display = "none";
                                        xWinIcons[i].style.display = "initial";
                                    }
                                    winCountX++;
                                    Xwin();
                                    
                                } 
                                else if(oIcons[0].style.display === "initial" && winX === false){
                                    for(var i = 0; i < 10; i+=4){
                                    cube[i].style.background = "#F2B137";
                                    oIcons[i].style.display = "none";
                                    oWinIcons[i].style.display = "initial";   
                                    }
                                    winCountO++;
                                    Owin();
                                }                            
                            }
                        }
                    }
                }
            } 
        }
    }


    for(var i = 0; i < arr.length; i++) {
        
        if(arr[i] == 1) {
            //winningCase N4
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 4){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 7){
                            if(xIcons[1].style.display === "initial"){
                                for(var i = 1; i < 8; i+=3){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[1].style.display === "initial" && winX === false){
                                for(var i = 1; i < 8; i+=3){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }            
                        }
                    }
                }        
            }
        }

        for(var i = 0; i < arr.length; i++) {
        
            if(arr[i] == 2) {
               //winningCase N5
               for(var i = 0; i < arr.length; i++) {
                   if(arr[i] == 5){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 8){
                            if(xIcons[2].style.display === "initial"){
                                for(var i = 2; i < 9; i+=3){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[2].style.display === "initial" && winX === false){
                                for(var i = 2; i < 9; i+=3){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }
                        
                        }
                    }
                } 
            }
            
            for(var i = 0; i < arr.length; i++) {
                //winningCase N6
                if(arr[i] == 4){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 6){
                            if(xIcons[2].style.display === "initial"){
                                for(var i = 2; i < 7; i+=2){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[2].style.display === "initial" && winX === false){
                                for(var i = 2; i < 7; i+=2){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }                       
                        }
                    }
                }
            }
         }
    }

    for(var i = 0; i < arr.length; i++) {
        
        if(arr[i] == 3) {
            //winningCase N7         
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 4){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 5){
                            if(xIcons[3].style.display === "initial"){
                                for(var i = 3; i < 6; i++){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[3].style.display === "initial" ){
                                for(var i = 3; i < 6; i++){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }                   
                        }
                    }
                }
            }
        }
    }

    for(var i = 0; i < arr.length; i++) {
        
        if(arr[i] == 6) {
            //winningCase N8         
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 7){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 8){
                            if(xIcons[6].style.display === "initial"){
                                for(var i = 6; i < 9; i++){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[6].style.display === "initial" && winX === false){
                                for(var i = 6; i < 9; i++){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }

                        }
                    }
                }
            }
        }
    }
 
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 4) {
            //winningCase N4 addition         
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] == 1){
                    for(var i = 0; i <arr.length; i++){
                        if(arr[i] == 7){
                            if(xIcons[4].style.display === "initial"){
                                for(var i = 1; i < 8; i+=3){
                                    cube[i].style.background = "#31C3BD";
                                    xIcons[i].style.display = "none";
                                    xWinIcons[i].style.display = "initial";
                                }
                                winCountX++;
                                Xwin();
                                
                            } 
                            else if(oIcons[4].style.display === "initial" && winX === false){
                                for(var i = 1; i < 8; i+=3){
                                cube[i].style.background = "#F2B137";
                                oIcons[i].style.display = "none";
                                oWinIcons[i].style.display = "initial";   
                                }
                                winCountO++;
                                Owin();
                            }

                       
                        }
                    }
                }
            }
         }
    }
}
}

// what happen if x wins
function Xwin() {
    if(winO === false){
       //appear win div
       winDiv.style.display="initial";
       winDivImgs[1].style.display="none";
       winDivImgs[0].style.display="initial";
       winDivHeader.style.display="initial";
       winDivHeader.style.color="";
       winDivP.style.display="block";
       tiedDivHeader.style.display="none";
       winDivP.textContent="PLAYER " + playerTexts[0].textContent[playerTexts[0].textContent.length - 2] + " WINS!";

       for(i = 0; i < cube.length; i++){
        cube[i].style.pointerEvents = "none";
    }
   
       winX = true;
      
       xScore.textContent = winCountX;

    }
}

// what happen if o wins
function Owin() {
    if(winX === false){
        winDiv.style.display="initial";
        winDivImgs[0].style.display="none";
        winDivImgs[1].style.display="initial";
        winDivHeader.style.display="initial";
        winDivP.style.display="block";
        winDivHeader.style.color="#F2B137";
        tiedDivHeader.style.display="none";
        winDivP.textContent="PLAYER " + playerTexts[2].textContent[playerTexts[2].textContent.length - 2] + " WINS!";
    
        winO = true;
        
        for(i = 0; i < cube.length; i++){
            cube[i].style.pointerEvents = "none";
        }

        oScore.textContent = winCountO;
        
    }
}