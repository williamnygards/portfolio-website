const ProjectCard = ({ imageURL, link, title, desc }) => {
  return (
    <a href={link} target="_blank">
      <img src={imageURL} className="hover" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  );
};

export default ProjectCard;
