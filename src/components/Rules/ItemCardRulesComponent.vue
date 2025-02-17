<template>

  <body>
    <div id="items" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Item Rules</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Items:</span> Players start with 3 item cards chosen at random from the deck.
      Items are cards that are drawn from a pile every time a player takes a territory including territory not owned
      by another player. This does not apply to territory claimed during set-up phase. Players can have 10 item
      cards max. Once they are used shuffle them back into item deck. Item cards are placed face up in
      front
      of the player when using an item card at the combat board. The item cards will not be placed face up until
      both
      players have chosen the items they will be using. Once players choose and place their cards face up they
      cannot
      remove or change them. Players should not know what items another player is going to use before they place
      them
      face up.
    </p>
    <p><span class="text-tan">Exsplosive Reactive Armor:</span> This can be used before a battle begins to
      increase MBT's
      odds of surving a hit. When an MBT takes a hit roll a D12 to determine if the reactive armor deflects the
      shot 1-5 is successful.
    </p>
    <!-- <p><span class="text-tan">--Laser Designator:</span> This item can be used beofre a battle to increase
          the odds of
          artillery hitting its target. Special forces units are required to use the laser designator item. Enemy
          units next to a special forces unit can be lased and give artillery and missiles a better chance of hitting
          their
          target so long as they are within range. Lasing a target uses up 1 movement point, but does not use up the
          special forces 1
          offensive point.
        </p> -->
    <p><span class="text-tan">Point Defense:</span> The point defense item can be used by a defending player
      before a battle
      to provide better AA and anti-missile protection. Point defense applies to all Anti-aircraft ground units.
      Increases
      chance to hit aircraft and missiles to a 1-8 with a D12.
    </p>
    <p><span class="text-tan">Aircraft Stealth:</span> The stealth card can be applied to fighters before a battle.
      This
      will reverse
      attack
      order of AA and aircraft meaning the aircraft will fire first and then the AA will fire second. If the AA is
      destroyed by an aircrafts first shot the AA does not
      get to fire.
    </p>
    <p><span class="text-tan">Surplus Fuel:</span> This item can be used before a battle begins to upgrade
      mechanized units
      movement. When used mechanized units can now move 3 spaces on the battlefield but can still only attack
      once per turn.
    </p>
    <p><span class="text-tan">Paratroopers:</span> This item card can be used before combat by the
      offensive
      player. The
      offensive player can place up to 3 infantry units behind or on the defending player during the combat board
      set-up phase. This requires the offensive player to have infantry or SF infantry present when the attack
      is initiated. If AA is present it can only engage 1 paratrooper aircraft per AA vehicle.
    </p>
    <p><span class="text-tan">Javelin Missiles</span> : This item card equips infantry units (not SF)
      with
      effective
      anti-tank
      weapons. A roll of 7-12 is now considered a successful hit. Does not apply to defense rolls.
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