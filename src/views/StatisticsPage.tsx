import { defineComponent, PropType, reactive, ref } from "vue";
import { Charts } from "../components/statistics/Charts";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
export const StatisticsPage = defineComponent({
    setup: (props, context) => {
      return () => (
        <TimeTabsLayout component={Charts} />
      )
    }
  })