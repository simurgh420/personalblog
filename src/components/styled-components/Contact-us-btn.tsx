import styled from 'styled-components';

const ContactBtn = () => {
  return (
    <StyledWrapper>
      <div className="light-button">
        <button className="bt">
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>
          <div className="button-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 
                2 0 0 1 2 2v16a2 2 0 0 1-2 
                2H4a2 2 0 0 1-2-2V4zm2 
                0v.01L12 13l8-8.99V4H4zm16 
                2.41-6.59 6.59L20 19.17V6.41zM4 
                6.41v12.76l6.59-6.59L4 6.41zM5.83 
                20h12.34L12 14.83 5.83 20z"/>
            </svg>
            <p>Contact Us</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .light-button button.bt {
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    min-width: 160px; /* ✅ عرض ثابت */
  }

  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 100%; /* ✅ پر کردن عرض */
    background-color: #0a0a0a;
    border-radius: 8px;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 4px;
  }
  .light-button button.bt .button-holder svg {
    height: 40px;
    fill: #0f0f0f;
    transition: 300ms;
    margin-bottom: 6px;
  }

  .light-button button.bt .light-holder {
    position: absolute;
    height: 120px;
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button button.bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 160px;
    height: 160px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button button.bt:hover .button-holder svg {
    fill: rgba(88, 101, 242, 1);
  }

  .light-button button.bt:hover .button-holder {
    color: rgba(88, 101, 242, 1);
    outline: rgba(88, 101, 242, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button button.bt:hover .light-holder .light {
    background: linear-gradient(
      180deg,
      rgba(88, 101, 242, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default ContactBtn;
