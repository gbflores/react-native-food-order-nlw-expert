import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string,
    cartQuantityItems?: number
}
export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center pb-5 mx-5 border-b border-slate-700">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="w-32 h-6" />
                <Text className="mt-2 text-xl text-white font-heading">
                    {title}
                </Text>
            </View>
            {
                cartQuantityItems > 0 &&
                <Link href="/cart" asChild>
                    <TouchableOpacity className="relative" activeOpacity={0.7}>
                        <View className="items-center justify-center w-4 h-4 rounded-full bg-lime-300 top-2 z-10 -right-3.5">
                            <Text className="text-xs font-bold text-slate-900">{cartQuantityItems}</Text>
                        </View>
                        <Feather name="shopping-bag" color={colors.white} size={24}></Feather>
                    </TouchableOpacity>
                </Link>
            }
        </View>
    )
}