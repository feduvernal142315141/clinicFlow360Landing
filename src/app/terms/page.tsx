import { Metadata } from "next"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"

export const metadata: Metadata = {
  title: "Condiciones del Servicio | ClinicFlow360",
  description: "Condiciones del servicio de ClinicFlow360. Términos y condiciones de uso de la plataforma.",
  openGraph: {
    title: "Condiciones del Servicio | ClinicFlow360",
    description: "Condiciones del servicio de ClinicFlow360",
    url: "https://clinic-landing-sable.vercel.app/terms",
  },
}

export default function TermsPage() {
  const lastUpdated = "25 de septiembre de 2026"

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">
        {/* Header */}
        <div style={{ background: "#060d1a" }} className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Condiciones del Servicio
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
                Estas Condiciones del Servicio (&ldquo;Términos&rdquo;) rigen el acceso y uso de <strong>ClinicFlow360</strong>, una plataforma digital SaaS para la gestión integral de clínicas dentales, desarrollada y operada por <strong>KodeWave Solutions</strong>.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Al registrarte y utilizar ClinicFlow360, aceptas estos Términos en su totalidad. Si no estás de acuerdo, no uses la plataforma. KodeWave Solutions se reserva el derecho de modificar estos Términos en cualquier momento.
              </p>
            </section>

            {/* 1. Descripción del Servicio */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                1. Descripción del Servicio
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                ClinicFlow360 es una plataforma en la nube diseñada para clínicas dentales. Ofrece:
              </p>

              <ul className="space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• Gestión de agenda y citas</li>
                <li>• Registro digital de pacientes</li>
                <li>• Odontograma digital interactivo</li>
                <li>• Integración con WhatsApp Business Platform para comunicación automatizada</li>
                <li>• Historiales clínicos y tratamientos</li>
                <li>• Aplicación móvil para doctores</li>
                <li>• Generación de reportes</li>
                <li>• Apoyo técnico y mantenimiento de la plataforma</li>
              </ul>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                El acceso a estos servicios se proporciona mediante una suscripción mensual o anual. ClinicFlow360 está disponible vía navegador web y aplicación móvil.
              </p>
            </section>

            {/* 2. Elegibilidad y Registro */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                2. Elegibilidad y Registro
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                Para usar ClinicFlow360, debes ser una clínica dental registrada legalmente o un profesional autorizado a representarla. Al registrarte, declara que:
              </p>

              <ul className="mt-4 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• Eres mayor de 18 años</li>
                <li>• Tienes autoridad legal para representar tu clínica</li>
                <li>• La información proporcionada es precisa y completa</li>
                <li>• Utilizarás ClinicFlow360 solo para fines legales y permitidos</li>
              </ul>
            </section>

            {/* 3. Responsabilidad de la Clínica */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                3. Responsabilidad de la Clínica
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                Como usuario de ClinicFlow360, tu clínica es responsable de:
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Datos de pacientes:</strong> Toda la información ingresada en ClinicFlow360 es responsabilidad exclusiva de tu clínica. Incluye exactitud, completitud, confidencialidad y cumplimiento normativo de datos médicos.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Autorización de pacientes:</strong> Garantizas que tienes consentimiento previo de pacientes para almacenar y procesar sus datos en ClinicFlow360.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Credenciales de acceso:</strong> Eres responsable de mantener la confidencialidad de contraseñas y credenciales. No compartas acceso sin autorización.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Uso legal:</strong> No utilizarás ClinicFlow360 para actividades ilegales, fraude, acoso o violación de derechos de terceros.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Cumplimiento normativo:</strong> Tu clínica es responsable de cumplir leyes sanitarias, de privacidad y regulaciones locales aplicables.</span>
                </li>
              </ul>
            </section>

            {/* 4. Uso de Integraciones Externas */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                4. Uso de Integraciones Externas
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                ClinicFlow360 integra servicios de terceros, incluyendo WhatsApp Business Platform de Meta Platforms Inc. Al usar estas integraciones:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Aceptas los términos de servicio y políticas de privacidad de terceros.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Autorizas el envío de datos (números de teléfono, mensajes) a estas plataformas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Asumes responsabilidad por comunicaciones enviadas vía WhatsApp u otros canales integrados.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>KodeWave Solutions no es responsable por interrupciones o cambios en servicios de terceros.</span>
                </li>
              </ul>
            </section>

            {/* 5. Disponibilidad del Servicio */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                5. Disponibilidad y Mantenimiento del Servicio
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                ClinicFlow360 funciona con infraestructura en la nube. Aunque nos esforzamos por mantener disponibilidad continua:
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>No garantizamos disponibilidad 100% sin interrupciones.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Realizamos mantenimiento periódico que puede causar indisponibilidad temporal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Factores externos (desastres naturales, cortes de energía, ataques cibernéticos) pueden afectar el servicio.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span>Notificaremos mantenimiento programado con anticipación cuando sea posible.</span>
                </li>
              </ul>
            </section>

            {/* 6. Propiedad Intelectual */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                6. Propiedad Intelectual
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                ClinicFlow360, incluyendo código, diseño, funcionalidades, bases de datos y documentación, son propiedad intelectual de KodeWave Solutions. Al usar la plataforma, obtienes una licencia limitada y revocable para acceder y usar ClinicFlow360 únicamente para gestionar tu clínica.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                No puedes: copiar, modificar, distribuir, revender ni crear trabajos derivados de ClinicFlow360 sin consentimiento escrito previo de KodeWave Solutions.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Los datos de pacientes ingresados por tu clínica permanecen siendo propiedad de tu clínica. KodeWave Solutions tiene derecho a usar datos anonimizados o agregados para mejorar la plataforma.
              </p>
            </section>

            {/* 7. Pagos y Suscripción */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                7. Pagos y Suscripción
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                El acceso a ClinicFlow360 requiere una suscripción activa. Los términos de pago incluyen:
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Planes de suscripción:</strong> Disponibles con facturación mensual o anual.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Renovación automática:</strong> La suscripción se renueva automáticamente al final del período. Puedes cancelar en cualquier momento.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Método de pago:</strong> Aceptamos tarjeta de crédito y otros métodos especificados en la plataforma.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Cambios de precio:</strong> Podemos actualizar precios con notificación previa de 30 días.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-600">•</span>
                  <span><strong>Reembolsos:</strong> Los pagos son generalmente no reembolsables, excepto según lo requerido por ley.</span>
                </li>
              </ul>
            </section>

            {/* 8. Suspensión y Terminación */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                8. Suspensión o Terminación de la Cuenta
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                KodeWave Solutions puede suspender o terminar tu acceso a ClinicFlow360 si:
              </p>

              <ul className="mt-4 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• Incumples estos Términos o la Política de Privacidad</li>
                <li>• Tu pago se rechaza o no se procesa correctamente</li>
                <li>• Usas ClinicFlow360 para actividades ilegales o fraudulentas</li>
                <li>• Violas derechos de terceros</li>
                <li>• Acumulas deuda o pagos vencidos</li>
              </ul>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Si se termina tu cuenta, perderás acceso a ClinicFlow360. Notificaremos cambios significativos cuando sea posible, excepto en casos de violación grave de seguridad.
              </p>
            </section>

            {/* 9. Limitación de Responsabilidad */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                9. Limitación de Responsabilidad
              </h2>

              <p className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-slate-700">
                <strong>Descargo de responsabilidad:</strong> ClinicFlow360 se proporciona &ldquo;tal cual&rdquo; sin garantías expresas o implícitas. KodeWave Solutions no garantiza que:
              </p>

              <ul className="mt-4 space-y-2 border-l-4 border-brand-500 pl-4 text-slate-700">
                <li>• El servicio cumplirá con tus requisitos específicos</li>
                <li>• Será libre de errores o interrupciones</li>
                <li>• Se detectarán o prevendrán todos los riesgos de seguridad</li>
                <li>• Los datos nunca se perderán o dañarán</li>
              </ul>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Excepto donde lo prohíba la ley, KodeWave Solutions no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso o imposibilidad de usar ClinicFlow360, incluyendo pérdida de datos, ingresos o ganancias.
              </p>
            </section>

            {/* 10. Modificación de Términos */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                10. Modificación de Estos Términos
              </h2>

              <p className="text-base leading-relaxed text-slate-700">
                KodeWave Solutions puede actualizar estos Términos en cualquier momento. Los cambios significativos serán comunicados con anticipación. Tu uso continuado de ClinicFlow360 después de cambios implica aceptación de los nuevos Términos.
              </p>
            </section>

            {/* 11. Contacto */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                11. Información de Contacto
              </h2>

              <p className="mb-4 text-base leading-relaxed text-slate-700">
                Si tienes preguntas sobre estos Términos del Servicio:
              </p>

              <div className="rounded-lg border-2 border-brand-500 bg-brand-50 p-6">
                <p className="mb-3 text-slate-900">
                  <strong>KodeWave Solutions</strong>
                </p>
                <p className="text-slate-700">
                  Desarrollador y Operador de ClinicFlow360
                </p>
                <p className="mt-3 text-slate-700">
                  <strong>Email:</strong> support@kodewavesolutions.com
                </p>
                <p className="text-slate-700">
                  <strong>Respuesta esperada:</strong> Dentro de 5 a 10 días hábiles
                </p>
              </div>
            </section>

            {/* Footer note */}
            <div className="rounded-lg bg-slate-100 p-6 text-center text-sm text-slate-600">
              <p>
                Estas Condiciones del Servicio fueron actualizadas por última vez el <strong>{lastUpdated}</strong>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
