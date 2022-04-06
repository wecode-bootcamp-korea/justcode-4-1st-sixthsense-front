import { useEffect } from 'react';
import Product from './Product/Product';

import style from './Products.module.css';

function Products() {
  useEffect(() => {
    fetch('/dormitories/slide', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => console.log(result));
  }, []);

  return (
    <section className={style.componentWap}>
      <div className={style.productWap}>
        {mock.map(data => (
          <Product
            key={data.id}
            name={data.name}
            category={data.category}
            islike={data.islike}
            city={data.city}
            district={data.district}
            lowpeople={data.lowpeople}
            upperpeople={data.upperpeople}
            lowprice={data.lowprice}
            upperprice={data.upperprice}
            image={data.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;

const mock = [
  {
    id: 1,
    name: '유유자적',
    category: '민박',
    islike: true,
    city: '강원',
    district: '춘천시',
    lowpeople: 1,
    upperpeople: 3,
    lowprice: 10000,
    upperprice: 20000,
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  },
  {
    id: 2,
    name: '유유자적',
    category: '민박',
    city: '강원',
    islike: true,
    district: '춘천시',
    lowpeople: 1,
    upperpeople: 3,
    lowprice: 10000,
    upperprice: 20000,
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  },
  {
    id: 3,
    name: '유유자적',
    category: '민박',
    city: '강원',
    islike: true,
    district: '춘천시',
    lowpeople: 1,
    upperpeople: 3,
    lowprice: 10000,
    upperprice: 20000,
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  },
  {
    id: 4,
    name: '유유자적',
    category: '민박',
    city: '강원',
    islike: true,
    district: '춘천시',
    lowpeople: 1,
    upperpeople: 3,
    lowprice: 10000,
    upperprice: 20000,
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
  },
];
