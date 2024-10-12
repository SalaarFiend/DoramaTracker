import {styled} from 'tamagui';

import {fonts} from '../../fonts/fonts';
import {Text} from '@tamagui/core';
import {AppColors} from '../Colors/colors';

export const PixelText = styled(Text, {
  fontFamily: fonts.PixeloidSans,
  color: AppColors.textColors.baseTextColor,
});
