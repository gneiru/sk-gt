<script>
    import HeroDetails from "$lib/components/HeroDetails.svelte";
    export let data;
    let hero = data.hero.attributes
    // let id = data.hero.id
  </script>
  
  <HeroDetails {...hero} classType={hero.class}/>