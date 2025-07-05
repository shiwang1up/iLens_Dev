import { Text, View, TouchableOpacity } from 'react-native'

const Recent = ({ navigation }) => {
    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <Text className="text-green-500 text-2xl font-bold text-center mb-4">
                Recent
            </Text>
            <TouchableOpacity
                className="bg-blue-500 px-4 py-2 rounded"
                onPress={() => navigation.goBack()}
            >
                <Text className="text-white text-center">Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Recent
