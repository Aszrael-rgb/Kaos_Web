import { motion, useReducedMotion } from 'framer-motion'
import {
  Bot,
  Gamepad2,
  Mic,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TIMELINE_EVENTS } from '../../data/mockData'
import type { TimelineEvent } from '../../types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './TimelineSection.css'

const timelineIcons: Record<string, LucideIcon> = {
  Users,
  Bot,
  Mic,
  Gamepad2,
}

function TimelineCard({ event }: { event: TimelineEvent }) {
  const Icon = timelineIcons[event.iconName] ?? Sparkles

  return (
    <article className="timeline-card glass-panel">
      <div className="timeline-card-top">
        <span className="timeline-year">{event.year}</span>
        <span className="timeline-category">{event.category}</span>
      </div>

      <div className="timeline-icon" aria-hidden="true">
        <Icon size={25} strokeWidth={1.7} />
      </div>

      <div className="timeline-card-copy">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </article>
  )
}

function TimelineSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="timeline-section"
      id="historia"
      aria-labelledby="timeline-title"
    >
      <div className="timeline-container">
        <motion.header
          className="timeline-header"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="timeline-eyebrow">Desde 2025</span>
          <h2 className="timeline-title text-gradient-green" id="timeline-title">
            NUESTRA TRAYECTORIA
          </h2>
          <p>La evolución del ecosistema Kaos</p>
        </motion.header>

        <motion.div
          className="timeline-slider-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
        >
          <Swiper
            className="timeline-slider"
            modules={[Navigation, Pagination, FreeMode]}
            navigation
            pagination={{ clickable: true }}
            freeMode={{ enabled: true, sticky: true }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {TIMELINE_EVENTS.map((event) => (
              <SwiperSlide key={event.id}>
                <TimelineCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection
