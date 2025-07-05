import { View } from 'react-native'
import Header from '../../components/Header'
import Search from '../../components/Search'


const Browse = () => {
    return (
        <View className='flex-1 justify-center bg-white'>
            <Header subheading={'View your'} heading={'Recents'} />
            <View className='flex-1 bg-white'>
                <Search searchKeyword={''} />
            </View>
        </View>
    )
}

export default Browse