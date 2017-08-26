import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../../src/theme';

export default StyleSheet.create({
  background:{
    backgroundColor: colors.background
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMargin,
    marginTop: metrics.doubleBaseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.smallMargin,

  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.darkBlue,
    fontSize: fonts.size.medium
  },
  numberText: {
    marginLeft: metrics.baseMargin,
    color: colors.bloodOrange,
    fontSize: fonts.size.medium,
    marginRight: metrics.smallMargin,
    alignSelf: 'flex-end',
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: metrics.baseMargin,
    tintColor: colors.blue,
    height: fonts.size.medium
  },
  rowContainer: {
    flexDirection: 'row',
    margin: metrics.smallMargin,
    padding: metrics.doubleBaseMargin,
    backgroundColor: colors.snow,
    borderRadius: 2
  },

  
});