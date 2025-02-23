<template>

  <body>
    <div id="items" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Technology</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Technologies</span> are obtained by controlling research centers. Each research
      center is worth 1 new technology. When a research center is lost a player loses 1 technology card of their choice.
    </p>
    <p><span class="text-tan">Exsplosive Reactive Armor:</span> This increases a MBT's
      odds of surving a hit. When an MBT takes a hit roll a D12 to determine if the reactive armor deflects the
      shot 1-5 is successful.
    </p>
    <p><span class="text-tan">Point Defense:</span> The point defense technology provides better AA and anti-missile
      protection. Point defense applies to all anti-aircraft ground units.
      Increases anti-aircraft
      chance to hit aircraft and missiles to a 1-8 with a D12.
    </p>
    <p><span class="text-tan">Aircraft Stealth:</span>This technology will reverse attack
      order of AA and aircraft meaning the aircraft will fire first and then the AA will fire second. If the AA is
      destroyed by an aircrafts first shot the AA does not
      get to fire.
    </p>
    <p><span class="text-tan">Fuel efficiency:</span> This technology gives Mechanized, IFV, and MBT units 1 extra move
      point per turn. Does not apply to AA or artillery.
    </p>
    <p><span class="text-tan">Javelin Missiles:</span> This technology equips infantry units (not Special Forces) with
      effective anti-tank weapons. Infantry are more likely to successfully hit MBT's. Does not apply to defense rolls.
    </p>
    <p><span class="text-tan">Hyper Sonic Missiles:</span> This technology equips missile artillery and cruisers with
      advanced missiles that are harder to intercept.
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