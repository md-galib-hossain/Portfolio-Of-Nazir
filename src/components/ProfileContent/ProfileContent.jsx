import Image from "next/image";
import Title from "../Title/Title";
import Section from "./components/Section";
import SectionParagraph from "./components/SectionParagraph";

const ProfileContent = () => {
  return (
    <div className="mx-auto text-white p-8 rounded-lg space-y-8">
      <Title text="H E Nazir Alam" />

      <Section
        title="Consul of Democratic Republic of The Congo (DRC) in Dhaka, Bangladesh."
        flagSrc="/flags/congo.png"
      >
        <SectionParagraph>
          Active roles involve implementation of G2G, G2B, B2B services,
          manufacturing & trading in Ai, Cyber security & ICT, Education,
          Fintech, Legaltech, Pharmaceuticals, Ready made garments, Export
          processing zone and Recycling solutions for batteries.
        </SectionParagraph>
      </Section>

      <Section
        title="CEO of The Future Leaders Ltd. & Founder & Director of ICS Holdings Ltd."
        flagSrc="/flags/uk.png"
      >
        <SectionParagraph>
          Active roles involve developing & delivering bespoke accredited skills
          training for employment & enterprise development with Government Trust
          & Foundations, distribution/assembly-manufacturing of Automotive
          batteries & other storage solutions, Master franchise/solutions.
        </SectionParagraph>
        <SectionParagraph>
          Founder of SPACE CS Hub @ 1 Canada Square, Canary Wharf, London to
          support UK based Startups and Scale-ups to gain market access to
          emerging economies around the Globe. Championing British education and
          skills awards to be delivered overseas.
        </SectionParagraph>
        <SectionParagraph>
          Initiator of Community Leadership Programme (CLP) with Local
          Government and European Commission; Licensed Mentor for Quality
          Assurance System; Archived migration history of Bangladeshis into the
          UK with Museum; Management Specialist as per British Standard 6079.
        </SectionParagraph>
      </Section>

      <Section
        title="Board Member of UDDIPAN (3rd largest Foundation), Chairman of UDDIPAN renewable Energy Ltd. Directors of The FLL, Planetex BD and Colourstone Int Trust."
        flagSrc="/flags/bd.png"
      >
        <SectionParagraph>
          Spearheading delivery of British academic and skills qualifications
          with rightful progression of skilled Bangladesh work-force in local
          and international jobs; Brand creation, Contract Farming, Supply chain
          management of processed FMCG F&Bs for local and international modern
          trade outlets; Automotive batteries' manufacturing and expansion of
          markets globally.
        </SectionParagraph>
        <SectionParagraph>
          Leading on SPACE CS Hub to support enterprises for sustainable growth.
          Introduced first-ever Simulation Lab for skills training and
          Meta-Campus for academic programmes with VR-AR-MR. Creation of
          Designers of RMG brands through academic courses & facilitation of
          clothing brands' expansion in local & international markets.
          Specialised in Garments accessories' manufacturing for Australian
          brands.
        </SectionParagraph>
        <SectionParagraph>
          Represented the Central Government; Introduced the first ever reality
          TV based The Future Leaders Programme The F; Master franchise
          acquisition of Burger King.
        </SectionParagraph>
      </Section>

      <Section
        title="Director of SPACE CS LLC & Partner of INGA STAR LLC"
        flagSrc="/flags/pl.png"
      >
        <SectionParagraph>
          Distribution, Assembly of Automotive batteries and continue expansion
          of market shares in GCC & MENA countries.
        </SectionParagraph>
        <SectionParagraph>
          Spearheading trade in Central Africa and Central Asian countries.
          Enterprise support continues through SPACE CS for local entrepreneurs
          to link up globally.
        </SectionParagraph>
      </Section>
    </div>
  );
};

export default ProfileContent;
