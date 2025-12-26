import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";


export default function Index() {

  const {user, token, checkAuth, logout} =  useAuthStore();

  console.log(user, token)

  useEffect(()=>{
    checkAuth()
  },[])

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to BookWorm {user?.username}</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <Link href='/(auth)/signup'>Signup Page</Link>
      <Link href='/(auth)'>Login Page</Link>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: 'blue'
  }
})