import styled from 'styled-components';

const MainBack = () => {
  return (
    <StyledWrapper>
      <div className="obj">
        <div className="objchild">
          <span className="inn6" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2; /* اوپاسیتی پایین */
  pointer-events: none; /* مزاحم کلیک‌ها نشه */
  z-index: 0; /* پشت متن قرار بگیره */

  .obj {
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transition: 0.5s all;
    transform: rotateX(-25deg) rotateY(20deg);
  }

  .objchild {
    animation: rotate 4s infinite linear;
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .objchild::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    box-shadow: 0 0 200px 15px white;
    transform: rotateX(90deg) scale(1.1) translateZ(-120px);
  }

  .inn6 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(21, 21, 21);
    transform: rotateX(90deg) translateZ(100px);
    animation: updown 4s infinite ease-in-out;
  }

  @keyframes rotate {
    0% { transform: rotate3d(0,1,0,0deg); }
    100% { transform: rotate3d(0,1,0,360deg); }
  }

  @keyframes updown {
    0% { transform: translateY(100px) rotateX(90deg) translateZ(100px); }
    50% { transform: translateY(200px); }
    100% { transform: translateY(100px) rotateX(450deg) translateZ(100px); }
  }
`;

export default MainBack;
