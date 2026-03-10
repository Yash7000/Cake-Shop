import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimations } from '../hooks/useScrollAnimations.js'
import './About.css'

const team = [
  { name: "Chef Marie-Claire Dubois", role: "Founder & Head Pastry Chef", bio: "Trained at Le Cordon Bleu Paris and Ladurée, Marie-Claire brings 20 years of patisserie mastery to every creation.", img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80" },
  { name: "Chef Antoine Bernard", role: "Executive Chocolatier", bio: "A specialist in Belgian and Swiss chocolate craft, Antoine earned his stripes at Pierre Hermé before joining our team.", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" },
  { name: "Chef Sofia Reyes", role: "Cake Designer", bio: "With an eye for beauty and innovation, Sofia creates the breathtaking visual artistry that makes our cakes truly unforgettable.", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80" },
]

const timeline = [
  { year: "2008", title: "The Beginning", desc: "Marie-Claire opens La Belle Pâtisserie in a tiny NYC storefront with 12 recipes and a dream." },
  { year: "2011", title: "First Award", desc: "Named 'Best Patisserie in Manhattan' by New York Food Magazine for three consecutive years." },
  { year: "2015", title: "Expansion", desc: "Growing demand leads to our current flagship location — a full kitchen, café and tasting room." },
  { year: "2019", title: "Custom Studio", desc: "Launch of our dedicated custom cake studio, serving weddings and special events across the tri-state area." },
  { year: "2023", title: "Excellence Award", desc: "Won the prestigious NYC Food Awards 'Best Patisserie' for our signature Opera Cake collection." },
]

const values = [
  { icon: "🌿", title: "Natural Purity", desc: "No artificial flavors, preservatives or shortcuts. Ever. Our ingredients come from farmers we trust and cherish." },
  { icon: "🎨", title: "Artistic Excellence", desc: "Every cake is treated as a canvas. Our decorators are trained in sugar artistry, painting and sculpture." },
  { icon: "🤝", title: "Community First", desc: "We source locally, employ locally, and give back locally. NYC feeds our inspiration; we feed NYC." },
  { icon: "♻️", title: "Sustainability", desc: "Compostable packaging, zero food waste policy, and carbon-offset delivery. Beautiful cakes, gentle footprint." },
  { icon: "💛", title: "Joy & Warmth", desc: "Every customer who walks in is family. We celebrate your milestones as if they were our own." },
  { icon: "🔬", title: "Constant Innovation", desc: "We honor tradition but embrace discovery. New techniques, unexpected flavor pairings, and seasonal surprises await." },
]

export default function About() {
  useScrollAnimations()

  return (
    <main className="about-page page-enter">
      <div className="noise-overlay" />

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="section-tag animate-fade-up" style={{ color: 'var(--gold-light)', animationDelay:'0.1s' }}>Our Story</span>
          <h1 className="animate-fade-up" style={{ animationDelay:'0.25s' }}>Born from<br/><em>Passion &amp; Flour</em></h1>
          <div style={{ maxWidth:'380px', margin:'0 auto' }}>
            <div className="ornament-divider"><span style={{ color:'var(--gold)' }}>✦</span></div>
          </div>
          <p className="animate-fade-up" style={{ animationDelay:'0.4s' }}>A Parisian dream realized in the heart of New York City.</p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-tag" data-anim="fadeDown">How It Began</span>
              <h2 data-anim="blur" data-delay="80">A Love Letter to<br/>French Patisserie</h2>
              <div className="ornament-divider" data-anim="clip" data-delay="150"><span>✦</span></div>
              <p data-anim="fadeUp" data-delay="200">In 2008, Chef Marie-Claire Dubois left her position at a Parisian three-star restaurant to pursue a singular dream: bringing the authentic flavors of French patisserie to New York City. Armed with her Le Cordon Bleu diploma, her grandmother's recipe book, and an unshakeable belief that every occasion deserves extraordinary cake, she opened La Belle Pâtisserie.</p>
              <p data-anim="fadeUp" data-delay="280" style={{ marginTop:'1rem' }}>What started as a twelve-item menu baked in a 200 square foot kitchen has grown into a celebrated institution with over 200 unique creations, serving thousands of New Yorkers who believe, as we do, that a truly exceptional cake changes everything.</p>
              <blockquote className="story-quote" data-anim="slideRight" data-delay="360">
                "A cake is not just a dessert. It is the taste of a moment, the flavour of a memory, the sweetness of a shared life."
                <cite>— Chef Marie-Claire Dubois</cite>
              </blockquote>
            </div>
            <div className="story-images" data-anim="slideLeft" data-delay="100">
              <div className="story-img-stack">
                <div className="story-img-1 shine-card hover-lift">
                  <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80" alt="Baking" />
                </div>
                <div className="story-img-2">
                  <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80" alt="Decorating" />
                </div>
                <div className="story-flourish animate-float">
                  <span>2008</span><strong>Est.</strong><small>Paris Quarter, NYC</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="section-tag" data-anim="fadeDown">What We Stand For</span>
            <h2 data-anim="blur" data-delay="80">Our Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card shine-card hover-lift" data-anim="scaleUp" data-delay={i * 90}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section section">
        <div className="container">
          <div className="timeline-header">
            <span className="section-tag" data-anim="fadeDown">Our Journey</span>
            <h2 data-anim="blur" data-delay="80">Milestones That Shaped Us</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                data-anim={i % 2 === 0 ? 'slideLeft' : 'slideRight'} data-delay={i * 100}>
                <div className="timeline-content hover-lift">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-dot">✦</div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section section">
        <div className="container">
          <div className="team-header">
            <span className="section-tag" data-anim="fadeDown">The Artisans</span>
            <h2 data-anim="blur" data-delay="80">Meet Our Master Pastry Team</h2>
            <p data-anim="fadeUp" data-delay="160">Each member brings decades of passion and expertise to our kitchen.</p>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card shine-card hover-lift" data-anim="flipX" data-delay={i * 130}>
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                  <div className="team-overlay"><div className="team-overlay-ornament">✦</div></div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT ── */}
      <section className="visit-section">
        <div className="container">
          <div className="visit-grid">
            <div className="visit-info">
              <span className="section-tag" data-anim="fadeDown">Come Say Hello</span>
              <h2 data-anim="blur" data-delay="80">Find Us in the<br/>Heart of the City</h2>
              <div className="ornament-divider" data-anim="clip" data-delay="150"><span>✦</span></div>
              <div className="visit-details">
                {[
                  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address", text: "24 Rue de la Paix, Paris Quarter\nNew York, NY 10001" },
                  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: "Hours", text: "Mon–Fri: 8am–8pm\nSat: 8am–9pm\nSun: 9am–5pm" },
                  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 7.62 19.79 19.79 0 01.12 4 2 2 0 012.1 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.26 9.91a16 16 0 006.1 6.1l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>, label: "Phone & Email", text: "+1 (212) 555-0182\nhello@labellepatisserie.com" },
                  { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h6l2 5v3h-8V8z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>, label: "Delivery", text: "Same-day delivery available\nwithin 15 miles of Manhattan" },
                ].map((d, i) => (
                  <div className="visit-detail" key={i} data-anim="slideLeft" data-delay={i * 80}>
                    <div className="visit-icon">{d.svg}</div>
                    <div>
                      <strong>{d.label}</strong>
                      <span style={{ whiteSpace: 'pre-line' }}>{d.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div data-anim="scaleUp" data-delay="400">
                <Link to="/menu" className="btn btn-primary" style={{ marginTop:'1.5rem' }}>Browse Our Menu →</Link>
              </div>
            </div>
            <div className="visit-map" data-anim="slideRight" data-delay="150">
              <div className="map-placeholder">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80" alt="Map area" />
                <div className="map-overlay">
                  <div className="map-pin animate-float">
                    <span>📍</span>
                    <strong>La Belle Pâtisserie</strong>
                    <small>24 Rue de la Paix, NYC</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
