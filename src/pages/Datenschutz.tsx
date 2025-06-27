import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung – Website</h1>
      <p className="text-lg mb-2 font-medium">TernTura Industrie GmbH</p>
      <p className="text-sm text-gray-500 mb-8">Rechtliche Angaben – Stand: März 2025</p>

      {/* Section 1 */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
        <p className="mb-4">
          TernTura Industrie GmbH<br />
          Beta Straße 10a<br />
          85774 Unterföhring<br />
          Deutschland<br />
          E-Mail:{' '}
          <a href="mailto:info@terntura.com" className="text-blue-600 hover:underline">
            info@terntura.com
          </a>
          <br />
          Telefon: [Ihre Telefonnummer]
          <br />
          Vertreten durch: Ramkarthik Gopalakrishnan
        </p>
        <p>
          Diese Datenschutzerklärung bezieht sich ausschließlich auf die Website{' '}
          <a href="https://terntura.com" className="text-blue-600 hover:underline">
            https://terntura.com
          </a>.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). Nachfolgend informieren wir Sie darüber, welche Daten bei Ihrem Besuch unserer Website erhoben werden und wie wir diese verarbeiten.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">3. Datenverarbeitung bei Nutzung der Website</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">a) Zugriffsdaten, Hosting und technische Infrastruktur</h3>
        <p>
          Beim Aufrufen unserer Website übermittelt Ihr Browser automatisch bestimmte Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser, Betriebssystem) an unseren Server. Diese Daten werden aus Sicherheitsgründen und zur technischen Sicherstellung eines störungsfreien Betriebs gespeichert. Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
        </p>
        <p className="mt-2">
          Unsere Website wird von Umso Software Inc. gehostet, wodurch technische Zugriffsdaten an die Server von Umso übermittelt werden können.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">b) Cookies und Webanalyse</h3>
        <p>
          Unsere Website verwendet Cookies, um die Nutzung zu analysieren und das Angebot zu optimieren. Dabei kommen folgende Dienste zum Einsatz:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Google Analytics</li>
          <li>Google Tag Manager</li>
          <li>PostHog</li>
        </ul>
        <p className="mt-2">
          Diese Dienste verwenden Cookies, die Ihr Verhalten anonymisiert erfassen (z. B. Seitenaufrufe, Verweildauer). Die IP-Adresse wird anonymisiert übermittelt.
        </p>
        <p className="mt-2">
          Sie können das Speichern von Cookies in Ihrem Browser deaktivieren. Beachten Sie bitte, dass dann gegebenenfalls nicht alle Funktionen der Website nutzbar sind.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">c) Kontaktformular</h3>
        <p>
          Bei Nutzung des Kontaktformulars auf unserer Website werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) an uns übermittelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">d) Terminbuchung über Calendly</h3>
        <p>
          Unsere Website verwendet das Tool Calendly, um Terminvereinbarungen zu ermöglichen. Die dabei eingegebenen Daten (z. B. Name, E-Mail, gebuchter Termin) werden direkt an Calendly LLC übermittelt. Bitte beachten Sie deren Datenschutzerklärung:{' '}
          <a
            href="https://calendly.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://calendly.com/privacy
          </a>
        </p>
      </section>

      {/* Section 4 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">4. Rechtsgrundlagen der Datenverarbeitung</h2>
        <p>Die Datenverarbeitung erfolgt auf folgenden Rechtsgrundlagen:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>
            Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse am sicheren und funktionsfähigen Betrieb der Website sowie an der Optimierung des Angebots.
          </li>
          <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung, sofern erforderlich (z. B. bei Cookies oder Formularen).</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">5. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck notwendig ist oder gesetzliche Aufbewahrungsfristen bestehen.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte als betroffene Person</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung oder Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Datenverarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
        <p className="mt-2">Bitte wenden Sie sich bei Anliegen an die oben genannten Kontaktdaten.</p>
      </section>

      {/* Section 7 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um Änderungen rechtlicher Vorschriften oder technischer Entwicklungen zu berücksichtigen. Gültig ist die jeweils auf der Website veröffentlichte Version.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">8. Kontakt bei Datenschutzfragen</h2>
        <p>
          TernTura Industrie GmbH<br />
          Beta Straße 10a<br />
          85774 Unterföhring<br />
          Deutschland<br />
          E-Mail:{' '}
          <a href="mailto:info@terntura.com" className="text-blue-600 hover:underline">
            info@terntura.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;
