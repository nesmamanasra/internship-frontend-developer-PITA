// Write a JavaScript program to create a new string adding "Ja" in front of a given string. If the given string begins with "Ja" then return the original string.
function Concat(st){
    if (st.startsWith("Ja")){
      return st;
    }else{
      pre="Ja"
      let arr3 =(pre.concat(st));
        return arr3;
    }
  }
  console.log(Concat("va"));