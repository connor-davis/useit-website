import Footer from "../../components/footer/footer";

let ProjectsPage = () => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Projects
          </div>

          <div class="text-lg">
            USE-IT has several flagship projects and other enterprise
            development projects funded through various donors, these relate to:
          </div>

          <div class="text-xl text-green-900 dark:text-green-600">Funded Projects:</div>
          <ul class="list-disc px-5">
            <li>Compressed Earth Recycled Blocks</li>
            <li>Glass Beneficiation Projectt</li>
            <li>HWBC - Hammersdale Waste Benefication Centre</li>
          </ul>

          <div class="text-xl text-green-900 dark:text-green-600">
            Small Enterprise Development Projects:
          </div>
          <ul class="list-disc px-5">
            <li>Waste Upcycling</li>
            <li>E-Waste Recyclers</li>
            <li>Local Plastics Recycling</li>
            <li>Organics / Composting</li>
            <li>Woodworking - custom made items from waste wood</li>
            <li>
              Shoe manufacture and new products from waste leather offcuts
            </li>
          </ul>

          <div class="text-lg">
            USE-IT is a Non-Profit Organisation with registered PBO status with
            the express aims of diverting waste and creating jobs. We leverage
            funds to create these opportunities from small community enterprises
            to larger going concerns. Through partnerships we can assist your
            company in better understanding the waste from raw material inputs,
            to what eventually ends up in your bins. We can then use diverted
            waste to establish Enterprise Development opportunities that you can
            use in your sustainability and annual reports and marketing
            literature.
          </div>

          <div class="text-lg">
            Even if your company does not generate much waste, why not work with
            USE-IT with your CSI budget where we can channel this into one of
            many worthy projects that brand you as a corporate and responsible
            waste producer.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
