import { styled } from 'styled-components';

const UiProductList = styled.ul`
  display: flex;
  row-gap: 20px;
  column-gap: 15px;
  flex-wrap: wrap;
`;

const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;

  p {
    color: #3d3d3d;
    font-size: 15px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin: 0;
    padding: 0;
  }
`;

export default UiProductList;

export { EmptyList };
