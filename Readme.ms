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