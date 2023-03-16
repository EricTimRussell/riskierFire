<template>
  <body class="container-fluid">
    <div class="row px-2">
      <div class="col-12 text-center mb-2 mt-4">
        <h1 class="fs-xl">Rule Book</h1>
      </div>
      <div class="dropdown-center col-12 d-flex justify-content-center mb-4">
        <button class="dropdown-toggle px-2 py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Jump to:
        </button>
        <ul class="dropdown-menu drop-menu">
          <nav class="nav nav-pills">
            <a class="nav-link dropdown-item" href="#mainBoardPieces">Main Board Pieces</a>
            <a class="nav-link dropdown-item" href="#units">Unit Rules</a>
            <a class="nav-link dropdown-item" href="#groundCombat">Ground Combat Rules</a>
            <a class="nav-link dropdown-item" href="#airCombat">Air Combat Rules</a>
            <a class="nav-link dropdown-item" href="#navyCombat">Navy Combat Rules</a>
            <a class="nav-link dropdown-item" href="#items">Item Rules</a>
            <a class="nav-link dropdown-item" href="#events">Event Rules</a>
            <a class="nav-link dropdown-item" href="#structure">Structure Rules</a>
            <a class="nav-link dropdown-item" href="#armyDivision">Army & Division Rules</a>

          </nav>
        </ul>
      </div>
    </div>
    <section class="row px-2">
      <div class="col-12">
        <!-- SECTION Resources -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Resources</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Resources</span> {{ general.resources }}</p>
        <p>
          <span class="text-tan fs-md">Cities</span> {{ general.cities }}
        </p>
        <!-- SECTION Construction -->
        <!-- <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Construction</h2>
          <span class="divider"></span>
        </div>
        <p>
          --The construction sheet is used to track the construction of buildings and naval units. All ground units and
          air units take
          1 turn to
          construct. Naval units vary slightly with carriers taking 3 turns to construct and destroyer/cruisers taking
          2 turns to construct. Naval construction is tracked on the bottom of the sheet using the naval construction
          pieces. Naval yards are built on
          land tiles adjacent to water tiles. The land tile region number will be recorded on the construction sheet
          in the spot labeled "Yard Region #". Each naval yard can produce up to 3 ships at one time.
        </p>
        <p>
          --All buildings take 2 turns to construct and are placed on the construction sheet to track their construction
          progress. The region you are constructing a building on will be written on the construction sheet labeled region
          #.
        </p>
        <p>
          --Each city is worth 1 production. A max of 2 Factories can be built onto capitals and 1 onto large cities and
          medium
          cities to
          increase their production by 1 for each factory. Factories cannot be built on small cities. The amount of
          production a player has dictates how many units a player can produce at one time. This does not include naval
          units or buildings.
        </p> -->
        <!-- SECTION Main Board Pieces -->
        <div id="mainBoardPieces" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Main Board Pieces</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">Cities</span> {{ general.cities }}
        </p>
        <p>
          <span class="text-tan fs-md">Fortifications:</span> {{ buildings.fortification }}
        </p>
        <!-- SECTION Land Units -->
        <div id="units" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Ground Units</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">General Rules:</span> All units have a set amount of movement points and
          offensive points. Movement points are the number of
          times a unit can move on the combat board per turn. All land units can move 2 spaces on the main board if they
          are within their own territory. Otherwise land
          units can only move 1 space on the main board if they move into uncontrolled territory. Offensive points are the
          number of times a unit can
          attack per turn. Range is the distance a unit can attack an enemy. A range of 1 means the unit can only
          attack tiles that are next to them.
        </p>
        <p><span class="text-tan fs-md">Infantry</span> {{ units.infantry }}
        </p>
        <p><span class="text-tan fs-md">Special Forces</span> {{ units.specialForces }}
        </p>
        <p><span class="text-tan fs-md">Mechanized Infantry</span> {{ units.mechanized }}
        </p>
        <p><span class="text-tan fs-md">Infantry Fighting Vehicle (IFV)</span> {{ units.ifv }}
        </p>
        <p><span class="text-tan fs-md">Main Battle Tank (MBT)</span> {{ units.mbt }}
        </p>
        <p><span class="text-tan fs-md">Anti-aircraft</span>{{ units.antiAircraft }}
        </p>
        <p><span class="text-tan fs-md">Artillery</span> {{ units.artillery }}
        </p>
        <p><span class="text-tan fs-md">Missile-Artillery</span> {{ units.missileArtillery }}
        </p>
        <!-- SECTION Air Units -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Air Units</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Fighter Aircraft</span> {{ units.fighterAircraft }}
        </p>
        <p><span class="text-tan fs-md">Close Air Support</span> {{ units.cas }}
        </p>
        <p><span class="text-tan fs-md">Cargo Aircraft</span> {{ units.cargoAircraft }}
        </p>
        <!-- SECTION Navy Units -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Navy Units</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">General Rules:</span> There are 3 types of naval units, Aircraft carrier,
          Cruiser, and Destroyer. Carriers and destroyers
          have peg holes in
          them to track their damage. When a carrier or destroyer is hit a red peg is placed into one of the holes in the
          center of the ship to
          track damage. Each ship has a specific construction time. Carriers take 3
          turns to
          construct. Cruisers and destroyers
          take 2 turns to construct. All ships can move 1 space per turn on the main board.
        </p>
        <p><span class="text-tan fs-md">Carriers</span> {{ units.carrier }}
        </p>
        <p><span class="text-tan fs-md">Cruisers</span> {{ units.cruiser }}
        </p>
        <p><span class="text-tan fs-md">Destroyers</span> {{ units.destroyer }}
        </p>
        <!-- SECTION Combat Rules -->
        <div id="groundCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Combat Rules</h2>
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
          board. The defending player cannot place units on first row of tiles closest to them or past the middle row. The
          offensive player will now place their units anywhere up to the defenders line but not on or past it.
        </p>
        <p>-- The defending player must deploy all their units possible up to the maximum of 12. For example the
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
          move that unit because they remain locked in battle with enemy. If the attacking unit was successfull they would
          move into
          the space they captured and this would count as 1 movement point. The player can still move the unit 2
          more space but cannot attack anymore.
        </p>
        <p><span class="text-tan fs-md"> Example of combat:</span> A mechanized unit is attacking an infantry unit. They
          both roll
          successfull
          hits and neither of them are destroyed, however the mech unit cannot attack again since it only has 1
          attack point. And since the mech unit was unsuccessfull at destroying the infantry the mech is now locked
          in combat with the infantry and cannot move even though it still has 2 movement points left. If during
          that same turn another unit comes along and destroys the infantry or takes the place of the mechanized unit they
          are no longer locked in combat and
          can now move if they wish. If the mech unit was not relieved at the end of the players turn the other
          player can now go on the offensive against the mech unit.
        </p>
        <!-- SECTION Retreat Rules -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Retreat Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md"> Retreating:</span> The defending or offensive players can retreat by moving there
          units to first row of
          tiles closest to
          them on the combat board and declaring that the unit is retreating. They have to remain on that tile for 1
          turn in order to retreat and be will removed from the board. If the combat board is not being used the
          retreating player declares that they are retreating and the retreating unit will have to survive 1 turn
          before moving the unit in the opposite direction where combat is taking place. Once it is declared that a
          unit is retreating this cannot be undone and the unit will be removed after 1 turn unless it is destroyed.
        </p>
        <p>--Once a unit has retreated the player will move that unit one space in the opposite direction to any
          friendly or non-hostile territory. If the opposite tile is water or hostile territory the unit will move
          to the nearest safe tile. If there are no safe tiles the unit cannot retreat.
        </p>
        <p>--Fighter Aircraft and CAS can retreat instantly and will be returned to any airfield within
          range.
        </p>
        <p><span class="text-tan fs-md">--Retreating when a unit has no supplies: </span> In the event a army/division has
          no
          supplies left to defend themselves from an attack they must all retreat. A dice roll for each unit
          retreating will be used determine a successfull escape or not. Using a D12 the defending player must roll
          2 higher than the attacking player to escape. If a unit successfully escapes the player can choose which
          adjacent tile to place each unit. If there are no safe tiles to retreat to then all units are destroyed.
        </p>
        <!-- SECTION Attrition -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Attrition</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">Attrition</span> {{ combat.attrition }}
        </p>
        <!-- SECTION Navy Combat Rules -->
        <div id="navyCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Navy Combat Rules</h2>
          <span class="divider"></span>
        </div>
        <p>--Naval units do not need to occupy the same MB tile to all be included in a naval
          battle. All adjacent
          naval units to the tile where combat is initiated will be included on the combat board. A max of 3 ships
          can occupy a tile at one time.
        </p>
        <p>--Their is a combat board for naval battles as well and is largely identical to the combat board for land
          battles. The difference however is that the defending player can only place their units on the 2nd and 3rd
          row closest to them. The attacking player can place their units on the first 3 rows closest to them.
        </p>
        <p>--Any action an aircraft takes when they are within AA range the AA gets to fire 1 shot
          at the aircraft.
          This applies to all AA that is in range. For example if a player moves their aircraft into AA range the AA
          get to fire at them first before the aircraft can do anything else (unless the aircraft is using the
          stealth item). During that same turn if that aircraft moves onto another tile and is still within AA range
          the AA gets to fire again. This can occur as many times as the aircraft moves within AA range.
        </p>
        <p>--Destroyers have heavy armor giving them a chance to absorb any incoming hits.
        </p>
        <!-- SECTION Item Card Rules -->
        <div id="items" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Item Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Items:</span> {{ general.items }}
        </p>
        <p><span class="text-tan">--Exsplosive Reactive Armor:</span> This can be used before a battle begins to
          increase MBT's
          odds of surving a hit. When an MBT takes a hit roll a D12 to determine if the reactive armor deflects the
          shot 1-5 is successful.
        </p>
        <p><span class="text-tan">--Laser Designator:</span> This item can be used beofre a battle to increase
          the odds of
          artillery hitting its target. Special forces units are required to use the laser designator item. Enemy
          units next to a special forces unit can be lased and give artillery a better chance of hitting their
          target so long as the artillery is within range. Lasing a target does not use up the special forces
          offensive point.
        </p>
        <p><span class="text-tan">Point Defense:</span> The point defense item can be used by a defending player
          before a battle
          to provide better AA and anti-missile protection. If used on an aircraft D12 1-9 is a hit. Point defense
          can only target 1 unit and is discarded after use regardless of outcome. Defending players can use as many
          point defense cards as they want but will need to declare how many cards they are going to deploy before
          the battle. Item cannot be used during naval battles.
        </p>
        <p><span class="text-tan">Aircraft Stealth:</span> The stealth card can be applied before a battle. This
          will reverse
          attack
          order of AA and aircraft meaning the aircraft will fire first and then the AA will fire second and also
          reduces the AA hit chance to D12 (1-6). If the AA is destroyed by an aircrafts first shot the AA does not
          get to fire.
        </p>
        <p><span class="text-tan">Surplus Fuel:</span> This item can be used before a battle begins to upgrade
          mechanized units
          movement. When used mechanized units can now move 3 spaces on the battlefield but can still only attack
          once per turn.
        </p>
        <p><span class="text-tan">Paratroopers:</span> This item card can be used before combat by the offensive
          player. The
          offensive player can place up to 3 infantry units behind the defending player during the combat board
          set-up phase. This requires the offensive player to have infantry or SF infantry present when the attack
          is initiated. If AA is present then each infantry unit being deployed as paratroopers will have to survive
          one AA attack roll. The AA only gets to shoot once at each paratrooper.
        </p>
        <p><span class="text-tan">Javelin Missiles</span> : This item card equips infantry units (not SF) with
          effective
          anti-tank
          weapons. A roll of can be added to all infantry attacks vs MBT's bringing the odds up to 64% chance to
          hit. Does not apply to defense rolls.
        </p>
        <!-- SECTION Event Card Rules -->
        <div id="events" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Event Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Event</span> {{ general.events }}
        </p>
        <!-- SECTION Structure Rules -->
        <div id="structure" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Structure Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">General Rules:</span> Only one structure can occupy any one tile. A player
          must own the tile in order to build anything on the tile. Players
          capitals act as airfields.
        </p>
        <p><span class="text-tan fs-md">Airfields</span> {{ buildings.airfield }}
        </p>
        <p><span class="text-tan fs-md">Naval Yards</span> {{ buildings.navalYard }}
        </p>
        <p><span class="text-tan fs-md">Factories</span> {{ buildings.factory }}
        </p>
        <!-- SECTION Army/Division Rules -->
        <div id="armyDivision" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Army & Division Rules</h2>
          <span class="divider"></span>
        </div>
        <p>--Army and Division pieces are a way to consolidate large groups of units. Armies are
          groups of 9 units
          and Divisions are groups of 6. Each unit piece has holes that represent each unit within the division or
          army. Division pieces have 10 peg holes and army pieces have 13 peg holes. The group of 4 peg holes
          represent the supplies the army/division has total if their supply line is cut.
        </p>
        <p>--Units contained within these groups will be tracked on paper or the companion app. If
          a unit is
          destroyed it will be erased from the resource sheet or removed on the app.
        </p>
        <p>--Units that are not within a division or army can join these groups to replace destroyed units.
        </p>
        <p>--If more than half of a division or army group is destroyed, and the player does not
          have any extra
          units within range to immediately replace the lost units then the division or army is disbanded and
          replaced with the remaining individual units.
        </p>
        <p>--Divisions and army groups can only move if all units within the group have not already moved. For
          example if a unit traveled 1 space to join the group the entire group cannot move until next turn.
        </p>
        <p>--Divisions and Army groups can instantly capture unnoccupied tiles.
        </p>
      </div>
      <span class="divider"></span>
      <div class="col-12 d-flex justify-content-center py-3 sticky-bottom">
        <button @click="backToTop()" class="p-2">Back-to-Top</button>
      </div>
    </section>
  </body>
