import { BrandProvider } from "./components/BrandContext";
import JarStage from "./components/JarStage";
import EnquiryForm from "./components/EnquiryForm";

const HIGHLIGHTS = [
  "Crafted in Canada",
  "Sugar, water & lemon",
  "Tested batch to batch",
  "Your label, your margin",
  "Ships across Canada & the USA",
];

const PASTES = [
  { name: "Extra Soft", note: "Warmest hands & climates", img: "/images/paste-extra-soft.webp" },
  { name: "Soft", note: "Smooth, easy spread", img: "/images/paste-soft.webp" },
  { name: "Medium", note: "The everyday workhorse", img: "/images/paste-medium.webp" },
  { name: "Firm", note: "Cool rooms, coarse hair", img: "/images/paste-firm.webp" },
  { name: "Strip", note: "For use with strips", img: "/images/paste-strip.webp" },
];

const CARE = [
  ["Skin Cleanser", "PRE"],
  ["Mineral Powder", "PRE"],
  ["Skin Toner", "POST"],
  ["Ingrown Serum", "POST"],
  ["Body Lotion", "POST"],
  ["Sugar Scrub", "HOME"],
  ["Exfoliating Gloves", "HOME"],
  ["Paste Warmer", "STUDIO"],
];

const STEPS = [
  ["i", "Conversation", "Tell us about your business, your clients and the products you want."],
  ["ii", "Design", "Share your logo and colours, or shape a label with us."],
  ["iii", "Sample", "Test the paste and hold the finished jar before production."],
  ["iv", "Launch", "Stock your studio or open your boutique. Reorders are effortless."],
];

const AUDIENCE = [
  ["Spas & salon groups", "Retail your own line and keep the margin in-house."],
  ["Sugaring educators", "Send graduates home with kits bearing your academy's name."],
  ["Regional distributors", "Build a brand for your territory, with a boutique to sell through."],
  ["Skincare brands", "Add hair removal to your range without building a lab."],
];

const FAQ = [
  ["Is it the same paste Sugar Boss uses?", "Yes. Private label products come from the same formulas and production as the Sugar Boss line."],
  ["Do my customers need to be certified?", "For professional sugar paste, yes. Care products can be sold to anyone, and your boutique enforces this with a pro login."],
  ["How long does a first order take?", "[LEAD TIME] from label approval to delivery, depending on volume."],
  ["Can I have an exclusive territory?", "[TERRITORY POLICY]. Ask us about your region."],
];

