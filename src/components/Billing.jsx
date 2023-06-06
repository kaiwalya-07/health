import {   cieumct,
  Cogwell,
  Cqml,
  Evaroz,
  Nocrd,
  rigflex,
  SiebenGold,
  siebfor,
  Simonlc,
  Tbroc,
  zious} from "../assets";
import styles, { layout } from "../style";
import Carousel from "./Carousel";

const slides=[
  cieumct,
  Cogwell,
  Cqml,
  Evaroz,
  Nocrd,
  rigflex,
  SiebenGold,
  siebfor,
  Simonlc,
  Tbroc,
  zious
]

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Carousel autoSlide={true}>
        {slides.map((s)=>(
        <img src={s}/>
        ))}
      </Carousel>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our products meet <br className="sm:block hidden" /> all industry standards.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <li>
        Tab CQML
        </li>	

        <li>
        Tab Siebofer
        </li>	

        <li>
        Tab Tborac
        </li>	

        <li>
        Tab Simon –Lc
        </li>	

        <li>
        Tab Cogwell
        </li>	

        <li>
        Cap Evaroz 
        </li>	

        <li>
        Cap Cieum-CT
        </li>	

        <li>
        Cap NocRd
        </li>	

        <li>
        Cap Rigflex
        </li>	

        <li>
        Cap Sieben Gold
        </li>	


        <li>
        Tab Zious
        </li>	
    
      </p>


    </div>
  </section>
);

export default Billing;