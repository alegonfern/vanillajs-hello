
const pronouns = ['el', 'nuestro'];
const adjs = ['grandioso', 'mejor', 'esplendido', 'destacado', 'misterioso', 'agradable'];
var nouns = ['asado', 'sabor', 'color', 'espacio', 'lugar'];

function domain_gen(pronouns, adjs, nouns) {
    const dominios = [];

    for (const pronoun of pronouns) {
        for (const adj of adjs) {
            for (const noun of nouns) {
                const dominio = `${pronoun}${adj}${noun}.com`;

                dominios.push(dominio);

            }
        }
    }
    return dominios;
}

const dominio_generado = domain_gen(pronouns, adjs, nouns);
console.log(dominio_generado)

// La función toma las variables Pronombre, adjetivo y suntantivos como arreglos, los recorre y luego crea un array 
//nuevo con el metodo push, mete esta nueva combinacion en el una nueva variable llamada
//mete la combinación dominio en el array dominios[] 