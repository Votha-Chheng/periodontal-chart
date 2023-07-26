import { Button, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import {Link} from 'expo-router'

const Home: FC = () => {

  return (
    <View>
      <Text style={styles.title}>Cat X Dog</Text>
      <Text style={styles.subtitle}>Welcome</Text>
      <Link href="/form">To Form</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});