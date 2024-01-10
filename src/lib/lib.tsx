import { colorByType } from "@/data/color";
import { Pokemon } from "@/data/data";

export function getPokemonType(pokemon: Pokemon) {
    const type:string = pokemon.types[0] ? pokemon.types[0].type.name : "def";
    return type in colorByType ? type : "def";
}

export function getHexaColorByType(type: string) {
    return colorByType[type as keyof typeof colorByType];
}

export function kebabToWritten(value: string) {
    var newvalue: string = "";
    newvalue += value[0].toUpperCase();
    for(let i=1; i<value.length; i++) {
        switch(value[i]) {
            case "-":
                newvalue += " ";
                break;
            default:
                newvalue += value[i];
        }
    }
    return newvalue;
}