import {SvgProps} from 'react-native-svg';
import HandCrossFingerHeartSVG from '../../../../assets/svg/hand-cross-finger-heart.svg';

export enum EPixelEmojiMap {
  HandCrossFingerHeart = 'HandCrossFingerHeart',
}

export const PixelEmojiMap: Record<EPixelEmojiMap, React.FC<SvgProps>> = {
  HandCrossFingerHeart: HandCrossFingerHeartSVG,
};
