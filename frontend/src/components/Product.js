import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

async function getProduct(id) {
  const response = await fetch(`${process.env.REACT_APP_API}/api/products/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}
export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProduct(id);
        setProduct(res[0]);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Product</h1>
      {
        product &&
        <>
          <div>ID: {product.id}</div>
          <div>Title: {product.title}</div>
        </>
      }
      {
        !product &&
        <div>Loading ...</div>
      }
    </>
  );
};

