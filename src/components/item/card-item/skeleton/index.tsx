import React from 'react';
import UiSkeleton from './ui';

const SkeletonItem = () => {
  return (
    <UiSkeleton>
      <UiSkeleton.Img />

      <UiSkeleton.Row />

      <UiSkeleton.Row />

      <UiSkeleton.Row />
    </UiSkeleton>
  );
};

export default SkeletonItem;
