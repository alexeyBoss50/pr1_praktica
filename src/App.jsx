
import { useState } from 'react';

function ProductCard({ name, price, image }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>

      <img src={image} alt={name} width="200" />

      <p>Цена: {price} руб.</p>

      <button onClick={() => setCount(count + 1)}>
        Добавить в корзину
      </button>

      <p>Количество: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Магазин мышек и тд</h1>

      <ProductCard
        name="Наушники"
        price={253213}
        image="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
      />

      <ProductCard
        name="Мышка"
        price={25043}
        image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
      />

      <ProductCard
        name="Клава"
        price={8000}
        image="https://images.unsplash.com/photo-1595225476474-87563907a212?w=400"
      />
    </div>
  );
}

export default App;
