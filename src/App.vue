<template>

  <body>

    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>

  </body>

  <!-- SECTION battle view unit odds modals -->
  <!-- Odds modals are on App.vue because of nested parent/child components needing to have certain fixed sizes which seems to break modals -->

  <!-- SECTION ground forces -->
  <!-- Infantry modal -->
  <div class="modal fade" id="infantry-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger">Infantry: Offense-2D6</h5>
            <h6 class="text-center">1AP, 1MP, Range of 1</h6>
            <ul>
              <li>Vs Infantry: 5-8 (55%)</li>
              <li>Vs Mech: 7-10 (50%)</li>
              <li>Vs IFV: 7-8 (30%)</li>
              <li>Vs MBT: 7-9 (42%)</li>
              <li>Vs MBT with Javelins: 7-12 (58%)</li>
            </ul>
          </div>
          <div class="d-flex flex-column align-items-center text-dark">
            <h5 class="text-primary text-center">Infantry: Deffense-2D6</h5>
            <ul>
              <li>Urban D: 5-9 (67%)</li>
              <li>Marshland D: 7-12 (58%) </li>
              <li>Jungle/Forest: D: 5-9 (67%)</li>
              <li>Desert/Grassland D: 7-9 (42%)</li>
              <li>Highlands D: 7-12 (58%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SF modal -->
  <div class="modal fade" id="sf-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">Special Forces: Offense-2D6</h5>
            <h6 class="text-center">1AP, 1MP, Range of 1</h6>
            <ul>
              <li>Vs Infantry: 5-8, 11-12 (64%)</li>
              <li>Vs Mech: 7-12 (58%)</li>
              <li>Vs IFV: 7-8, 11-12 (39%)</li>
              <li>Vs MBT: 7-12 (58%)</li>
            </ul>
          </div>

          <div class="d-flex flex-column align-items-center text-dark">
            <h5 class="text-primary text-center">Special Forces: Deffense-2D6</h5>
            <ul>
              <li>Urban D: 5-9 (67%)</li>
              <li>All Other Environments D: 7-9 (42%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mechanized modal -->
  <div class="modal fade" id="mech-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">Mechanized: Offense-2D6</h5>
            <h6 class="text-center">1AP, 2MP, Range of 1</h6>
            <ul>
              <li>Vs Infantry: 5-9 (67%)</li>
              <li>Vs Mech: 7-11 (55%)</li>
              <li>Vs IFV: 2, 7-10 (53%)</li>
              <li>Vs MBT: 2, 7-9 (44%)</li>
            </ul>
          </div>

          <div class="d-flex flex-column align-items-center text-dark">
            <h5 class="text-primary text-center">Mechanized: Deffense-2D6</h5>
            <ul>
              <li>Urban D: 7-12 (58%)</li>
              <li>Marshland D: 7-9 (42%)</li>
              <li>Jungle/Forest D: 7-12 (58%)</li>
              <li>Desert/Grassland D: 7-10 (50%)</li>
              <li>Highlands D: 5-8 (55%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- IFV modal -->
  <div class="modal fade" id="ifv-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">IFV: Offense-2D6</h5>
            <h6 class="text-center">1AP, 3MP, Range of 1</h6>
            <ul>
              <li>Vs Infantry: 5-12 (78%)</li>
              <li>Vs Mech: 5-9 (67%)</li>
              <li>Vs IFV: 7-11 (55%)</li>
              <li>Vs MBT: 7-8 (30%)</li>
            </ul>
          </div>

          <div class="d-flex flex-column align-items-center text-dark">
            <h5 class="text-primary text-center">IFV: Deffense-2D6</h5>
            <ul>
              <li>Urban D: 7-10 (50%)</li>
              <li>Marshland D: 7-8 (30%)</li>
              <li>Jungle/Forest D: 7-9 (42%)</li>
              <li>Desert/Grassland D: 5-8 (55%)</li>
              <li>Highlands D: 7-10 (50%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MBT modal -->
  <div class="modal fade" id="mbt-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">MBT: Offense-2D6</h5>
            <h6 class="text-center">2AP, 2MP, Range of 1</h6>
            <ul>
              <li>Vs Infantry: 2, 7-12 (61%)</li>
              <li>Vs Mech: 5-9 (67%)</li>
              <li>Vs IFV: 5-12 (78%)</li>
              <li>Vs MBT: 7-12 (58%) </li>
            </ul>
          </div>

          <div class="d-flex flex-column align-items-center text-dark">
            <h5 class="text-primary text-center">MBT: Deffense-2D6</h5>
            <ul>
              <li>Urban D: 7-10 (50%)</li>
              <li>Grassland/Desert D: 7-10 (50%)</li>
              <li>Forest D: 7-9 (42%)</li>
              <li>Highlands D: 7-9 (42%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Artillery modal -->
  <div class="modal fade" id="artillery-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">Artillery-D12</h5>
            <h6 class="text-center">1AP, 1MP, Range of 3</h6>
            <ul>
              <li>Vs Infantry, Mech & Artillery 1-4 (33%)</li>
              <li>IFV & AA 1-3 (25%)</li>
              <li>MBT & All units in Urban 1-2 (16%)</li>
              <li>With Designator 1-7 (58%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Missile artillery modal -->
  <div class="modal fade" id="missile-art-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">Missile Artillery-D12</h5>
            <h6 class="text-center">1AP, 1MP, Range of 4</h6>
            <ul>
              <li>Vs Infantry/Mech 1-5 (41%)</li>
              <li>IFV 1-4 (33%)</li>
              <li>MBT & All units in cities 1-2 (16%)</li>
              <li>With Laser Designator 1-8 (67%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- AA modal -->
  <div class="modal fade" id="aa-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex bg-light text-dark flex-column align-items-center">
            <h5 class="text-danger text-center">Anti-Aircraft-D12</h5>
            <h6 class="text-center">1AP, 1MP, Range of 1</h6>
            <ul>
              <li>Vs Aircraft 1-7 (58%)</li>
              <li>Vs Missiles 1-6 (50%)</li>
              <li>Vs Hypersonic Missile 1-5 (41%)</li>
              <li>With Point Defense vs All 1-8 (67%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- !SECTION -->

  <!-- SECTION air forces -->
  <!-- Fighter modal -->
  <div class="modal fade" id="fighter-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light d-flex flex-column align-items-center text-dark">
            <h5 class="text-danger text-center">Fighter Aircraft-D12</h5>
            <h6 class="text-center">1AP, 4MP, Range of 1</h6>
            <ul>
              <li>Vs Figher 1-6 (50%)</li>
              <li>Vs CAS 1-9 (75%)</li>
              <li>Evade 1-4 (33%)</li>
              <li>1-4 (33%) on all ground targets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CAS modal -->
  <div class="modal fade" id="cas-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-column align-items-center text-dark bg-light">
            <h5 class="text-danger text-center">Close Air Support-D12</h5>
            <h6 class="text-center">1AP, 3MP, Range of 1</h6>
            <ul>
              <li>Cannot Target Fighters</li>
              <li>1-10 (83%) on all ground targets</li>
              <li>1-6 (50%) Vs CAS</li>
              <li>Evade 1-4 (33%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- !SECTION -->

  <!-- SECTION naval forces -->
  <!-- Carrier modal -->
  <div class="modal fade" id="carrier-odds" tabindex="-1" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light d-flex flex-column align-items-center text-dark">
            <h5 class="text-danger text-center">Aircraft Carrier-D12</h5>
            <h6 class="text-center">0AP, 1MP, Range of 1</h6>
            <ul>
              <li>Vs Aircraft 1-7 (58%)</li>
              <li>Vs Missiles 1-6 (50%)</li>
              <li>Vs Hypersonic Missile 1-5 (41%)</li>
              <li>With Point Defense vs All 1-8 (67%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Cruiser modal -->
  <div class="modal fade" id="cruiser-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex bg-light text-dark flex-column align-items-center">
            <h5 class="text-danger text-center">Cruiser-D12</h5>
            <h6 class="text-center">1AP, 2MP</h6>
            <ul>
              <li>Vs Aircraft 1 tile range 1-7 (58%)</li>
              <li>Vs Ship 3 tile range 1-8 (75%)</li>
              <li>Vs land use missile artillery dice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Destroyer modal -->
  <div class="modal fade" id="destroyer-odds" tabindex="-1" aria-labelledby="" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light text-dark d-flex flex-column align-items-center">
            <h5 class="text-danger text-center">Destroyer-D12</h5>
            <h6 class="text-center">2AP, 2MP, 1 tile range</h6>
            <ul>
              <li>Vs Cruiser 1-8 (66%)</li>
              <li>Vs Carrier 1-9 (75%)</li>
              <li>Vs Destroyer 1-6 (50%)</li>
              <li>Armor deflection D12 1-5 (42%)</li>
              <li>Vs land use artillery dice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- !SECTION -->

  <!-- !SECTION End modals-->
</template>



<script>
// Firebase
import { getCurrentUser, useCurrentUser, useFirebaseAuth } from "vuefire";

// Vue
import { RouterView } from 'vue-router'

// Components
import ModalComponent from "./components/ModalComponent.vue";
import CreateTeamFormComponent from "./components/forms/CreateTeamFormComponent.vue";

export default {
  setup() {
    const auth = useFirebaseAuth()
    const user = useCurrentUser()
    return {
      user,
      async getLoggedInUser() {
        if (user.value?.uid == undefined) {
          await getCurrentUser()
        }
      }
    }
  },
  components: { ModalComponent, CreateTeamFormComponent },
}

</script>


<style scoped></style>
