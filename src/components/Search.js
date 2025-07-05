import React from 'react'
import { TextInput, View } from 'react-native'
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Search = ({
    searchQuery,
    setSearchQuery,
    placeholder = 'Search',
    containerStyle,
    inputStyle,
    // iconColor = 
}) => {
    return (
        <View className='px-4 py-4 flex-row bg-white rounded-lg shadow-md '>
            <View className='bg-searchBg flex-row items-center justify-between w-full rounded-full px-5'>
                <TextInput
                    placeholder={placeholder}
                    // placeholderTextColor={COLORS.inputPlaceholderColor}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    color="#0077b6"
                />
                <MaterialDesignIcons
                    name="magnify"
                    size={26}
                    // className="text-primary-600"
                    color="#0077b6"
                />
            </View>
        </View>
    )
}

export default Search