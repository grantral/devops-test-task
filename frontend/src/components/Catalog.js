import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

async function getCatalog(id) {
  const response = await fetch(`${process.env.REACT_APP_API}/api/catalog/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export default function Catalog() {
  const location = useLocation();

  const [catalog, setCatalog] = useState(null);
  const id = location.search.replace('?id=', '');

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }
      try {
        const res = await getCatalog(id);
        setCatalog(res[0]);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Catalog</h1>
      <ul style={{listStyle: 'none'}}>
        <li><Link to="/catalog?id=59d3ee0b-d2a1-455c-a27d-9062764e59d4">59d3ee0b-d2a1-455c-a27d-9062764e59d4</Link></li>
        <li><Link to="/catalog?id=5a26df2f-8ebd-47bd-8890-53b543247d33">5a26df2f-8ebd-47bd-8890-53b543247d33</Link></li>
      </ul>
      {
        !id && <></>
      }
      {
        catalog && id &&
        <>
          <div>ID: {catalog.id}</div>
          <div>Title: {catalog.title}</div>
        </>
      }
      {
        !catalog && id &&
        <div>Loading ...</div>
      }
    </>
  );
};

