import { useNavigate } from 'solid-app-router';
import Footer from '../../components/footer/footer';
import AssociationsSlider from '../../components/sliders/associationsSlider';
import FundersSlider from '../../components/sliders/fundersSlider';
import PartnershipsSlider from '../../components/sliders/partnershipsSlider';

let AboutPage = () => {
  let navigate = useNavigate();

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 dark:border-gray-800 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            About Us
          </div>
          <div class="text-lg">
            USE-IT has been established as a non-profit organisation to research
            and develop waste beneficiation technologies with the aim of
            diverting waste from landfill and creating jobs in the green
            economy. Our primary funding and mandate is in the eThekwini area in
            association with the Economic Development Unit.
          </div>

          <div class="text-lg">
            USE-IT is a special purpose vehicle, designed to act as a cluster
            for the waste materials recovery industry in eThekwini Municipality.
            In terms of Governance USE-IT is overseen by a board of directors
            made up of members from a diverse range of backgrounds in the waste
            material recovery, business and environmental management
            backgrounds.
          </div>

          <div class="text-lg">
            USE-IT has also constructed a world class facility in Hammarsdale
            that houses 10 incubators for training and skills development to
            develop SME's within the upcycling and recycling industry.
            Additional source of funding for the operation of the site is
            obtained through tenancy on site and partnerships created with the
            aim of ensuring sustainable enterprises to operate under the waste
            licence held by USE-IT.
          </div>

          <div class="text-xl font-bold">
            ​USE-IT also provides a number of specialised services including:
          </div>
          <ul class="list-disc px-5">
            <li>Research and Development</li>
            <li>Project facilitation, advice and support</li>
            <li>Network facilitation with the public and private sectors</li>
            <li>
              Enterprise development at the Micro to Medium Enterprises through
              incubation
            </li>
            <li>Facilitate partnerships in the Green Economy</li>
            <li>Skills development within the waste industry</li>
            <li>Wealth creation through waste</li>
            <li>New innovations to upcycle waste</li>
          </ul>

          <div class="text-lg">
            We leverage funds to create these opportunities for small community
            enterprises up to multi-million Rand development projects so there
            is a space for every company no matter what size.
          </div>
        </div>

        <FundersSlider />

        <AssociationsSlider />

        <PartnershipsSlider />

        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="text-2xl font-bold">You can make a difference!</div>

          <div class="text-xl font-bold">
            Focus your Corporate Social Investment (CSI)
          </div>

          <div class="text-lg">
            How does your company see their CSI commitment? To many it is a
            legislative evil that sucks profit from your company.
          </div>
          <div class="text-lg">
            We at USE-IT see it differently; both as an opportunity to save
            money off your bottom line through appropriate waste management and
            then as an opportunity to brand and market your company as a caring,
            green, sustainable and socially-responsible organisation.
          </div>
          <div class="text-lg">
            Call us so we can tell you how!{' '}
            <span
              onClick={() => navigate('/contactUs')}
              class="border-b border-black cursor-pointer"
            >
              Contact Us
            </span>
          </div>

          <div class="text-xl font-bold">Maximise your BEE Rating</div>

          <div class="text-lg">
            If you are a private company based in South Africa, USE-IT can help
            to increase your B-BBEE rating by initiating a Procurement,
            Enterprise Development & Supplier Development program for your
            company. The Procurement, Enterprise Development & Supplier
            Development category represents a possible 42 points to your B-BBEE
            Score and USE-IT has developed a program that can be integrated into
            the supply chain of most major private companies in South Africa.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
