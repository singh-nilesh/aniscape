import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

const CustomButton = ({ title = "button", handlePress, containerStyles, textStyles, isLoading = false }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            className={`bg-secondary w-4/5 rounded-xl min-h[64px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-xl p-2 ${textStyles}`} >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton