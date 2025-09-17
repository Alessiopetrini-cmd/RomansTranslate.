const idnumber = document.getElementById("number");
const bottone  = document.getElementById("convert-btn");
const outpt    = document.getElementById("output");               
const romans = {                                            // OBJ per contenere numeri romani;
  "1000": "M",
  "900": "CM",
  "500": "D",
  "400": "CD",
  "100": "C",                                           
  "90": "XC",
  "50": "L",
  "40": "XL",
  "10": "X",
  "9": "IX",
  "5": "V",
  "4": "IV",
  "1": "I"
};
const values = Object.keys(romans).map(Number).sort((a, b) => b - a);    // isola le chiavi di romans e le trasforma 
function traduzione(stringa){                                            // in numeri da stringhe mettendoli dal
   for(var i of values){                                                 // piu grande al piu piccolo (const Values)
    while(stringa>= i){
     outpt.innerHTML += romans[i]
     stringa -= i;                                                       // prende la stringa e inizia la traduzione
                                                                         // sottraendo la cifra piu grande
   }                                          //Logica : prendere l'input, si parte dal value piu grande, si stampa e si sottrae.
}
    outpt.style.fontSize = "50px";
    outpt.style.textAlign=" center";
}


bottone.addEventListener("click", () => {
   outpt.textContent = "";
   let stringa  = idnumber.value;                     //CONTROLLI  PER l'INPUT
   if (stringa  === "" ){                                   
     outpt.innerHTML = "Please enter a valid number";
     outpt.classlist.remove("id");
     
  }else if(stringa < 0){               
     stringa = parseInt(stringa,10);
     outpt.textContent = "Please enter a number greater than or equal to 1";
     outpt.classlist.remove("id");
  }
   else if (stringa >= 4000){
     stringa = parseInt(stringa,10);
     outpt.textContent = "Please enter a number less than or equal to 3999";
     outpt.classlist.remove("id");
   }

else{ 
       traduzione(stringa);             //SE TUTTO E' OKAY ESEGUE FUNCTION
   }
  

});