import { BookOpen, CalendarDays, Users, Terminal } from 'lucide-react'

const INFO = [
  {
    icon: BookOpen,
    label: 'Código',
    value: 'SIF115-2016',
  },
  {
    icon: CalendarDays,
    label: 'Ciclo',
    value: '2016 — Actual',
  },
  {
    icon: Users,
    label: 'Área',
    value: 'Redes · Comunicaciones · Seguridad',
  },
  {
    icon: Terminal,
    label: 'Stack',
    value: 'Next.js 16 · Tailwind v4 · TypeScript',
  },
]

export default function CourseInfo() {
  return (
    <section className="border-t border-[var(--border)] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)]">
                <Icon className="h-4 w-4 text-[var(--cyber)]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[var(--foreground)]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
