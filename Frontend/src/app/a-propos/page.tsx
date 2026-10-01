import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
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
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"

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
      year: "2013 - 2014",
      title: "Fondation et ouverture de l'E.I.B",
      description:
        "L'Établissement d'Instruction de Base (E.I.B) ouvre officiellement ses portes avec 6 classes et 85 élèves. Dès sa création, l'ambition est claire : offrir une éducation de qualité, fondée sur la rigueur, l'excellence et l'épanouissement des apprenants.",
    },
    {
      year: "2017",
      title: "Ouverture du Collège",
      description:
        "Face à la croissance constante des effectifs et à la confiance accordée par les familles, l'E.I.B élargit son offre de formation avec l'ouverture de sa section collège afin d'assurer la continuité du parcours scolaire de ses élèves.",
    },
    {
      year: "2018",
      title: "Création de l'École Professionnelle de la Santé",
      description:
        "L'E.I.B franchit une nouvelle étape dans son développement avec l'ouverture de l'École Professionnelle de la Santé, contribuant à la formation de futurs professionnels qualifiés dans le domaine sanitaire et médical.",
    },
    {
      year: "2021",
      title: "Ouverture du Lycée",
      description:
        "L'établissement poursuit son expansion avec l'ouverture du lycée et le renforcement de ses infrastructures pédagogiques, notamment des salles spécialisées, une bibliothèque et des équipements adaptés aux besoins de l'enseignement secondaire.",
    },
    {
      year: "2023",
      title: "Première promotion au Baccalauréat",
      description:
        "L'E.I.B présente sa première cohorte d'élèves au Baccalauréat. Cette promotion historique enregistre un excellent taux d'admission, confirmant la qualité de l'enseignement et l'engagement de l'équipe pédagogique.",
    },
    {
      year: "2025",
      title: "12 ans d'excellence éducative",
      description:
        "Après plus d'une décennie d'engagement au service de l'éducation, l'E.I.B s'impose comme une référence académique avec plusieurs centaines d'élèves formés et de nombreux succès enregistrés aux examens nationaux.",
    },
    {
      year: "2026",
      title: "Ouverture de l'E.I.B 2 à Dow Saré",
      description:
        "Afin de répondre à une demande croissante et de rapprocher davantage son offre éducative des familles, l'E.I.B inaugure un second établissement à Dow Saré. Cette nouvelle structure demeure rattachée au complexe principal et partage les mêmes valeurs d'excellence, de discipline et d'innovation pédagogique.",
    },
  ];

