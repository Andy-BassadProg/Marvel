import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/heroes")
      .then(res => {
        setHeroes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur chargement", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Chargement...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Héros Marvel</h1>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <strong>{hero.name}</strong> — {hero.realName} ({hero.team})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;