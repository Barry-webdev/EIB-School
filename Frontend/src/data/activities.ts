import { Activity } from "@/types";

export const activitiesData: Activity[] = [
  {
    id: "1",
    title: "Club de Théâtre",
    description:
      "Nos élèves développent leur expression artistique, leur confiance en eux et leur créativité à travers des pièces de théâtre jouées lors de cérémonies scolaires.",
    image: "/images/activities/theatre.jpg",
    category: "culturelle",
  },
  {
    id: "2",
    title: "Équipe de Football",
    description:
      "l'E.I.B dispose d'une équipe de football compétitive qui participe aux tournois inter-établissements régionaux. Formation, discipline et esprit d'équipe sont au cœur de l'activité.",
    image: "/images/activities/football.jpg",
    category: "sportive",
  },
  {
    id: "3",
    title: "Sortie au Musée National",
    description:
      "Des sorties culturelles régulières permettent aux élèves de découvrir le patrimoine national, d'enrichir leurs connaissances et d'ouvrir leur horizon culturel.",
    image: "/images/activities/musee.jpg",
    category: "sortie",
  },
  {
    id: "4",
    title: "Concours de Mathématiques",
    description:
      "Chaque année, l'E.I.B organise un concours interne de mathématiques ouvert à tous les niveaux. Les lauréats représentent l'établissement dans les compétitions régionales.",
    image: "/images/activities/maths.jpg",
    category: "concours",
  },
  {
    id: "5",
    title: "Fête de Fin d'Année",
    description:
      "Une grande cérémonie annuelle réunit élèves, enseignants et familles pour célébrer les réussites, remettre les prix d'excellence et clôturer l'année scolaire dans la joie.",
    image: "/images/activities/ceremonie.jpg",
    category: "cérémonie",
  },
  {
    id: "6",
    title: "Club de Robotique",
    description:
      "Les passionnés de technologie se retrouvent au club robotique pour concevoir, programmer et faire fonctionner des robots. Une activité qui prépare aux métiers de demain.",
    image: "/images/activities/robotique.jpg",
    category: "culturelle",
  },
  {
    id: "7",
    title: "Tournoi de Basketball",
    description:
      "Le basketball est très populaire à l'E.I.B. Des tournois inter-classes sont organisés tout au long de l'année pour encourager la cohésion et l'esprit sportif.",
    image: "/images/activities/basketball.jpg",
    category: "sportive",
  },
  {
    id: "8",
    title: "Voyage Pédagogique",
    description:
      "Des voyages pédagogiques sont organisés pour les classes de fin de cycle. Ces expériences enrichissantes combinent apprentissage, découverte et cohésion de groupe.",
    image: "/images/activities/voyage.jpg",
    category: "sortie",
  },
  {
    id: "9",
    title: "Journée de la Science",
    description:
      "Chaque année, une journée entière est dédiée à la science : expériences, expositions, conférences et ateliers permettent aux élèves de découvrir les sciences en s'amusant.",
    image: "/images/activities/science.jpg",
    category: "événement",
  },
  {
    id: "10",
    title: "Concours de Littérature",
    description:
      "Le concours de rédaction et de poésie encourage les talents littéraires. Les meilleures œuvres sont publiées dans le journal scolaire de l'établissement.",
    image: "/images/activities/litterature.jpg",
    category: "concours",
  },
  {
    id: "11",
    title: "Club de Musique",
    description:
      "Le club musique accueille tous les élèves passionnés. Chorale, instruments, composition : un espace d'expression artistique ouvert et bienveillant.",
    image: "/images/activities/musique.jpg",
    category: "culturelle",
  },
  {
    id: "12",
    title: "Journée Portes Ouvertes",
    description:
      "Chaque année, l'E.I.B ouvre ses portes aux familles et futurs élèves pour découvrir l'établissement, rencontrer les enseignants et s'informer sur les programmes.",
    image: "/images/activities/portes-ouvertes.jpg",
    category: "événement",
  },
];

export const getActivitiesByCategory = (category: string): Activity[] =>
  activitiesData.filter((a) => a.category === category);

export const getFeaturedActivities = (count = 6): Activity[] =>
  activitiesData.slice(0, count);
