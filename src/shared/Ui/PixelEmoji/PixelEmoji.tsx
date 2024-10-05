import React from 'react';
import {EPixelEmojiMap, PixelEmojiMap} from './PixelEmojiMap';
import {NumberProp} from 'react-native-svg';

type Props = {
  emoji: EPixelEmojiMap;
  width: NumberProp;
  height: NumberProp;
};

export function PixelEmoji({emoji, width = 30, height = 30}: Props) {
  const EmojiJSX = PixelEmojiMap[emoji];
  if (!EmojiJSX) {
    return null;
  }

  return <EmojiJSX width={width} height={height} />;
}
