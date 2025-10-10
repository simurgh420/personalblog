
import styled from 'styled-components';
interface ProjectCardProps {
  title: string;
  description: string;
  demo: string;
  source: string;
  icon?: string; 
  image?: string;
}

const ProjectCard = ({title,description,demo,source,icon,image }:ProjectCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        {image && <img src={image} alt={title} className="card__image" />}
        <div className="card__content">
          <p className="card__title">{title }</p>
          <p className="card__description">{description}{ icon}</p>
          <a href={demo} target="_blank" rel="noopener noreferrer">
   <button className="card__button">Live Demo</button>
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer">
               <button className="card__button secondary">Source Code</button>
       </a>
       
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 350px;
    aspect-ratio: 16/9;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    width: 100%;
    height: 100%;
     object-fit: cover;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 10px;
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card__button {
    padding: 15px;
    border-radius: 8px;
    background: #777;
    border: none;
    color: white;
  }

  .secondary {
    background: transparent;
    color: #777;
    border: 1px solid #777;
  }`;

export default ProjectCard;
