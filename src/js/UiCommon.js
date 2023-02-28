var UIComponent = UIComponent || {}

UIComponent.momenu = {

  init : function(refs) {
    if(!refs) return
    this.clickEvent(refs)
  },
  clickEvent : function(refs) {
    const _this = refs
    const _moNode = _this.childNodes
    const _moBtn = _moNode[0].querySelectorAll('button')
    const _moMenu = _moNode[1]
    const _bgDim = _moNode[2]
    const _accoBtn = _moMenu.querySelectorAll('button') 

    /** 모바일메뉴 show, hide */
    for(let i = 0; i < _moBtn.length; i ++) {
      _moBtn[i].addEventListener('click', (e) => {
        if(e.currentTarget.className === 'menu_open') _this.classList.add('active')
        if(e.currentTarget.className === 'menu_close') _this.classList.remove('active')
      })
    }
    /** dim클릭 */
    _bgDim.addEventListener('click', () => {
      _this.classList.remove('active')
    })

    /** 모바일메뉴 acco, click */ 
    for(let i = 0; i < _accoBtn.length; i ++) {
      _accoBtn[i].addEventListener('click', (e) => {
        const _target = e.currentTarget
        const _listEl = _target.nextSibling
        const _parentLi = _target.closest('ul.depth1 > li')
        const _childUl = _parentLi.querySelector('ul.depth2')

        // on
        _target.classList.toggle('on')
        if(_target.classList.contains('on')) {
          _listEl.style.maxHeight = (_listEl.scrollHeight) + 'px'
          const _testIf = (_listEl === _childUl) ? null : _childUl.style.maxHeight = (_listEl.scrollHeight + _childUl.scrollHeight) + 'px'
          console.log(_testIf, _listEl.scrollHeight )
          return _testIf
        } else {
          _listEl.style.maxHeight = null
          const _testIf = (_listEl === _childUl) ? null : _childUl.style.maxHeight = (_childUl.scrollHeight) + 'px'
          return _testIf
        }
      })
    }
  }
}

export default UIComponent