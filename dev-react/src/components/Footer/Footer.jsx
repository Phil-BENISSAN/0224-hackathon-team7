import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <section className="footer-section">
    <img src="../../src/assets/images/logo-footer.png"/>
    <section className="footer-subsection">
    <article className="footer-article1">
    <p>Contactez-nous !</p>
    <p>01 23 45 67 89</p>
    <p>inclus-event@gmail.com</p>
    <p>Mentions légales</p>
    <p>Politique de confitiendalité</p>
    </article>
    <article className="footer-article2">
<p>Suivez-nous !</p>
<figure>
<img src="../../src/assets/images/TwitterX.png"/>
<img src="../../src/assets/images/Facebook.png"/>
<img src="../../src/assets/images/Instagram.png"/>
<img src="../../src/assets/images/Linkedin.png"/>
</figure>
    </article>
    </section>
    </section>
  )
}

export default Footer;
