import { variables } from "../../lib/variables";

export const load = (async ({ fetch }) => {
  const res = await fetch(`${variables.basePath}/api/gt-heroes?populate=*`);
  const hero = await res.json();
 
  return {
    heroes: hero.data
  };
})