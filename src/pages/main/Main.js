import style from './Main.module.css';
import MainContact from './components/contact/MainContact';
import TravelList from './components/list/TravelList';
import HashtagList from './components/list/HashtagList';
import SliderMedium from './components/sliderMedium/SliderMedium';
import BannerSlideSmall1 from './components/bannerslide/BannerSlideSmall1';
import BannerSlideSmall2 from './components/bannerslide/BannerSlideSmall2';

function Main() {
  const description = [
    {
      id: 1,
      text: '오직 스테이 포레스트에서만',
      css: 1,
    },
    {
      id: 2,
      text: '자연 속에서 느끼는 따스한 봄의 정취',
      css: 2,
    },
    {
      id: 3,
      text: '특별한 시간을 선물하는 High-end stay',
      css: 2,
    },
  ];

  return (
    <>
      <div className={`${style.sliderBig} ${style.mainFirst}`}>
        slider big 1
      </div>
      <BannerSlideSmall1 description={description[0]} />
      <div className={style.mainBanner}>banner</div>
      <div className={style.sliderMedium}>slider medium 1</div>
      <BannerSlideSmall2 />
      <div className={style.sliderBig}>slider big 2</div>
      <div className={style.travelList}>travel list</div>
      <div className={style.hashtagList}>hashtag list</div>
      <BannerSlideSmall1 description={description[1]} />
      <BannerSlideSmall1 description={description[2]} />
      <div className={style.sliderMedium}>slider medium 1</div>
      <div className={style.sliderMedium}>
        <SliderMedium />
      </div>
      <div className={style.sliderBig}>slider big 2</div>
      <div className={style.travelList}>
        <TravelList />
      </div>
      <div className={style.hashtagList}>
        <HashtagList />
      </div>
      <MainContact />
    </>
  );
}

export default Main;
