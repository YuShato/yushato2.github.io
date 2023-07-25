import React, { FC } from 'react';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';
import { LazyImageProps } from './types';
import SkeletonImage from './skeleton';

const LazyImage: FC<LazyImageProps> = ({ width, height, src, alt, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading();

  const [ref, inView] = useInView({
    triggerOnce: true,
    skip: supportsLazyLoading !== false,
    threshold: 0.1,
    initialInView: false,
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      style={{
        position: 'relative',
        background: '#2a4b7a',
        width,
        height,
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={src}
          alt={alt}
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      ) : (
        <SkeletonImage />
      )}
    </div>
  );
};

export default LazyImage;
