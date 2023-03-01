import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import s from "./StartPage.module.scss";
import { Icon } from "../shared/Icon";
import { NavBar } from "../shared/NavBar";
import { Overlay } from "../shared/Overlay";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false);

    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value;
      console.log(refOverlayVisible.value);
    };
    return () => (
      <div>
        <NavBar>
          {{
            default: () => "水果记账",
            icon: () => (
              <Icon name="menu" class={s.navIcon} onClick={onClickMenu} />
            ),
          }}
        </NavBar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName="add" />
        {refOverlayVisible.value && (
          <Overlay
            onClose={() => (refOverlayVisible.value = !refOverlayVisible.value)}
          />
        )}
      </div>
    );
  },
});
