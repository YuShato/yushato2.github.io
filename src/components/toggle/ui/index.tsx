import { styled } from 'styled-components';

interface ToggleContainerProps {
  lightTheme: boolean;
  theme: 'light' | 'dark';
}

const UiToggle = styled.button<ToggleContainerProps>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 6px;
  position: relative;
  width: 80px;
  height: 40px;

  img {
    height: auto;
    width: 25px;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

export default UiToggle;
