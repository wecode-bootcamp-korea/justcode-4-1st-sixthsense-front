import React from 'react';
import style from './Info.module.css';

const Info = () => {
  return (
    <div className={style.container}>
      <div className={style.topDescription}>
        <h1>모든 것을 내려 놓으며, 비로소 느낄 수 있는 머무름의 시간</h1>
        <p className={style.dormName}>어 연 스 테 이</p>
      </div>
      <div className={style.middleLine} />
      <div className={style.mainDescription}>
        <p>
          어연 스테이는 전북 완주군 소양면 오성 한옥 마을 내에 위치한
          풀빌라입니다. 자연 친화적인 180평의 넓은 공간을 단독으로 사용할 수
          있습니다. 주변은 한옥이 어우러져 있으며 스테이의 앞과 뒤에는 산이,
          <br />
          옆으로는 계곡이 흘러 객실 내에서도 항상 계곡 흐르는 소리가 잔잔하게
          들려 <br />
          명상이나 사색에도 좋은 공간, 어연스테이 입니다.
        </p>
      </div>
      <div className={style.bottomDescription}>
        <p>
          20년 전에 지은 황토 주택을 리모델링하여 탄생한 어연스테이는 우드와
          화이트 톤으로 정갈하면서도 편안함을 추구합니다. 외부는 이국적이지만
          내부는 한국적인 아름다움과 멋을 느낄 수 있으며, 건물 뒤쪽으로는
          게스트만이 사용 가능한 원두막과 아이들이
          <br /> 뛰어 놀 수 있는 잔디정원이 있습니다. 시시각각 변하는 계절의
          특색에 맞게 창문으로 보여지는 자연 경관이
          <br /> 하나의 갤러리를 연상시킵니다.
        </p>
      </div>
    </div>
  );
};

export default Info;
