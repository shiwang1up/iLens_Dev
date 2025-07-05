import { Text, TouchableOpacity, View } from 'react-native'
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Header = ({ heading, subheading, navigation }) => {
    return (
        <View className='bg-pink-100 px-4 py-4 '>
            <View className='bg-pink-100 justify-between items-center flex-row '>
                <View className='border justify-start items-center '>
                    <Text className='text-base text-black'>{subheading}</Text>
                </View>
                <View className='border items-center '>
                    <View className='flex-row justify-end '>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className='bg-primary-100 rounded-full p-2 mx-1'>
                            <MaterialDesignIcons name='cog' size={20} className='mx-1' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className='bg-primary-100 rounded-full p-2 mx-1'>
                            <MaterialDesignIcons name='dots-vertical' size={20} className='mx-1' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
            <View className='border items-start '>
                <Text className='text-2xl font-extrabold text-primary-600'>{heading}</Text>
            </View>
        </View >
    )
}

export default Header