<template>

  <body>
    <div id="mainBoardPieces" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Main Board Pieces</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Environments:</span> Each region has a color associated with it that represents a
      sepcific environment. Each environment type effects a units ability to defends itself successfully. <span
        class="text-primary">Blue</span> is a water and cannot be controlled, but is what a
      players navy uses. <span class="text-forest">Light Green</span> represents a forest environment. <span
        class="text-success">Dark Green</span> represents a dense jungle environment. <span
        class="text-warning">Yellow</span> represents a flat grasslands environment. <span class="text-info">Light
        Blue</span> represents a marshy environment. <span class="text-secondary">Grey</span> represents a rugged
      mountain environment. <span class="text-tan">Tan</span> represents a desert environemnt. Any tile with a
      <strong>City</strong> on it now becomes an urban environemnt.
    </p>
    <p><span class="text-tan fs-md">Fortifications:</span> Each player has pillbox or bunker type pieces that
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
      cities will have 4 different towers representing sky scrappers and a small city will have 3. Cities also
      automatically contain militia that do not need to be placed. See <a href="#ground">Ground Units</a> for more
      details about militia.</p>
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

a{
  text-decoration: none;
}

.text-forest{
  color: greenyellow;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>