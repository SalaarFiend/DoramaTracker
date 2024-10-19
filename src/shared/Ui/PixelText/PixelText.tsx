import {styled} from 'tamagui';

import {fonts} from '../../fonts/fonts';
import {Text} from '@tamagui/core';
import {AppColors} from '../Colors/colors';

export const PixelTextStyle = {
  fontFamily: fonts.PixeloidSans,
  color: AppColors.textColors.baseTextColor,
};

export const PixelText = styled(Text, PixelTextStyle);
