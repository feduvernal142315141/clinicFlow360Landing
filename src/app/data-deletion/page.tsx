import { Metadata } from "next"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"

export const metadata: Metadata = {
  title: "Solicitud de Eliminación de Datos | ClinicFlow360",
  description: "Solicita la eliminación de tus datos de ClinicFlow360. Instrucciones claras para ejercer tu derecho a la privacidad.",
  openGraph: {
    title: "Solicitud de Eliminación de Datos | ClinicFlow360",
    description: "Solicitud de Eliminación de Datos | ClinicFlow360",
    url: "https://clinic-landing-sable.vercel.app/data-deletion",
  },
}

export default function DataDeletionPage() {
  const lastUpdated = "25 de septiembre de 2026"

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Header */}
        <div style={{ background: "#060d1a" }} className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Solicitud de Eliminación de Datos
            </h1>
            <p className="mt-4 text-lg text-slate-400">
              ClinicFlow360 — Última actualización: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Intro */}
            <section>
              <p className="text-base leading-relaxed text-slate-700">
                En <strong>ClinicFlow360</strong>, respetamos tu derecho a la privacidad y al control de tus datos. Si deseas solicitar la eliminación de tus datos personales almacenados en nuestra plataforma, esta página te guía a través del proceso.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                ClinicFlow360 es operado por <strong>KodeWave Solutions</strong>. Nos comprometemos a procesar solicitudes de eliminación de datos de manera justa y transparente.
              </p>
            </section>

            {/* Qué datos puedes solicitar eliminar */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                1. Qué Datos Puedes Solicitar Eliminar
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Puedes solicitar la eliminación de los siguientes tipos de datos:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Datos Personales de Pacientes</h3>
                  <p className="mt-2 text-slate-700">
                    Nombre, fecha de nacimiento, número de teléfono, correo electrónico, dirección y datos de contacto de emergencia.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Historial Clínico</h3>
                  <p className="mt-2 text-slate-700">
                    Antecedentes médicos, alergias, diagnósticos, tratamientos, odontogramas digitales y notas clínicas.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Imágenes y Radiografías</h3>
                  <p className="mt-2 text-slate-700">
                    Fotos dentales y radiografías almacenadas en ClinicFlow360.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Registros de Citas</h3>
                  <p className="mt-2 text-slate-700">
                    Historial de citas, confirmaciones, cancelaciones y notas de consulta.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Comunicaciones vía WhatsApp</h3>
                  <p className="mt-2 text-slate-700">
                    Mensajes y archivos compartidos entre la clínica y el paciente a través de WhatsApp Business Platform.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">Datos de Cuenta Administrativa</h3>
                  <p className="mt-2 text-slate-700">
                    Si eres administrador de una clínica, puedes solicitar eliminación de datos de tu cuenta de administración.
                  </p>
                </div>
              </div>
            </section>

            {/* Cómo solicitar */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                2. Cómo Solicitar la Eliminación de Tus Datos
              </h2>

              <p className="mb-6 text-base leading-relaxed text-slate-700">
                Para solicitar la eliminación de tus datos, sigue estos pasos:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Envía un Correo</h3>
                    <p className="mt-1 text-slate-700">
                      Envía un correo electrónico a <strong>support@kodewavesolutions.com</strong> con el asunto: <br />
                      <span className="mt-2 inline-block rounded bg-slate-100 px-3 py-1 font-mono text-sm">
                        &ldquo;Solicitud de Eliminación de Datos&rdquo;
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Proporciona Información de Identificación</h3>
                    <p className="mt-1 text-slate-700">
                      En el correo, incluye la siguiente información para que identifiquemos tu cuenta:
                    </p>
                    <ul className="mt-2 space-y-1 text-slate-700">
                      <li>• Tu nombre completo</li>
                      <li>• Correo electrónico asociado a tu cuenta</li>
                      <li>• Número de teléfono registrado en ClinicFlow360 (si aplica)</li>
                      <li>• Nombre de la clínica (si eres paciente registrado en una clínica)</li>
                      <li>• ID o referencia de cuenta (si tienes acceso a ello)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Especifica qué Datos Deseas Eliminar</h3>
                    <p className="mt-1 text-slate-700">
                      Si deseas eliminar datos específicos, menciona cuáles. Si deseas eliminar todos tus datos, también indícalo claramente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Verifica tu Identidad</h3>
                    <p className="mt-1 text-slate-700">
                      Por razones de seguridad, podemos solicitar verificación adicional de identidad. Responderemos con las instrucciones necesarias.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Confirma tu Solicitud</h3>
                    <p className="mt-1 text-slate-700">
                      Confirma tu solicitud respondiendo a nuestro correo de verificación. Una vez confirmado, procederemos con la eliminación.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Plantilla de correo */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                3. Plantilla de Correo Sugerida
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Puedes copiar y personalizar esta plantilla:
              </p>

              <div className="rounded-lg border border-slate-300 bg-slate-50 p-6 font-mono text-sm">
                <p className="text-slate-700">
                  <strong>Para:</strong> support@kodewavesolutions.com
                </p>
                <p className="mt-2 text-slate-700">
                  <strong>Asunto:</strong> Solicitud de Eliminación de Datos
                </p>
                <p className="mt-4 text-slate-700">
                  Estimado equipo de KodeWave Solutions,
                </p>
                <p className="mt-2 text-slate-700">
                  Solicito la eliminación de mis datos personales almacenados en ClinicFlow360.
                </p>
                <p className="mt-2 text-slate-700">
                  <strong>Datos para identificación:</strong>
                  <br />
                  Nombre: [Tu nombre completo]
                  <br />
                  Correo: [Tu correo electrónico]
                  <br />
                  Teléfono: [Tu teléfono (opcional)]
                  <br />
                  Clínica: [Nombre de la clínica (si aplica)]
                </p>
                <p className="mt-2 text-slate-700">
                  <strong>Datos a eliminar:</strong>
                  <br />
                  [Especifica qué datos deseas eliminar o indica &ldquo;Todos los datos&rdquo;]
                </p>
                <p className="mt-2 text-slate-700">
                  Quedo atento a sus instrucciones.
                </p>
                <p className="mt-2 text-slate-700">
                  Saludos,
                  <br />
                  [Tu nombre]
                </p>
              </div>
            </section>

            {/* Tiempo de procesamiento */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                4. Tiempo de Procesamiento
              </h2>

              <p className="rounded-lg border-l-4 border-brand-500 bg-brand-50 p-4 text-slate-700">
                <strong>Plazo de respuesta:</strong> Procesaremos tu solicitud de eliminación de datos dentro de 30 días hábiles a partir de la fecha de confirmación de tu identidad.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Recibirás una confirmación por correo electrónico cuando la eliminación se haya completado. El tiempo exacto puede variar dependiendo de:
              </p>

              <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• Complejidad de la solicitud</li>
                <li>• Verificación de identidad</li>
                <li>• Volumen de solicitudes pendientes</li>
              </ul>
            </section>

            {/* Excepciones */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                5. Excepciones: Datos que Podemos Retener
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                En ciertos casos, podemos retener algunos datos incluso después de una solicitud de eliminación:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <h3 className="font-semibold text-slate-900">Obligaciones Legales</h3>
                  <p className="mt-2 text-slate-700">
                    Si la ley requiere mantener datos para cumplimiento fiscal o regulatorio (ej: registros médicos conforme a normativa sanitaria).
                  </p>
                </div>

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <h3 className="font-semibold text-slate-900">Disputas Contractuales</h3>
                  <p className="mt-2 text-slate-700">
                    Si existe una disputa pendiente, conflicto de facturación o procedimiento legal que requiera retener datos como evidencia.
                  </p>
                </div>

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <h3 className="font-semibold text-slate-900">Seguridad</h3>
                  <p className="mt-2 text-slate-700">
                    Si retener datos es necesario para detectar fraude, proteger la seguridad de la plataforma o prevenir violaciones futuras.
                  </p>
                </div>

                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <h3 className="font-semibold text-slate-900">Datos Agregados y Anonimizados</h3>
                  <p className="mt-2 text-slate-700">
                    Podemos retener datos estadísticos anónimos para mejorar ClinicFlow360, siempre que no sean identificables.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-700">
                Te notificaremos si aplicamos cualquiera de estas excepciones a tu solicitud.
              </p>
            </section>

            {/* Información de contacto */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                6. Información de Contacto para Solicitudes
              </h2>

              <div className="rounded-lg border-2 border-brand-500 bg-brand-50 p-6">
                <p className="mb-4 text-slate-900">
                  <strong>KodeWave Solutions</strong>
                </p>
                <p className="text-slate-700">
                  Desarrollador y Operador de ClinicFlow360
                </p>

                <div className="mt-6 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Email de Soporte</p>
                    <p className="mt-1 text-lg font-mono text-brand-600">
                      support@kodewavesolutions.com
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Asunto Requerido</p>
                    <p className="mt-1 font-mono text-slate-700">
                      &ldquo;Solicitud de Eliminación de Datos&rdquo;
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Plazo de Respuesta</p>
                    <p className="mt-1 text-slate-700">
                      5 a 10 días hábiles (respuesta inicial)
                      <br />
                      30 días hábiles (procesamiento completo)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacidad en la solicitud */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                7. Tu Privacidad durante la Solicitud
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                La información que proporcionas en tu solicitud de eliminación será tratada con confidencialidad. Solo será utilizada para procesar tu solicitud y no será compartida con terceros sin tu consentimiento.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Después de procesar tu solicitud, también eliminaremos los datos relativos a la comunicación, a menos que exista obligación legal de conservarlos.
              </p>
            </section>

            {/* Preguntas */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                8. ¿Tienes Preguntas?
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                Si tienes preguntas sobre cómo solicitar la eliminación de datos o sobre nuestras prácticas de privacidad, no dudes en contactarnos.
              </p>

              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-900">
                  <strong>Email:</strong> support@kodewavesolutions.com
                </p>
                <p className="mt-2 text-slate-700">
                  Responderemos en un plazo de 5 a 10 días hábiles.
                </p>
              </div>
            </section>

            {/* Footer note */}
            <div className="rounded-lg bg-slate-100 p-6 text-center text-sm text-slate-600">
              <p>
                Esta página de Solicitud de Eliminación de Datos fue actualizada por última vez el <strong>{lastUpdated}</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
