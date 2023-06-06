import { cardNew } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Vision <br className="sm:block hidden" /> 

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our vision is to become one of the most trusted top healthcare company in India
       providing the best quality assurance products  ensuring  better health for everyone, everywhere.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
      <img src={cardNew} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;