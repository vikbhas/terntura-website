import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-semibold mb-6">Impressum</h1>
      <p className="text-lg mb-2 font-medium">TernTura Industrie GmbH i. G.</p>
      <p className="text-sm text-gray-500 mb-8">Angaben gemäß § 5 TMG – Stand: Juli 2025</p>

      {/* Section 1 */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">1. Anbieterkennzeichnung</h2>
        <p className="mb-4">
          TernTura Industrie GmbH i. G.<br />
          Beta Straße 10A<br />
          85774 Unterföhring<br />
          Deutschland<br />
          <br />
          Vertreten durch: Ramkarthik Gopalakrishnan<br />
          Hinweis: Die Gesellschaft befindet sich derzeit in Gründung.<br />
          <br />
          Telefon: +49 157 5815 1514<br />
          E-Mail:{' '}
          <a href="mailto:grk@ternturaindustrie.de" className="text-blue-600 hover:underline">
            grk@ternturaindustrie.de
          </a>
        </p>
      </section>

      {/* Section 2 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">2. Haftungsausschluss</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">a) Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mt-2">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">b) Haftung für Links</h3>
        <p>
          Unsere Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
        <p className="mt-2">
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">3. Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="mt-2">
          Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter (z. B. Bilder von Unsplash) als solche gekennzeichnet oder
          im Rahmen der geltenden Lizenzbedingungen verwendet.
        </p>
        <p className="mt-2">
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen werden wir solche Inhalte umgehend entfernen.
        </p>
      </section>
    </div>
  );
};

export default Impressum;
