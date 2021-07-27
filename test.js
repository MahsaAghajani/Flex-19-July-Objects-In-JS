board = [
    [null,0,0,1],
    [0,null,null,null],
    [0,null,null,null],
    [1,null,null,null]
          ];
    
    
    
    const print = (b)=> {
    let result = "";
      for(const row of b) {
        
        rowOutput = "|"
      
        for(const column of row) {
          
          if(column === 0){
            rowOutput  += "O";
           }
          else if(column === 1){
            rowOutput  += "X";
          }
          else if(column === null){
            rowOutput  += " ";
            }
    
           rowOutput  +="|";
         }
          result += rowOutput + "\n"
          
      }
      return result;
    }
    
    
    console.log(print(board));
    