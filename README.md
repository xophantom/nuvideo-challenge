# Nuvidio Challenge

Este projeto inclui três funções TypeScript que demonstram o uso de tipagens assertivas, generics, type guards e outras funcionalidades avançadas do TS para resolver problemas de programação.

## Funções Implementadas

### undefinedToNull.ts
**Descrição:**
Converte todas as instâncias de undefined em um objeto ou array para null, garantindo que o objeto ou array retorne sem undefined, utilizando recursividade para alcançar estruturas aninhadas.

**Features:**
**Generics:** Define a função de maneira que possa aceitar e retornar objetos de qualquer tipo.
**Recursive Type Aliases:** Usei pra definir tipos que se referenciam recursivamente, permitindo manipular estruturas de dados aninhadas.

### deepMerge.ts
**Descrição:**
Esta função realiza a mesclagem profunda de dois objetos. Em caso de propriedades conflitantes, se ambos valores são objetos eles são mesclados recursivamente, se ambos são arrays eles são concatenados. Propriedades conflitantes onde um valor é um objeto e o outro um array (ou vice-versa), ou onde ambos não são objetos, o valor do segundo objeto substitui o do primeiro.

**Features:**
**Generics**, novamente. 
**Mapped Types e Conditional Types:** Usados para definir o tipo de retorno que condicionalmente verifica e mescla propriedades de dois objetos.
**Type Guards:** Utilizados para verificar se uma variável é de um tipo específico (no caso, objeto ou array).

### lengthOfLongestSubstring.ts
**Descrição:**
Esta função encontra o tamanho da maior substring sem caracteres repetidos em uma string. Ela usa o método 'sliding window' para rastrear e atualizar com eficiência a maior substring encontrada.

**Features:**
**Tipagem assertiva:** Garante o uso correto dos tipos de dados.
**Map:** Pra armazenar a última posição de cada caractere na string.

# Instalação do Projeto

**Instalação de Dependências**
```
yarn install
```

**Executando as Funções**
Este projeto utiliza ts-node para executar diretamente os arquivos TypeScript. 

Para executar undefinedToNull.ts:
```
yarn q1
```

Para executar deepMerge.ts:
```
yarn q2
```

Para executar lengthOfLongestSubstring.ts:
```
yarn q3
```
