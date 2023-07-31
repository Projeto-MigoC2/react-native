interface IExpressoes {
    [chave: string]: IEstruturaExpressoes;
}

interface IEstruturaExpressoes {
    latex: string;
    simbolo: string;
}

const x = '□';
const y = '‍□';



export const expressoes: IExpressoes = {
    raiz: {
        latex: '\\sqrt{x}',
        simbolo: '√',
    },
    fracao: {
        latex: '\\frac{x}{y}',
        simbolo: 'x/y',
    },
    potencia: {
        latex: 'x^{y}',
        simbolo: 'x^y',
    },
    pi: {
        latex: '\\pi',
        simbolo: 'π',
    },

    infinito: {
        latex: '\\infty',
        simbolo: '∞',
    },

    somatorio: {
        latex: '\\sum_{x}^{y}',
        simbolo: '∑',
    },

    integral: {
        latex: '\\int_{x}^{y}',
        simbolo: '∫',
    },
    integralDefinida: {
        latex: '\\int_{x}^{y}',
        simbolo: '∫',
    },

    multiplicacao: {
        latex: 'x \\cdot y',
        simbolo: 'x*y',
    },
}