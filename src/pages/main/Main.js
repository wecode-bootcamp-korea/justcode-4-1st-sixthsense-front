import React from 'react';
import MainContact from './components/contact/MainContact';
import TravelList from './components/list/TravelList';
import HashtagList from './components/list/HashtagList';
import BannerSliderMedium from './components/bannerslide/BannerSlideMedium';
import BannerSlideSmall1 from './components/bannerslide/BannerSlideSmall1';
import BannerSlideSmall2 from './components/bannerslide/BannerSlideSmall2';
import BannerSlideSmall3 from './components/bannerslide/BannerSlideSmall3';
import BannerSlideSmall4 from './components/bannerslide/BannerSlideSmall4';

function Main() {
  return (
    <>
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
