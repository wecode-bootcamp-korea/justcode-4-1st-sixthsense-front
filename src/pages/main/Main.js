import React from 'react';
import MainContact from './components/contact/MainContact';
import TravelList from './components/list/TravelList';
import HashtagList from './components/list/HashtagList';
import BannerSliderMedium from './components/bannerslide/BannerSlideMedium';
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
      <BannerSlideSmall1 description={description[0]} />
      <BannerSliderMedium />
      <BannerSlideSmall2 />
      <TravelList />
      <HashtagList />
      <BannerSlideSmall1 description={description[1]} />
      <BannerSlideSmall1 description={description[2]} />
      <MainContact />
    </>
  );
}

export default Main;
