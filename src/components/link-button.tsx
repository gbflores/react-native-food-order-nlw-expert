import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
    title: string
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
    return (
        <Link {...rest}>
            {title}
        </Link>
    )
}