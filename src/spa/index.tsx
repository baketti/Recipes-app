import dynamic from "next/dynamic";

const RecipesSpa = dynamic(
  () => import("./AppWrapper").then((module) => module.default),
  {
    ssr: false,
  },
);

export default RecipesSpa;
