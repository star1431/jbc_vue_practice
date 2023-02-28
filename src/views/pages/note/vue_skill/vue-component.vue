<template>
  <div class="section">
    <h3><span>Vue 기능</span></h3>
    <div class="info_wrap">
      <h4><i class="fa-brands fa-vuejs"></i>Vue 컴포넌트</h4>
      <div class="info_box">
        <p class="info_tit">vue 기본 구조</p>
        <div class="info">
          <p>
            vue에서 사용하는 컴포넌트 기능은 HTML Element를 확장하고 재사용 가능한 형태로 구현하는 것을 말한다. <br> 
            Vue.js에서 사용된 모든 컴포넌트는 하나하나가 Vue.js의 인스턴스이기도 하다. 컴포넌트의 생성 과정은 단순히 등록하고 사용하는 패턴으로만 이루어진다. <br>
            vue의 컴포넌트 기본 구조는 다음과 같다.
          </p>
          <CodeEditor
            :value=codeEditorList[0]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">props 전달</p>
        <div class="info">
          <p>
            props는 부모컴포넌트에서 자식컴포넌트에게 데이터를 전달할때 주로 사용된다.<br>
            그리고 전달받은 자식컴포넌트는 그 데이터를 활용하여 데이터표현이 가능하다. <br>
            props를 이용하려면 데이터를 전달 받을 자식컴포넌트에 props 옵션 정의하고, 부모에서 프로퍼티를 전달하면 된다.
          </p>
          <CodeEditor
            :value=codeEditorList[1]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <CodeEditor
            :value=codeEditorList[2]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">컴포넌트 slot</p>
        <div class="info">
          <p style="margin-bottom:0.8rem;">
            Vue 디렉티브 중 &lt;slot&gt;은 자식 컴포넌트가 부모 컴포넌트로 부터 받은 콘텐츠를 표시하기 위해 사용되는 기능이다.<br>
            slot을 사용하여 부모 컴포넌트에서 자식 컴포넌트의 레이아웃, 디자인 및 내용을 조작할 수 있으며, 더욱 동적이고 재사용 가능한 컴포넌트를 만들 수가 있다.<br>
            사용하는 방법은 자식컴포넌트에선 &lt;slot&gt; 태그 || 부모 컴포넌트에선 &lt;template&gt; 태그를 사용한다.<br>
            만약 slot과 template이 복수인 경우에는 자식컴포넌트에서 &lt;slot :name="sample"&gt; 처럼 name을 할당하고, 부모컴포넌트에서 &lt;template v-slot:sample&gt; v-slot 사용하여 해당 컨텐츠 지정이 가능하다.
          </p>
          <div class="sample-box flex_center space_medium">
            <p class="sample-tit" ref="sampleTarget">sample</p>
            <ui-accordion :items="sampleAcco">
              <template v-slot:item-1>
                <p>아코디언 1 내용</p>
              </template>
              <template v-slot:item-2>
                <p>아코디언 2 내용</p>
              </template>
              <template v-slot:item-3>
                <p>아코디언 3 내용</p>
              </template>
            </ui-accordion>
          </div>
          <CodeEditor
            :value=codeEditorList[3]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
          <CodeEditor
            :value=codeEditorList[4]
            :languages="[['html', 'Vue']]"
            :read_only="true"
            :wrap_code="true"
            width="100%"
            font_size="14px"
          ></CodeEditor>
        </div>
      </div>
      <div class="info_box">
        <p class="info_tit">참고 사이트</p>
        <div class="info">
          <div class="link_wrap">
            <a href="https://v3-docs.vuejs-korea.org/guide/essentials/component-basics.html" target="_blank">Vue 공식문서 - 컴포넌트</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from 'simple-code-editor'
import uiAccordion from '@/components/ui-accordion.vue'

