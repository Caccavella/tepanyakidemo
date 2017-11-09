import React, { Component } from 'react';
import '../sushi-menu/sushi-menu.css';

class Contact extends Component {
    render() {
        return (
            <div className="contactwrapper">
                <div className="contacttitle">Contact Us</div>
                <div className="section">
                <div className="sectiontitle">Lehi</div>
                <a href="https://www.google.com/maps/place/72+N+850+E,+Lehi,+UT+84043/@40.3889226,-111.837242,17z/data=!3m1!4b1!4m5!3m4!1s0x874d81c9b175bc37:0x35410e7892b41df3!8m2!3d40.3889185!4d-111.8350533" target="blank">
                <div className="line">72 North 850 E</div>
                <div className="line">Lehi, UT 84043-9576</div>
                </a>
                <div className="line">Click to Call: <a href="tel:+1-801-653-2988">(801) 653-2988</a></div>
                </div>
                <div className="section">
                <div className="sectiontitle">West Jordan</div>
                <a href="https://www.google.com/maps/place/7233+Plaza+Center+Dr,+West+Jordan,+UT+84084/@40.6197699,-111.9810787,17z/data=!3m1!4b1!4m5!3m4!1s0x87528e952bcc999d:0x67cdf26fcee45aae!8m2!3d40.6197658!4d-111.97889" target="blank">
                <div className="line">7233 South Plaza Center Drive</div>
                <div className="line">West Jordan, UT 84084-1760</div>
                </a>
                <div className="line">Click to Call: <a href="tel:+1-801-282-9700">(801) 282-9700</a></div>
                </div>
                <div className="section">
                <div className="sectiontitle">Clearfield</div>
                <a href="https://www.google.com/maps/place/1386+Legend+Hills+Dr,+Clearfield,+UT+84015/@41.0948787,-111.9965538,17z/data=!3m1!4b1!4m5!3m4!1s0x8753038136087cd1:0x40e86dbd111d1c9a!8m2!3d41.0948747!4d-111.9943651" target="blank">
                <div className="line">1386 Legend Hills Drive</div>
                <div className="line">Clearfield, UT 84015-1585</div>
                </a>
                <div className="line">Click to Call: <a href="tel:+1-801-653-8813">(801) 775-8813</a></div>
                </div>
                <div className="section">
                    <h5>Did you know...</h5>
                    <h2>SUSHI</h2>
                    <h5>Sushi is 1300 years old and refers to the finished edible product resulting from an early method.
                            In the 1820’s Hanaya Yohei of Edo (Tokyo) brought a recipe most similar to what we are served today.
                            Nigiri means pieces of fish, shellfish, or fish roe over vinegared rice balls. Maki means vinegared rice
                            with insertions, rolled up in Japanese seaweed. Sashimi means raw fish served chilled, sliced, and arranged without rice.
                            </h5>
                </div>
                <div className="section">
                    <h2>WASABI</h2>
                    <h5>Over the centuries, the Japanese have believed that eating grated fresh wasabi with raw fish and other
                            foods helped prevent illness. Scientific evidence today confirms they are correct;
                            Scientists have discovered the isothiocyanates in wasabi are antimicrobial.
                            Wasabi not only kills many bacteria’s associated with fish but also kills some forms of E-coli an Staphylococcus.
                            GARI Means "vinegared ginger." Ginger’s anti toxic properties have an anti viral, anti fungal, anti histamine and
                            anti-bacterial effect which is basically what we are swallowing with anti-biotics, cold and flu tablets, cough mixtures
                            and aspirin.
                        </h5>
                </div>
                <div className="section">
                    <h2>TEA</h2>
                    <h5>Tea, green tea in particular, has been found to possess properties that help lower cholesterol and prevent
                            heart disease, certain cancers, and dental cavities; protect skin from UV damage; fight bacteria and viruses;
                            and may aid weight loss.
                        </h5>
                </div>
                <div className="section">
                    <h6>* Thoroughly cooking food of animal origin such as beef egg, fish, lamb, milk, pork, poultry, or shellfish reduces
                            the risk of foodborne illness. Consult your physician or the health department for further information. *
                        </h6>
                </div>
            </div>
        )
    }
}

export default Contact;