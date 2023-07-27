interface IExpressoes {
    [chave: string]: string;
}

export const expressoes: IExpressoes = {
    raiz: '\\sqrt{ }',
    fracao: '\\frac{3}{3}',
    potencia: '3^3',
    pi: '\\pi',
    infinito: '\\infty',
    somatorio: '\\sum',
    integral: '\\int',
    integralDefinida: '\\int_{}^{}',
    integralDupla: '\\iint',
    integralDuplaDefinida: '\\iint_{1}^{1}',
    integralTripla: '\\iiint',
    integralTriplaDefinida: '\\iiint_{1}^{1}',
}