const codeEditorList = [
`<!-- 컴포넌트의 템플릿을 정의. 템플릿내 html 태그나 자식 컴포넌트를 직접 사용 -->
<template>
  <div class="main">
    <p> sampleNumber : {{ sampleNumber }} </p> <!-- '1' -->
    <p>computed : {{ computedSample }}</p> <!-- '25' -->
    <button @click="sampleNumber ++">숫자 변경</button>
    <child-component></child-component>
  </div>
</template>

<script>
import chilComponent from '@/childComponent.vue'

export default {
  name: '컴포넌트 이름',
  props: {
    // 부모 컴포넌트로부터 전달받는 프로퍼티를 정의함 (자세한건 다음 단에 설명)
    sampleProps: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    // import한 컴포넌트를 정의함
    childComponent
  },
  data() {
    return {
      // 컴포넌트 내부에서 사용되는 데이터를 정의함
      sampleNumber: 1
    };
  },
  computed: {
    // 계산된 데이터를 정의함
    computedSample() {
      return this.sampleNumber * 5
    }
  },
  mounted: {
    // 마운트 후 실행할 로직이나 메서드를 호출
    this.sampleConsole()
  }
  methods: {
    // 컴포넌트 내부에서 사용되는 메서드를 정의함
    sampleConsole() {
      console.log('초기숫자는?' + sampleNumber)
    }
  },
  watch: {
    // 데이터 변화를 실시간 감시하고, 변화에 따른 로직을 정의함
    sampleNumber(newNum, oldNum) {
      console.log('숫자변경! => 현재:' + newNum + ' / 이전:' + oldNum)
    }
  },
};
<${'/'}script>

<style scoped>
/* scoped 넣으면 해당 컴포넌트에만 작성된 스타일이 적용됨 */
</style>`
,
`<!-- 부모컴포넌트.vue -->
<template>
  <div class="main">
    <child-component :params="paramsData"> <!-- :params => 자식컴포넌트의 props명 -->
    </child-component>
  </div>
</template>

<script>
import ChildComponent from '@/자식컴포넌트.vue'

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      paramsData: {
        title: '제목입니다.',
        content: '내용입니다.',
        date: '0000-00-00',
      }
    };
  },
};
<${'/'}script>`
,
`<!-- 자식컴포넌트.vue -->
<template>
  <div class="sample-info">
    <h3>{{ params.title }}</h3>
    <p>{{ params.content }}</p>
    <p>{{ params.date }}</p> 
  </div>
</template>

<script>
export default {
  props: {
    params: {
      // tpye종류 - Object, Array, String, Number, Boolean, Date, Function, Symbol
      type: Object,
      required: false,  // required? props가 꼭필요한 경우 true
      default: () => {
        return {
          title: '제목없음',
          content: '내용없음',
          date: '0000-00-00'
        }
      }
    }
  },
};
<${'/'}script>`
,
`<!-- 부모컴포넌트.vue -->
<template>
  <ui-accordion :items="sampleAcco">
    <template v-slot:item-1>
      <p>아코디언 1 내용</p>
    </template>
    <template v-slot:item-2>
      <p>아코디언 2 내용</p>
    </template>
    <template v-slot:item-3>
      <p>아코디언 3 내용</p>
    </template>
  </ui-accordion>
</template>

<script>
import uiAccordion from '@/components/ui-accordion.vue'

export default {
  components: {
    uiAccordion,
  },
  data() {
    return {
      sampleAcco: [
        {title: '아코디언1 타이틀입니다.'},
        {title: '아코디언2 타이틀입니다.'},
        {title: '아코디언3 타이틀입니다.'}
      ]
    };
  },
};
<${'/'}script>`
,
`<!-- 자식컴포넌트.vue -->
<template>
  <div class="accordion">
    <div v-for="(item, i) in items" :key="i" class="accordion-item">
      <div class="accordion-item__header" role="button" @click="sampleAccordion($event)">
        <p>{{ item.title }}</p>
      </div>
      <div class="accordion-item__content">
        <div class="slot">
          <slot :name="'item-'+(i+1)"> <!-- <template v-slot:item-1> --></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-accordion',
  props: {
    items: {
      type: Array,
      default: () => []
    }
    
  },
  methods: {
    sampleAccordion(e) {
      const _target = e.target
      const _parentEl = _target.closest('.accordion-item')
      const _contentEl = _parentEl.querySelector('.accordion-item__content')
      _parentEl.classList.toggle('active')
      if(_parentEl.classList.contains('active')) {
        _contentEl.style.maxHeight = _contentEl.scrollHeight + 'px'
      } else {
        _contentEl.style = null
      }
    }
  }
}
<${'/'}script>
<style scoped>
.accordion{width:100%;}
.accordion .accordion-item{padding:0 1.2rem;border-radius:0.8rem;border:0.1rem solid #878d8c;overflow:hidden;}
.accordion .accordion-item + .accordion-item{margin-top:0.8rem;}
.accordion .accordion-item__header{display:flex;align-items:center;padding:1.2rem 0;width:100%;cursor:pointer;}
.accordion .accordion-item__header p{font-size:1.6rem;font-weight:bold;}
.accordion .accordion-item__content{max-height:0;transition:max-height 0.2s;}
.accordion .accordion-item__content .slot{padding:1.2rem 0;border-top:0.1rem solid #878d8c;}
</style>`
,
]

export default {
  name: 'vue-component-App',
  props: {
  },
  components: {
    CodeEditor,
    uiAccordion
  },
  data(){
    return{
      codeEditorList,
      sampleAcco: [
        {title: '아코디언1 타이틀입니다.'},
        {title: '아코디언2 타이틀입니다.'},
        {title: '아코디언3 타이틀입니다.'}
      ]
    }
  },
}
</script>
