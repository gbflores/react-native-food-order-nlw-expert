import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
    return (
        <View className="justify-center flex-1 itens-center bg-slate-900">
            <ActivityIndicator color={colors.white}></ActivityIndicator>
        </View>
    )
}