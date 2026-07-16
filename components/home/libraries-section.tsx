const LIBS = [
  {
    name: 'crypto-js',
    version: '4.2.0',
    description:
      'Implementa y visualiza algoritmos AES, DES y RSA en el navegador. Ideal para laboratorios de cifrado simétrico y asimétrico sin dependencias de servidor.',
    tag: 'Criptografía',
    tagColor: 'var(--terminal)',
    usage: `import CryptoJS from 'crypto-js'\nconst cipher = CryptoJS.AES.encrypt('texto', 'clave')\nconsole.log(cipher.toString())`,
  },
  {
    name: 'reactflow',
    version: '11.11.4',
    description:
      'Diseña y visualiza topologías de red, diagramas de direccionamiento IP y flujos de enrutamiento de forma interactiva con nodos y aristas arrastrables.',
    tag: 'Redes',
    tagColor: 'var(--warn)',
    usage: `import ReactFlow from 'reactflow'\n// Nodos = dispositivos, aristas = enlaces\n<ReactFlow nodes={routers} edges={links} />`,
  },
  {
    name: 'socket.io-client',
    version: '4.8.3',
    description:
      'Demuestra comunicación bidireccional en tiempo real. Simula el intercambio de mensajes entre clientes ficticios para ilustrar protocolos como WebSocket.',
    tag: 'Comunicaciones',
    tagColor: 'var(--cyber)',
    usage: `import { io } from 'socket.io-client'\nconst socket = io('http://localhost:3000')\nsocket.emit('mensaje', { data: 'Hola!' })`,
  },
]

export default function LibrariesSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface-1)] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--cyber)]">
            Stack Técnico
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Librerías Integradas
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Tres librerías especializadas que potencian las simulaciones y laboratorios interactivos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {LIBS.map((lib) => (
            <div
              key={lib.name}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-5 transition-colors hover:border-[rgba(0,212,255,0.3)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm font-semibold text-[var(--foreground)]">
                  {lib.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2 py-0.5 font-mono text-[10px] font-medium"
                    style={{
                      color: lib.tagColor,
                      background: `color-mix(in srgb, ${lib.tagColor} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${lib.tagColor} 25%, transparent)`,
                    }}
                  >
                    {lib.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
                    v{lib.version}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {lib.description}
              </p>

              {/* Code snippet */}
              <div className="mt-4 overflow-hidden rounded-lg bg-[var(--surface-1)]">
                <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--destructive)]/50" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-[var(--warn)]/50" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-[var(--terminal)]/50" aria-hidden="true" />
                  <span className="ml-1 font-mono text-[9px] text-[var(--muted-foreground)]">
                    ejemplo.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-[var(--terminal)]">
                  <code>{lib.usage}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
