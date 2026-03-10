import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimations } from '../hooks/useScrollAnimations.js'
import './Landing.css'

const testimonials = [
  { name: "Sophie Laurent", text: "The most exquisite wedding cake I've ever tasted. Our guests couldn't stop talking about it for weeks!", stars: 5, role: "Bride, 2023" },
  { name: "Marcus Chen", text: "Every birthday celebration deserves a La Belle cake. The flavors are out of this world.", stars: 5, role: "Regular Customer" },
  { name: "Isabelle Moreau", text: "Absolutely stunning custom cake for my daughter's sweet sixteen. Perfect in every way.", stars: 5, role: "Happy Parent" },
]

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "k+", label: "Cakes Created" },
  { value: 200, suffix: "+", label: "Cake Varieties" },
  { value: 98, suffix: "%", label: "Happy Customers" },
]

const features = [
  { icon: "🌿", title: "All-Natural Ingredients", desc: "We source only the finest organic ingredients from local farms and trusted French suppliers." },
  { icon: "👨‍🍳", title: "Master Artisans", desc: "Our pastry chefs trained at Le Cordon Bleu bring world-class expertise to every creation." },
  { icon: "✨", title: "Custom Designs", desc: "Every cake is a unique work of art, tailored to your vision, occasion and personal taste." },
  { icon: "🚚", title: "Fresh Delivery", desc: "Same-day delivery available. Your cake arrives in perfect condition, ready to delight." },
]

