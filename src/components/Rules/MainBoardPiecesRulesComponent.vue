<template>

  <body>
    <div id="mainBoardPieces" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Main Board Pieces</h2>
      <span class="divider"></span>
    </div>
    <p>
      <span class="text-tan fs-md">Fortifications:</span> Each player has pillbox or bunker type pieces that
      represents fortifications. When fortifications are built 1 bunker piece is placed on the main board where they
      were built. This will provide 3 bunker pieces on the combat board. Only one can be built per tile. Bunkers can
      be built during the build phase of a players turn. They take one turn to build. A player must own the tile to
      build
      fortifications on it. Only Infantry and special forces can
      use fortifications and it provides immunity to artillery. It also gives the occupying unit an extra
      hitpoint. A successfull hits on a fortification destroys it, but not the unit occupying it.
    </p>
    <p><span class="text-tan fs-md">Cities:</span> Capital cities will be the same color as team it
      belongs to. Medium
      cities will have 4 different columns representing sky scrappers and a small city will have 3.</p>
    <p><span class="text-tan fs-md">Region Coins:</span> Region coins are the pieces used to track which team owns a
      region. They are circular coin pieces that are the same color as the team who owns them. They all also have
      unique numbers on them so that players track them on the app.</p>
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