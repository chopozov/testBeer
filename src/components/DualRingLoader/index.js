import styled, { keyframes } from "styled-components";

const DualRingLoader = ({ height, width }) => <DualRing height={height} width={width} />;

const dualRingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DualRing = styled.div`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  
  &:after {
    content: "";
    display: block;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${dualRingAnimation} 1.2s linear infinite;
  }
`;

export default DualRingLoader;
