import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation, Redirect } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";

export default function Product() {
    const { id } = useLocalSearchParams()
    const cartStore = useCartStore();
    const navigation = useNavigation();

    const product = PRODUCTS.find((item) => item.id == id)

    function handleAddToCart() {
        if (product) {
            cartStore.add(product)
            navigation.goBack()
        }
    }

    if (!product) {
        return <Redirect href="/"></Redirect>
    }

    return (
        <View className="flex-1">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />
            <LinkButton title="Voltar" href="/" className="absolute z-10 w-16 h-8 p-2 font-bold text-center text-black rounded-sm top-5 left-5 bg-lime-300" />
            <View className="flex-1 p-5 mt-8">
                <Text className="text-xl text-white font-heading">{product.title}</Text>
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
            <View className="gap-5 p-5 pb-8">
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>Adicionar ao Pedido</Button.Text>
                </Button>
                <LinkButton className="text-base text-center text-slate-300 font-body" title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    )
}