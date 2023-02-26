import s from "./welcome.module.scss";
import { RouterLink } from "vue-router";
import { FunctionalComponent } from "vue";
export const FourthActions: FunctionalComponent = () => {
  return (
    <div class={s.actions}>
      <RouterLink class={s.fake} to="/start">
        跳过
      </RouterLink>
      <RouterLink to="/start">完成</RouterLink>
      <RouterLink class={s.fake} to="/start">跳过</RouterLink>
    </div>
  );
};

FourthActions.displayName = "FourthActions";
