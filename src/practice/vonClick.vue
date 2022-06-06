<template>
  <div class="section">
    <h3><span>V-on:click</span></h3>
      <div class="list_box" id="von_01">
        <h4>(1) 숫자버튼</h4>
        <p>number : {{number}}</p>
        <div class="btn_wrap flex_center">          
          <button type="button" v-on:click="ins_num">증가</button>
          <button type="button" v-on:click="dec_num">감소</button>
          <button type="button" v-on:click="ins2_num">2배증가</button>
          <button type="button" v-on:click="dec2_num">2배감소</button>
          <button type="button" v-on:click="random_num">숫자랜덤</button>
          <button type="button" v-on:click="reset_num">초기화</button>
        </div>
        <CodeEditor
          value="<p>number : {{number}}</p>
<div class=&#34;btn_wrap flex_center&#34;>          
  <button type=&#34;button&#34; v-on:click=&#34;ins_num&#34;>증가</button>
  <button type=&#34;button&#34; v-on:click=&#34;dec_num&#34;>감소</button>
  <button type=&#34;button&#34; v-on:click=&#34;ins2_num&#34;>2배증가</button>
  <button type=&#34;button&#34; v-on:click=&#34;dec2_num&#34;>2배감소</button>
  <button type=&#34;button&#34; v-on:click=&#34;random_num&#34;>숫자랜덤</button>
  <button type=&#34;button&#34; v-on:click=&#34;reset_num&#34;>초기화</button>
</div>

<script>
export default {
  data(){
    return{
      number:0,
    }
  },
  methods: {
    //숫자버튼 메소드
    ins_num:function(){
      this.number++;
    },
    ins2_num:function(){
      this.number = this.number*2;
    },
    dec_num:function(){
      this.number--;
    },
    dec2_num:function(){
      this.number = this.number/2;
    },
    reset_num:function(){
      this.number = 0;
    },
    random_num:function(){
      this.number = Math.floor(Math.random() * 10001);
    },
  }
}
</script>"
          :languages="[['html', 'HTML']]"
          :read_only="true"
          :hide_header="true"
          :wrap_code="true"
          width="100%"
          font_size="14px"
        ></CodeEditor>

      </div>
      <div class="list_box" id="von_02">
        <h4>(2) 다중이벤트</h4>
        <div class="muti_event" v-on:click="muti_01(), muti_02()">{{muti_even}}</div>
        <CodeEditor
          value="<div class=&#34;muti_event&#34; v-on:click=&#34;muti_01(), muti_02()&#34;>{{muti_even}}</div>
<script>
export default {
  data(){
    return{
      muti_even:'클릭해주세요',
    }
  },
  methods: {
    muti_01(){
      alert('첫번째이벤트');
    },
    muti_02(){
      var ele = document.querySelector('.muti_event');
      ele.classList.add('active');
      this.muti_even='두번째이벤트';
    },
  }
}
</script>"
          :languages="[['html', 'HTML']]"
          :read_only="true"
          :hide_header="true"
          :wrap_code="true"
          width="100%"
          font_size="14px"
        ></CodeEditor>
      </div>
      <div class="list_box" id="von_03">
        <h4>(3) 토글효과</h4>
        <div class="toggle_box flex_center">
          <span :class="{'active':show}">{{show}}</span>      
          <button type="button" v-on:click="show=!show">클릭하기</button>
        </div>
        <CodeEditor
          value="<span :class=&#34;{'active':show}&#34;>{{show}}</span>      
<button type=&#34;button&#34; v-on:click=&#34;show=!show&#34;>클릭하기</button>

<script>
export default {
  data(){
    return{
      show:false,
    }
  }
}
</script>"
          :languages="[['html', 'HTML']]"
          :read_only="true"
          :hide_header="true"
          :wrap_code="true"
          width="100%"
          font_size="14px"
        ></CodeEditor>
      </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';

export default {

  name: 'vonClick-App',
  props: {
  },
  components: {
    CodeEditor
  },
  data(){
    return{
      number:0,
      muti_even:'클릭해주세요',
      show:false,
      lnb_list:['숫자버튼','다중이벤트','토글'],
      lnb_link:['#von_01','#von_02','#von_03']
    }
  },
  methods: {
    //숫자버튼 메소드
    ins_num:function(){
      this.number++;
    },
    ins2_num:function(){
      this.number = this.number*2;
    },
    dec_num:function(){
      this.number--;
    },
    dec2_num:function(){
      this.number = this.number/2;
    },
    reset_num:function(){
      this.number = 0;
    },
    random_num:function(){
      this.number = Math.floor(Math.random() * 10001);
    },

    //다중이벤트 메소드
    
    muti_01(){
      alert('첫번째이벤트');
    },
    muti_02(){
      var ele = document.querySelector('.muti_event');
      ele.classList.add('active');
      this.muti_even='두번째이벤트';
    },

  }
}
</script>
