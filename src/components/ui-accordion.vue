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
</script>
<style scoped>
.accordion{width:100%;}
.accordion .accordion-item{padding:0 1.2rem;border-radius:0.8rem;border:0.1rem solid #878d8c;overflow:hidden;}
.accordion .accordion-item + .accordion-item{margin-top:0.8rem;}
.accordion .accordion-item__header{display:flex;align-items:center;padding:1.2rem 0;width:100%;cursor:pointer;}
.accordion .accordion-item__header p{font-size:1.6rem;font-weight:bold;}
.accordion .accordion-item__content{max-height:0;transition:max-height 0.2s;}
.accordion .accordion-item__content .slot{padding:1.2rem 0;border-top:0.1rem solid #878d8c;}
</style>