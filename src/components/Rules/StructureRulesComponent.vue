<template>

  <body>
    <div id="structure" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Structure Rules</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">General Rules:</span> Only one structure can occupy any one tile. A player
      must own the tile in order to build anything on the tile. Players
      capitals act as airfields.
    </p>
    <p><span class="text-tan fs-md">Airfields</span> can be built anywhere within a players territory. Aircraft
      can only be placed on airfields when built. Airfields can also be used to transport units around the board
      from
      one airfield to another airfield. Moving a unit via airfield uses that units 1 movement point and requires 1
      available movement point as well as a cargo aircraft present at the starting airfield.
    </p>
    <p><span class="text-tan fs-md">Naval Yards</span> can be built on any tile that is next to a
      water tile. Each
      naval yard can build up to three ships at a time. The player must own the tile the naval yard is built from.
      Naval yards can repair a max of 2 cruisers/destroyers or 1 carrier at one time.
    </p>
    <p><span class="text-tan fs-md">Factories</span> can be built on any city except small cities and are used to
      increase a factions production capacity. When they are built onto cities they increase your faction production
      by 1. Large and medium cities can have 1 factory max.
    </p>
  </body>

</template>

<script setup>

</script>

<style scoped>
body {
  color: #1d1d1d;
  text-shadow: #000000 2px 2px;
  color: whitesmoke;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>