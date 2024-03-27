import Header from "../Header";
import { portfolioData } from "./data";

export default function Portfolio() {
  return (
    <div>
      <Header></Header>
      <h1>Portfolio</h1>
      <h2>Projects</h2>
      <ul className="project-group">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {portfolioData.map((project) => (
          <li className="list-group-item" key={project.id}>
            <a href={project.gitRepo}>{project.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
