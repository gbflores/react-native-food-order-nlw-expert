import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

export default function Product() {
    const { id } = useLocalSearchParams()

    const product = PRODUCTS.filter((item) => item.id == id)[0]
    return (
        <View className="flex-1">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />

            <View className="flex-1 p-5 mt-8">
                <Text className="my-2 text-2xl text-lime-400 font-heading">
                    {formatCurrency(product.price)}
                </Text>
                <Text className="mb-6 text-base leading-6 text-slate-400 font-body">
                    {product.description}
                </Text>
                {
                    product.ingredients.map((ingredient) => (
                        <Text key={ingredient} className="text-base leading-6 text-slate-400 font-body">
                            {"\u2022"} {ingredient}
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}