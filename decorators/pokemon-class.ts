function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (): Function => {
  return () => console.log('Hola, mundo')
}

@printToConsoleConditional()
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co'


    constructor(
        public name: string
    ){}
}
