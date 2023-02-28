<template>
  <div class="section">
    <h3><span>V-on:click</span></h3>
      <div class="list_box" id="von_01">
        <h4>(1) 숫자버튼</h4>
        <p>number : {{number}}</p>
        <div class="btn_wrap flex_center">
          <button class="btn" type="button" @click="numEvent('ins_num')">증가</button>
          <button class="btn" type="button" @click="numEvent('dec_num')">감소</button>
          <button class="btn" type="button" @click="numEvent('ins2_num')">2배증가</button>
          <button class="btn" type="button" @click="numEvent('dec2_num')">2배감소</button>
          <button class="btn" type="button" @click="numEvent('random_num')">숫자랜덤</button>
          <button class="btn" type="button" @click="numEvent('reset_num')">초기화</button>
        </div>
        <CodeEditor
          :value=codeEditorList[0]
          :languages="[['html', 'HTML'],['javascript', 'JS']]"
          width="100%"
          font_size="14px"
        ></CodeEditor>
      </div>
      <div class="list_box" id="von_02">
        <h4>(2) 다중이벤트</h4>
        <div class="muti_event" v-on:click="muti_01(), muti_02()">{{muti_even}}</div>
      </div>
      <div class="list_box" id="von_03">
        <h4>(3) 토글효과</h4>
        <div class="toggle_box flex_center">
          <span :class="{'active':show}">{{show}}</span>      
          <button class="btn" type="button" v-on:click="show=!show">클릭하기</button>
        </div>
      </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';
const codeEditorList = [
`
<!-- tag -->
  <button class="btn" type="button" @click="numEvent('ins_num')">증가</button>
  <button class="btn" type="button" @click="numEvent('dec_num')">감소</button>
  <button class="btn" type="button" @click="numEvent('ins2_num')">2배증가</button>
  <button class="btn" type="button" @click="numEvent('dec2_num')">2배감소</button>
  <button class="btn" type="button" @click="numEvent('random_num')">숫자랜덤</button>
  <button class="btn" type="button" @click="numEvent('reset_num')">초기화</button>
</div>
<!-- js -->
`
]
export default {
  name: 'vonClick-App',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
      codeEditorList,
      number:0,
      muti_even:'클릭해주세요',
      show:false,
      lnb_list:['숫자버튼','다중이벤트','토글'],
      lnb_link:['#von_01','#von_02','#von_03']
    }
  },
  methods: {
    //숫자버튼 메소드
    numEvent(value) {
      if(value === 'ins_num') this.number ++
      if(value === 'dec_num') this.number--
      if(value === 'ins2_num') this.number*2
      if(value === 'dec2_num') this.number/2
      if(value === 'reset_num') this.number = 0
      if(value === 'random_num') this.number = Math.floor(Math.random() * 10001)

    },

    //다중이벤트 메소드
    
    muti_01(){
      // alert('첫번째이벤트');
      console.log(codeEditorList[0])
    },
    muti_02(){
      var ele = document.querySelector('.muti_event');
      ele.classList.add('active');
      this.muti_even='두번째이벤트';
    },

  }
}
</script>
