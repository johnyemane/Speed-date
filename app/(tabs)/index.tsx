import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.logo}
        contentFit="contain"
      />
      <ThemedText type="title" style={styles.title}>
        Speed-date
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
    width: 120,
    height: 120,
  },
  title: {
    marginTop: 8,
    fontSize: 24,
  },
});
