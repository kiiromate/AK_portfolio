import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Ariel Kami',
  description: 'Politique de confidentialité et protection des données personnelles du site arielkami.com',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="w-full min-h-screen bg-white px-6 pt-40 pb-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#333333]">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-[#979797] font-light mb-16">
          Dernière mise à jour : avril 2026
        </p>

        <div className="space-y-12 text-[#666666] font-light leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">1. Responsable du traitement</h2>
            <p>
              Le présent site est édité par Ariel Kami, designer graphique, photographe et web designer
              indépendant, domicilié à Mende, France.
            </p>
            <p className="mt-3">
              Pour toute question relative à vos données personnelles, vous pouvez me contacter à
              l&apos;adresse suivante :{' '}
              <a href="mailto:hello@arielkami.com" className="text-[#333333] border-b border-[#333333] pb-px">
                hello@arielkami.com
              </a>
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 2 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">2. Données collectées</h2>
            <p>
              Ce site ne collecte que les données strictement nécessaires à son bon fonctionnement et
              au traitement de vos demandes. Les données susceptibles d&apos;être collectées sont les
              suivantes :
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Nom et prénom, fournis volontairement via le formulaire de contact',
                'Adresse email, fournie volontairement via le formulaire de contact',
                'Description du projet et informations annexes partagées lors de la prise de contact',
                "Données de navigation (adresse IP, type de navigateur, pages visitées) via les logs du serveur d'hébergement",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#979797] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 3 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Répondre à vos demandes de contact et de devis',
                "Établir et gérer la relation contractuelle dans le cadre de prestations de services créatifs et numériques",
                "Améliorer l'expérience utilisateur du site",
                'Respecter les obligations légales applicables',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#979797] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 4 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur les bases légales suivantes, conformément au
              Règlement Général sur la Protection des Données (RGPD) :
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Votre consentement, lorsque vous remplissez et soumettez le formulaire de contact',
                "L'exécution d'un contrat, dans le cadre d'une collaboration professionnelle",
                "L'intérêt légitime, pour améliorer le site et assurer sa sécurité",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#979797] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 5 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">5. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées uniquement le temps nécessaire à la finalité
              pour laquelle elles ont été collectées :
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                'Données de contact : 3 ans à compter du dernier échange',
                'Données contractuelles : 5 ans à compter de la fin de la relation commerciale, conformément aux obligations légales françaises',
                'Données de navigation : 13 mois maximum',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#979797] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 6 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">6. Partage des données</h2>
            <p>
              Vos données personnelles ne sont ni vendues, ni louées, ni cédées à des tiers. Elles
              peuvent cependant être transmises à des prestataires techniques dans le cadre de
              l&apos;hébergement et du fonctionnement du site (Vercel Inc., hébergeur basé aux
              États-Unis, certifié sous le Data Privacy Framework UE–États-Unis et soumis aux
              clauses contractuelles types de l&apos;Union européenne).
            </p>
            <p className="mt-3">
              Aucun transfert de données à des fins publicitaires ou commerciales n&apos;est effectué.
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 7 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">7. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques strictement nécessaires à son
              fonctionnement. Aucun cookie publicitaire n&apos;est utilisé sans consentement préalable.
            </p>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu&apos;un
              cookie est déposé. Le refus de cookies techniques peut affecter certaines fonctionnalités
              du site.
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 8 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">8. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
              suivants concernant vos données personnelles :
            </p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                "Droit d'accès : obtenir une copie des données vous concernant",
                'Droit de rectification : corriger des données inexactes ou incomplètes',
                "Droit à l'effacement : demander la suppression de vos données",
                "Droit d'opposition : vous opposer au traitement de vos données",
                'Droit à la limitation : restreindre le traitement dans certains cas',
                'Droit à la portabilité : recevoir vos données dans un format structuré',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#979797] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-moi à{' '}
              <a href="mailto:hello@arielkami.com" className="text-[#333333] border-b border-[#333333] pb-px">
                hello@arielkami.com
              </a>
              . Une réponse vous sera apportée dans un délai de 30 jours.
            </p>
            <p className="mt-3">
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333333] border-b border-[#333333] pb-px"
              >
                CNIL
              </a>{' '}
              (Commission Nationale de l&apos;Informatique et des Libertés).
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 9 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">9. Sécurité</h2>
            <p>
              Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour
              protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation.
              Le site est hébergé sur des infrastructures sécurisées avec connexion chiffrée (HTTPS).
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* 10 */}
          <section>
            <h2 className="text-xl font-light text-[#333333] mb-4">10. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date de
              dernière mise à jour est indiquée en haut de cette page. Il est recommandé de la
              consulter régulièrement.
            </p>
          </section>

          <hr className="border-[#eeeeee]" />

          {/* Footer note */}
          <div className="pt-2">
            <p className="text-sm text-[#979797]">
              Pour toute question :{' '}
              <a href="mailto:hello@arielkami.com" className="text-[#333333] border-b border-[#333333] pb-px">
                hello@arielkami.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
