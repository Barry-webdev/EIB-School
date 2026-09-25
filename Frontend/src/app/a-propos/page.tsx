import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import {
  Target,
  Eye,
  Heart,
  History,
  Star,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la vision, la mission et les valeurs du Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B) — La rigueur pour l'excellence.",
};

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "Nous visons les plus hauts standards académiques et encourageons chaque élève à donner le meilleur de lui-même.",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Chaque élève est accueilli avec respect et empathie. Nous croyons en un environnement éducatif chaleureux.",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Users,
    title: "Solidarité",
    description:
      "L'esprit communautaire est au cœur de notre projet éducatif. Ensemble, élèves et enseignants forment une famille.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Target,
    title: "Discipline",
    description:
      "La rigueur, le respect des règles et la ponctualité sont des valeurs fondamentales que nous inculquons à tous nos élèves.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description:
      "Nous adaptons continuellement nos méthodes pédagogiques pour rester à la pointe de l'éducation moderne.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Eye,
    title: "Intégrité",
    description:
      "L'honnêteté, la transparence et l'éthique guident toutes nos actions et décisions au sein de l'établissement.",
    color: "from-teal-400 to-teal-600",
  },
];

const objectives = [
  "Former des élèves compétents, autonomes et responsables",
  "Développer l'esprit critique et la créativité de chaque élève",
  "Assurer une maîtrise solide des fondamentaux académiques",
  "Préparer les élèves aux examens nationaux et à l'enseignement supérieur",
  "Éveiller la conscience citoyenne et les valeurs humanistes",
  "Accompagner chaque élève dans son orientation professionnelle",
  "Favoriser l'ouverture sur le monde et les cultures",
  "Promouvoir l'égalité des chances dans l'accès à l'éducation",
];

const timeline = [
  {
    year: "2000",
    title: "Fondation de l'EIB",
    description:
      "L'Établissement d'Instruction de Base ouvre ses portes avec 3 classes et 85 élèves. La vision : offrir une éducation de qualité accessible.",
  },
  {
    year: "2005",
    title: "Ouverture du Collège",
    description:
      "Devant le succès du primaire, l'EIB crée sa section collège pour accompagner ses élèves dans la continuité de leur parcours.",
  },
  {
    year: "2010",
    title: "Nouveaux locaux",
    description:
      "Construction d'un nouveau bâtiment moderne avec laboratoire scientifique, salle informatique et bibliothèque.",
  },
  {
    year: "2015",
    title: "Ouverture du Lycée",
    description:
      "L'EIB devient un établissement complet maternelle-lycée avec l'ouverture de ses classes de seconde, première et terminale.",
  },
  {
    year: "2020",
    title: "20 ans d'excellence",
    description:
      "Célébration des 20 ans avec un taux de réussite record de 98% au baccalauréat et plus de 800 élèves inscrits.",
  },
  {
    year: "2025",
    title: "Aujourd'hui",
    description:
      "L'EIB continue d'innover avec de nouveaux partenariats internationaux, des équipements de pointe, une pédagogie résolument tournée vers l'avenir — et l'ouverture de l'École Professionnelle de la Santé.",
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        pretitle="Notre établissement"
        title="À propos de l'E.I.B"
        subtitle="Depuis plus de 25 ans, le Complexe Scolaire Privé Elhadj Ibrahima Barry forme des générations d'élèves avec rigueur et dévouement."
      />

      {/* Historique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <SectionTitle
                pretitle="Notre histoire"
                title="25 ans au service de l'éducation"
                subtitle="L'EIB est né d'une conviction simple : chaque enfant mérite le meilleur pour son avenir."
                align="left"
              />
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Fondé en 2000 par une équipe de pédagogues passionnés,
                  l&apos;Établissement d&apos;Instruction de Base s&apos;est
                  construit sur une ambition claire : offrir une éducation
                  d&apos;excellence accessible, dans un cadre de vie scolaire
                  épanouissant.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  En vingt-cinq ans, nous avons accueilli des milliers
                  d&apos;élèves, construit une équipe pédagogique d&apos;exception
                  et développé des infrastructures modernes. Notre taux de
                  réussite constant témoigne de l&apos;engagement quotidien de
                  nos équipes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aujourd&apos;hui, l&apos;EIB est un établissement complet
                  accueillant plus de 850 élèves, de la maternelle au lycée,
                  dans un environnement sécurisé et stimulant.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-100" />
                <div className="space-y-6">
                  {timeline.map((event, i) => (
                    <div key={i} className="relative flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                        {event.year.slice(2)}
                      </div>
                      <div className="pt-2 pb-4">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                            {event.year}
                          </span>
                          <h3 className="font-bold text-gray-900 text-sm">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mot de la direction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Message"
            title="Mot de la direction"
            align="center"
            className="mb-12"
          />
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100" />
            <div className="relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;À l&apos;EIB, nous croyons que chaque enfant porte en lui
                un potentiel extraordinaire. Notre rôle en tant
                qu&apos;éducateurs est de créer les conditions favorables à
                l&apos;éclosion de ce potentiel.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depuis la fondation de notre établissement, nous avons eu
                le privilège d&apos;accompagner des milliers d&apos;élèves
                dans leur parcours scolaire et personnel. Chaque réussite,
                chaque diplôme obtenu, chaque projet accompli nous remplit
                d&apos;une immense fierté.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nous nous engageons à maintenir les plus hauts standards
                d&apos;excellence, à innover en permanence dans nos méthodes
                pédagogiques et à offrir à chaque famille un partenariat de
                confiance basé sur la transparence et le respect mutuel.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">EIB</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">La Direction Générale</p>
                  <p className="text-gray-500 text-sm">
                    Complexe Scolaire Privé Elhadj Ibrahima Barry — E.I.B
                  </p>
                  <p className="text-gray-400 text-xs">Pita, Guinée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Notre boussole"
            title="Vision & Mission"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0 shadow-xl" padding="lg">
              <Eye className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre vision</h3>
              <p className="text-blue-200 leading-relaxed">
                Être l&apos;établissement scolaire de référence en Guinée,
                reconnu pour l&apos;excellence de son enseignement, la qualité
                de son encadrement pédagogique et sa capacité à former des
                citoyens compétents, intègres et ouverts sur le monde.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-xl" padding="lg">
              <Target className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
              <p className="text-amber-100 leading-relaxed">
                Offrir à chaque élève un enseignement de qualité qui développe
                ses compétences académiques, sa curiosité intellectuelle, son
                sens critique et ses valeurs humaines, pour lui permettre de
                réussir sa vie scolaire et professionnelle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Ce qui nous guide"
            title="Nos valeurs fondamentales"
            subtitle="Six piliers qui définissent l'identité de l'EIB et guident chacune de nos actions."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card key={i} hover padding="lg">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs pédagogiques */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Pédagogie"
            title="Nos objectifs pédagogiques"
            subtitle="Chaque décision pédagogique est guidée par ces objectifs fondamentaux."
            align="center"
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "850+", label: "Élèves", color: "text-blue-700" },
              { icon: Award, value: "25 ans", label: "D'expérience", color: "text-amber-600" },
              { icon: BookOpen, value: "60+", label: "Enseignants", color: "text-emerald-600" },
              { icon: Star, value: "96%", label: "Taux de réussite", color: "text-purple-600" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
