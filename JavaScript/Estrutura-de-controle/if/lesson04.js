/*
  Entrar com uma distância (Km) e o tempo de viagem (horas) de um automóvel, 
  e dizer se a velicidade média foi igual, superior ao limite (110 km) ou não. 
*/

let distancia = 600; 
let tempo = 5; 
let velociadeMedia = distancia / tempo;

if(velociadeMedia >= 110) {
  console.log("A velocidade média é superior ou igual a 110 Km => "+velociadeMedia + "Km.");
} else {
  console.log("A velocidade média é inferior a 110 Km =>  "+velociadeMedia  + "Km.");
}
