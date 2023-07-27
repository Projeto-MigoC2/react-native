import { View, Text } from 'native-base';
import React from 'react';
import { expressoes } from '../../utils/expressoes';
import { Expression, KeyContainer, KeysContainer } from './styles';


const mmlOptions = {
    messageStyle: "none",
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
        ],
        processEscapes: true,
    },
    TeX: {
        extensions: [
            "AMSmath.js",
            "AMSsymbols.js",
            "noErrors.js",
            "noUndefined.js",
        ],
    },
};

// Componente funcional RenderKeys
const RenderKeys = () => {
    const keys = Object.keys(expressoes);

    return (
        <KeysContainer>
            {keys.map((chave) => (
                <View key={chave}>
                    <KeyContainer>
                        {/* Usando o componente MathJax para renderizar as fórmulas matemáticas */}
                        <Expression mathJaxOptions={mmlOptions} html={'$' + expressoes[chave] + '$'} />
                    </KeyContainer>
                </View>
            ))}
        </KeysContainer>
    );
};

// Componente ExpressionKeyboard usando RenderKeys
export default function ExpressionKeyboard() {
    return (
        <View>
            <RenderKeys />
        </View>
    );
}