import React from 'react';
import MainContact from './components/contact/MainContact';
import TravelList from './components/list/TravelList';
import HashtagList from './components/list/HashtagList';
import BannerSlideBig from './components/bannerslide/BannerSlideBig';
import BannerSliderMedium from './components/bannerslide/BannerSlideMedium';
import BannerSlideSmall1 from './components/bannerslide/BannerSlideSmall1';
import BannerSlideSmall2 from './components/bannerslide/BannerSlideSmall2';
import BannerSlideSmall3 from './components/bannerslide/BannerSlideSmall3';
import BannerSlideSmall4 from './components/bannerslide/BannerSlideSmall4';

function Main() {
  const description = [
    {
      id: 1,
      text: '오직 스테이 포레스트에서만',
    },
    {
      id: 2,
      text: '자연 속에서 느끼는 따스한 봄의 정취',
    },
    {
      id: 3,
      text: '특별한 시간을 선물하는 High-end stay',
    },
  ];
  return (
    <>
      <BannerSlideBig />
      <BannerSlideSmall1 />
      <BannerSliderMedium />
      <BannerSlideSmall2 />
      <TravelList />
      <HashtagList />
      <BannerSlideSmall3 />
      <BannerSlideSmall4 />
      <MainContact />
    </>
  );
}

export default Main;
