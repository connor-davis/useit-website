import Aluminium from '../../assets/recycling/aluminium.webp';
import AluminiumBecomes from '../../assets/recycling/aluminiumBecomes.webp';
import Cardboard from '../../assets/recycling/cardboard.webp';
import CardboardBecomes from '../../assets/recycling/cardboardBecomes.webp';
import ClosedLoop from '../../assets/recycling/closedLoop.webp';
import Footer from '../../components/footer/footer';
import Glass from '../../assets/recycling/glass.webp';
import GlassBecomes from '../../assets/recycling/glassBecomes.webp';
import IdentificationCodes from '../../assets/recycling/identificationCodes.webp';
import PET from '../../assets/recycling/pet.webp';
import PETBecomes from '../../assets/recycling/petBecomes.webp';
import Paper from '../../assets/recycling/paper.webp';
import PaperBecomes from '../../assets/recycling/paperBecomes.webp';
import Polycoat from '../../assets/recycling/polycoat.webp';
import PolycoatBecomes from '../../assets/recycling/polycoatBecomes.webp';
import RP from '../../assets/recycling/rp.webp';
import RPBecomes from '../../assets/recycling/rpBecomes.webp';
import RecyclingModal from '../../components/recyclingModal/recyclingModal';
import SteelContainer from '../../assets/recycling/steel_container.webp';
import SteelContainerBecomes from '../../assets/recycling/steelContainerBecomes.webp';
import { createSignal } from 'solid-js';

let RecyclingPage = ({}) => {
  const [scrollTop, setScrollTop] = createSignal(0);

  return (
    <div
      class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto"
      onScroll={(event) => {
        const mdl = document.querySelectorAll('.mdl');

        mdl.forEach((mdlElem) => mdlElem.scrollIntoView(true));
      }}
    >
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            What happens to my Recycling?
          </div>

          <div class="grid md:grid-cols-2 gap-2">
            <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <div>Click To See</div>
            </div>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={Aluminium} />
                  </div>
                  <div>Aluminium Can</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Aluminium Cans
              </div>

              <div>
                Aluminum can be recycled repeatedly, and most of the empties are
                typically melted, re-cast and refilled within 60 days. Recycling
                aluminum uses a tiny fraction of the energy it takes to refine
                ore from scratch—and aluminum can be used in everything from CDs
                to passenger jets.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={AluminiumBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-3 bg-white">
                    <img src={SteelContainer} />
                  </div>
                  <div>Steel Container</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Steel Containers
              </div>

              <div>
                Because steel never loses quality or strength, it can be
                endlessly recycled. The raw material from recovered steel
                containers is used to make new containers, as well as products
                like chains and piping, household appliances, automotive parts
                and reinforcing bars (rebar).
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={SteelContainerBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={PET} />
                  </div>
                  <div>PET Plastic Bottles</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                PET Plastic Bottles
              </div>

              <div>
                Lightweight Polyethylene Terephthalate (PET) plastic is
                infinitely recyclable and can be used to manufacture new bottles
                as well as items such as polar fleece, broadloom, rope, brush
                bristles, car bumpers and household furnishings.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={PETBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={Glass} />
                  </div>
                  <div>Glass Bottles</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Glass Bottles & Jars
              </div>

              <div>
                As an infinitely recyclable material, the glass from bottles and
                jars can be used to make new glass containers. It also becomes a
                raw material for products like fibreglass insulation, high
                traction road surfaces and reflective signs, as well as
                construction aggregate.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={GlassBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={Polycoat} />
                  </div>
                  <div>Polycoat Containers</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Polycoat Containers
              </div>

              <div>
                These food and beverage cartons include packaging for liquids
                like juice, broth, wine and milk, as well as ice cream tubs and
                beverage cups. They are recyclables that come back as paper
                towels, paper trays, cardboard and tissues.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={PolycoatBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={RP} />
                  </div>
                  <div>Rigid Plastic</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Rigid Plastics
              </div>

              <div>
                High density plastics, used to make containers like laundry and
                household cleaning bottles, come back as many new products,
                including decking, picnic tables, deck chairs, gardening
                supplies and even the Blue Box itself.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={RPBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={Paper} />
                  </div>
                  <div>Paper</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Household / Office Paper
              </div>

              <div>
                Old newspapers, magazines, catalogues and household paper, such
                as statements, bills and envelopes come back as fresh paper
                stock. They can also be made into products like boxboard,
                drywall, egg cartons, insulation and bedding trays.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={PaperBecomes} />
              </div>
            </RecyclingModal>

            <RecyclingModal
              root={() => (
                <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-white dark:bg-gray-900 text-center space-y-2 rounded">
                  <div class="rounded-full flex justify-center items-center p-2 bg-white">
                    <img src={Cardboard} />
                  </div>
                  <div>Cardboard</div>
                </div>
              )}
              scrollTop={scrollTop}
            >
              <div class="text-2xl text-green-900 dark:text-green-600">
                Cardboard Packaging
              </div>

              <div>
                Corrugated cardboard boxes are recycled into new boxes,
                biodegradable garden supplies, drywall liner, kraft paper
                (strong and relatively coarse), gift wrap and a variety of brown
                paper products, such as towelling.
              </div>

              <div class="text-2xl text-green-900 dark:text-green-600">
                Recycling this can produce:
              </div>

              <div class="rounded bg-white p-2">
                <img src={CardboardBecomes} />
              </div>
            </RecyclingModal>
          </div>

          <div class="flex flex-col space-y-5 items-center">
            <div class="text-2xl text-green-900 dark:text-green-600">
              Plastic Identification Codes
            </div>

            <img src={IdentificationCodes} />

            <img src={ClosedLoop} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RecyclingPage;
