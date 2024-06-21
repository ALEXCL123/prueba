//1 /\p{Sc}/gu;
//2 /\p{White_Space}/gu;
//3
//4 /[\p{L}\p{N}]+/gu;

/*
let texto = "abc123"
let expresion= /\p{N}/gu;
console.log(texto.match(expresion))*/

//ejercicio 1

/*let texto = "$12¥s/Ý¤£€$¥₹₦₱"
let expresion= /\p{Sc}/gu;
console.log(texto.match(expresion))*/

//ejercicio 2
/*let texto = "3 5 e "
let expresion= /\p{White_Space}/gu;
console.log(texto.match(expresion))*/

// ejercicio 3
let texto = "φιλοσοφία philosophia hola 11sa "
let expresion=/[\p{L}\p{Lu}\p{Ll}]/gu;
console.log(texto.match(expresion))

//ejercicio 4
/*let texto = "Este1 5w5 123"
let expresion= /[\p{L}\p{N}]+/gu;
console.log(texto.match(expresion))*/
