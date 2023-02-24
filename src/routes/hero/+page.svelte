<script>
  export let data;
  console.log(data);
</script>

<div class="overflow-auto bg-base-200">
  <table class="table table-zebra m-auto">
    <thead>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Class</th>
        <th>Element</th>
        <th>Party Buff</th>
        <th>Rarity</th>
      </tr>
    </thead>
    <tbody>
      {#each data.heroes as hero}
        <tr>
          <th>
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  src={hero.attributes.image_urls.icon}
                  alt={hero.attributes.name}
                />
              </div>
            </div>
          </th>
          <td class="font-mono font-bold ">{hero.attributes.name}</td>
          <td>{hero.attributes.class}</td>
          <td>{hero.attributes.element}</td>
          <td>{hero.attributes.party_buff}</td>
          <td>
            {hero.attributes.rarity.charAt(0).toUpperCase() +
              hero.attributes.rarity.slice(1)}
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Class</th>
        <th>Element</th>
        <th>Party Buff</th>
        <th>Rarity</th>
      </tr>
    </tfoot>
  </table>
</div>
