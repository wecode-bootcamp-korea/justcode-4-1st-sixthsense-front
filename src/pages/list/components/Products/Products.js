import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product/Product';

import style from './Products.module.css';

function Products() {
  const location = useLocation();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '유유자적',
      category: '민박',
      islike: true,
      city: '강원',
      district: '춘천시',
      headCount: [3, 2, 1],
      price: [20000, 300000],
      imageUrl: [
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      ],
    },
  ]);
  useEffect(() => {
    fetch('http://localhost:8000/dormitories/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        setProducts(result.data);
      });
  }, []);
  useEffect(() => {
    if (location.search === '') {
      fetch('http://localhost:8000/dormitories/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(result => {
          setProducts(result.data);
        });
    }

    if (location.search !== '') {
      fetch(`http://localhost:8000/dormitories/search/${location.search}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(result => {
          result.searchedDormitories && setProducts(result.searchedDormitories);
        });
    }
  }, [location]);

  return (
    <section className={style.componentWap}>
      <div className={style.productWap}>
        {products.map(data => (
          <Product
            key={data.id}
            name={data.name}
            category={data.category}
            islike={data.islike}
            city={data.city}
            district={data.district}
            people={data.headCount[0]}
            price={data.price[0]}
            image={data.imageUrl[1]}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
