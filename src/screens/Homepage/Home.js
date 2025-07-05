import { TouchableOpacity, View } from "react-native"
import Header from "../../components/Header"
import Search from "../../components/Search"
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View className='flex-1 justify-center bg-white'>
            <Header subheading={'Welcome to'} heading={'iLens'} navigation={navigation} />
            <View className=' bg-white'>
                <Search searchKeyword={''} />
            </View>
            <View className="flex-1 justify-center items-center ">
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    <MaterialDesignIcons name='camera-iris' size={36} className='mx-1' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home