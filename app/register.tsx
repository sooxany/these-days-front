import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants'; // expo-constants import

export default function RegisterScreen() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // 환경 변수 가져오기 
  const apiUrl = Constants.manifest.extra.apiUrl;

  console.log(apiUrl);  // http://192.168.56.1:8080

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${apiUrl}/register`, {
        username: id,
        password: password,
      });
      Alert.alert('회원가입 성공', response.data);
      router.push('/'); // 회원가입 후 첫 화면으로 돌아감
    } catch (error: any) {
      Alert.alert('회원가입 실패', error.response?.data || '오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupButton}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupButton: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
