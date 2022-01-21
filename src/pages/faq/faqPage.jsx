import { useNavigate } from 'solid-app-router';
import DropDownCard from '../../components/dropdown/DropDownCard';
import Footer from '../../components/footer/footer';

let FaqPage = ({}) => {
  let navigate = useNavigate();

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Frequently Asked Questions
          </div>

          <DropDownCard
            leftText={'01'}
            rightText={'What happens to my recycling?'}
            reverse={false}
          >
            <div>
              <span
                onClick={() => navigate('/')}
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                Click on this link to find out...
              </span>
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'02'}
            rightText={'How can I become involved in a project?'}
            reverse={true}
          >
            <div>
              <span
                onClick={() => navigate('/contactUs')}
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                Contact
              </span>{' '}
              USE-IT and speak with a specialist who can provide you with
              information email{' '}
              <a
                href="mailto:info@use-it.co.za"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                info@use-it.co.za
              </a>{' '}
              or contact our office{' '}
              <a
                href="tel:+27 31 765 2349"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                +27 31 765 2349
              </a>{' '}
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'03'}
            rightText={
              'How can USE-IT help to decrease your waste management costs?'
            }
            reverse={false}
          >
            <div>
              USE-IT has developed methodologies that allow companies to reduce
              waste management costs through innovative project development and
              technological applications. This has allowed a number of
              organisations to convert the grudge spend on waste management into
              cost negative projects with a mutlitude of postive spin-offs, from
              a Marketing, CSI, Enterprise Development and Triple Bottom Line
              Reporting outcome.
            </div>
            <div>
              <span
                onClick={() => navigate('/contactUs')}
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                Contact
              </span>{' '}
              us for more information:{' '}
              <a
                href="mailto:info@use-it.co.za"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                info@use-it.co.za
              </a>{' '}
              or telephone{' '}
              <a
                href="tel:+27 31 765 2349"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                +27 31 765 2349
              </a>{' '}
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'04'}
            rightText={'Does USE-IT help create jobs?'}
            reverse={true}
          >
            <div>Yes!</div>
            <div>
              USE-IT has been instrumental in a range of projects using
              innovative waste benefication techniques. Through various efforts
              USE-IT has created over 2300 jobs in the recycling and waste
              benefication sectors and it has plans in place for thousands more.
            </div>
            <div>
              <span
                onClick={() => navigate('/contactUs')}
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                Contact
              </span>{' '}
              us for more information:{' '}
              <a
                href="mailto:info@use-it.co.za"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                info@use-it.co.za
              </a>{' '}
              or telephone{' '}
              <a
                href="tel:+27 31 765 2349"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                +27 31 765 2349
              </a>{' '}
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'05'}
            rightText={'Can USE-IT help to maximize your BEE Rating?'}
            reverse={false}
          >
            <div>Yes!</div>
            <div>
              If your business model is compatible, USE-IT can help you to
              develop projects that will increase your companies B-BBEE score,
              through a variety fo supplier development programs and enterprise
              development mechanisms.
            </div>
            <div class="italic">
              "Company waste streams can be an opportunity to unlock
              sustainability initiatives and B-BBEE points".
            </div>
            <div>
              <span
                onClick={() => navigate('/contactUs')}
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                Contact
              </span>{' '}
              us for more information:{' '}
              <a
                href="mailto:info@use-it.co.za"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                info@use-it.co.za
              </a>{' '}
              or telephone{' '}
              <a
                href="tel:+27 31 765 2349"
                type="_blank"
                class="border-b  border-black dark:border-white cursor-pointer"
              >
                +27 31 765 2349
              </a>{' '}
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'06'}
            rightText={'Does USE-IT Recycle?'}
            reverse={true}
          >
            <div>No!</div>
            <div>
              USE-IT does not actively collect waste for recycling, please go
              to:
            </div>
            <div class="italic">
              <a
                href="https://www.recyclereconnect.co.za"
                type="_blank"
                class="border-b border-black dark:border-white cursor-pointer"
              >
                www.recyclereconnect.co.za
              </a>
            </div>
            <div>
              To find someone close to you who can assist you with your waste
              disposal.
            </div>
          </DropDownCard>

          <DropDownCard
            leftText={'07'}
            rightText={'I want to start a recycling business!'}
            reverse={false}
          >
            <div>
              Congratulations on your initiative and your commitment to
              recycling and community upliftment. You have taken the first of
              many important steps in getting started with a recycling business.
              As with any new company or business venture the first step is to
              gather information about the opportunity before you and in this
              industry this can often only be achieved by getting stuck into the
              process of collection and understanding “what is out there”? At
              this stage it is virtually impossible to support a new business as
              we have no idea where you are, what infrastructure is in the area,
              the current status of waste management in the area, what resources
              you have, what you intend to collect, where the markets are, etc.
              There is information available to assist you to get going like the
              attached information booklet, but also information on websites
              such as www.recycling.co.za and www.use-it.co.za Once you have
              been active for 8 to 12 months you will have a better idea of what
              can be collected in your area and what markets there are for the
              product. You need to determine this yourself as one can only help
              those that help themselves first. When you have a better idea of
              current and potential volumes of recyclables then we can
              collectively determine what your needs are in terms of
              infrastructure, resources, equipment and access to markets. At
              that point then we can determine whether you need assistance with
              PET, cans, PE &PP, PS, glass or cardboard. Then we can put you in
              touch with the industry association that support the collection of
              these materials. Keep accurate records of what you are collecting
              and selling, your cash-flow, salaries, costs, etc as these can
              then be built into a cash-flow forecast to assist in understanding
              and motivating for the financial needs of your organisation. If
              you show determination and commitment over a period of time that
              shows growth and potential for investment then you will never look
              back.
            </div>
            <div>
              Obviously we cannot support everyone who is starting up, or
              thinking about starting up, as our own time and resources are
              limited, and we have no idea what your real needs are. That is why
              we – and just about any other private or government organisation –
              will gladly assist you once you have shown the initiative and
              commitment and prove that you can recycle. The information sources
              on the websites provided will give you more than enough
              information to get started, then keep in touch as you achieve new
              targets and ask for advice when needed. Once you show us what you
              can achieve on a small-scale, then we will do whatever possible in
              our means to then assist you through to creating a successful and
              profitable company in the recycling sector.
            </div>
          </DropDownCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;
