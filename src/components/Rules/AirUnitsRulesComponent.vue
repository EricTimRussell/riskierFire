<template>

  <body>
    <div id="air" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Air Units</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Fighter Aircraft</span> provide more flexable AA cover for ground units with a
      limited ability to strike ground targets. Fighter aircraft have 4 movement points, 1 offensive point, and a
      range of 1 on the combat board. They can move 3 tiles on the main board per turn. Fighter aircraft must stay
      within 3 tiles of an airfield. When a fighter aircraft is used to make attacks on the main board the player
      will
      immediately return it to an airfield within range after the attack. Fighters on the combat board can remain
      for
      the duration of
      the battle but once they are taken off the combat board or the battle ends they will be immediately moved to a
      airfield within range.
    </p>
    <p><span class="text-tan fs-md">Close Air Support</span> aircraft are very effective at destroying
      ground targets
      and provide some air cover against other CAS aircraft. However, they cannot target fighter aircraft and only
      have a small chance to evade fighter attacks. CAS have 3 movement points, 2 offensive points, and a range of 1
      on the combat board. They have 2 movement points on the main board. CAS can attack once per turn meaning if
      they
      make attacks on the main board they cannot be involved in any combat board battles and vice versa. CAS do not
      need to be in range of an airfield.
    </p>
    <p><span class="text-tan fs-md">Cargo Aircraft</span> can transport units from airfield to airfield.
      They can also
      be used to deploy special forces units and infantry by air as paratroopers. They have no offensive or
      defensive
      ability. Supply aircraft are not used on the combat board. They can move 3 tiles per turn on the main board
      and
      must remain within 5 spaces of an airfield.
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