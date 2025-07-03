import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>
      <p className="text-lg mb-2 font-medium">
        Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
      </p>
      <p className="mb-8">
        Nachfolgend informieren wir Sie gemäß der Datenschutz-Grundverordnung (DSGVO) über die Verarbeitung
        personenbezogener Daten auf unserer Website.
      </p>

      {/* 1. Verantwortlicher */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
        <p>
          TernTura Industrie GmbH i. G.<br />
          Beta Straße 10A<br />
          85774 Unterföhring<br />
          Deutschland<br />
          <br />
          Vertreten durch: Ramkarthik Gopalakrishnan<br />
          E-Mail:{' '}
          <a href="mailto:grk@ternturaindustrie.de" className="text-blue-600 hover:underline">
            grk@ternturaindustrie.de
          </a>
          <br />
          Telefon: +49 157 5815 1514
        </p>
      </section>

      {/* 2. Zugriffsdaten */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">2. Zugriffsdaten</h2>
        <p>
          Beim Besuch unserer Website übermittelt Ihr Browser automatisch Informationen wie IP-Adresse, Datum und
          Uhrzeit des Zugriffs sowie den verwendeten Browsertyp. Diese Daten dienen ausschließlich der technischen
          Bereitstellung und Sicherheit der Website und werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
      </section>

      {/* 3. Kontaktformular */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">3. Kontaktformular (Google Forms)</h2>
        <p>
          Wenn Sie unser Kontaktformular nutzen, werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Nachricht)
          über <strong>Google Forms</strong> verarbeitet.
        </p>
        <p className="mt-2">
          Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-2">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          effizienter Kommunikation). Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
        <p className="mt-2">
          Datenschutzerklärung von Google:{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>
      </section>

      {/* 4. Terminbuchung */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">4. Terminbuchung mit Calendly</h2>
        <p>
          Für die Buchung von Gesprächsterminen verwenden wir den Dienst <strong>Calendly</strong> (Calendly LLC,
          1315 Peachtree St NE, Atlanta, GA 30309, USA). Dabei werden personenbezogene Daten (z. B. Name,
          E-Mail-Adresse) an Calendly übermittelt.
        </p>
        <p className="mt-2">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher
          Maßnahmen.
        </p>
        <p className="mt-2">
          Datenschutzerklärung von Calendly:{' '}
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

      {/* 5. Bildquellen */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">5. Bildquellen</h2>
        <p>
          Die auf dieser Website verwendeten Bilder stammen aus lizenzfreien Quellen wie{' '}
          <strong>Unsplash.com</strong> und <strong>Pexels.com</strong>. Die Nutzung erfolgt gemäß den jeweiligen
          Lizenzbedingungen. Eine Urheberkennzeichnung erfolgt, sofern erforderlich.
        </p>
      </section>

      {/* 6. Rechte */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten sowie auf
          Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
        </p>
        <p className="mt-2">
          Bitte wenden Sie sich hierfür an:{' '}
          <a href="mailto:grk@ternturaindustrie.de" className="text-blue-600 hover:underline">
            grk@ternturaindustrie.de
          </a>
        </p>
      </section>

      {/* 7. Änderungen */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche oder technische
          Änderungen ergeben. Es gilt jeweils die aktuelle Version, die auf dieser Website veröffentlicht ist.
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;
