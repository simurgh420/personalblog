import styled from 'styled-components';

const AboutBack = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <svg width="200px" height="150px">
          <polyline points="0.157 73.954, 50 73.954, 80 150, 130 0, 160 75, 200 75" id="back" />
          <polyline points="0.157 73.954, 50 73.954, 80 150, 130 0, 160 75, 200 75" id="front" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15; /* شفافیت پایین */
  pointer-events: none; /* مزاحم کلیک نشه */
  z-index: 0;

  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .loading svg polyline#back {
    stroke: #ff4d5033;
  }

  .loading svg polyline#front {
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }

  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default AboutBack;
