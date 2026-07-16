import type { Metadata } from 'next'
import Hero from '@/components/home/hero'
import UnidadesGrid from '@/components/home/unidades-grid'
import LibrariesSection from '@/components/home/libraries-section'
import CourseInfo from '@/components/home/course-info'

export const metadata: Metadata = {
  title: 'Inicio — SIF115 Seguridad Informática',
  description:
    'Plataforma de la materia Seguridad Informática (SIF115-2016). Criptografía interactiva, visualización de redes y comunicación en tiempo real.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <UnidadesGrid />
      <LibrariesSection />
      <CourseInfo />

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-[var(--muted-foreground)]">
            SIF115-2016 — Seguridad Informática
          </p>
          <p className="font-mono text-[11px] text-[var(--muted-foreground)]">
            Construido con{' '}
            <span className="text-[var(--cyber)]">Next.js 16</span>
            {' · '}
            <span className="text-[var(--terminal)]">Tailwind v4</span>
          </p>
        </div>
      </footer>
    </>
  )
}
