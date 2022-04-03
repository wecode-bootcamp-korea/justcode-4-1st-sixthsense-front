import style from './Product.module.css';

function Product({
  name,
  category,
  islike,
  city,
  district,
  lowpeople,
  upperpeople,
  lowprice,
  upperprice,
  image,
}) {
  return (
    <section className={style.wapper}>
      <div className={style.content}>
        <div>{name}</div>
        <div>{category}</div>
        <div className={style.smallcontent}>
          <div>
            {city}/{district}
          </div>
          <div>
            기준 {lowpeople}명 (최대 {upperpeople}명)
          </div>
          <div>
            {lowprice} ~ {upperprice}
          </div>
          <div> 예약하기 </div>
        </div>
      </div>
      <div className={style.image}>
        <img src={image} />
      </div>
    </section>
  );
}

export default Product;
