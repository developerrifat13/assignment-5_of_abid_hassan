
import { useEffect, useState } from "react";
import technologies from "../data/technologies.json";
import { toast } from "react-toastify";


const Technologies = () => {
      const [myStack, setMyStack] = useState([]);
       const [isLoading, setIsLoading] = useState(true);
      const addToStack = (technology) => {
  const alreadyAdded = myStack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
  toast.warning(`${technology.name} is already in your stack!`);
  return;
}

  setMyStack((previousStack) => [
    ...previousStack,
    technology,
  ]);
  toast.success(`${technology.name} added to your stack!`);
};


const removeFromStack = (technologyId) => {
  setMyStack((previousStack) =>
    previousStack.filter((item) => item.id !== technologyId)
  );
  toast.info("Technology removed from your stack!");
};

useEffect(() => {
  setIsLoading(false);
}, []); 

if (isLoading) {
  return <p>Loading technologies...</p>;
}

  return (
    <section className="technologies" id="technologies">
      <div className="section-heading">
        <p className="section-label">EXPLORE THE ECOSYSTEM</p>
        <h2>Technologies for Your Next Big Idea</h2>
        <p>
          Discover the tools and technologies that help developers
          build amazing things.
        </p>
      </div>

      <div className="my-stack">
  <h2>My Stack ({myStack.length})</h2>
  {myStack.length > 0 && (
  <button onClick={() => setMyStack([])}>
    Clear All
  </button>
)}

  {myStack.length === 0 ? (
    <p>Your stack is empty. Add some technologies!</p>
  ) : (
    <ul>
      
{myStack.map((item) => (
  <li key={item.id}>
    {item.name}

   
<button
  onClick={() => {
    setMyStack([]);
    toast.success("Your stack has been cleared!");
  }}
>
  Clear All
</button>

  </li>
))}

    </ul>
  )}
</div>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <article className="technology-card" key={technology.id}>
            <img
              src={technology.icon}
              alt={`${technology.name} logo`}
              className="technology-icon"
            />

            <span className="technology-badge">
              {technology.badge}
            </span>

            <h3>{technology.name}</h3>
            <p>{technology.description}</p>

            <div className="technology-details">
              <span>{technology.category}</span>
              <span>⭐ {technology.rating}</span>
            </div>

            <span className="technology-difficulty">
              {technology.difficulty}
            </span>
           
<button
  className="add-stack-button"
  disabled={myStack.some((item) => item.id === technology.id)}
  onClick={() => addToStack(technology)}
>
  {myStack.some((item) => item.id === technology.id)
    ? "Added"
    : "Add to Stack"}
</button>



          </article>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
