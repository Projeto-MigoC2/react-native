import { View, Text } from 'native-base';
import React from 'react';
import { expressoes } from '../../utils/expressoes';
import { KeyContainer, KeysContainer } from './styles';

// Componente funcional RenderKeys
const RenderKeys = () => {
    const keys = Object.keys(expressoes);

    return (
        <KeysContainer>
            {keys.map((chave) => (
                <View key={chave}>
                    <KeyContainer>
                        {/* Usando o componente MathJax para renderizar as fórmulas matemáticas */}
                        <Text>{expressoes[chave].simbolo}</Text>
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