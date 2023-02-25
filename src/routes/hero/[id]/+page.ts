import { variables } from "../../../lib/variables";

export const load = (async ({ fetch , params }) => {
  const res = await fetch(`${variables.basePath}/api/gt-heroes/${params.id}?populate=normal_attack,chain_skill.Ailment,special_ability,image_urls`);
  const hero = await res.json();
 
  return {
    hero: hero.data
  };
})