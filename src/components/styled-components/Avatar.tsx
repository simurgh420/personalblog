import profileImg from '@/assets/profphoto.jpg';
import styled from 'styled-components';

const Avatar = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image">
          <img
            src={profileImg}
            alt="پروفایل"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="card-info">
          <span>Mmdrza Hb</span>
          <p>Front End Developer</p>
        </div>
        <a className="button" href="#">
          Follow
        </a>
      </div>
    </StyledWrapper>
  );
};

export default Avatar;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0a0a0a; /* پس‌زمینه کلی */

  .card {
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background-color: #1a1a1a; /* پس‌زمینه کارت */
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    box-shadow: 0 8px 20px rgba(0,0,0,0.6);
  }

  .card::before {
    content: "";
    width: 350px;
    height: 100px;
    position: absolute;
    top: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 3px solid #1a1a1a;
    background: linear-gradient(
      40deg,
      #7f5af0 0%,
      #2cb67d 50%,
      #ff8906 100%
    );
    transition: all 0.3s ease;
  }

  .card * {
    z-index: 1;
  }

  .image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-top: 30px;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: all 0.5s ease;
  }

  .card-info span {
    font-weight: 600;
    font-size: 22px;
    color: #fff;
    margin-top: 15px;
  }

  .card-info p {
    color: #aaa;
    font-size: 14px;
  }

  .button {
    text-decoration: none;
    background-color: #2cb67d;
    color: #0a0a0a;
    padding: 6px 20px;
    border-radius: 5px;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: 12px;
  }

  /* انیمیشن hover */
  .card:hover {
    width: 300px;
    border-radius: 250px;
  }

  .card:hover::before {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border-bottom: none;
    transform: scale(0.95);
  }

  .card:hover .card-info {
    transform: translateY(-10%);
  }

  .button:hover {
    background-color: #7f5af0;
    color: #fff;
    transform: scale(1.05);
  }
`;
