import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import Constants from 'expo-constants';

export default function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // API URL 가져오기 (app.json에 정의된 값 사용)

  const apiUrl = Constants.manifest.extra.apiUrl;

  console.log(apiUrl);  // http://192.168.56.1:8080
  // 로그인 성공 시 처리 (예시로 로그인 상태 업데이트)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 로그인 상태에 따라 화면 다르게 표시
  if (isLoggedIn) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to the Main Screen!</Text>
        <Link href="/main">
          <Text style={{ color: 'blue', marginTop: 20 }}>Go to Main Screen</Text>
        </Link>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to These Days App</Text>
      <Link href="/register">
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Register Page</Text>
      </Link>
      <Link href="/login">
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Login Page</Text>
      </Link>
    </View>
  );
}
