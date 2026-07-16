'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const UNIDADES = [
  {
    label: 'Unidad I',
    title: 'Fundamentos de Seguridad',
    href: '/unidad/1',
    topics: ['CIA Triad', 'Amenazas y Vulnerabilidades', 'Políticas de Seguridad'],
  },
  {
    label: 'Unidad II',
    title: 'Criptografía',
    href: '/unidad/2',
    topics: ['Cifrado Simétrico (AES, DES)', 'Cifrado Asimétrico (RSA)', 'Funciones Hash'],
  },
  {
    label: 'Unidad III',
    title: 'Redes y Comunicaciones',
    href: '/unidad/3',
    topics: ['Modelo OSI/TCP-IP', 'Direccionamiento IP', 'Topologías de Red'],
  },
  {
    label: 'Unidad IV',
    title: 'Seguridad en Redes',
    href: '/unidad/4',
    topics: ['Firewalls & IDS/IPS', 'VPN & Tunneling', 'Segmentación y DMZ'],
  },
  {
    label: 'Unidad V',
    title: 'Protocolos Seguros',
    href: '/unidad/5',
    topics: ['TLS/SSL', 'SSH & HTTPS', 'PKI y Certificados'],
  },
  {
    label: 'Unidad VI',
    title: 'Auditoría y Respuesta',
    href: '/unidad/6',
    topics: ['Análisis de Tráfico', 'Gestión de Incidentes', 'Forensia Digital'],
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface-1)]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Navegación principal"
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--cyber)] transition-opacity hover:opacity-80"
          aria-label="Ir al inicio — SIF115"
        >
          <Shield className="h-5 w-5" strokeWidth={1.5} />
          <span className="font-mono text-sm font-semibold tracking-wider">
            SIF<span className="text-[var(--foreground)]/50">115</span>
          </span>
          <span className="hidden text-xs text-[var(--muted-foreground)] sm:block">
            Seguridad Informática
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              'rounded-md px-3 py-1.5 text-sm transition-colors',
              pathname === '/'
                ? 'bg-[var(--surface-3)] text-[var(--cyber)]'
                : 'text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
            )}
          >
            Inicio
          </Link>

          {/* Unidades dropdown */}
          <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen((v) => !v)}
              className={cn(
                'flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors',
                pathname.startsWith('/unidad')
                  ? 'bg-[var(--surface-3)] text-[var(--cyber)]'
                  : 'text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
            >
              Unidades
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', dropdownOpen && 'rotate-180')}
              />
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-1 grid w-[680px] grid-cols-3 gap-px rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-1.5 shadow-2xl"
              >
                {UNIDADES.map((u) => (
                  <Link
                    key={u.href}
                    href={u.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className={cn(
                      'group rounded-lg p-3 transition-colors hover:bg-[var(--surface-3)]',
                      pathname === u.href && 'bg-[var(--surface-3)]'
                    )}
                  >
                    <p className="font-mono text-[11px] font-medium text-[var(--cyber)]">
                      {u.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[var(--foreground)]">
                      {u.title}
                    </p>
                    <ul className="mt-1.5 space-y-0.5">
                      {u.topics.map((t) => (
                        <li key={t} className="text-[11px] text-[var(--muted-foreground)]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/laboratorios"
            className={cn(
              'rounded-md px-3 py-1.5 text-sm transition-colors',
              pathname === '/laboratorios'
                ? 'bg-[var(--surface-3)] text-[var(--cyber)]'
                : 'text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
            )}
          >
            Laboratorios
          </Link>

          <Link
            href="/recursos"
            className={cn(
              'rounded-md px-3 py-1.5 text-sm transition-colors',
              pathname === '/recursos'
                ? 'bg-[var(--surface-3)] text-[var(--cyber)]'
                : 'text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]'
            )}
          >
            Recursos
          </Link>
        </div>

        {/* Course code badge (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="font-mono text-[11px] text-[var(--terminal)]">
            {'> '}2016-A
          </span>
          <span className="inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--muted-foreground)]">
            SIF115-2016
          </span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--foreground)] md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface-1)] px-4 pb-4 pt-2 md:hidden">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-2)]"
            onClick={() => setMobileOpen(false)}
          >
            Inicio
          </Link>
          <p className="mt-3 px-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--cyber)]">
            Unidades
          </p>
          {UNIDADES.map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
              onClick={() => setMobileOpen(false)}
            >
              <span>
                <span className="font-mono text-[var(--cyber)]">{u.label}</span>
                {' — '}
                {u.title}
              </span>
            </Link>
          ))}
          <Link
            href="/laboratorios"
            className="block rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
            onClick={() => setMobileOpen(false)}
          >
            Laboratorios
          </Link>
          <Link
            href="/recursos"
            className="block rounded-md px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
            onClick={() => setMobileOpen(false)}
          >
            Recursos
          </Link>
        </div>
      )}
    </header>
  )
}
