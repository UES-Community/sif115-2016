import Link from 'next/link'
import { ArrowRight, Shield, Key, Network, Wifi, Lock, Search } from 'lucide-react'

const UNIDADES = [
  {
    id: 1,
    label: 'Unidad I',
    title: 'Fundamentos de Seguridad',
    description:
      'Principios CIA, amenazas, vulnerabilidades y políticas de seguridad que constituyen la base de la disciplina.',
    icon: Shield,
    topics: ['Confidencialidad · Integridad · Disponibilidad', 'Análisis de Amenazas', 'Políticas y Normativas'],
    href: '/unidad/1',
    color: 'var(--cyber)',
  },
  {
    id: 2,
    label: 'Unidad II',
    title: 'Criptografía',
    description:
      'Algoritmos de cifrado simétrico (AES, DES), asimétrico (RSA) y funciones hash para proteger la información.',
    icon: Key,
    topics: ['AES / DES — Cifrado Simétrico', 'RSA — Cifrado Asimétrico', 'SHA-256 / MD5 — Hash'],
    href: '/unidad/2',
    color: 'var(--terminal)',
  },
  {
    id: 3,
    label: 'Unidad III',
    title: 'Redes y Comunicaciones',
    description:
      'Modelo OSI, TCP/IP, direccionamiento IP y topologías de red visualizadas con herramientas interactivas.',
    icon: Network,
    topics: ['Modelo OSI / TCP-IP', 'Direccionamiento IPv4 / IPv6', 'Topologías y Enrutamiento'],
    href: '/unidad/3',
    color: 'var(--warn)',
  },
  {
    id: 4,
    label: 'Unidad IV',
    title: 'Seguridad en Redes',
    description:
      'Firewalls, IDS/IPS, VPNs y arquitecturas de segmentación de red para proteger infraestructuras.',
    icon: Wifi,
    topics: ['Firewalls & IDS/IPS', 'VPN & Tunneling', 'DMZ y Segmentación'],
    href: '/unidad/4',
    color: 'var(--cyber)',
  },
  {
    id: 5,
    label: 'Unidad V',
    title: 'Protocolos Seguros',
    description:
      'TLS/SSL, SSH, HTTPS y PKI. Infraestructura de clave pública y comunicación cifrada en la red.',
    icon: Lock,
    topics: ['TLS 1.3 / SSL', 'SSH & HTTPS', 'PKI y Certificados X.509'],
    href: '/unidad/5',
    color: 'var(--terminal)',
  },
  {
    id: 6,
    label: 'Unidad VI',
    title: 'Auditoría y Respuesta',
    description:
      'Análisis de tráfico de red, gestión de incidentes de seguridad y fundamentos de forensia digital.',
    icon: Search,
    topics: ['Análisis de Tráfico (Wireshark)', 'Gestión de Incidentes', 'Forensia Digital'],
    href: '/unidad/6',
    color: 'var(--warn)',
  },
]

export default function UnidadesGrid() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--cyber)]">
            Programa de la Materia
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Unidades del Curso
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            6 unidades temáticas que cubren desde los fundamentos hasta la respuesta a incidentes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UNIDADES.map((u) => {
            const Icon = u.icon
            return (
              <Link
                key={u.id}
                href={u.href}
                className="cyber-border group flex flex-col rounded-xl bg-[var(--surface-1)] p-5 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: `color-mix(in srgb, ${u.color} 12%, transparent)` }}
                  >
                    <Icon
                      className="h-4.5 w-4.5"
                      style={{ color: u.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className="font-mono text-[11px] font-semibold"
                    style={{ color: u.color }}
                  >
                    {u.label}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-3 text-base font-semibold text-[var(--foreground)]">
                  {u.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {u.description}
                </p>

                {/* Topics */}
                <ul className="mt-4 space-y-1">
                  {u.topics.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)]"
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ background: u.color }}
                        aria-hidden="true"
                      />
                      {t}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="mt-4 flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color: u.color }}
                >
                  Ver contenido
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
