import styled from 'styled-components';

const WorkBtn = () => {
  return (
    <StyledWrapper>
      <button>WORKS</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 10px 40px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: relative;
    min-width: 160px;
    margin-top: 12px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  button::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);

    content: 'WORKS'; /* 👈 متن هماهنگ با دکمه */
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: var(--move1);
    color: white;
    opacity: 0; /* پیش‌فرض مخفی */
  }

  button:hover::after {
    opacity: 1;
    animation: glitch_4011 1s steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #e94be8;
    border: 3px solid rgb(0, 255, 213);
  }

  button:hover {
    text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #e94be8;
    border: 1px solid rgb(0, 255, 213);
    box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
  }

  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px, -10px);
    }
    10% {
      clip-path: var(--move2);
      transform: translate(-10px, 10px);
    }
    20% {
      clip-path: var(--move3);
      transform: translate(10px, 0px);
    }
    30% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }
    40% {
      clip-path: var(--move5);
      transform: translate(10px, -10px);
    }
    50% {
      clip-path: var(--move6);
      transform: translate(-10px, 10px);
    }
    60% {
      clip-path: var(--move1);
      transform: translate(10px, -10px);
    }
    70% {
      clip-path: var(--move3);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--move2);
      transform: translate(10px, -10px);
    }
    90% {
      clip-path: var(--move4);
      transform: translate(-10px, 10px);
    }
    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }
`;

export default WorkBtn;
