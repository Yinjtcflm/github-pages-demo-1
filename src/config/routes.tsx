import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Welcome } from "../views/Welcome";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { FourthActions } from "../components/welcome/FourthActions";
import { StartPage } from "../views/StartPage";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { http } from "../shared/Http";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    beforeEnter: (to, from, next) => {
      localStorage.getItem("skipFeatures") === "yes" ? next("/start") : next();
    },
    children: [
      { path: "", redirect: "/welcome/one" },
      {
        path: "one",
        name: "Welcome1",
        components: { main: First, footer: FirstActions },
      },
      {
        path: "two",
        name: "Welcome2",
        components: { main: Second, footer: SecondActions },
      },
      {
        path: "three",
        name: "Welcome3",
        components: { main: Third, footer: ThirdActions },
      },
      {
        path: "four",
        name: "Welcome4",
        components: { main: Fourth, footer: FourthActions },
      },
    ],
  },
  { path: "/start", component: StartPage },
  {
    path: "/items",
    component: ItemPage,

    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: TagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: ":id/edit", component: TagEdit },
    ],
  },
  { path: "/sign_in", component: SignInPage },
  { path: "/statistics", component: StatisticsPage },
];
