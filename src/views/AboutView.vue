<template>
  <h1 id='h1'>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message : 'hello' ,
    }
  },  
  //순서대로 실행된다.

  beforeCreate() {         
    // beforeCreate() - 초기단계로 data와 methods 정의되지않은 상태                   
    console.log('Before Create 속성',this.message) 
    //결과: Before Create속성 , undefined 
  },

  created() {
    //created() - data와 methods 속성 접근가능
    console.log('Created 속성',this.message)      
    //결과 : Created 속성,hello  - 생선된 직후라 데이터 로직 받아짐.
    console.log(document.getElementById('h1'))  
    //결과 : null -인스턴스가 화면단에 넣기 전이라 돔요소 못찾음.
  },

  beforeMount() {
    //beforeMount() - render()함수 변환 후 요소 부착전 상태 ..?
    console.log('BeforeMount')//잘나옴 
    console.log(document.getElementById('h1'))   
    //null - 속성 확인 후 돔 삽입 전 상태라서 null 
  },
   mounted() {
    // mounted() - 화면요소에 인스턴스 부착후 단계
    console.log('Mounted')//잘나옴
    this.message = '데이터변경'; 
    //인스턴스 부착되자마자 호출되어서 여기부터 데이터 변경가능
    //단 하위컴포넌트나 외부라이브러리에 의해 추가된 것들은 안됨.
    console.log(document.getElementById('h1'))       
    //<h1>데이터변경</h1>
  },
  updated(){
    //이부분 부터 데이터치환,화면제어요소 등 다 사용가능
    //단 여기서 데이터값을 변경하면 무한루프에 빠진다고함.
    // 데이터 변경은 mounted()나 beforeUpdate() 사이클에서 하는게 좋음.
  },
}
</script>