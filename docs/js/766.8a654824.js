"use strict";(self["webpackChunkjbc_test"]=self["webpackChunkjbc_test"]||[]).push([[766],{1652:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});var i=s(3396),a=s.p+"img/compatibility.b3a822c2.png",t=s.p+"img/mvvm.204d7301.png",o=s.p+"img/component.8ec1612c.png",p=s.p+"img/lifecycle.ae329e9a.png";const l={class:"section"},d=(0,i._)("h3",null,[(0,i._)("span",null,"Vue.js의 개념과 특징")],-1),c={class:"info_wrap"},r=(0,i.uE)('<h4><i class="fa-brands fa-vuejs"></i>Vue의 개념</h4><div class="info_box"><p class="info_tit">Vue.js 란?</p><div class="info"><p>Evan You가 만들었으며, 2014년 릴리즈를 시작으로 꾸준히 발전하고 있는 JS 프레임워크.<br> 컨트롤러 대신 뷰 모델을 가지는 MVVM(Model-View-ViewModel) 패턴을 기반으로 디자인되었으며, 재사용이 가능한 UI들을 묶어서 사용함.</p></div></div><div class="info_box"><p class="info_tit">Vue.js 호환성</p><div class="info"><p>ES5에서 새로 등장한 기능이라 IE8 이하 버전은 미지원</p><div class="img_box"><img src="'+a+'" alt="호환성이미지"><span>출처 : https://itcoach.tistory.com/18</span></div></div></div><div class="info_box"><p class="info_tit">Vue.js 특징</p><div class="info"><ul><li>MVVM 패턴을 사용</li><li>Angular에서 지원하는 양방향 데이터 바인딩을 동일하게 제공 (단,컴포넌트 간 통신은 단방향 흐름)</li><li>Angular, React에 비해 매우 작고 가벼우며 복잡도가 낮음</li><li>Template과 Componenet를 사용하여 재사용이 가능한 사용자 인터페이스를 묶고 View Layer를 정리하여 사용</li></ul></div></div><div class="info_box"><p class="info_tit">MVVM 패턴</p><div class="info"><div class="img_box"><img src="'+t+'" alt="mvvm 모델 이미지"></div><p>MVVM (Modal - View - ViewModel) 패턴이란? <br> 마크업 언어나 GUI코드를 비즈니스 로직 or 백엔드 로직과 분리하여 개발하는 소프트웨어 디자인 패턴이다.</p><p>즉, 프론트엔드의 화면 로직과 백엔드 데이터 처리 로직을 분리하여 깔끔하게 코드를 구성하게 됨.</p></div></div><div class="info_box"><p class="info_tit">컴포넌트 기반 프레임워크</p><div class="info"><div class="img_box"><img src="'+o+'" alt="컴포넌트 형식 이미지"><span>출처 : https://jocoma.tistory.com/entry/Vue-Componets</span></div><p>최신 프론트엔드 프레임워크는 전부다 컴포넌트 기반의 개발 방식을 추구하고 있다.</p><p>왼쪽 그림은 유저에게 보여지는 화면단이며, 오른쪽은 화면단의 컴포넌트 구조형식을 표현한 그림이다.</p><p>이런식으로 화면의영역을 컴포넌트로 쪼개서 재활용할 수 있는 형태로 만들어 관리 및 수정이 편리하다.</p></div></div>',6),u={class:"info_box"},v=(0,i._)("p",{class:"info_tit"},"vue 인스턴스",-1),m={class:"info"},f=(0,i._)("p",null,"인스턴스는 개발하기위해 필수적으로 생성해야하는 기본 단위로 코드는 다음과 같다.",-1),g=(0,i._)("p",null,[(0,i.Uk)(" CDN이 아닌 NPM으로 Vue를 생성했다면 Vue페이지 내에 스크립트로 인스턴스가 자동 생성된다. "),(0,i._)("br"),(0,i.Uk)("이처럼 기본 인스턴스에서 상태에 따라 호출할 수 있는 속성들이 존재하는데 이를 라이플 사이클이라고 부른다. "),(0,i._)("br"),(0,i.Uk)("라이플 사이클은 다음과 같다. ")],-1),h={class:"info_box"},_=(0,i._)("p",{class:"info_tit"},"vue 라이프 사이클",-1),b={class:"info"},V=(0,i.uE)('<div class="img_box"><img src="'+p+'" alt="컴포넌트 형식 이미지"><span>출처 : https://joshua1988.github.io/vue-camp/vue/life-cycle.html</span></div><ul><li><span>beforeCreate()</span><p>인스턴스가 방금 초기화됨.</p><p>* 데이터와 이벤트들(vm.$on, vm.$once, vm.$off 등)이 설정되지 않아, 접근할 수 없음</p></li><li><span>created()</span><p>인스턴스 작성 후 동기적으로 호출.</p><p>* 데이터, 속성, 메서드, 이벤트 콜백 등과 같은 옵션 처리를 완료. 단 돔접근x</p></li><li><span>beforeMount()</span><p>마운트 시작되기 바로 전에 호출.</p><p> * render 함수의 첫 호출</p></li><li><span>mounted()</span><p>인스턴스가 마운트 된 직후 호출.</p><p>* 컴포넌트, 템플릿, 렌더링된 DOM에 접근 할 수 있음</p></li><li><span>beforeUpdate()</span><p>컴포넌트의 데이터가 변하여 업데이트사이클이 시작될 때 실행.</p><p>* 정확히는 DOM이 패치되기 전 데이터가 변경될 때 호출</p></li><li><span>updated()</span><p>데이터가 변경되어 가상 DOM이 재렌더링되고 패치된 후에 호출.</p><p>* updated가 호출될 때 컴포넌트의 DOM이 업데이트되므로 여기서 DOM의 종속적인 연산가능</p><p>* 단 무한루프 빠질 수 있으니 데이터 변경은 그 전 단계에서 하는게 좋음</p></li><li><span>beforeDestroy()</span><p>Vue 인스턴스가 제거되기 전에 실행. 컴포넌트는 원래 모습과 원래 기능들을 가지고 있음.</p><p>* 이벤트 리스너나 subscription? 제거에 사용하면 좋음.</p></li><li><span>destroyed()</span><p>Vue 인스턴스 제거 후에 실행. 모든 인스턴스와 디렉티브가 바인딩 해제되고, 모든 이벤트들이 제거됨.</p><p>* 하위 Vue 인스턴스도 제거됨.</p></li></ul>',2),M=(0,i.uE)('<div class="info_box"><p class="info_tit">참고 사이트</p><div class="info"><div class="link_wrap"><a href="https://wikidocs.net/17701" target="_blank">Vue란?</a><a href="https://kr.vuejs.org/v2/guide/index.html" target="_blank">Vue 시작하기</a><a href="https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/" target="_blank">Vue.js 입문서</a></div></div></div>',1);function x(e,n,s,a,t,o){const p=(0,i.up)("CodeEditor");return(0,i.wg)(),(0,i.iD)("div",l,[d,(0,i._)("div",c,[r,(0,i._)("div",u,[v,(0,i._)("div",m,[f,(0,i.Wm)(p,{value:"<template>\n    <div class=\"test\">\n      <h1>{{message}}</h1>\n    </div>\n  </template>\n  <script> \n    //아래부분이 인스턴스 기본구조\n    /*new Vue({})로 쓰이기도 함.*/\n  export default {\n    name: '',\n    data:{\n      message:'데이터넣기',\n    },\n    components: {\n    },\n    methods: {\n    },\n  }\n  <\/script>",languages:[["html","HTML"]],read_only:!0,hide_header:!0,wrap_code:!0,width:"100%",font_size:"14px"}),g])]),(0,i._)("div",h,[_,(0,i._)("div",b,[V,(0,i.Wm)(p,{value:"<template>\n    <h1 id='h1'>{{ message }}</h1>\n  </template>\n  \n  <script>\n  export default {\n    data() {\n      return {\n        message : 'hello' ,\n      }\n    },  \n    //순서대로 실행된다.\n  \n    beforeCreate() {         \n      // beforeCreate() - 초기단계로 data와 methods 정의되지않은 상태                   \n      console.log('Before Create 속성',this.message) \n      //결과: Before Create속성 , undefined \n    },\n  \n    created() {\n      //created() - data와 methods 속성 접근가능\n      console.log('Created 속성',this.message)      \n      //결과 : Created 속성,hello  - 생선된 직후라 데이터 로직 받아짐.\n      console.log(document.getElementById('h1'))  \n      //결과 : null -인스턴스가 화면단에 넣기 전이라 돔요소 못찾음.\n    },\n  \n    beforeMount() {\n      //beforeMount() - render()함수 변환 후 요소 부착전 상태 ..?\n      console.log('BeforeMount')//잘나옴 \n      console.log(document.getElementById('h1'))   \n      //null - 속성 확인 후 돔 삽입 전 상태라서 null \n    },\n     mounted() {\n      // mounted() - 화면요소에 인스턴스 부착후 단계\n      console.log('Mounted')//잘나옴\n      this.message = '데이터변경'; \n      //인스턴스 부착되자마자 호출되어서 여기부터 데이터 변경가능\n      //단 하위컴포넌트나 외부라이브러리에 의해 추가된 것들은 안됨.\n      console.log(document.getElementById('h1'))       \n      //<h1>데이터변경</h1>\n    },\n    updated(){\n      //이부분 부터 데이터치환,화면제어요소 등 다 사용가능\n      //단 여기서 데이터값을 변경하면 무한루프에 빠진다고함.\n      // 데이터 변경은 mounted()나 beforeUpdate() 사이클에서 하는게 좋음.\n    },\n  }\n  <\/script>",languages:[["html","HTML"]],read_only:!0,hide_header:!0,wrap_code:!0,width:"100%",font_size:"14px"})])]),M])])}var w=s(7393),j={name:"about-App",props:{},components:{CodeEditor:w.Z},data(){return{}}},y=s(89);const C=(0,y.Z)(j,[["render",x]]);var k=C}}]);
//# sourceMappingURL=766.8a654824.js.map