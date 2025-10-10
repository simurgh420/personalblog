import styled from "styled-components";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const SkillCard = ({ title, description, icon, link }: SkillCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <div className="img-box">{icon}</div>
          <span className="title">{title}</span>
        </div>
        <div className="content">
          <p>{description}</p>
          <a href={link} className="btn-link" target="_blank" rel="noopener noreferrer">
            Read More...
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SkillCard;

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 120px;
    transition: all 0.5s;
    box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11),
      -15px -15px 30px rgba(60, 60, 60, 0.082);
    text-align: center;
    overflow: hidden;
    border-radius: 16px;
  }

  .card:hover {
    height: 260px;
    background: linear-gradient(
      360deg,
      #edededc5 60%,
      hsla(0, 0%, 13%, 1) 70%
    );
  }

  .header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212121;
    margin-bottom: 16px;
  }

  .img-box {
    width: 50px;
    height: 50px;
  }

  .title {
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 900;
    text-transform: uppercase;
    padding: 4px 0 14px 0;
    transition: all 0.5s;
    color: #edededc5;
  }

  .content {
    display: block;
    text-align: left;
    color: #212121;
    margin: 0 18px;
  }

  .content p {
    transition: all 0.5s;
    font-size: 0.8em;
    margin-bottom: 8px;
  }

  .content a {
    color: #1d8122;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .content .btn-link:hover {
    border-bottom: 1px solid #1d8122;
  }
`;
