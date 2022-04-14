import React, { useEffect, useState } from 'react';
import style from './Detail.module.scss';
import DetailTop from './detailTop/DetailTop';
import Rooms from './rooms/Rooms';
import Info from './info/Info';
import Special from './special/Special';
import Location from './location/Location';
import Places from './places/Places';
import FAQ from './faq/FAQ';
import BASE_URL from '../../config';

function Detail() {
  const [detail, setDetail] = useState({
    id: 1,
    dormitoryName: '제주조랑말',
    comment: '감귤과수원의 풍경을 끌어들인 특별한 공간에서의 휴식',
    main_description:
      '제주조랑말은 감귤과수원 안에 있는 비정형적인 외관으로 프라이빗한 휴식 그리고 충실한 편안함과 동시에 특별한 제주에서의 휴식을 제공하고 싶습니다.',
    sub_description:
      '제주조랑말에서 아침에 눈을 뜨면 누운채로도 푸릇푸릇 반짝이는 귤밭을 시야에 채울 수 있으며 방문을 열면 귤 밭 사이사이에서 조잘거리는 새소리가 들립니다. 천연덕스럽게 야외복도를 넘어 자라고 있는 로즈마리의 향도 차분하게 온몸으로 스며듭니다. 느지막히 일어나서 바로 내린 커피향과 갓구운 빵냄새가 가득한 카페에서 감귤밭에 둘러쌓여 조식을 즐겨 보세요. 제주토끼는 앞만보고 달리기를 강요받는 도시사람들에게 잠시 달리기를 멈추고 몸과 마음이 쉴 수 있는 휴식을 선물하고 싶습니다.',
    city: '제주',
    district: '서귀포시',
    dormitoryImageUrl: [
      'https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    ],
    roomSpecialTitle: ['귤밭', '조식', '건축'],
    roomSpecialDes: [
      '제주조랑말은 귤밭에 둘러싸여 있어 4계절 내내 초록초록함을 느낄 수 있습니다. 특히 5월에는 숙소에 계시는동안 은은한 귤꽃향을 즐기실 수 있으며, 여름에는 풋귤을, 가을에는 주렁주렁 달려있는 감귤을, 겨울에는 밭에서 바로 딴 감귤을 맛보실 수 있습니다.',
      '제주조랑말은 화려하진 않지만 기본에 충실한 조식을 제공합니다. 로즈마리의 향과 귀를 간지럽히는 새소리를 들으며 카페에 오시면 귤밭에 둘러 쌓인 공간에서 신선한 제철 샐러드, 갓구운 빵, 직접 내리는 핸드드립 커피를 즐기실 수 있습니다.',
      '비정형적인 외관과 주변의 감귤과수원을 내부로 충분히 끌어들인 공간은 최-페레이라 건축의 설계로 탄생되었습니다. 레벨을 달리하여 더욱 프라이빗하게, 벽돌을 이용한 영롱쌓기로 제주의 바람과 빛을 더욱 변화무쌍하게 느끼실 수 있습니다.',
    ],
    recommendPlacesName: ['ICC제주국제컨벤션센터', '큰돈가', '중문색달해변'],
    recommendPlacesType: ['shop', 'food', 'nature'],
    recommendPlacesDes: [
      '국제회의전문시설이자 강연회·연회·이벤트·전시회·공연 등을 열 수 있는 복합공간',
      ' 직접 구워주는 제주 흑돼지 맛집',
      '서핑과 노을을 즐길 수 있는 해변',
    ],
  });

  useEffect(() => {
    fetch(`${BASE_URL}/dormitories/2`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        setDetail(result.data[0]);
      });
  }, []);

  return (
    <div className={style.detailWrapper}>
      <DetailTop detail={detail} />
      <Rooms />
      <Info detail={detail} />
      <Special detail={detail} />
      <Location name={detail.dormitoryName} />
      <Places detail={detail} />
      <FAQ />
    </div>
  );
}

export default Detail;
