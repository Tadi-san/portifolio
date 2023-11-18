import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
   <div className=" w-full flex justify-center">

      <a className="proj-imgbx text-white cursor-pointer" href="">
        <img className="proj-img" src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    
   </div>
  );
};
