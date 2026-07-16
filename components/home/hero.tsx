import Link from 'next/link'
import { ArrowRight, Lock, Cpu, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--cyber) 1px, transparent 1px), linear-gradient(90deg, var(--cyber) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, var(--cyber) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Course badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
          <span className="font-mono text-[11px] text-[var(--terminal)]">SIF115-2016</span>
          <span className="h-3.5 w-px bg-[var(--border)]" aria-hidden="true" />
          <span className="font-mono text-[11px] text-[var(--muted-foreground)]">
            Ciclo Académico 2016
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Seguridad{' '}
          <span className="text-glow font-mono text-[var(--cyber)]">Informática</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          Explora los fundamentos de la ciberseguridad: criptografía, arquitecturas de red,
          protocolos seguros y gestión de incidentes, a través de simulaciones interactivas
          y laboratorios prácticos.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/unidad/1"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--cyber)] px-5 py-2.5 text-sm font-semibold text-[#080c10] transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Comenzar Unidad I
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/laboratorios"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--cyber)]/40 hover:bg-[var(--surface-3)]"
          >
            Ver Laboratorios
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-[var(--border)] pt-8">
          {[
            { icon: Lock, value: '6', label: 'Unidades' },
            { icon: Cpu, value: '3', label: 'Librerías' },
            { icon: Globe, value: 'TCP/IP', label: 'Base de Redes' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 text-[var(--cyber)]" strokeWidth={1.5} />
              <div className="text-left">
                <p className="font-mono text-sm font-bold text-[var(--foreground)]">{value}</p>
                <p className="text-[11px] text-[var(--muted-foreground)]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
