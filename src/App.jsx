import React from "react";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <span className="text-white">Navbar</span>
      </div>
    </div>
    {/* Banner */}
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <span className="text-white">Banner</span>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <span className="text-white">
          States Business Billing CardDeal Testimonial Clients CTA Footer
        </span>
      </div>
    </div>
  </div>
);

export default App;
