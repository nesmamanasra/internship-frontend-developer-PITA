//write a function to check if the x player is won or o player is won or the board is full or we can complete the game
function X_O(array)
{
    let thereEmptyField = false ;
    console.log(array);
    for (let row of array){
        if(row.includes("") || row.includes(undefined) || row.includes(" ")) thereEmptyField = true;
    }
    if(thereEmptyField === true) {
        console.log("fill all fields");
    }else{
    checkRows = () => {
            for (let element of array){
                if(element.every((element) => element === 'x')){
                    console.log("X is winner"); break;
                }else if(element.every((element) => element === 'o')) {
                    console.log("O is winner"); break;
                }
            }
        }

        checkRows();
        checkColumns = (i) =>{
            let arr=[];
            for (let element of array)
            {
                arr.push(element[i]);
            }
            if (arr.every((element) => element === 'x')){
                console.log("X is winner")
            }else if(arr.every((element) => element === 'o')){
                console.log("O is winner")
            }
            if (i<array.length){
                i++;
            }else{
                return null;
            } 
            checkColumns(i);
        }
        let i =0;
        checkColumns(i);

        checkDiag1 = () => {
            let i =0;
            let arr =[];
            for (let element of array){
                arr.push(element[i]);
                i++;
            }
            if (arr.every((element) => element == 'x')){
                console.log("X is winner")
            }else if(arr.every((element) => element == 'o')){
                console.log("O is winner")
            }
        }
        checkDiag1();
        checkDiag2 = () => {
            let i =array[0].length-1;
            let arr =[];
            for (let element of array){
                arr.push(element[i]);
                i=i-1;
            }
            if (arr.every((element) => element == 'x')){
                console.log("X is winner")
            }else if (arr.every((element) => element == 'o')){
                console.log("O is winner")
            }
        }
        checkDiag2();
    }
    


}

// X_O([
//     ['x',' x','x','o'],
//     ['o','x','o','o'],
//     ['x','o','x','x'],
//     ['o','','x','o']
// ]);

X_O([
    ['x','x','x'],
    ['x','o','x'],
    ['o','x','o'],
])