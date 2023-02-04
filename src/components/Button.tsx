import { ButtonContainer, ButtonVariant } from "./Button.styles"

interface ButtonProps{
    variant?: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green'
}


export function Button({ variant = "primary"}: ButtonProps){
    return(
        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    )
}