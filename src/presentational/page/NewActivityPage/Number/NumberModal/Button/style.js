import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.skyBlue,
    padding: metrics.doubleBaseMargin,
  },
  text: {
    color: colors.snow,
    fontSize: fonts.size.h5,
    textAlign: 'center',
    fontWeight: '400'
  }
});

export default style;
