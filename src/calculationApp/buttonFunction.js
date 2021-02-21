

function ButtonFunction(btnvalue, result,){
    var a,b;
  if(btnvalue == 1){
      
      return  result=a+b;
  }else 
  if(btnvalue == 2){
     
      return result = a-b;

  }else 
  if(btnvalue == 3){
    
      return result = a*b;

  }else 
  if(btnvalue == 4){

      return a*b;

  }

  return (
      <div>{result.results}</div>
  )
    

}



export default ButtonFunction;