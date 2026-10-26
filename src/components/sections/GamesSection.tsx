import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Car,
  ExternalLink,
  Filter,
  Flame,
  Gamepad2,
  Music,
  Search,
  Sparkles,
  Trophy,
  X,
  type LucideIcon,
} from 'lucide-react'
import { GAMES_LIST } from '../../data/mockData'
import type { GameItem } from '../../types'
import './GamesSection.css'

const categories = [
  'Todos',
  'Classics',
  'Action',
  'Racing',
  'Indie',
  'Strategy',
  'Rhythm',
] as const

type CategoryFilter = (typeof categories)[number]

const categoryIcons: Record<GameItem['category'], LucideIcon> = {
  Classics: Trophy,
  Action: Flame,
  Racing: Car,
  Indie: Sparkles,
  Strategy: Filter,
  Rhythm: Music,
}

function GamesSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('Todos')
  const reduceMotion = useReducedMotion()
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()

  const filteredGames = GAMES_LIST.filter((game) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      game.title.toLocaleLowerCase().includes(normalizedSearch) ||
      game.category.toLocaleLowerCase().includes(normalizedSearch)
    const matchesCategory =
      selectedCategory === 'Todos' || game.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('Todos')
  }

  return (
    <section className="games-section" id="juegos" aria-labelledby="games-title">
      <div className="games-container">
        <motion.header
          className="games-header"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="games-eyebrow">
            <Gamepad2 size={15} aria-hidden="true" />
            Arcade &amp; Cloud Web
          </span>
          <h2 className="games-title text-gradient-green" id="games-title">
            CATÁLOGO DE JUEGOS
          </h2>
          <p>Encuentra tu próximo juego y entra a jugar al instante.</p>
        </motion.header>

        <div className="games-toolbar">
          <label className="games-search glass-panel">
            <Search size={19} aria-hidden="true" />
            <span className="visually-hidden">Buscar juegos</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por título o categoría..."
            />
            {searchTerm && (
              <button
                type="button"
                className="games-search-clear"
                aria-label="Limpiar búsqueda"
                onClick={() => setSearchTerm('')}
              >
                <X size={17} aria-hidden="true" />
              </button>
            )}
          </label>

          <div className="games-filters" role="group" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                className={`games-filter${selectedCategory === category ? ' is-active' : ''}`}
                type="button"
                key={category}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="games-results-meta" aria-live="polite">
          <span>{filteredGames.length} juegos</span>
          {(searchTerm || selectedCategory !== 'Todos') && (
            <button className="games-reset-link" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          )}
        </div>

        <motion.div
          className="games-grid"
          layout
          transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, index) => {
              const CategoryIcon = categoryIcons[game.category]

              return (
                <motion.article
                  className="game-card glass-panel"
                  key={game.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.22, delay: Math.min(index * 0.025, 0.2) }
                  }
                >
                  <div className="game-card-top">
                    <span className="game-category">
                      <CategoryIcon size={14} aria-hidden="true" />
                      {game.category}
                    </span>
                    {game.isAlternative && (
                      <span className="game-alternative">Alternativa</span>
                    )}
                  </div>

                  <div className="game-card-content">
                    <div className="game-icon" aria-hidden="true">
                      <Gamepad2 size={23} strokeWidth={1.7} />
                    </div>
                    <h3>{game.title}</h3>
                    {game.description && <p>{game.description}</p>}
                  </div>

                  <a
                    className="game-play-button"
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Jugar ${game.title} (${game.category})`}
                  >
                    JUGAR AHORA
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredGames.length === 0 && (
          <div className="games-empty glass-panel">
            <Sparkles size={28} aria-hidden="true" />
            <h3>No se encontraron juegos</h3>
            <p>Prueba otra búsqueda o elimina los filtros seleccionados.</p>
            <button className="games-empty-button" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default GamesSection