export default function AProposPage() {
  let isSante = "ecole-sante";

  return (
    <div className="min-h-screen">
      <PageHero
        pretitle="Notre établissement"
        title="À propos de l'E.I.B"
        subtitle="Depuis plus de 12 ans, le Complexe Scolaire Privé Elhadj Ibrahima Barry forme des générations d'élèves avec rigueur et dévouement."
      />

      {/* Historique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <SectionTitle
                pretitle="Notre histoire"
                title="12 ans au service de l'éducation"
                subtitle="L'EIB est né d'une conviction simple : chaque enfant mérite le meilleur pour son avenir."
                align="left"
              />
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Fondé en 2013 et officiellement ouvert en 2014,
                  l'Établissement d'Instruction de Base (E.I.B) est né
                  d'une volonté forte : offrir aux enfants guinéens une
                  éducation de qualité fondée sur la discipline, l'excellence
                  académique et les valeurs citoyennes.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Au fil des années, l'établissement a connu une croissance
                  remarquable avec l'ouverture du collège en 2017, de
                  l'École Professionnelle de la Santé en 2018 puis du lycée
                  en 2021. Ces différentes étapes ont permis à l'E.I.B de
                  devenir un complexe éducatif complet capable d'accompagner
                  ses apprenants à chaque étape de leur formation.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  En 2023, l'établissement a franchi un cap historique avec sa
                  première promotion au baccalauréat, enregistrant un excellent
                  taux d'admission qui confirme la qualité de son encadrement
                  pédagogique et l'engagement de ses enseignants.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Aujourd'hui, l'E.I.B accueille plus de 1000 élèves, encadrés
                  par une équipe pédagogique qualifiée dans un environnement
                  moderne, sécurisé et propice à la réussite. En 2026,
                  l'établissement poursuit son expansion avec l'ouverture de
                  l'E.I.B 2 à Dow Saré, un second site rattaché au complexe
                  principal et conçu pour rapprocher davantage l'excellence
                  éducative des familles.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-700">12+</p>
                    <p className="text-sm text-gray-500">Années d'expérience</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-blue-700">1000+</p>
                    <p className="text-sm text-gray-500">Élèves formés</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-blue-700">4</p>
                    <p className="text-sm text-gray-500">Cycles de formation</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-blue-700">2</p>
                    <p className="text-sm text-gray-500">Campus E.I.B</p>
                  </div>
                </div>
                <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6">
  <h3 className="text-2xl font-bold mb-2">
    Une référence éducative en Guinée
  </h3>

  <p className="text-blue-100 leading-relaxed">
    Grâce à la confiance des parents, à l'engagement de nos
    enseignants et aux performances de nos élèves, l'E.I.B
    poursuit sa mission d'excellence éducative tout en préparant
    les générations futures à relever les défis de demain.
  </p>
</div>
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
                        {event.year === "2013 - 2014" ? "13-14" : event.year.slice(2)}
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

      {/* Équipe de direction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Notre équipe"
            title="L'équipe de direction"
            subtitle="Quatre directeurs expérimentés au service de l'excellence pédagogique de l'E.I.B."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "M. Sâa Alexis Dembadouno",
                role: "Directeur",
                image: "/directMarternelle.jpeg",
                dept: "École Maternelle",
                phone: "+224 613 24 13 37",
                tel: "+224613241337",
                color: "from-emerald-400 to-teal-500",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
                text: "text-emerald-700",
              },
              {
                name: "M. Tely Baïlo Diallo",
                role: "Directeur",
                image: "/directeurPrimaire.jpeg",
                dept: "École Primaire",
                phone: "+224 620 47 13 92",
                tel: "+224620471392",
                color: "from-blue-400 to-indigo-500",
                bg: "bg-blue-50",
                border: "border-blue-200",
                text: "text-blue-700",
              },
              {
                name: "M. Mamadou Baïla Barry",
                role: "Directeur",
                image: "/directeurLycee.jpeg",
                dept: "Secondaire (Collège & Lycée)",
                phone: "+224 628 32 88 46",
                tel: "+224628328846",
                color: "from-violet-400 to-purple-600",
                bg: "bg-violet-50",
                border: "border-violet-200",
                text: "text-violet-700",
              },
              {
                name: "Dr Oumar Baïlo Kanté",
                role: "Directeur",
                image: "/directeurSante.jpeg",
                dept: "École Professionnelle de la Santé",
                phone: "+224 628 40 42 70",
                tel: "+224628404270",
                color: "from-rose-400 to-red-600",
                bg: "bg-rose-50",
                border: "border-rose-200",
                text: "text-rose-700",
              },
            ].map((director, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header coloré */}
                    <div className="relative h-72 overflow-hidden flex-shrink-0">
                      <Image
                        src={
                          director.image
                        }
                        alt={director.dep}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width:640px) 100vw, 300px"
                      />
                  </div>
                {/* Infos */}
                <div className="p-5 text-center">
                  <h3
                    className="font-bold text-[#0f2557] text-sm leading-tight mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {director.name}
                  </h3>
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full border ${director.bg} ${director.border} ${director.text} mb-4`}>
                    {director.dept}
                  </span>
                  {/* Contact */}
                  <div className="flex flex-col gap-2 mt-1">
                    <a
                      href={`tel:${director.tel}`}
                      className="flex items-center justify-center gap-2 text-xs text-slate-600 hover:text-[#0f2557] transition-colors"
                    >
                      <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px]">
                        <Phone className="w-4 h-4"/>
                      </span>
                      {director.phone}
                    </a>
                    <a
                      href={`https://wa.me/${director.tel.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <span className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center text-[10px]">
                        <FaWhatsapp className="w-6 h-6"/>
                      </span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
                Être l'établissement scolaire de référence en Guinée,
                reconnu pour l'excellence de son enseignement, la qualité
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
              { icon: Users, value: "1000+", label: "Élèves", color: "text-blue-700" },
              { icon: Award, value: "12 ans", label: "D'expérience", color: "text-amber-600" },
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