function Logo() {
  return (
    <a href="#top" className="logo">
      <span className="logo__word">SUGAR BOSS</span>
      <span className="logo__sub">PRIVATE · LABEL</span>
    </a>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{children}</p>;
}

export default function Home() {
  return (
    <BrandProvider>
      <a href="#main" className="skip">Skip to content</a>

      {/* HERO */}
      <section id="top" className="hero dark">
        <img
          className="hero__img"
          src="/images/hero-jars.webp"
          alt="Three cream jars of sugar paste with gold bands on a travertine plinth in warm afternoon light"
          width={1400}
          height={933}
        />
        <div className="hero__shade" aria-hidden="true" />
        <header className="nav wrap">
          <Logo />
          <nav aria-label="Main" className="nav__links">
            <a href="#offer">The offer</a>
            <a href="#collection">Collection</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a href="#enquire" className="btn btn--gold btn--sm">Become a partner</a>
          </nav>
        </header>

        <div id="main" className="hero__body wrap">
          <div className="hero__copy">
            <p className="hero__kicker"><span />MADE IN CANADA · YOUR NAME ON THE JAR</p>
            <h1 className="hero__title">
              Your name,<br />
              <em className="gold">poured in gold.</em>
            </h1>
            <p className="hero__lede">
              Professional sugar paste and skincare, crafted on the Prairies by Sugar Boss Professional and
              finished under your brand. Sell it in your studio, or through your own online boutique.
            </p>
            <div className="btn-row">
              <a href="#enquire" className="btn btn--cream">Request the partner kit</a>
              <a href="#offer" className="btn btn--ghost">Explore the offer</a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee" aria-label="Highlights">
        <div className="marquee__track">
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((h, i) => (
            <span key={i} aria-hidden={i >= HIGHLIGHTS.length || undefined}>
              {h}<b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="light">
        <div className="wrap manifesto">
          <div className="manifesto__copy">
            <Eyebrow dark>THE PHILOSOPHY</Eyebrow>
            <p className="manifesto__quote">
              Three honest ingredients, refined until every jar performs the same.{" "}
              <em>Now it can carry your name.</em>
            </p>
          </div>
          <figure className="ingredients-photo">
            <img
              src="/images/ingredients.webp"
              alt="A bowl of golden cane sugar, a glass of water and half a lemon on a limestone ledge"
              width={702}
              height={264}
              loading="lazy"
            />
            <figcaption>
              <span>Sugar</span>
              <span>Water</span>
              <span>Lemon</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="light light--ruled">
        <div className="wrap section">
          <div className="center narrow">
            <Eyebrow dark>THE OFFER</Eyebrow>
            <h2 className="h2">Two ways to make it <em>yours.</em></h2>
            <p className="muted-dark">Choose one, or pair them: your own product line, sold through your own boutique.</p>
          </div>
          <div className="offer-grid">
            <article className="offer offer--dark">
              <div className="offer__numeral" aria-hidden="true">I</div>
              <Eyebrow>PRIVATE LABEL</Eyebrow>
              <h3 className="offer__title">Your own line of sugar paste &amp; skincare</h3>
              <p className="offer__text">The same formulas Sugar Boss uses in its own studio, made in Canada and dressed in your brand.</p>
              <ul className="ticks">
                <li>Your logo, label design &amp; colours</li>
                <li>Choose your paste grades &amp; care products</li>
                <li>Approve a sample before the first run</li>
                <li>Minimum order: [MOQ PER SKU]</li>
              </ul>
            </article>
            <article className="offer offer--light">
              <div className="offer__numeral" aria-hidden="true">II</div>
              <Eyebrow dark>BRANDED BOUTIQUE</Eyebrow>
              <h3 className="offer__title">An online store that wears your name</h3>
              <p className="offer__text">A ready-made shop on your own domain. Your clients reorder from you; we look after the catalogue and fulfilment.</p>
              <ul className="ticks">
                <li>Your domain, logo &amp; colours</li>
                <li>Pro paste gated to certified Sugarists</li>
                <li>Orders packed &amp; shipped for you [CONFIRM]</li>
                <li>Monthly fee: [STOREFRONT PRICE]</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* LIVE LABEL DEMO */}
      <section id="your-label" className="dark rel">
        <div className="glow glow--hero" aria-hidden="true" />
        <div className="wrap section demo rel">
          <div className="demo__copy">
            <Eyebrow>SEE IT ON THE SHELF</Eyebrow>
            <h2 className="h2">Picture <em className="gold">your name</em> on the jar.</h2>
            <p className="muted demo__text">
              Type your studio name and choose a label finish. Your private label line is designed with you,
              proofed, and sampled before the first production run.
            </p>
          </div>
          <JarStage />
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="dark rel">
        <div className="glow glow--collection" aria-hidden="true" />
        <div className="wrap section rel">
          <div className="split-head">
            <div>
              <Eyebrow>THE COLLECTION</Eyebrow>
              <h2 className="h2">Five pastes. <em className="gold">One standard.</em></h2>
            </div>
            <p className="muted">Water-soluble, applied at body temperature and kind to sensitive skin. Professional grades are sold only to certified Sugarists.</p>
          </div>

          <div className="pastes">
            {PASTES.map((p) => (
              <div key={p.name} className="paste">
                <div className="paste__frame">
                  <img
                    src={p.img}
                    alt={`${p.name} sugar paste being lifted from its jar`}
                    width={300}
                    height={1024}
                    loading="lazy"
                  />
                </div>
                <h3 className="paste__name">{p.name}</h3>
                <p className="paste__note">{p.note}</p>
              </div>
            ))}
          </div>

          <figure className="care-photo">
            <img
              src="/images/care-lineup.webp"
              alt="The care range: cleanser, toner, serum, mineral powder, lotion, sugar scrub and exfoliating gloves"
              width={966}
              height={264}
              loading="lazy"
            />
          </figure>

          <div className="care">
            <div className="care__intro">
              <h3 className="h3">The care ritual</h3>
              <p className="muted">Pre and post products anyone can buy. The easiest retail add-on after every appointment.</p>
            </div>
            <ul className="care__menu">
              {CARE.map(([name, tag]) => (
                <li key={name}>
                  <span className="care__name">{name}</span>
                  <span className="care__dots" aria-hidden="true" />
                  <span className="care__tag">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="light">
        <div className="wrap section">
          <div className="center">
            <Eyebrow dark>THE PROCESS</Eyebrow>
            <h2 className="h2">From conversation to <em>first pour.</em></h2>
          </div>
          <ol className="steps">
            {STEPS.map(([n, title, text], i) => (
              <li key={n} className="step">
                <div className={`step__num ${i === STEPS.length - 1 ? "step__num--gold" : ""}`}>{n}</div>
                <h3 className="step__title">{title}</h3>
                <p className="step__text">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BOUTIQUE */}
      <section className="sand">
        <div className="wrap section boutique">
          <div className="boutique__copy">
            <Eyebrow dark>YOUR BOUTIQUE</Eyebrow>
            <h2 className="h2">Open for business <em>on day one.</em></h2>
            <p className="muted-dark">Clients see your name, your colours and your prices. Certified pros sign in for professional paste; everyone else shops your care ritual.</p>
          </div>
          <figure className="devices-photo">
            <img
              src="/images/boutique-devices.webp"
              alt="A branded online shop shown on a laptop and phone beside a jar of Medium sugar paste"
              width={870}
              height={294}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="dark">
        <div className="wrap section">
          <Eyebrow>MADE FOR</Eyebrow>
          <h2 className="h2 h2--narrow">Businesses that already <em className="gold">believe in sugaring.</em></h2>
          <div className="audience">
            {AUDIENCE.map(([t, d], i) => (
              <div key={t} className="audience__item">
                <div className="audience__num">0{i + 1}</div>
                <h3 className="audience__title">{t}</h3>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="edu">
            <div>
              <Eyebrow>BACKED BY EDUCATION</Eyebrow>
              <h3 className="edu__title">Certify your team with Sugar Boss training.</h3>
              <p className="muted">The people using your paste learn the technique behind it.</p>
            </div>
            <a href="https://sugarboss.ca/educators/" className="btn btn--gold">View training dates</a>
          </div>
        </div>
      </section>

      {/* PRAIRIE */}
      <section className="prairie-band center">
        <img
          className="prairie-band__img"
          src="/images/prairie.webp"
          alt=""
          width={798}
          height={294}
          loading="lazy"
        />
        <div className="prairie-band__shade" aria-hidden="true" />
        <div className="wrap prairie rel">
          <p className="prairie__quote">Sugaring &amp; skincare, straight from the heart of the Prairies.</p>
          <Eyebrow>SUGAR BOSS PROFESSIONAL · REGINA, SASKATCHEWAN</Eyebrow>
        </div>
      </section>

      {/* PRICING */}
      <section className="light light--ruled">
        <div className="wrap section">
          <div className="center">
            <Eyebrow dark>INVESTMENT</Eyebrow>
            <h2 className="h2">Clear, volume-based pricing.</h2>
          </div>
          <div className="pricing">
            <div className="price">
              <Eyebrow dark>LABEL SETUP</Eyebrow>
              <div className="price__amt">[SETUP FEE]</div>
              <p className="muted-dark">One-time. Label design, proofing and sample jars.</p>
            </div>
            <div className="price price--feature">
              <Eyebrow>PRODUCT RUNS</Eyebrow>
              <div className="price__amt">From [MOQ] units</div>
              <p className="muted">Per-unit pricing that improves as you grow.</p>
            </div>
            <div className="price">
              <Eyebrow dark>BOUTIQUE</Eyebrow>
              <div className="price__amt">[$ / MONTH]</div>
              <p className="muted-dark">Optional. Hosting, catalogue and order handling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="light">
        <div className="wrap faq">
          <div className="faq__intro">
            <h2 className="h2">Questions, <em>answered.</em></h2>
            <p className="muted-dark">
              Anything else? Write to <a href="mailto:roxan@sugarboss.ca">roxan@sugarboss.ca</a>
            </p>
          </div>
          <div className="faq__list">
            {FAQ.map(([q, a]) => (
              <details key={q} className="faq__item">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="dark rel">
        <div className="glow glow--enquire" aria-hidden="true" />
        <div className="wrap section enquiry rel">
          <div className="enquiry__copy">
            <Eyebrow>BECOME A PARTNER</Eyebrow>
            <h2 className="h2 h2--xl">Let&apos;s put <em className="gold">your name</em> on it.</h2>
            <p className="muted">Tell us about your business and we&apos;ll send the partner kit: pricing, label options and samples.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <Logo />
          <div className="footer__links">
            <a href="https://sugarboss.ca">sugarboss.ca</a>
            <a href="mailto:roxan@sugarboss.ca">roxan@sugarboss.ca</a>
            <span>Regina, SK, Canada</span>
          </div>
        </div>
      </footer>
    </BrandProvider>
  );
}
