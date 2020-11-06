import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class X extends Vue {
  public render(): VNode {
    return (
      <div class={style.com}>你好，世界</div>
    );
  }
}
