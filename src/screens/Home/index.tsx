import React from "react";
import {
  Alert,
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useUberNavigation } from "src/hooks/use-uber-navigation";

const Home: React.FC = () => {
  const data = useUberNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.uberLogo}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  logoWrapper: { padding: 20 },
  uberLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Home;
