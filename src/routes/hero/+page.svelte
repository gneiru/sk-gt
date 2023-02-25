<script>
  export let data;
  console.log(data);
  let heroes = data.heroes;
  let page = data.meta.pagination.page;

  // const loadPage = async (page) => {
  //   console.log(page);
  //   const res = await fetch(`https://gt-api.up.railway.app/api/gt-heroes?populate=*&pagination[page]=${page}&pagination[pageSize]=10`);
  //   const heroData = await res.json();
  //   page = heroData.meta;
  //   heroes = heroData.data;
  // }
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
      {#each heroes as hero}
        <tr>
          <th>
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <a href="/hero/{hero.id}"
                  ><img
                    src={hero.attributes.image_urls.icon}
                    alt={hero.attributes.name}
                  /></a
                >
              </div>
            </div>
          </th>
          <td class="font-mono font-bold ">
            <a href="/hero/{hero.id}">{hero.attributes.name}</a>
          </td>
          <td>{hero.attributes.class}</td>
          <td> <img src="src\lib\elements\{hero.attributes.element}.png" alt=""> </td>
          <td>{hero.attributes.party_buff}</td>
          <td>
            {hero.attributes.rarity == "unique" ? "⭐⭐⭐" : "⭐⭐"}
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
  <!-- <div class="btn-group">
    {#if page > 1}
      <button class="btn" onclick={loadPage(1)}>«</button>
    {/if}
    <button class="btn">Page {page}</button>
    <button class="btn" onclick={loadPage(2)}>»</button>
  </div> -->
</div>
