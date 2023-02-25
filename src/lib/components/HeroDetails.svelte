<script>
    export let image_urls
    export let normal_attack
    export let special_ability
    export let chain_skill
    export let rarity
    export let name
    export let party_buff
    export let classType
    export let element
    export let equipment


</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src={image_urls.gl} alt={name}>
      <div>
        <h1 class="text-5xl font-bold">{name}</h1>
        <div class="space-y-4">
          <p>{classType}</p>
          <p>{party_buff}</p>
          <p>{element}</p>
          <p>{rarity}</p>
          <p>{equipment}</p>
          <h4>{normal_attack.title}</h4>
          <p>{normal_attack.description}</p>
          <p>{chain_skill.title}</p>
          <p>{chain_skill.description}</p>
          <p>{chain_skill.Ailment.from} >> {chain_skill.Ailment.to}</p>
          <p>{special_ability.title}</p>
          <p>{special_ability.description}</p>
        </div>
      </div>
    </div>
  </div>