export default function Landing() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  useScrollAnimations()

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="landing">
      <div className="noise-overlay" />

      {/* ── HERO — CSS-only parallax via background-attachment:fixed ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag animate-fade-up" style={{ animationDelay: '0.1s' }}>✦ Est. 2008, Paris Quarter NYC ✦</span>
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.28s' }}>
            Where Every Cake<br/><em className="text-shimmer">Tells a Story</em>
          </h1>
          <p className="hero-sub animate-fade-up" style={{ animationDelay: '0.45s' }}>
            Handcrafted artisan cakes made with love, tradition,<br className="hide-mobile"/>
            and the finest ingredients.
          </p>
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/menu" className="btn btn-gold btn-pulse">Explore Our Menu ↗</Link>
            <Link to="/about" className="btn btn-outline hero-outline-btn">Our Story</Link>
          </div>
        </div>
        <div className="hero-particles" aria-hidden="true">
          {['✦','◆','✦','·','◆','✦','·','✦'].map((p,i) => (
            <span key={i} className="particle" style={{
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 22}%`,
              '--duration': `${5 + (i % 4)}s`,
              '--delay': `${i * 0.7}s`
            }}>{p}</span>
          ))}
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-bar">
        <div className="marquee-track">
          {['Wedding Cakes','Birthday Cakes','Custom Creations','Viennoiserie','Entremets','Macarons','Seasonal Specials','Gluten-Free Options',
            'Wedding Cakes','Birthday Cakes','Custom Creations','Viennoiserie','Entremets','Macarons','Seasonal Specials','Gluten-Free Options'
          ].map((item, i) => <span key={i} className="marquee-item">✦ {item}</span>)}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="intro section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-images" data-anim="slideLeft">
              <div className="intro-img-main shine-card hover-lift">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80" alt="Signature cake" />
              </div>
              <div className="intro-img-secondary">
                <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&q=80" alt="Baking process" />
              </div>
              <div className="intro-award animate-float">
                <span>★★★★★</span>
                <strong>Best Patisserie</strong>
                <small>NYC Food Awards 2023</small>
              </div>
            </div>
            <div className="intro-text">
              <span className="section-tag" data-anim="fadeUp">Our Philosophy</span>
              <h2 data-anim="fadeUp" data-delay="80">The Art of French<br/>Patisserie, Reimagined</h2>
              <div className="ornament-divider" data-anim="clip" data-delay="160"><span>✦</span></div>
              <p data-anim="fadeUp" data-delay="200">At La Belle Pâtisserie, we believe that a cake is more than a dessert — it's the centerpiece of your most cherished memories. Every creation is crafted with meticulous attention to detail.</p>
              <p data-anim="fadeUp" data-delay="280" style={{ marginTop: '1rem' }}>From intimate birthday gatherings to grand wedding celebrations, we bring artistry and flavor together in perfect harmony.</p>
              <div className="intro-highlights" data-anim="fadeUp" data-delay="340">
                <div className="highlight"><strong>Premium</strong><span>Belgian Chocolate</span></div>
                <div className="highlight"><strong>Organic</strong><span>Local Dairy</span></div>
                <div className="highlight"><strong>Fresh</strong><span>Seasonal Fruits</span></div>
              </div>
              <div data-anim="scaleUp" data-delay="400">
                <Link to="/about" className="btn btn-primary">Discover Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <span className="section-tag" data-anim="fadeDown">Why Choose Us</span>
            <h2 data-anim="blur" data-delay="100">Crafted With Passion,<br/>Delivered With Love</h2>
          </div>
          <div className="features-grid" data-stagger>
            {features.map((f, i) => (
              <div key={i} className="feature-card shine-card hover-lift" data-anim="scaleUp" data-delay={i * 100}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS — CSS parallax ── */}
      <section className="stats-section">
        <div className="stats-overlay" />
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item" data-anim="counter" data-delay={i * 100}>
                <strong data-counter={s.value} data-suffix={s.suffix}>0{s.suffix}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CAKES ── */}
      <section className="featured-cakes section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" data-anim="fadeDown">Signature Collection</span>
            <h2 data-anim="blur" data-delay="80">Our Most Beloved Creations</h2>
            <p data-anim="fadeUp" data-delay="160">Each cake represents the pinnacle of patisserie craft.</p>
          </div>
          <div className="featured-grid">
            {[
              { name: "Strawberry Dream", price: "from $55", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80", tag: "Bestseller" },
              { name: "Dark Chocolate Royale", price: "from $65", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80", tag: "Chef's Special" },
              { name: "Lemon Lavender", price: "from $58", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80", tag: "New" },
            ].map((cake, i) => (
              <div key={i} className="featured-cake-card shine-card hover-lift" data-anim="flipX" data-delay={i * 130}>
                <div className="featured-cake-img">
                  <img src={cake.img} alt={cake.name} />
                  <div className="cake-tag">{cake.tag}</div>
                </div>
                <div className="featured-cake-info">
                  <h3>{cake.name}</h3>
                  <span>{cake.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-anim="scaleUp" data-delay="200">
            <Link to="/menu" className="btn btn-primary">View Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="testimonials-inner">
            <span className="section-tag" data-anim="fadeDown">What Customers Say</span>
            <h2 data-anim="blur" data-delay="80">Stories of Sweet Joy</h2>
            <div className="testimonial-carousel" data-anim="scale" data-delay="160">
              <div className="testimonial-card">
                <div className="stars">{'★'.repeat(testimonials[activeTestimonial].stars)}</div>
                <blockquote>"{testimonials[activeTestimonial].text}"</blockquote>
                <div className="testimonial-author">
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
              <div className="carousel-dots">
                {testimonials.map((_, i) => (
                  <button key={i} className={`dot ${i === activeTestimonial ? 'active' : ''}`} onClick={() => setActiveTestimonial(i)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — CSS parallax ── */}
      <section className="cta-section">
        <div className="cta-overlay" />
        <div className="container">
          <div className="cta-content">
            <span className="section-tag" data-anim="fadeDown" style={{ color: 'var(--gold-light)' }}>Come Visit Us</span>
            <h2 data-anim="blur" data-delay="100">Experience the Magic<br/><em>In Person</em></h2>
            <p data-anim="fadeUp" data-delay="180">Step into our patisserie and let the aromas guide you. Our doors are open six days a week.</p>
            <div className="cta-buttons" data-anim="scaleUp" data-delay="260">
              <Link to="/menu" className="btn btn-gold">Browse Our Menu</Link>
              <a href="tel:+12125550182" className="btn btn-outline cta-outline">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="info-strip">
        <div className="container">
          <div className="info-cards" data-stagger>
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: "Our Location", text: "24 Rue de la Paix, NYC" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "Opening Hours", text: "Mon–Sat 8am–8pm, Sun 9am–5pm" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 7.62 19.79 19.79 0 01.12 4 2 2 0 012.1 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.26 9.91a16 16 0 006.1 6.1l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>, title: "Phone", text: "+1 (212) 555-0182" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h6l2 5v3h-8V8z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>, title: "Delivery", text: "Same-day delivery available" },
            ].map((item, i) => (
              <div key={i} className="info-card" data-anim="fadeUp" data-delay={i * 80}>
                <div className="info-icon">{item.icon}</div>
                <div><strong>{item.title}</strong><span>{item.text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
