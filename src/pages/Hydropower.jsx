import PageHeader from '../components/PageHeader';
import CompanySection from '../components/CompanySection';
import Portfolio from '../components/Portfolio';
import damImage from '../assets/hydropower_a1c982ffe3.jpg';
import turbineImage from '../assets/hydro_c0360c08f5.jpg';
import '../components/CompanySection.css';

function Hydropower() {
  return (
    <main>
      <PageHeader
        label="Our Portfolio"
        title="Hydropower"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }, { label: 'Hydropower' }]}
      />

      <section className="pg-lead">
        <div className="pg-lead-inner has-image">
          <p>
            Hydropower, or hydroelectric power, is a renewable energy source
            that harnesses the energy of moving water to generate electricity.
          </p>
          <div className="pg-lead-image">
            <img src={turbineImage} alt="Hydropower turbine hall" />
          </div>
        </div>
      </section>

      <CompanySection
        name="River Falls Power Limited"
        place="History"
        image={damImage}
        imageAlt="Hydropower dam"
        link="https://www.riverfallshydro.com.np/"
        paragraphs={[
          <>
            River Falls Power Limited (RFPL) is a public limited company,
            incorporated on October 5, 2004 as a private limited company and
            later converted to a public limited company in October 2015. The
            company has been promoted by individual businesspersons with dynamic
            experience in hydropower and other sectors to set up hydroelectric
            projects (HEP) in Nepal.
          </>,
          <>
            RFPL operates the 10.30 MW run-of-river Down Piluwa Khola Small
            Hydropower Project in Sankhuwasabha district of Nepal. The project
            came into operation on August 10, 2023. The company is eligible for
            all five escalations for 9.5 MW and eight escalations for the
            additional 0.8 MW. The project is in the early stage of operations;
            thus, how production will stabilize and be streamlined in the coming
            years remains to be seen.
          </>,
          <>
            RFPL entered into a long-term PPA with NEA on February 1, 2015 for
            the sale of 9.5 MW (amended on November 2, 2022 to 10.30 MW) of
            power to be generated from the project. The PPA period is 30 years
            from the commercial operation date (COD) or until the validity of
            the generation license (obtained on February 16, 2014 for 35 years),
            whichever is earlier.
          </>,
          <>
            The PPA period may be extended by mutual consent during the last six
            months of its validity. The tariff is Rs 4.80 per kWh for the wet
            season (mid-April to mid-December) and Rs 8.40 per kWh for the dry
            season (mid-December to mid-April), with a 3% escalation on the base
            tariff five times in every year after completion of 12 months from
            the COD. However, the escalation applies eight times for the
            additional 0.8 MW. The contracted energy for the project is 57.84
            million units (MU) at a PLF of 64.10%. Additionally, the
            counterparty payment risk associated with NEA is considered
            moderate, given its full ownership by the Government of Nepal. Such
            arrangements are expected to provide revenue stability and
            sustainability to the company.
          </>,
        ]}
      />

      <CompanySection
        tone="cream"
        reverse
        name="Shuvam Power Limited"
        place="History"
        image={turbineImage}
        imageAlt="Hydropower turbines"
        link="https://shuvamhydro.com.np/"
        paragraphs={[
          <>
            Shuvam Power Limited (SPL) is a public limited company, incorporated
            on December 29, 2015. SPL operates the 0.99 MW run-of-the-river
            Lower Piluwa Khola Small Hydroelectric Project (LPKHP) in
            Sankhuwasabha District, which has been in commercial operation since
            July 17, 2011. The company obtained its generation license from the
            Government of Nepal, Ministry of Energy, on April 15, 2008.
          </>,
          <>
            The power purchase agreement (PPA) of SPL has sufficient period
            coverage. Initially, Baneshwor Hydropower Private Limited (BHPL)
            signed a PPA with NEA on November 7, 2007 for the sale of power
            generated from the 0.99 MW capacity. Later, BHPL was acquired by
            SPL.
          </>,
          <>
            The contracted energy for 0.99 MW is 6.84 million units (MU)
            annually, with a contracted plant load factor (PLF) of 78.89%. The
            PPA was entered into for 25 years from the RCOD. The tariff rate
            under the PPA is Rs 3.90 per kWh for the wet season (mid-April to
            mid-December) and Rs 5.52 per kWh for the dry season (mid-December
            to mid-April).
          </>,
        ]}
      />

      <CompanySection
        name="Maya Khola Hydropower Company Limited"
        place="History"
        image={damImage}
        imageAlt="Hydropower dam"
        paragraphs={[
          <>
            Incorporated in May 2010 and converted into a public limited company
            in December 2016, Maya Khola Hydropower Company Limited (MKHCL) has
            been operating the 14.9 MW Maya Khola HEP in Sankhuwasabha district,
            Koshi Province, Nepal, since July 7, 2023. The project is
            run-of-the-river (R-o-R) and has been developed at 40% probability
            of exceedance (Q40). It is one of the Super-Six projects, which were
            initially studied by the Department of Electricity Development
            (DoED), Nepal.
          </>,
          <>
            The company began operations on July 7, 2023, within six months of
            the RCOD of January 17, 2023, making it eligible for all five tariff
            escalations. The project's tariff and offtake risks also remain low,
            as the company has a long-term power purchase agreement (PPA) with
            the Nepal Electricity Authority (NEA), the sole purchaser and
            distributor of electricity in Nepal, for its entire project
            capacity. At present, the project is connected to NEA's operational
            Baneshwor substation, which leads to low evacuation risk.
          </>,
        ]}
      />

      <Portfolio label="Portfolio" />
    </main>
  )
}

export default Hydropower;