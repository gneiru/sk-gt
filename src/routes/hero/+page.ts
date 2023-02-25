import { variables } from "../../lib/variables";

export const load = (async ({ fetch}) => {
  const res = await fetch(`${variables.basePath}/api/gt-heroes?populate=*&pagination[page]=1&pagination[pageSize]=10`);
  const hero = await res.json();
  console.log(hero);
 
  return {
    heroes: hero.data,
    meta: hero.meta,
  };
})