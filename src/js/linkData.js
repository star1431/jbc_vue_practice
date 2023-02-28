const linkData = {
  depthList: [

    //home
    {
      level: 1,
      path: '/',
      name: 'home'
    },

    //note
    {
      level: 1,
      path: '/note',
      name: 'Study-note',
      depth: true,
      children: [
        {
          level: 2,
          path: '/note',
          name: 'Vue 개념과 특징'
        },
        {
          level: 2,
          path: '/note/start',
          name: 'Vue 시작하기'
        },
        {
          level: 2,
          path: '',
          name: 'Vue 기능',
          depth: true,
          children: [
            {
              level: 3,
              path: '/note/vue-basic',
              name: '템플릿 문법'
            },
            {
              level: 3,
              path: '/note/vue-rendering',
              name: 'vue 렌더링'
            },
            {
              level: 3,
              path: '/note/vue-component',
              name: 'vue 컴포넌트'
            },
            {
              level: 3,
              path: '/note/vue-event',
              name: '이벤트 핸들링'
            },
            {
              level: 3,
              path: '/note/vue-router',
              name: '라우터'
            },
          ]
        },
      ]
    },


    //practice
    {
      level: 1,
      path: '/practice',
      name: 'practice',
      depth: true,
      children:[
        {
          level: 2,
          path: '/practice',
          name: 'v-on:Click이벤트'
        },
        {
          level: 2,
          path: '/practice/test',
          name: 'test-height'
        },
      ]
    },

    //site-review
    {
      level: 1,
      path: '/site-review',
      name: 'site-review',
      depth: true,
      children:[
        {
          level: 2,
          path: '/site-review',
          name: '사이트 구조'
        },
        {
          level: 3,
          path: '/site-review/site-router',
          name: '사이트 라우터'
        },
        {
          level: 3,
          path: '/site-review/site-js',
          name: 'js 설정값'
        },
      ]
    },

  ],
}
export default linkData