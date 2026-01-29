//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let nivelHeroi = 7.001

let Nome = "Sr Nick Nick"

let classeHeroi = " "

if (nivelHeroi <= 1.000) {

    let classeHeroi = "Ferro"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)

} else if (nivelHeroi >= 1.001 && nivelHeroi <= 2.000) {

    let classeHeroi = "Bronze"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)
}else if (nivelHeroi >= 2.001 && nivelHeroi <= 5.000) {
    let classeHeroi = "Prata"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)


}else if (nivelHeroi >= 5.001 && nivelHeroi <= 7.000) {
    let classeHeroi = "Ouro"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)

} else if (nivelHeroi >= 7.001 && nivelHeroi <= 8.000) {
    let classeHeroi = "Platina"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)
} else if (nivelHeroi >= 8.001 && nivelHeroi <= 9.000) {
    let classeHeroi = "Ascendente"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)
} else if (nivelHeroi >= 9.001 && nivelHeroi <= 10.000) {
    let classeHeroi = "Imortal"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)
} else if (nivelHeroi >= 10.001) {
    let classeHeroi = "Radiante"

    console.log("O Herói de nome " + Nome + " está no nível de " + classeHeroi)
}



