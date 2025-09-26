import React, { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
};

const ProductDetails: React.FC<{ productId: string }> = ({ productId }) => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`/api/products/${productId}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error("Errore fetch");
        return res.json();
      })
      .then(setData)
      .catch(err => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [productId]);

  if (loading) return <span>Caricamento...</span>;
  if (error) return <span>Errore: {error}</span>;
  if (!data) return null;

  return (
    <div>
      <h3>{data.name}</h3>
      <span>Prezzo: {data.price}€</span>
    </div>
  );
};

export default ProductDetails;
