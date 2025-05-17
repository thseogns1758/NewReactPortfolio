# WindowProject

새로운 컨텐츠를 추가하고 삭제하기 편한 확장성있는 사이트를 제작하고 싶었습니다.   
삭제와 추가가 용이한 window의 폴더식 구조를 떠올리게 되었고 포트폴리오 사이트로 제작하였습니다.    
폴더의 path구조를 만들기위해 React-router를 사용하여 표현했습니다.  


![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/a0eb78bf-dcc5-41ba-825d-634831311215)

리액트, 타입스크립트, redux , redux-tollkit, react-icon 을 활용한 포트폴리오입니다.  


router를 사용해 폴더기능을 구현하였으며 Link로 되어있는 폴더를 클릭시 해당 path로 이동하게 만들었습니다 .  
해당 path로 이동시 redux로 상태변화를 주어 웹을 형상화한 window컴포넌트가 출력됩니다.  
## 기능  
1. 내정보 : 제작자의 정보와 kakaoMap-api를 활용해 현재 거주하고있는 집의 위치를 나타내게 했습니다.  
![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/e82835cb-1910-4762-9a9c-f65aa2238e98)  
  

2. 내기술 : 현재까지 사용했었던 기술들과 간단한 기능구현을 작성한 페이지 입니다. 
   
3. 메모장 : firebase의 api를 활용하여 메모를 저장하고 불러오는 페이지입니다.  ![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/a9ade701-d845-4222-861f-4f228a52d090)

4. 프로젝트 : 현재까지 제작한 사이트들 중 기술적이거나 의미있다고 생각하는 웹사이트를 출력한 페이지입니다. (redux의 전역상태관리로 마우스오버시 해당text값과 일치하면 설명이 출력되게 하였습니다. )  ![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/62ad1b65-7fe5-4220-bf75-8cd72817462a)

5. 숫자기록 : 숫자이름을 등록하고 숫자를 카운트 할 수 있는 페이지 입니다. 로컬스토리지를 활용해 기록이 남게 하였습니다.  ![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/21e187b3-4742-4ecb-9931-e5bd1c63c9f8)  


6. 날씨 : 현재 날씨를 지역별로 알 수 있게 만든 페이지입니다. 앱의 느낌을 내려고 다른 웹페이지 형식과는 다르게 제작하였습니다.  ![image](https://github.com/thseogns/NewReactPortfolio/assets/99688960/78b9e0e5-91af-49c3-b3f1-addf74ceb90c)  

7. next13-page : next13과 tailwindCss를 활용하여 제작한 웹사이트입니다.
  
next13페이지는 링크를 통해 새로운 창을 열게 만들었고  
날씨는 소프트웨어의 느낌을 살리기위해 windowComponent없이 출력되게 만들었습니다.   

시간과 날짜는 widow와 같게 출력하기 위해 시간은 12 넘어가면 0이 출력되게 하고 날짜는 10보다 작고 3자리 이하일 시 숫자 앞에 0이 출력되게 하였습니다.  
  
search에는 backgraound 이미지를 랜덤으로 변경 할 수 있는 기능을 삽입하였습니다.   
새로고침 시에 전역상태에 random깂을 주어 backgraound 이미지가 변경됩니다.  

