import { styled } from 'styled-components';

const SkeletonRow = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #b4bebc;
`;

const SkeletonImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #adbeba;
  border-radius: 8px;
  padding-inline: 10px;
`;

const SkeletonItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: auto;
  min-height: 300px;
  max-width: 400px;
`;

const UiSkeleton = Object.assign(SkeletonItem, {
  Row: SkeletonRow,
  Img: SkeletonImg,
});

export default UiSkeleton;
