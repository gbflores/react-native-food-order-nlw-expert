import { Header } from "@/components/header";
import { Text, View, ScrollView } from "react-native";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

export default function Cart() {
    const cartStore = useCartStore()
    const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))
    const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)
    return (
        <View className="flex-1 pt-8">
            <Header title="Seu carrinho" cartQuantityItems={cartQuantityItems}></Header>
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View className="flex-1 p-5">
                        {cartStore.products.length > 0 ? (
                            <View className="flex-1 border-b border-slate-700">
                                {
                                    cartStore.products.map((product) => (
                                        <Product key={product.id} data={product}></Product>
                                    ))
                                }
                            </View>
                        ) : (
                            <Text className="my-8 text-center font-body text-slate-400">Seu carrinho está vazio</Text>
                        )}

                        <View className="flex-row items-center gap-2 mt-5 mb-4">
                            <Text className="text-xl text-white font-subtitle">Total:</Text>
                            <Text className="text-2xl text-lime-400 font-heading">{total}</Text>
                        </View>

                        <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento."></Input>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View className="gap-5 p-5">
                <Button>
                    <Button.Text>Enviar pedido</Button.Text>
                    <Button.Icon>
                        <Feather name='arrow-right-circle' size={20} />
                    </Button.Icon>
                </Button>
                <LinkButton className="text-base text-center text-slate-300 font-body" title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    )
}