</template>

<script>
import { computed, onMounted } from 'vue'
import { rulesService } from '../services/RulesService.js'
import { useRulesStore } from "../stores/RulesStore";
export default {
  setup() {
    async function getUnitRules() {
      try {
        await rulesService.getUnitRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getBuildingRules() {
      try {
        await rulesService.getBuildingRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getGeneralRules() {
      try {
        await rulesService.getGeneralRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getCombatRules() {
      try {
        await rulesService.getCombatRules()
      } catch (error) {
        console.error(error);
      }
    }

    onMounted(() => {
      getUnitRules()
      getBuildingRules()
      getGeneralRules()
      getCombatRules()
    })
    return {
      units: computed(() => useRulesStore.units),
      buildings: computed(() => useRulesStore.buildings),
      general: computed(() => useRulesStore.general),
      combat: computed(() => useRulesStore.combat),

      backToTop() {
        window.scrollTo(0, 0)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
body {
  color: #1d1d1d;
  text-shadow: #000000 3px 3px 2px;
  color: whitesmoke;
  min-height: 80vh;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
}

a {
  border-bottom: #1d1d1d 5px solid;
  color: black;
  text-shadow: none;
}

a:hover {
  text-decoration: underline 2px solid black;
}

a:active {
  text-decoration: underline 2px solid black;
}

.drop-menu {
  max-width: 250px;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>