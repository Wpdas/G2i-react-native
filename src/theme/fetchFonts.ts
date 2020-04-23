import * as Font from 'expo-font';

/**
 * Load custom fonts
 */
const loadFonts = () => {
  return Font.loadAsync({
    'VarelaRound-Regular': require('@assets/fonts/VarelaRound-Regular.ttf'),
  });
};

export default loadFonts;
