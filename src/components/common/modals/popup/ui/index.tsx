import { styled } from 'styled-components';

const PopupInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  border: 1px solid #eaeaea;
  color: #3d3d3d;
  box-sizing: border-box;

  &::placeholder {
    color: #acacac;
  }

  &:hover,
  &:focus {
    border: 1px solid #46a358;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
    outline: none;
  }
`;

const PopupWrapper = styled.div`
  position: relative;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const UiPopup = Object.assign(PopupWrapper, { Input: PopupInput });

export default UiPopup;
