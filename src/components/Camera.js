import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Header from './Header';

const DocumentScanner = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Id Card');
    const [side, setSide] = useState('Side A');
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        'Id Card': false,
        'Passport': false,
        'QR Code': false,
        'Documents': false,
        'Photo': false,
    });

    const cameraRef = useRef(null);
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('back');

    useEffect(() => {
        (async () => {
            if (!hasPermission) {
                await requestPermission();
            }
        })();
    }, [hasPermission]);

    const toggleOption = (option) => {
        setSelectedOptions(prev => ({
            ...prev,
            [option]: !prev[option]
        }));
    };

    const captureDocument = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePhoto({
                    qualityPrioritization: 'quality',
                    flash: 'off',
                    enableShutterSound: false,
                });
                setCapturedImage(`file://${photo.path}`);
                setIsCameraActive(false);
            } catch (error) {
                console.error('Error capturing photo:', error);
            }
        }
    };

    const toggleSide = () => {
        setSide(prev => prev === 'Side A' ? 'Side B' : 'Side A');
    };

    const renderCamera = () => {
        if (!device || !hasPermission) return null;

        return (
            <View style={StyleSheet.absoluteFill}>
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={isCameraActive}
                    photo={true}
                />

                {/* Document overlay frame */}
                <View style={styles.overlay}>
                    {/* <Svg height="100%" width="100%" style={styles.svgOverlay}>
                        <Rect
                            x="10%"
                            y="25%"
                            width="80%"
                            height="50%"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="5, 5"
                            fill="transparent"
                        />
                    </Svg> */}

                    <View style={styles.controlsContainer}>
                        <TouchableOpacity
                            style={styles.sideButton}
                            onPress={toggleSide}
                        >
                            <Text style={styles.sideButtonText}>{side}</Text>
                        </TouchableOpacity>

                        <View style={styles.captureButtonContainer}>
                            <TouchableOpacity
                                style={styles.captureButton}
                                onPress={captureDocument}
                            >
                                <View style={styles.captureButtonInner} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setIsCameraActive(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    if (isCameraActive) {
        return renderCamera();
    }

    return (
        <View className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100 p-4'>
                {/* Side indicator */}
                <View className='bg-white rounded-lg p-4 mb-4'>
                    <Header navigation={navigation} />
                </View>

                {/* Preview area */}
                <View className='flex-1 bg-white rounded-lg mb-4 items-center justify-center'>
                    {capturedImage ? (
                        <Image
                            source={{ uri: capturedImage }}
                            className='w-full h-full rounded-lg'
                            resizeMode="contain"
                        />
                    ) : (
                        <Text className='text-gray-500'>No document captured</Text>
                    )}
                </View>

                {/* Document type tabs */}
                <View className='flex-row justify-between mb-4'>
                    {['Id Card', 'Passport', 'QR Code', 'Documents', 'Photo'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            className={[
                                'p-2 rounded-lg flex-1 mx-1 items-center',
                                activeTab === tab ? 'bg-blue-500' : 'bg-white'
                            ].join(' ')}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text className={activeTab === tab ? 'text-white' : 'text-black'} >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View className='flex-row justify-between items-center bg-white rounded-lg p-4'>
                <TouchableOpacity
                    className='bg-red-500 px-4 py-2 rounded-lg'
                    onPress={() => setCapturedImage(null)}
                >
                    <Text className='text-white'>Cancel</Text>
                </TouchableOpacity>

                <View className='flex-row'>
                    {['Id Card', 'Passport', 'QR Code', 'Documents', 'Photo'].map((option) => (
                        <TouchableOpacity
                            key={option}
                            className='mx-1'
                            onPress={() => toggleOption(option)}
                        >
                            <View className={[
                                'w-6 h-6 border rounded-md items-center justify-center',
                                selectedOptions[option] ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                            ].join(' ')}>
                                {selectedOptions[option] && (
                                    <Text className='text-white'>✓</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity
                    className='bg-green-500 px-4 py-2 rounded-lg'
                    onPress={() => setIsCameraActive(true)}
                >
                    <Text className='text-white'>Done</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position: 'relative',
    },
    svgOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    controlsContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sideButton: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sideButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    captureButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonInner: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
    },
    cancelButton: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DocumentScanner;