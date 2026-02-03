import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/icon.png')} style={styles.logo} contentFit="contain" />
      <ThemedText type="title" style={styles.title}>
        Explore
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
  },
});
