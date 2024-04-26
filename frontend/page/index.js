import { useEffect, useState } from 'react';
import { getExperiencias } from '../services/api';

export default function Home() {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    const fetchExperiencias = async () => {
      const data = await getExperiencias();
      setExperiencias(data);
    };
    fetchExperiencias();
  }, []);

  return (
    <div>
      <h1>Experiencias Interactivas</h1>
      <ul>
        {experiencias.map((experiencia) => (
          <li key={experiencia._id}>
            <h2>{experiencia.titulo}</h2>
            <p>{experiencia.descripcion}</p>
            <p>Sala: {experiencia.salaInteractiva}</p>
            <img src={experiencia.imagenRelacionada} alt={experiencia.titulo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
