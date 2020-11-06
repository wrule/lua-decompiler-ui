import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class Prototype extends Vue {
  public render(): VNode {
    return (
      <div class={style.com}>
        <a-descriptions
          title="函数原型"
          bordered
          size="small"
          layout="vertical">
          <a-descriptions-item label="参数个数">
            2
          </a-descriptions-item>
          <a-descriptions-item label="寄存器数量">
            2
          </a-descriptions-item>
          <a-descriptions-item label="Upvalue数量">
            2
          </a-descriptions-item>
          <a-descriptions-item label="局部变量数量">
            2
          </a-descriptions-item>
          <a-descriptions-item label="常量数量">
            2
          </a-descriptions-item>
          <a-descriptions-item label="子函数数量">
            2
          </a-descriptions-item>
        </a-descriptions>


      </div>
    );
  }
}
