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
  overflow: hidden;
  padding: 3px;
  position: relative;
  width: 50px;
  height: 25px;
  margin-inline: 10px;

  img {
    height: auto;
    width: 15px;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(60px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-60px)' : 'translateY(0)')};
    }
  }
`;

export default UiToggle;
