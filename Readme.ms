Esse é um app da NLW Expert da Rocket Seat, pode usar à vontade, o mesmo foi usado para estudo e tem poucas alterações.
This is an app from Rocket Seat's NLW Expert, feel free to use it. It was used for studying purposes and has few modifications.

O aplicativo mostra os lanches separados por categoria, tem página interna, possibilidade de adicionar ao carrinho, remover e enviar mensagem para o whatsapp.
The app displays snacks categorized, has internal pages, allows adding to the cart, removing items, and sending messages via WhatsApp.

O projeto foi comitado separadamente para melhor visualização de evolução do mesmo.
The project was committed separately for a better visualization of its evolution.

Lista de comandos usados/Command list:
# Comandos usados
### Instalação do app com expo
```
npx create-expo-app
```
### Usabilidade do expo
```
npx expo start
npx expo start --clear
```
### Instalação do Tailwind e configuração
```
npm i nativewind@2.0.11
npm i tailwindcss@3.3.2 --save-dev
npx tailwindcss init
```
### Instalação da fonte inter do google.
```
npx expo install expo-font @expo-google-fonts/inter
```
### Configuração do tailwind.config:
```
content: [
    "./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}",
]
```
E também o theme:
```
extend: {
    fontFamily: {
    heading: "Inter_600SemiBold",
    subtitle: "Inter_500Medium",
    body: "Inter_400Regular",
    bold: "Inter_700Bold"
    }
}
```
E também o path:
```
"paths": {
    "@/*": [
    "./src/*"
    ]
}
```

### Importação do clsx
```
npx i clsx
```
### Instalação do zustand
```
npx instal zustand
```
### Instalação do KeyboardAware
```
npm i react-native-keyboard-aware-scroll-view --save
```
### Instalação do Async Storage
```
npx expo install @react-native-async-storage/async-storage
```
