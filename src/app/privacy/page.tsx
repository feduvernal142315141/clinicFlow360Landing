import { Metadata } from "next"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | ClinicFlow360",
  description: "Política de privacidad de ClinicFlow360. Información sobre cómo recopilamos, usamos y protegemos tus datos.",
  openGraph: {
    title: "Política de Privacidad | ClinicFlow360",
    description: "Política de privacidad de ClinicFlow360",
    url: "https://clinic-landing-sable.vercel.app/privacy",
  },
}

export default function PrivacyPage() {
  const lastUpdated = "25 de septiembre de 2026"

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Header */}
        <div style={{ background: "#060d1a" }} className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Política de Privacidad
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
                <strong>KodeWave Solutions</strong> (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;nos&rdquo;) desarrolla y opera <strong>ClinicFlow360</strong>, una plataforma digital para la gestión integral de clínicas dentales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información personal cuando utilizas ClinicFlow360.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Al acceder y usar ClinicFlow360, aceptas los términos de esta Política de Privacidad. Si no estás de acuerdo, no uses la plataforma.
              </p>
            </section>

            {/* 1. Información que recopilamos */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                1. Información que Recopilamos
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.1 Datos de Clínicas y Administradores
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    Cuando una clínica se registra en ClinicFlow360, recopilamos:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Nombre y razón social de la clínica</li>
                    <li>• Dirección y ubicación geográfica</li>
                    <li>• Número de teléfono y correo electrónico de contacto</li>
                    <li>• Datos del administrador/representante legal (nombre, email, teléfono)</li>
                    <li>• Información fiscal (RFC, datos bancarios para facturación)</li>
                    <li>• Configuración de preferencias y permisos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.2 Datos de Doctores y Personal Clínico
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    Para cada doctor o miembro del personal que use la plataforma:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Nombre completo y especialidad</li>
                    <li>• Correo electrónico y número de teléfono</li>
                    <li>• Credenciales profesionales (cédula, registro profesional)</li>
                    <li>• Horarios de trabajo y disponibilidad</li>
                    <li>• Datos de acceso y autenticación</li>
                    <li>• Actividad dentro de la plataforma (registros de auditoría)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.3 Datos de Pacientes
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    Las clínicas introducen datos de sus pacientes en ClinicFlow360. Estos datos incluyen:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Nombre completo y fecha de nacimiento</li>
                    <li>• Número de teléfono y correo electrónico</li>
                    <li>• Dirección y datos de contacto de emergencia</li>
                    <li>• Antecedentes médicos y alergias relevantes</li>
                    <li>• Historial dental (diagnósticos, tratamientos realizados)</li>
                    <li>• Odontograma digital (mapeo de piezas dentales)</li>
                    <li>• Fotos y radiografías (cuando se carguen)</li>
                    <li>• Registro de citas, tratamientos y observaciones clínicas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.4 Datos de Comunicación vía WhatsApp
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    ClinicFlow360 integra WhatsApp Business Platform para permitir comunicación con pacientes:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Número de teléfono del paciente</li>
                    <li>• Mensajes enviados y recibidos vía WhatsApp</li>
                    <li>• Archivos multimedia compartidos (imágenes, documentos)</li>
                    <li>• Metadatos de mensajes (fecha, hora, estado de entrega)</li>
                    <li>• Información de entrega proporcionada por WhatsApp</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.5 Datos de Citas y Recordatorios
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    Recopilamos información relacionada con la programación de citas:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Fecha, hora y duración de la cita</li>
                    <li>• Tipo de tratamiento o consulta</li>
                    <li>• Doctor asignado</li>
                    <li>• Estado de confirmación y asistencia</li>
                    <li>• Notas y observaciones clínicas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    1.6 Datos de Uso y Técnicos
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700">
                    Recopilamos automáticamente ciertos datos cuando usas ClinicFlow360:
                  </p>
                  <ul className="mt-3 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                    <li>• Dirección IP y tipo de dispositivo</li>
                    <li>• Navegador, sistema operativo y versión</li>
                    <li>• Páginas visitadas y funciones utilizadas</li>
                    <li>• Duración de sesiones y patrones de uso</li>
                    <li>• Cookies e identificadores de seguimiento</li>
                    <li>• Información de rendimiento y errores (logs)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Cómo usamos tu información */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                2. Cómo Usamos Tu Información
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Usamos la información recopilada para:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Proporcionar el servicio:</strong> Gestionar citas, almacenar historiales médicos, procesar pagos y mantener la plataforma operativa.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Comunicación con pacientes:</strong> Enviar confirmaciones de citas, recordatorios y notificaciones a través de WhatsApp y email.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Soporte y servicio al cliente:</strong> Responder consultas, proporcionar asistencia técnica y resolver problemas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Mejora del servicio:</strong> Analizar cómo se usa ClinicFlow360 para optimizar funcionalidades y experiencia del usuario.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales, regulatorias y fiscales aplicables.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Seguridad y protección:</strong> Detectar, prevenir y abordar fraude, abuso o actividades no autorizadas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Análisis y reportes:</strong> Generar reportes estadísticos anónimos para entender tendencias de uso y mejora continua.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">✓</span>
                  <span><strong>Marketing y comunicaciones:</strong> Enviar actualizaciones, noticias de productos y ofertas especiales (solo si lo has consentido).</span>
                </li>
              </ul>
            </section>

            {/* 3. Compartir información */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                3. Compartir tu Información
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                No vendemos ni compartimos tu información personal con terceros sin tu consentimiento, excepto en los siguientes casos:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-2 font-semibold text-slate-900">
                    3.1 Proveedores de Servicios Externos
                  </h3>
                  <p className="text-slate-700">
                    Compartimos información con proveedores confiables que nos ayudan a operar la plataforma:
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• <strong>WhatsApp Business Platform</strong> (Meta Platforms Inc.) — para envío de mensajes</li>
                    <li>• <strong>Proveedores de hospedaje y bases de datos</strong> — para almacenamiento y seguridad</li>
                    <li>• <strong>Procesadores de pagos</strong> — para transacciones financieras</li>
                    <li>• <strong>Proveedores de email</strong> — para notificaciones y comunicaciones</li>
                    <li>• <strong>Proveedores de analítica</strong> — para monitoreo de rendimiento</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-2 font-semibold text-slate-900">
                    3.2 Obligaciones Legales
                  </h3>
                  <p className="text-slate-700">
                    Podemos compartir información si lo requiere la ley, una orden judicial, una autoridad gubernamental o para proteger nuestros derechos legales.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-2 font-semibold text-slate-900">
                    3.3 Dentro de la Clínica
                  </h3>
                  <p className="text-slate-700">
                    Los datos de pacientes son accesibles para doctores, personal administrativo y recepcionistas de la clínica que los introdujo, únicamente para fines de atención médica.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Seguridad de datos */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                4. Seguridad y Protección de Datos
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Implementamos medidas técnicas, administrativas y físicas para proteger tu información:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Cifrado en tránsito:</strong> Todos los datos se transmiten mediante HTTPS/TLS.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Cifrado en reposo:</strong> Los datos sensibles se cifran en nuestros servidores.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Autenticación segura:</strong> Usamos contraseñas hasheadas y autenticación de dos factores.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Control de acceso:</strong> Solo personal autorizado puede acceder a datos sensibles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Monitoreo continuo:</strong> Monitoreamos la plataforma para detectar actividades sospechosas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">🔒</span>
                  <span><strong>Auditorías regulares:</strong> Realizamos pruebas de seguridad y auditorías periódicas.</span>
                </li>
              </ul>

              <p className="mt-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-slate-700">
                <strong>Nota importante:</strong> Aunque implementamos medidas de seguridad robustas, ningún sistema es 100% seguro. No garantizamos protección absoluta contra todos los riesgos de seguridad.
              </p>
            </section>

            {/* 5. Retención de datos */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                5. Conservación de Información
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                Conservamos tu información personal durante el tiempo que sea necesario para:
              </p>

              <ul className="mt-4 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• Proporcionar los servicios de ClinicFlow360</li>
                <li>• Cumplir con obligaciones legales y fiscales (generalmente 6-10 años)</li>
                <li>• Mantener historiales médicos según regulaciones sanitarias aplicables</li>
                <li>• Resolver disputas y hacer cumplir acuerdos</li>
              </ul>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Cuando ya no sea necesaria tu información, la eliminamos de manera segura o la anonimizamos, excepto cuando la ley requiera su conservación.
              </p>
            </section>

            {/* 6. Derechos del usuario */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                6. Tus Derechos
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Tienes derecho a:
              </p>

              <div className="space-y-3">
                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Acceso</h4>
                  <p className="mt-1 text-slate-700">Solicitar una copia de los datos personales que tenemos sobre ti.</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Corrección</h4>
                  <p className="mt-1 text-slate-700">Solicitar corrección de información inexacta o incompleta.</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Eliminación</h4>
                  <p className="mt-1 text-slate-700">Solicitar la eliminación de tus datos cuando ya no sean necesarios (sujeto a obligaciones legales).</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Portabilidad</h4>
                  <p className="mt-1 text-slate-700">Obtener tus datos en formato estructurado y transferirlos a otro servicio.</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Restricción de uso</h4>
                  <p className="mt-1 text-slate-700">Solicitar que limitemos cómo usamos tus datos.</p>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <h4 className="font-semibold text-slate-900">Objeción</h4>
                  <p className="mt-1 text-slate-700">Objetar ciertos usos de tus datos, incluyendo fines de marketing.</p>
                </div>
              </div>
            </section>

            {/* 7. Cómo solicitar tus derechos */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                7. Cómo Solicitar Tus Derechos
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Para ejercer cualquiera de estos derechos, contacta a nuestro equipo:
              </p>

              <div className="rounded-lg border-2 border-brand-500 bg-brand-50 p-6">
                <p className="mb-3 text-slate-900">
                  <strong>KodeWave Solutions</strong>
                </p>
                <p className="text-slate-700">
                  <strong>Email:</strong> privacy@kodewavesolutions.com
                </p>
                <p className="mt-2 text-slate-700">
                  En tu solicitud, incluye:
                </p>
                <ul className="mt-2 space-y-1 text-slate-700">
                  <li>• Descripción clara de lo que solicitas</li>
                  <li>• Información de contacto (email, teléfono)</li>
                  <li>• Prueba de identidad si es necesario</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  Responderemos en un plazo de 30 días hábiles.
                </p>
              </div>
            </section>

            {/* 8. Privacidad de menores */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                8. Privacidad de Menores
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                ClinicFlow360 no está dirigido a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubrimos que un menor ha proporcionado información personal, la eliminaremos de inmediato.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Los datos de pacientes menores solo pueden ser gestionados por sus tutores legales o representantes autorizados a través de la clínica.
              </p>
            </section>

            {/* 9. Cambios a esta política */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                9. Cambios a Esta Política
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                KodeWave Solutions puede actualizar esta Política de Privacidad ocasionalmente. La versión más reciente siempre estará disponible en esta página. Si hacemos cambios significativos que afecten cómo tratamos tu información, te notificaremos por email o a través de un aviso destacado en la plataforma.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Tu uso continuado de ClinicFlow360 después de cambios indica tu aceptación de la política actualizada.
              </p>
            </section>

            {/* 10. Contacto */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                10. Información de Contacto
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Si tienes preguntas, inquietudes o solicitudes sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctanos:
              </p>

              <div className="rounded-lg border-2 border-brand-500 bg-brand-50 p-6">
                <p className="mb-4 text-slate-900">
                  <strong>KodeWave Solutions</strong>
                </p>
                <p className="text-slate-700">
                  Desarrollador y Operador de ClinicFlow360
                </p>
                <p className="mt-3 text-slate-700">
                  <strong>Email:</strong> privacy@kodewavesolutions.com
                </p>
                <p className="text-slate-700">
                  <strong>Respuesta esperada:</strong> Dentro de 5 a 10 días hábiles
                </p>
              </div>
            </section>

            {/* Footer note */}
            <div className="rounded-lg bg-slate-100 p-6 text-center text-sm text-slate-600">
              <p>
                Esta Política de Privacidad fue actualizada por última vez el <strong>{lastUpdated}</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
