<template>

  <body>
    <div id="groundCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Ground Combat Rules</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md"> General Rules on Combat:</span> Only 1 offensive move per tile is
      allowed per turn on the main board. This means that a player can only attack from a tile once per turn. Land
      battles take place on a seperate board called the combat board. Before combat begins be sure to place any item
      in front of the player at
      the combat board
      when being used.
    </p>
    <p><span class="text-tan fs-md">Ground Combat Setup:</span>
      There is a maximum of 12 ground units each for both sides on the board at one time. There is no limit on
      aircraft. A maximum of 2 ground units can share the same tile, however there is no limit on aircraft. If
      there are more than 12 defending units involved the defending player can decide to retreat the extra units
      or keep them as reserves to be used in combat later. Offense can only deploy a max of 12 units at one time
      as well as keep reserves. The defending player will place their 3 fortifications only 1 per tile and only
      infantry
      or Special forces can use fortifications. All of the defenders units involved will be placed in the middle of
      the combat
      board. The defending player cannot place units on first row of tiles closest to them or past the middle row.
      The
      offensive player will now place their units anywhere up to the defenders line but not on or past it.
      Paratroopers can deploy past or directly on a defenders units.
    </p>
    <p>-- The defending player must deploy all their units possible up to the maximum of 12. For
      example the
      defending player cannot deploy 2 units and have the other 10 retreat. If they wish to try and retreat they
      have to follow the retreat rules.
    </p>
    <p>-- A unit is considered locked in combat when they engage an enemy. When locked in combat both
      units cannot move until another one of them is destroyed or they are relieved by a friendly unit.
    </p>
    <p>--During combat if players lose units they can deploy reserves and they will enter the
      combat board in the row closest to the player. When reserve are placed they cannot move until
      the next turn.
    </p>
    <div id="airCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Air Combat Rules</h2>
      <span class="divider"></span>
    </div>
    <p>--Fighters and CAS can be deployed immediately or they can be set to the side and called up when players
      wish to use them. When aircraft are deployed they will be placed on the 1st row closest to the player
      deploying the aircraft. Fighter aircraft can move and attack immediately. CAS can move immediately but
      they cannot attack until the players next turn.
    </p>
    <p>--Any action an aircraft takes when they are within AA range the AA gets to fire 1 shot
      at the aircraft.
      This applies to all AA that is in range. For example if a player moves their aircraft into AA range the AA
      get to fire at them first before the aircraft can do anything else. During that same turn if that aircraft
      moves onto another tile and is still within AA range the AA gets to fire again. This can occur as many
      times as the aircraft moves within AA range.
    </p>
    <p>--Combat is resolved once all of a players units are destroyed or the attacker/defender retreats from the
      battlefield. If both players declare that they want to end combat before all units have been
      destroyed/retreated
      then
      combat immediately ends.
    </p>
    <p>--Players involved should keep track of units lost and territory lost during combat and then update their
      economies immediately after the combat phase ends.
    </p>
    <p>--When a player takes territory from another player they must hold that territory for 1
      turn before they
      can claim it.
    </p>
    <p><span class="text-tan fs-md">Example of combat:</span> An IFV unit attacks an enemy unit on the space next to
      it. The
      attacking unit
      fails to destroy the defending unit. The attacking player still has 3 movement points left but cannot
      move that unit because they remain locked in battle with enemy. If the attacking unit was successfull they
      would
      move into
      the space they captured and this would count as 1 movement point. The player can still move the unit 2
      more space but cannot attack anymore.
    </p>
    <p><span class="text-tan fs-md"> Example of combat:</span> A mechanized unit is attacking an infantry
      unit. They
      both roll
      successfull
      hits and neither of them are destroyed, however the mech unit cannot attack again since it only has 1
      attack point. And since the mech unit was unsuccessfull at destroying the infantry the mech is now locked
      in combat with the infantry and cannot move even though it still has 2 movement points left. If during
      that same turn another unit comes along and destroys the infantry or takes the place of the mechanized unit
      they
      are no longer locked in combat and
      can now move if they wish. If the mech unit was not relieved at the end of the players turn the other
      player can now go on the offensive against the mech unit.
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