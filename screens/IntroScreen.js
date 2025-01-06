import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';

export default function IntroScreen({ navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomePage');
    }, 10000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim]);

  return (
    <ImageBackground
      source={{ uri: 'https://png.pngtree.com/png-clipart/20231005/original/pngtree-boy-icon-vector-image-student-isolated-icon-vector-png-image_12966467.png' }} 
      style={styles.background}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.heading}>Chào mừng đến với ứng dụng!</Text>
        <Text style={styles.subheading}>Em là Ngô Hoàng Ân - 21110131</Text>
        <Text style={styles.subheading}>Sinh viên khoa CNTT</Text>
        <Text style={styles.subheading}>Lớp LTDT nâng cao: 242ADMP431879_02CLC_CT2</Text>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ cho nội dung
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
});
