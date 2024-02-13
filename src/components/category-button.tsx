import { Text, Pressable, PressableProps } from 'react-native';
import { clsx } from 'clsx';

type CategoryProps = PressableProps & {
    title: string,
    isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
    return (
        <Pressable className={clsx("justify-center h-10 px-4 rounded-md bg-slate-800", isSelected && "border-2 border-lime-300")} {...rest}>
            <Text className="text-sm text-slate-100 font-subtitle">
                {title}
            </Text>
        </Pressable>
    )
}