import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Image,
  View,
} from 'react-native';

interface BackgroundImageRepeatProps {
  readonly source: ImageSourcePropType;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly opacity: number;
}

/**
 * Background image repeat
 *
 * @param source Image source
 * @param imageWidth image width
 * @param imageHeight image height
 * @param opacity background opacity
 */
const BackgroundImageRepeat: React.FC<BackgroundImageRepeatProps> = ({
  source,
  imageWidth,
  imageHeight,
  opacity: imageOpacity = 1,
}: BackgroundImageRepeatProps) => {
  const areaWidth = Dimensions.get('screen').width;
  const areaHeight = Dimensions.get('screen').height;
  const totalHorizontalImages = Math.ceil(areaWidth / imageWidth);
  const totalVerticalImages = Math.ceil(areaHeight / imageHeight);
  const imagesContainer = [];

  const styles = StyleSheet.create({
    rowImage: {
      opacity: imageOpacity,
      width: imageWidth,
      height: imageHeight,
    },
    column: {
      width: totalHorizontalImages,
      flexDirection: 'row',
    },
    container: {
      flex: 1,
      position: 'absolute',
    },
  });

  for (let x = 0; x < totalVerticalImages; x++) {
    const images = [];

    for (let y = 0; y < totalHorizontalImages; y++) {
      images.push(
        <Image key={x + y} source={source} style={styles.rowImage} />,
      );
    }

    imagesContainer.push(
      <View key={x} style={styles.column}>
        {images}
      </View>,
    );
  }

  return <View style={styles.container}>{imagesContainer}</View>;
};

export default BackgroundImageRepeat;
