import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSortedPosts } from '../data/blogPosts';

export default function BlogPage({ onOpenPassModal }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const sortedPosts = getSortedPosts();

  const categories = ['ALL', ...Array.from(new Set(sortedPosts.map(p => p.category)))];

  const filteredPosts = selectedCategory === 'ALL'
    ? sortedPosts
    : sortedPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="blog-page-root">
      {/* Background with weights image, soft diffusion and subtle desaturation */}
      <div className="blog-bg-wrapper" aria-hidden="true">
        <img
          src="/assets/zona_olimpica.jpg"
          alt="Master Gym Zona Olímpica Background"
          className="blog-bg-image"
        />
        <div className="blog-bg-overlay"></div>
      </div>

      <div className="container blog-content-container">
        
        {/* Breadcrumb & Navigation */}
        <div className="blog-nav-breadcrumb">
          <Link to="/" className="blog-back-link">
            <span className="blog-back-arrow">←</span> Volver a Inicio
          </Link>
          <span className="blog-breadcrumb-sep">/</span>
          <span className="text-neon" style={{ fontWeight: 600, fontSize: '0.85rem' }}>Blog & Artículos</span>
        </div>

        {/* Blog Header Hero */}
        <header className="blog-header-hero">
          <div className="live-badge" style={{ marginBottom: '1rem' }}>
            <span className="live-dot"></span>
            <span>BITÁCORA TÉCNICA & COMUNIDAD</span>
          </div>

          <h1 className="blog-title font-display">
            MASTER GYM <span className="text-neon">BLOG</span>
          </h1>
          <p className="blog-subtitle">
            Ciencia del entrenamiento, biomecánica aplicada, nutrición realista y consejos prácticos para optimizar tus sesiones en Manta.
          </p>

          {/* Category Filters and Sorting indicator */}
          <div className="blog-filters-bar">
            <div className="blog-categories-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat === 'ALL' ? 'Todos los Artículos' : cat}
                </button>
              ))}
            </div>

            <div className="blog-sort-indicator">
              <span className="font-mono text-muted" style={{ fontSize: '11px' }}>
                ORDEN: <strong className="text-white">FECHA (MÁS RECIENTES)</strong> • {filteredPosts.length} POSTS
              </span>
            </div>
          </div>
        </header>

        {/* Stack of Post Cards */}
        <section className="blog-posts-stack" aria-label="Lista de artículos del blog">
          {filteredPosts.map((post, idx) => (
            <article key={post.id} className="blog-card glass-card">
              {/* Card visual index number */}
              <div className="blog-card-index font-mono">
                #{String(idx + 1).padStart(2, '0')}
              </div>

              <div className="blog-card-inner">
                {/* Thumbnail Image */}
                <div className="blog-card-thumb-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-thumb"
                    loading="lazy"
                  />
                  <span className="blog-card-badge-category">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-date font-mono">
                      {post.formattedDate}
                    </span>
                    <span className="blog-meta-dot">•</span>
                    <span className="blog-card-readtime font-mono">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="blog-card-title font-display">
                    {post.title}
                  </h2>

                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer: Author & Coming soon status */}
                  <div className="blog-card-footer">
                    <div className="blog-author-info">
                      <div className="blog-author-avatar">
                        <span className="font-display">MG</span>
                      </div>
                      <div>
                        <div className="blog-author-name">{post.author.name}</div>
                        <div className="blog-author-role">{post.author.role}</div>
                      </div>
                    </div>

                    <div className="blog-card-action">
                      <span className="blog-coming-soon-pill">
                        Próximamente
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Box at Bottom */}
        <div className="blog-cta-banner glass-card stripes-pattern">
          <div className="blog-cta-content">
            <span className="font-mono text-neon" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>
              ¿LISTO PARA ENTRENAR EN SERIO?
            </span>
            <h3 className="font-display text-white" style={{ fontSize: '2.2rem', marginTop: '0.5rem', lineHeight: '1.1' }}>
              VEN A CONOCER NUESTRAS SEDES EN MANTA
            </h3>
            <p className="text-muted" style={{ fontSize: '13px', marginTop: '0.5rem', maxWidth: '540px' }}>
              Equipamiento biomecánico, zona de peso libre completa y ambiente enfocado en resultados. Pide tu pase gratis de 1 día hoy mismo.
            </p>
          </div>
          <div className="blog-cta-actions">
            <button onClick={onOpenPassModal} className="btn-neon neon-glow" type="button">
              Obtener Pase Gratis 1 Día →
            </button>
            <Link to="/" className="btn-outline" style={{ fontSize: '1rem', padding: '0.65rem 1.25rem' }}>
              Ver Instalaciones
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
