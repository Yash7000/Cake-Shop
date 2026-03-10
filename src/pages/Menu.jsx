import React, { useState, useEffect } from 'react'
import { useScrollAnimations } from '../hooks/useScrollAnimations.js'
import './Menu.css'

const categories = ['All', 'Classic', 'Chocolate', 'Fruit', 'Floral', 'Special']

const cakes = [
  {
    id: 1, name: "Strawberry Chantilly", category: "Fruit",
    desc: "Layers of vanilla sponge, fresh strawberries and whipped chantilly cream. Light, fragrant, and utterly delightful.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    badge: "Bestseller",
    features: ["Fresh strawberries", "Chantilly cream", "Vanilla sponge", "Gluten-free option"],
    priceRange: "$45 – $135",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 2, name: "Dark Chocolate Royale", category: "Chocolate",
    desc: "Decadent 72% Belgian chocolate cake with a silky ganache, praline crunch and chocolate mousse layers.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    badge: "Chef's Special",
    features: ["Belgian chocolate", "Praline crunch", "Ganache glaze", "Eggless option"],
    priceRange: "$55 – $160",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 3, name: "Lemon Lavender Dream", category: "Floral",
    desc: "A provençal-inspired masterpiece of lemon curd, lavender buttercream and delicate violet-infused sponge.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&q=80",
    badge: "New",
    features: ["Lemon curd", "Lavender buttercream", "Violet sponge", "Seasonal"],
    priceRange: "$48 – $142",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 4, name: "Classic Fraisier", category: "Classic",
    desc: "The quintessential French patisserie: mousseline cream, fresh whole strawberries and pistachio sponge.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80",
    badge: null,
    features: ["Mousseline cream", "Whole strawberries", "Pistachio sponge", "Traditional recipe"],
    priceRange: "$50 – $148",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 5, name: "Opera Cake", category: "Classic",
    desc: "The Parisian classic — layers of coffee-soaked joconde, coffee buttercream and bittersweet chocolate ganache.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
    badge: "Award Winner",
    features: ["Joconde biscuit", "Coffee buttercream", "Bittersweet ganache", "Classic Parisian"],
    priceRange: "$60 – $180",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 6, name: "Raspberry Rose Entremet", category: "Floral",
    desc: "A stunning entremet with raspberry confit, rose-infused mousse, and a mirror glaze finish.",
    image: "https://images.unsplash.com/photo-1557925923-33b27f404e1f?w=600&q=80",
    badge: "Signature",
    features: ["Raspberry confit", "Rose mousse", "Mirror glaze", "Showstopper"],
    priceRange: "$65 – $195",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 7, name: "Mango Passionfruit", category: "Fruit",
    desc: "Tropical paradise: Alphonso mango mousse, passion fruit curd, and a coconut dacquoise base.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    badge: "Summer Special",
    features: ["Alphonso mango", "Passion fruit curd", "Coconut dacquoise", "Tropical flavors"],
    priceRange: "$52 – $155",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 8, name: "Salted Caramel Tart", category: "Special",
    desc: "Buttery pastry shell, Breton salted caramel, dark chocolate ganache and fleur de sel. Pure indulgence.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    badge: "Fan Favorite",
    features: ["Breton caramel", "Dark ganache", "Fleur de sel", "Buttery pastry"],
    priceRange: "$42 – $125",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
  {
    id: 9, name: "Matcha White Chocolate", category: "Special",
    desc: "Ceremonial grade matcha sponge, white chocolate cremeux, and a toasted sesame praline crunch.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    badge: "New",
    features: ["Ceremonial matcha", "White chocolate", "Sesame praline", "Japanese-French fusion"],
    priceRange: "$58 – $168",
    sizes: ["0.5 kg", "1 kg", "1.5 kg", "2 kg"],
  },
]

function CakeCard({ cake }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`cake-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="cake-card-inner">
        <div className="cake-card-front">
          <div className="cake-card-img">
            <img src={cake.image} alt={cake.name} loading="lazy" />
            {cake.badge && <div className="cake-badge">{cake.badge}</div>}
          </div>
          <div className="cake-card-body">
            <p className="cake-category-tag">{cake.category}</p>
            <h3>{cake.name}</h3>
            <p className="cake-desc">{cake.desc}</p>
            <div className="cake-price-row">
              <span className="price-label">Starting from</span>
              <strong>{cake.priceRange.split('–')[0].trim()}</strong>
            </div>
            <div className="hover-hint">Hover to see details</div>
          </div>
        </div>

        <div className="cake-card-back">
          <div className="cake-back-content">
            <h3>{cake.name}</h3>
            <div className="ornament-divider" style={{ margin: '0.6rem 0' }}><span>✦</span></div>

            <div className="back-section">
              <p className="back-label">What's inside</p>
              <div className="cake-features-list">
                {cake.features.map((f, i) => (
                  <span key={i} className="feature-tag">✓ {f}</span>
                ))}
              </div>
            </div>

            <div className="back-section">
              <p className="back-label">Available sizes</p>
              <div className="sizes-row">
                {cake.sizes.map((s, i) => (
                  <span key={i} className="size-pill">{s}</span>
                ))}
              </div>
            </div>

            <div className="back-section">
              <p className="back-label">Price range</p>
              <strong className="price-range-value">{cake.priceRange}</strong>
            </div>

            <a href="tel:+12125550182" className="inquire-btn">
              📞 Call to Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visible, setVisible] = useState(false)
  useScrollAnimations()

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const filtered = cakes
    .filter(c => activeCategory === 'All' || c.category === activeCategory)
    .filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <main className="menu-page page-enter">
      <div className="noise-overlay" />

      <section className="menu-hero">
        <div className="menu-hero-bg">
          <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1400&q=80" alt="Menu hero" />
          <div className="menu-hero-overlay" />
        </div>
        <div className="menu-hero-content">
          <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Our Collection</span>
          <h1>The Menu</h1>
          <div className="ornament-divider" style={{ justifyContent: 'center', maxWidth: '300px', margin: '1rem auto' }}>
            <span style={{ color: 'var(--gold)' }}>✦</span>
          </div>
          <p>Discover our handcrafted collection of artisan cakes, each available in a range of sizes. Hover any card to learn more.</p>
        </div>
      </section>

      <section className="menu-controls">
        <div className="container">
          <div className="controls-inner">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search cakes..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="results-count">
            Showing <strong>{filtered.length}</strong> cakes {activeCategory !== 'All' && `in ${activeCategory}`}
          </div>
        </div>
      </section>

      <section className="menu-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <span>🎂</span>
              <h3>No cakes found</h3>
              <p>Try a different search or category</p>
              <button className="btn btn-outline" onClick={() => { setSearchQuery(''); setActiveCategory('All') }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={`cake-grid ${visible ? 'visible' : ''}`}>
              {filtered.map((cake, i) => (
                <div key={cake.id} style={{ animationDelay: `${i * 0.07}s` }}>
                  <CakeCard cake={cake} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="custom-order-banner">
        <div className="container">
          <div className="custom-banner-inner">
            <div className="custom-banner-text">
              <span className="section-tag">Custom Creations</span>
              <h2>Looking for Something Special?</h2>
              <p>We create fully bespoke cakes for any occasion — wedding tiers, novelty shapes, themed designs, and dietary accommodations. Just give us a call and we'll discuss your vision.</p>
              <div className="custom-perks">
                <span>✦ Wedding & Tiered Cakes</span>
                <span>✦ Dietary Accommodations</span>
                <span>✦ Custom Flavors</span>
                <span>✦ Themed Designs</span>
              </div>
            </div>
            <div className="custom-banner-cta">
              <a href="tel:+12125550182" className="btn btn-gold">+1 (212) 555-0182</a>
              <a href="mailto:hello@labellepatisserie.com" className="btn btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
