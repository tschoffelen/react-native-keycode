declare module 'react-native-keycode' {
    export interface KeycodeInputProps {
        length?: number
        tintColor?: string
        textColor?: string
        onChange?: (value: string) => void
        onComplete?: (value: string) => void
        autoFocus?: bool
        uppercase?: bool
        alphaNumeric?: bool
        numeric?: bool
        value?: string
        style?: any
        inputRef?: (ref: React.RefObject<TextInput>) => void
    }

    export const KeycodeInput: React.FC<KeycodeInputProps>
}
