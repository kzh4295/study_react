# study_react
벨로퍼트와 함께하는 모던 리액트 자료를 보며 공부

# babel(JS 문법 확장 도구)
JSX(리액트에서 생김새를 정의) -> JS

# </> 
태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment 가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않음

# JSX
- JSX 에서 태그에 style 과 CSS class 를 설정하는 방법은 camelCase 형태로 네이밍

# usestate
state: 컴포넌트에서 동적인 값을 상태
useState 라는 함수, 컴포넌트에서 상태를 관리
Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정

# getter, setter함수

# ... 문법은 spread 문법
객체의 내용을 모두 "펼쳐서" 기존 객체를 복사

# props
property의 약자로, 부모에게 받아온 데이터입니다. 리액트의 Data Flow는 단방향 형식으로 부모에서부터 자식으로 이동하기 때문에 거꾸로 올라갈 수 없습니다. 따라서 props에 있는 데이터들은 수정이 불가능하며 오직 안에있는 값을 꺼내서 사용할수만 있습니다.

# state
컴포넌트의 특정 상태를 기억하여 화면에 반영하고, 상태가 사용자에 의해 변경되면 다시 화면이 변경되는 기능을 하기위해 존재는 객체입니다.
state 객체를 사용하기 위해서는 부모를 상속받는 class를 생성하여 생성자로 사용해야 합니다.

# ref
컴포넌트에서 특정 DOM 을 선택해야 할 때
함수형 컴포넌트에서 이를 설정 할 때 useRef 를 사용하여 설정

# 팁
- 자동완성 'rfce'
- 한줄 완성 : alt + shift + 방향키
- width  : 가로 넓이
- Px : 고정
- padding: top bottom left right
- hover: 마우스 올림
- active: 마우스 클릭 
- . = 클래스

# &nbsp
Non-breaking space : 웹페이지에서 공백을 표시하기 위한 
