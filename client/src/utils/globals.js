const screens = [
  {
    title: "Core Phonics Survey",
    path: "/data-portal/target-screening/core-phonics-survey",
  },
  {
    title: "PAST",
    path: "/data-portal/target-screening/past",
  },
  {
    title: "QPS",
    path: "/data-portal/target-screening/qps",
  },
  {
    title: "Really Great Reading",
    path: "/data-portal/target-screening/really-great-reading",
  },
  {
    title: "Speech and Language",
    path: "/data-portal/target-screening/speech-and-language",
  },
  {
    title: "Psychomotor",
    path: "/data-portal/target-screening/psycho-motor",
  },
];

const grades = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: "SEN",
    label: "SEN",
  },
];

const sections = [
  {
    value: "red",
    label: "red",
  },
  {
    value: "blue",
    label: "blue",
  },
  {
    value: "yellow",
    label: "yellow",
  },
  {
    value: "green",
    label: "green",
  },
  {
    value: "pink",
    label: "pink",
  },
  {
    value: "orange",
    label: "orange",
  },
  {
    value: "purple",
    label: "purple",
  },
  {
    value: "white",
    label: "white",
  },
  {
    value: "SEN",
    label: "SEN",
  },
];

const teachingStrategies = [
  { value: "Direct instruction", label: "Direct instruction" },
  {
    value: "Explicit systematic instruction",
    label: "Explicit systematic instruction",
  },
  {
    value: "Cooperative learning strategies",
    label: "Cooperative learning strategies",
  },
  { value: "PALS routines/procedures", label: "PALS routines/procedures" },
  { value: "Reciprocal teaching", label: "Reciprocal teaching" },
  { value: "Peer teaching strategies", label: "Peer teaching strategies" },
  { value: "Think-pair-share", label: "Think-pair-share" },
  {
    value: "Visual representations/Visualization",
    label: "Visual representations/Visualization",
  },
  { value: "Schema instruction", label: "Schema instruction" },
  { value: "Metacognitive strategies", label: "Metacognitive strategies" },
  {
    value: "Active learning: reciprocal questioning",
    label: "Active learning: reciprocal questioning",
  },
  {
    value: "Active learning: praise procedure",
    label: "Active learning: praise procedure",
  },
  {
    value: "Active learning: muddiest point",
    label: "Active learning: muddiest point",
  },
  { value: "Active learning: other", label: "Active learning: other" },
  { value: "Differentiated instruction", label: "Differentiated instruction" },
  { value: "Personalized learning", label: "Personalized learning" },
  {
    value: "Universal Design for Learning",
    label: "Universal Design for Learning",
  },
  { value: "Classroom technology", label: "Classroom technology" },
  {
    value: "Gamification/game-based learning",
    label: "Gamification/game-based learning",
  },
  {
    value: "Convergent and divergent thinking",
    label: "Convergent and divergent thinking",
  },
  { value: "Project-based learning", label: "Project-based learning" },
  { value: "Experiential learning", label: "Experiential learning" },
  { value: "Inquiry-based learning", label: "Inquiry-based learning" },
  { value: "Problem-based learning", label: "Problem-based learning" },
  { value: "Interdisciplinary teaching", label: "Interdisciplinary teaching" },
  { value: "Service learning", label: "Service learning" },
  { value: "Portfolio work", label: "Portfolio work" },
  { value: "Student-led teaching", label: "Student-led teaching" },
  {
    value: "Accommodation for special needs",
    label: "Accommodation for special needs",
  },
  {
    value: "Modification for special needs",
    label: "Modification for special needs",
  },
  { value: "Guided learning", label: "Guided learning" },
];

const prescribedBooks = [
  { value: "Grade 1 French-P1", label: "Grade 1 French-P1" },
  { value: "Grade 1 French-P2", label: "Grade 1 French-P2" },
  { value: "Grade 2 French-P1", label: "Grade 2 French-P1" },
  { value: "Grade 2 French-P2", label: "Grade 2 French-P2" },
  { value: "Grade 3 French-P1", label: "Grade 3 French-P1" },
  { value: "Grade 3 French-P2", label: "Grade 3 French-P2" },
  { value: "Grade 4 French-P1", label: "Grade 4 French-P1" },
  { value: "Grade 4 French-P2", label: "Grade 4 French-P2" },
  { value: "Grade 5 French-P1", label: "Grade 5 French-P1" },
  { value: "Grade 5 French-P2", label: "Grade 5 French-P2" },
  { value: "Grade 6 French-P1", label: "Grade 6 French-P1" },
  { value: "Grade 6 French-P2", label: "Grade 6 French-P2" },
  { value: "Grade 1 English-P1", label: "Grade 1 English-P1" },
  { value: "Grade 1 English-P2", label: "Grade 1 English-P2" },
  { value: "Grade 2 English-P1", label: "Grade 2 English-P1" },
  { value: "Grade 2 English-P2", label: "Grade 2 English-P2" },
  { value: "Grade 3 English-P1", label: "Grade 3 English-P1" },
  { value: "Grade 3 English-P2", label: "Grade 3 English-P2" },
  { value: "Grade 4 English-P1", label: "Grade 4 English-P1" },
  { value: "Grade 4 English-P2", label: "Grade 4 English-P2" },
  { value: "Grade 5 English-P1", label: "Grade 5 English-P1" },
  { value: "Grade 5 English-P2", label: "Grade 5 English-P2" },
  { value: "Grade 6 English-P1", label: "Grade 6 English-P1" },
  { value: "Grade 6 English-P2", label: "Grade 6 English-P2" },
  { value: "Grade 1 Mathematics-P1", label: "Grade 1 Mathematics-P1" },
  { value: "Grade 1 Mathematics-P2", label: "Grade 1 Mathematics-P2" },
  { value: "Grade 2 Mathematics-P1", label: "Grade 2 Mathematics-P1" },
  { value: "Grade 2 Mathematics-P2", label: "Grade 2 Mathematics-P2" },
  { value: "Grade 3 Mathematics-P1", label: "Grade 3 Mathematics-P1" },
  { value: "Grade 3 Mathematics-P2", label: "Grade 3 Mathematics-P2" },
  { value: "Grade 4 Mathematics-P1", label: "Grade 4 Mathematics-P1" },
  { value: "Grade 4 Mathematics-P2", label: "Grade 4 Mathematics-P2" },
  { value: "Grade 5 Mathematics-P1", label: "Grade 5 Mathematics-P1" },
  { value: "Grade 5 Mathematics-P2", label: "Grade 5 Mathematics-P2" },
  { value: "Grade 6 Mathematics-P1", label: "Grade 6 Mathematics-P1" },
  { value: "Grade 6 Mathematics-P2", label: "Grade 6 Mathematics-P2" },
  { value: "Grade 4 Science-P1", label: "Grade 4 Science-P1" },
  { value: "Grade 4 Science-P2", label: "Grade 4 Science-P2" },
  {
    value: "Grade 4 History Geography-P1",
    label: "Grade 4 History Geography-P1",
  },
  {
    value: "Grade 4 History Geography-P2",
    label: "Grade 4 History Geography-P2",
  },
  { value: "Grade 4 Creole-P1", label: "Grade 4 Creole-P1" },
  { value: "Grade 4 Creole-P2", label: "Grade 4 Creole-P2" },
  { value: "Grade 5 Science-P1", label: "Grade 5 Science-P1" },
  { value: "Grade 5 Science-P2", label: "Grade 5 Science-P2" },
  {
    value: "Grade 5 History Geography-P1",
    label: "Grade 5 History Geography-P1",
  },
  {
    value: "Grade 5 History Geography-P2",
    label: "Grade 5 History Geography-P2",
  },
  { value: "Grade 5 Creole-P1", label: "Grade 5 Creole-P1" },
  { value: "Grade 5 Creole-P2", label: "Grade 5 Creole-P2" },
  { value: "Grade 6 Science-P1", label: "Grade 6 Science-P1" },
  { value: "Grade 6 Science-P2", label: "Grade 6 Science-P2" },
  {
    value: "Grade 6 History Geography-P1",
    label: "Grade 6 History Geography-P1",
  },
  {
    value: "Grade 6 History Geography-P2",
    label: "Grade 6 History Geography-P2",
  },
  { value: "Grade 6 Creole-P1", label: "Grade 6 Creole-P1" },
  { value: "Grade 6 Creole-P2", label: "Grade 6 Creole-P2" },
];

const subjects = [
  {
    value: "English",
    label: "English",
  },
  {
    value: "French",
    label: "French",
  },
  {
    value: "Mathematics",
    label: "Mathematics",
  },
  {
    value: "Creole",
    label: "Creole",
  },
  {
    value: "Science",
    label: "Science",
  },
  {
    value: "History & Geography",
    label: "History & Geography",
  },
  {
    value: "SSEE-Social, Scientific, and Environmental Education",
    label: "SSEE-Social, Scientific, and Environmental Education",
  },
  {
    value: "Visual Arts",
    label: "Visual Arts",
  },
  {
    value: "Performing Arts",
    label: "Performing Arts",
  },
  {
    value: "Citizenship education",
    label: "Citizenship education",
  },
  {
    value: "Road Safety",
    label: "Road Safety",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Physical Education",
    label: "Physical Education",
  },
  {
    value: "ICT Skills",
    label: "ICT Skills",
  },
];

const specialization = [
  { value: "Visual Arts", label: "Visual Arts" },
  { value: "Performing Arts", label: "Performing Arts" },
  { value: "Citizenship education", label: "Citizenship education" },
  { value: "Road Safety", label: "Road Safety" },
  { value: "Health", label: "Health" },
  { value: "Physical Education", label: "Physical Education" },
  { value: "ICT Skills", label: "ICT Skills" },
  { value: "Compulsory Core Subjects", label: "Compulsory Core Subjects" },
  { value: "Non-Core Subjects", label: "Non-Core Subjects" },
  { value: "Optional Core Subject(s)", label: "Optional Core Subject(s)" },
  {
    value: "CitizenshipAndValue",
    label: "Citizenship And Value",
  },
];
const language = [
  {
    value: "english",
    label: "english",
  },
  {
    value: "french",
    label: "french",
  },
  {
    value: "maths",
    label: "maths",
  },
  {
    value: "ssee",
    label: "ssee",
  },
  {
    value: "science",
    label: "science",
  },
  {
    value: "history",
    label: "history",
  },
  {
    value: "creole",
    label: "creole",
  },
];
const languageLess = [
  {
    value: "english",
    label: "english",
  },
  {
    value: "french",
    label: "french",
  },

  {
    value: "creole",
    label: "creole",
  },
];

const assessmentOptions = [
  { value: "Pre-unit assessment", label: "Pre-unit assessment" },
  {
    value: "Formative - In-lesson polls",
    label: "Formative - In-lesson polls",
  },
  {
    value: "Formative assessments - Partner quizzes",
    label: "Formative assessments - Partner quizzes",
  },
  {
    value: "Formative assessments - Self-evaluations",
    label: "Formative assessments - Self-evaluations",
  },
  {
    value: "Formative assessments - Ed-tech games",
    label: "Formative assessments - Ed-tech games",
  },
  {
    value: "Formative assessments - One-minute papers",
    label: "Formative assessments - One-minute papers",
  },
  {
    value: "Formative assessments - Visuals",
    label:
      "Formative assessments - Visuals (e.g., diagrams, charts or maps) to demonstrate learning",
  },
  {
    value: "Formative assessments - Exit tickets",
    label: "Formative assessments - Exit tickets",
  },
  {
    value: "Formative assessments - La martiniere",
    label: "Formative assessments - La martiniere",
  },
  {
    value: "Formative assessments - Other",
    label: "Formative assessments - Other",
  },
  {
    value: "Summative assessments - End-of-unit test",
    label: "Summative assessments - End-of-unit test",
  },
  {
    value: "Summative assessments - End-of-chapter test",
    label: "Summative assessments - End-of-chapter test",
  },
  {
    value: "Summative assessments - Standardized tests",
    label: "Summative assessments - Standardized tests",
  },
  {
    value: "Summative assessments - Final projects or portfolios",
    label: "Summative assessments - Final projects or portfolios",
  },
  {
    value: "Summative assessments - Other",
    label: "Summative assessments - Other",
  },
  { value: "Progress monitoring", label: "Progress monitoring" },
  { value: "Screening", label: "Screening" },
  { value: "Classwork", label: "Classwork" },
  { value: "Homework", label: "Homework" },
  { value: "Student interaction", label: "Student interaction" },
  { value: "Written assignments", label: "Written assignments" },
  { value: "Other", label: "Other" },
];

const months = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

const academicYear = [
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
  {
    value: "2027",
    label: "2027",
  },
];
const academicTerm = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
];
const subjects2 = {
  1: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Mathematics", label: "Mathematics" },
    { value: "Science", label: "Science" },
    { value: "SSEE", label: "SSEE" },
    { value: "History", label: "History" },
    { value: "Geography", label: "Geography" },
    { value: "Visual Arts", label: "Visual Arts" },
    { value: "Performing Arts", label: "Performing Arts" },
    { value: "Health", label: "Health" },
    { value: "Physical Education", label: "Physical Education" },
    { value: "Road Safety", label: "Road Safety" },
    { value: "Citizenship and Values", label: "Citizenship and Values" },
    { value: "ICT", label: "ICT" },
  ],
  2: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Mathematics", label: "Mathematics" },
  ],
  3: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Mathematics", label: "Mathematics" },
    {
      value: "SOCIAL, SCIENTIFIC AND ENVIRONMENTAL EDUCATION",
      label: "SOCIAL, SCIENTIFIC AND ENVIRONMENTAL EDUCATION",
    },
  ],
  4: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Mathematics", label: "Mathematics" },
    { value: "Science", label: "Science" },
    { value: "History & Geography", label: "History & Geography" },
  ],
  5: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Mathematics", label: "Mathematics" },
    { value: "Science", label: "Science" },
    { value: "History & Geography", label: "History & Geography" },
  ],
  6: [
    { value: "Kreol Rodrige", label: "Kreol Rodrige" },
    { value: "Français", label: "Français" },
    { value: "English", label: "English" },
    { value: "Science", label: "Science" },
    { value: "History & Geography", label: "History & Geography" },
  ],
};
const topicsOrSubtopics = [
  { value: "Ma maison", label: "Ma maison" },
  { value: "Ma famille", label: "Ma famille" },
  { value: "Le nom propre", label: "Le nom propre" },
  { value: "Les sons", label: "Les sons" },
  { value: "Mon ecole", label: "Mon ecole" },
  { value: "Mon ami(e)", label: "Mon ami(e)" },
  { value: "Le matériel scolaire", label: "Le matériel scolaire" },
  { value: "Le nom commun", label: "Le nom commun" },
  { value: "Mes jeux", label: "Mes jeux" },
  { value: "Les jeux traditionnels", label: "Les jeux traditionnels" },
  { value: "Le temps", label: "Le temps" },
  { value: "Le nombre", label: "Le nombre" },
  { value: "le gouter", label: "le gouter" },
  { value: "Les fruits et les legumes", label: "Les fruits et les legumes" },
  { value: "autres produits", label: "autres produits" },
  { value: "Le repas", label: "Le repas" },
  { value: "Les articles", label: "Les articles" },
  { value: "Les vehicules", label: "Les vehicules" },
  { value: "les moyens de transport", label: "les moyens de transport" },
  { value: "les adjectifs", label: "les adjectifs" },
  { value: "les sons ", label: "les sons " },
  { value: "Les animaux", label: "Les animaux" },
  { value: "Les animaux de compagnie", label: "Les animaux de compagnie" },
  { value: "Les animaux sauvages", label: "Les animaux sauvages" },
  { value: "Où habitent les animaux?", label: "Où habitent les animaux?" },
  { value: "Les métiers", label: "Les métiers" },
  { value: "Le genre", label: "Le genre" },
  { value: "Home", label: "Home" },
  { value: "School", label: "School" },
  { value: "Games", label: "Games" },
  { value: "Food", label: "Food" },
  { value: "Transport", label: "Transport" },
  { value: "Animals", label: "Animals" },
  {
    value:
      "Naming colours (integrate with practice of fine motor skills)-colour by letters",
    label:
      "Naming colours (integrate with practice of fine motor skills)-colour by letters",
  },
  {
    value: "My name is …../Fill a name tag",
    label: "My name is …../Fill a name tag",
  },
  { value: "Members of the family", label: "Members of the family" },
  { value: "Greetings ", label: "Greetings " },
  {
    value: "Action verbs (self-care routine)",
    label: "Action verbs (self-care routine)",
  },
  { value: "Rooms in the house", label: "Rooms in the house" },
  { value: "Weather ", label: "Weather " },
  { value: "Sound out words", label: "Sound out words" },
  { value: "Days of the week", label: "Days of the week" },
  { value: "Stationary/in  a classroom", label: "Stationary/in  a classroom" },
  { value: "Classroom instructions", label: "Classroom instructions" },
  {
    value: "Blend and segment with known letter sounds ",
    label: "Blend and segment with known letter sounds ",
  },
  { value: "Complete words", label: "Complete words" },
  { value: "months", label: "months" },
  { value: "games", label: "games" },
  { value: "directions", label: "directions" },
  { value: "action verbs (games)", label: "action verbs (games)" },
  { value: "Feelings", label: "Feelings" },
  { value: "Question words", label: "Question words" },
  { value: "Personal pronouns", label: "Personal pronouns" },
  {
    value: "Little writers (forming sentences)",
    label: "Little writers (forming sentences)",
  },
  { value: "Form simple sentences", label: "Form simple sentences" },
  { value: "Food items", label: "Food items" },
  { value: "Cutlery", label: "Cutlery" },
  { value: "Meals", label: "Meals" },
  { value: "Politeness", label: "Politeness" },
  {
    value: "Identify different words in a sentence",
    label: "Identify different words in a sentence",
  },
  { value: "Spacing between words", label: "Spacing between words" },
  { value: "Means of transport", label: "Means of transport" },
  { value: "Places we go to", label: "Places we go to" },
  { value: "clothing items", label: "clothing items" },
  { value: "Prepositions", label: "Prepositions" },
  {
    value: "Write words in correct order",
    label: "Write words in correct order",
  },
  { value: "Phonemic Awarenes", label: "Phonemic Awarenes" },
  { value: "Professions", label: "Professions" },
  { value: "Parts of the body", label: "Parts of the body" },
  { value: "Singular and plural forms", label: "Singular and plural forms" },
  {
    value: "Complete sentences with correct word",
    label: "Complete sentences with correct word",
  },
  { value: "Reper dan letan (lanin)", label: "Reper dan letan (lanin)" },
  { value: "Reper dan lanin (mwa)", label: "Reper dan lanin (mwa)" },
  { value: "Reper dan mwa (dat)", label: "Reper dan mwa (dat)" },
  { value: "Reper dan lasemenn (zour)", label: "Reper dan lasemenn (zour)" },
  { value: "Dekoupaz ek kont silab", label: "Dekoupaz ek kont silab" },
  { value: "Reper dan letan", label: "Reper dan letan" },
  { value: "Koze pou reflesi", label: "Koze pou reflesi" },
  { value: "Reper dan lazournin", label: "Reper dan lazournin" },
  {
    value: "Diferans ant “ti”, “ti pe”, “pe”, “pou”",
    label: "Diferans ant “ti”, “ti pe”, “pe”, “pou”",
  },
  { value: "Reprezantasion letan", label: "Reprezantasion letan" },
  { value: "Observ so lanvironnman", label: "Observ so lanvironnman" },
  {
    value: "Diskriminn fonem inisial dan bãnn mo",
    label: "Diskriminn fonem inisial dan bãnn mo",
  },
  { value: "Ekout enn zistwār", label: "Ekout enn zistwār" },
  { value: "Prodwir enn text ekri", label: "Prodwir enn text ekri" },
  { value: "Alfabet Kreol Rodrige", label: "Alfabet Kreol Rodrige" },
  { value: "SINBOL ", label: "SINBOL " },
  {
    value: "Ekout enn zistwār avek atansion",
    label: "Ekout enn zistwār avek atansion",
  },
  {
    value: "Redir enn zistwār ki mo inn tande",
    label: "Redir enn zistwār ki mo inn tande",
  },
  {
    value: "Fer atansion bãnn personaz dan enn zistwā",
    label: "Fer atansion bãnn personaz dan enn zistwā",
  },
  { value: "Servi “mo” ek “to”", label: "Servi “mo” ek “to”" },
  { value: "pratk lekritir", label: "pratk lekritir" },
  { value: "lektir", label: "lektir" },
  { value: "Aprãnn prepār nou sak", label: "Aprãnn prepār nou sak" },
  { value: "Kont depi enn ziskan dis", label: "Kont depi enn ziskan dis" },
];

const textbooks2 = {
  3: [
    { value: "Part 1", label: "Part 1" },
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
    { value: "Part 2", label: "Part 2" },
  ],
  4: [
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
  ],
  1: [
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
  ],
  2: [
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
  ],
  5: [
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
    { value: "Book 1", label: "Book 1" },
    { value: "Book 2", label: "Book 2" },
    { value: "Part 1", label: "Part 1" },
    { value: "Part 2", label: "Part 2" },
  ],
  6: [
    { value: "Volim 1", label: "Volim 1" },
    { value: "Volim 2", label: "Volim 2" },
  ],
};
const topicsOrSubtopics2 = {
  1: [
    { value: "Anou koze", label: "Anou koze" },
    { value: "Anou dekouver let ek son", label: "Anou dekouver let ek son" },
    { value: "Anou ekrir", label: "Anou ekrir" },
    { value: "Anou Lir", label: "Anou Lir" },
    { value: "Anou dekouver mo", label: "Anou dekouver mo" },
    { value: "Ma maison", label: "Ma maison" },
    { value: "Ma famille", label: "Ma famille" },
    { value: "Le nom propre", label: "Le nom propre" },
    { value: "Etude de son", label: "Etude de son" },
    { value: "Mon ecole", label: "Mon ecole" },
    { value: "Mon ami(e)", label: "Mon ami(e)" },
    { value: "Le matériel scolaire", label: "Le matériel scolaire" },
    { value: "Le nom commun", label: "Le nom commun" },
    { value: "Assemblage syllabique", label: "Assemblage syllabique" },
    { value: "Mes jeux", label: "Mes jeux" },
    { value: "Les jeux traditionnels", label: "Les jeux traditionnels" },
    { value: "Le temps", label: "Le temps" },
    { value: "Le nombre", label: "Le nombre" },
    { value: "le gouter", label: "le gouter" },
    { value: "Les fruits et les legumes", label: "Les fruits et les legumes" },
    { value: "autres produits", label: "autres produits" },
    { value: "Le repas", label: "Le repas" },
    { value: "Les articles", label: "Les articles" },
    { value: "Les vehicules", label: "Les vehicules" },
    { value: "les moyens de transport", label: "les moyens de transport" },
    { value: "les adjectifs", label: "les adjectifs" },
    { value: "Les animaux", label: "Les animaux" },
    { value: "Les animaux de compagnie", label: "Les animaux de compagnie" },
    { value: "Les animaux sauvages", label: "Les animaux sauvages" },
    { value: "Où habitent les animaux?", label: "Où habitent les animaux?" },
    { value: "Les métiers", label: "Les métiers" },
    { value: "Le genre", label: "Le genre" },
    {
      value: "Forming letters (integrated )",
      label: "Forming letters (integrated )",
    },
    {
      value:
        "Learning letter names (formally integrate with teaching of letter sound correspondence)",
      label:
        "Learning letter names (formally integrate with teaching of letter sound correspondence)",
    },
    {
      value:
        "Naming colours (integrate with practice of fine motor skills)-colour by letters",
      label:
        "Naming colours (integrate with practice of fine motor skills)-colour by letters",
    },
    {
      value: "My name is …../Fill a name tag",
      label: "My name is …../Fill a name tag",
    },
    { value: "Members of the family", label: "Members of the family" },
    { value: "Greetings", label: "Greetings" },
    {
      value: "Action verbs (self-care routine)",
      label: "Action verbs (self-care routine)",
    },
    { value: "Rooms in the house", label: "Rooms in the house" },
    { value: "Weather", label: "Weather" },
    { value: "Answering questions", label: "Answering questions" },
    { value: "Sound out words", label: "Sound out words" },
    { value: "Days of the week", label: "Days of the week" },
    { value: "School", label: "School" },
    {
      value: "Stationary/in  a classroom",
      label: "Stationary/in  a classroom",
    },
    { value: "The sentence", label: "The sentence" },
    {
      value: "Blend and segment with known letter sounds",
      label: "Blend and segment with known letter sounds",
    },
    { value: "Complete words", label: "Complete words" },
    { value: "months", label: "months" },
    { value: "games", label: "games" },
    { value: "directions", label: "directions" },
    { value: "action verbs (games)", label: "action verbs (games)" },
    { value: "Feelings", label: "Feelings" },
    { value: "Question words", label: "Question words" },
    { value: "Personal pronouns", label: "Personal pronouns" },
    {
      value: "Little writers (forming sentences)",
      label: "Little writers (forming sentences)",
    },
    { value: "Form simple sentences", label: "Form simple sentences" },
    { value: "Food items", label: "Food items" },
    { value: "Cutlery", label: "Cutlery" },
    { value: "Meals", label: "Meals" },
    { value: "Politeness", label: "Politeness" },
    {
      value: "Identify different words in a sentence",
      label: "Identify different words in a sentence",
    },
    { value: "Spacing between words", label: "Spacing between words" },
    { value: "Means of transport", label: "Means of transport" },
    { value: "Places we go to", label: "Places we go to" },
    { value: "clothing items", label: "clothing items" },
    { value: "Prepositions", label: "Prepositions" },
    {
      value: "Write words in correct order",
      label: "Write words in correct order",
    },
    { value: "Phonemic Awarenes", label: "Phonemic Awarenes" },
    { value: "Animals", label: "Animals" },
    { value: "Professions", label: "Professions" },
    { value: "Parts of the body", label: "Parts of the body" },
    { value: "Singular and plural forms", label: "Singular and plural forms" },
    {
      value: "Complete sentences with correct word",
      label: "Complete sentences with correct word",
    },
    { value: "Shapes", label: "Shapes" },
    { value: "Colours", label: "Colours" },
    { value: "Numbers", label: "Numbers" },
    { value: "Length", label: "Length" },
    { value: "Time", label: "Time" },
    { value: "Measure", label: "Measure" },
    { value: "Mass", label: "Mass" },
    { value: "Addition", label: "Addition" },
    { value: "Ordering", label: "Ordering" },
    { value: "Ordinal Numbers", label: "Ordinal Numbers" },
    { value: "Money", label: "Money" },
    { value: "Shapes and Colours", label: "Shapes and Colours" },
    { value: "Numbers 1 - 10", label: "Numbers 1 - 10" },
    { value: "Numbers 0 - 10", label: "Numbers 0 - 10" },
  ],
  2: [
    { value: "Zour Larantre", label: "Zour Larantre" },
    { value: "“Isabelle bwār dimiel”", label: "“Isabelle bwār dimiel”" },
    { value: "Son [l], Let /l/, ek /L/", label: "Son [l], Let /l/, ek /L/" },
    { value: "L, l", label: "L, l" },
    {
      value: "Bann mo pou salitasion ek polites.",
      label: "Bann mo pou salitasion ek polites.",
    },
    {
      value: "Silab kot nou trouv son [l]",
      label: "Silab kot nou trouv son [l]",
    },
    { value: "Fraz", label: "Fraz" },
    { value: "Evaliasion", label: "Evaliasion" },
    { value: "Sirandãnn", label: "Sirandãnn" },
    { value: "Lavi!", label: "Lavi!" },
    { value: "Nouvo lanin, nouvo klas", label: "Nouvo lanin, nouvo klas" },
    { value: "“Enn ti moustik”", label: "“Enn ti moustik”" },
    { value: "Son [k], Let /k/ , ek /K/", label: "Son [k], Let /k/ , ek /K/" },
    { value: "K, k", label: "K, k" },
    {
      value: "Silab kot nou trouv son [k] ek let /k/",
      label: "Silab kot nou trouv son [k] ek let /k/",
    },
    {
      value: "Fraz deklaratif (pou dir kiksoz)",
      label: "Fraz deklaratif (pou dir kiksoz)",
    },
    {
      value: "Fabrik enn kart idantite  Sirandãnn",
      label: "Fabrik enn kart idantite  Sirandãnn",
    },
    { value: "Enn lazournin difisil", label: "Enn lazournin difisil" },
    { value: "Enn nouvo kamarad", label: "Enn nouvo kamarad" },
    {
      value: "“Jonathan enn ti-garson tirbilan”",
      label: "“Jonathan enn ti-garson tirbilan”",
    },
    { value: "Son [ã] Let /an/", label: "Son [ã] Let /an/" },
    { value: "An, an", label: "An, an" },
    { value: "Bãnn zwe dan lakour lekol", label: "Bãnn zwe dan lakour lekol" },
    {
      value: "Silab kot nou trouv son [ã] ek let /an/",
      label: "Silab kot nou trouv son [ã] ek let /an/",
    },
    {
      value: "Fraz  interogatif  (pou poz kestion)",
      label: "Fraz  interogatif  (pou poz kestion)",
    },
    { value: "Prolonzman", label: "Prolonzman" },
    {
      value: "Enn sante tradisionel Rodrig",
      label: "Enn sante tradisionel Rodrig",
    },
    { value: "Ler rekreasion", label: "Ler rekreasion" },
    { value: "“Dora, enn gro denn”", label: "“Dora, enn gro denn”" },
    { value: "Son [d] Let /D/ ek /d/", label: "Son [d] Let /D/ ek /d/" },
    { value: "D, d", label: "D, d" },
    { value: "Diferan plas dan lekol", label: "Diferan plas dan lekol" },
    {
      value: "Silab kot nou trouv son [d] ek let /d/",
      label: "Silab kot nou trouv son [d] ek let /d/",
    },
    {
      value: "Transformasion fraz deklaratif an fraz interogatif",
      label: "Transformasion fraz deklaratif an fraz interogatif",
    },
    { value: "Zoli landrwa", label: "Zoli landrwa" },
    { value: "Konpreansion", label: "Konpreansion" },
    { value: "Lektir", label: "Lektir" },
    { value: "Let ek son", label: "Let ek son" },
    { value: "Lekritir", label: "Lekritir" },
    { value: "Silab", label: "Silab" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Gramer", label: "Gramer" },
    { value: "Mes amis", label: "Mes amis" },
    { value: "Mes emotions", label: "Mes emotions" },
    { value: "Les mots magiques", label: "Les mots magiques" },
    { value: "Mes jeux", label: "Mes jeux" },
    { value: "Le nombre", label: "Le nombre" },
    { value: "Etude de son", label: "Etude de son" },
    { value: "Difference entre 2 sons", label: "Difference entre 2 sons" },
    { value: "Assemblage syllabique", label: "Assemblage syllabique" },
    { value: "Les fêtes", label: "Les fêtes" },
    { value: "Mon anniversaire", label: "Mon anniversaire" },
    { value: "La fete du pain", label: "La fete du pain" },
    { value: "La fete de la musique", label: "La fete de la musique" },
    { value: "Prepositions", label: "Prepositions" },
    { value: "Les voyages", label: "Les voyages" },
    { value: "Les moyens de transports", label: "Les moyens de transports" },
    { value: "quelques endroits", label: "quelques endroits" },
    { value: "mon pays", label: "mon pays" },
    { value: "mon voyage", label: "mon voyage" },
    { value: "Le groupe nominal", label: "Le groupe nominal" },
    { value: "Liaison", label: "Liaison" },
    { value: "Elison", label: "Elison" },
    { value: "Les jardins", label: "Les jardins" },
    { value: "Les outils de jardinage", label: "Les outils de jardinage" },
    { value: "Quelques accessoires", label: "Quelques accessoires" },
    { value: "Les graines", label: "Les graines" },
    { value: "Mon jardin", label: "Mon jardin" },
    { value: "La phrase", label: "La phrase" },
    { value: "Les types de phrases", label: "Les types de phrases" },
    { value: "La phrase declarative", label: "La phrase declarative" },
    { value: "La phrase interrogative", label: "La phrase interrogative" },
    { value: "La phrase exclamative", label: "La phrase exclamative" },
    { value: "Les phrases", label: "Les phrases" },
    {
      value: "Difference entre deux sons",
      label: "Difference entre deux sons",
    },
    { value: "Les saisons", label: "Les saisons" },
    { value: "Les vetements d'hiver", label: "Les vetements d'hiver" },
    { value: "Les vetements d'ete", label: "Les vetements d'ete" },
    { value: "Les saisons dans le monde", label: "Les saisons dans le monde" },
    { value: "Le temps", label: "Le temps" },
    { value: "Les pronoms personnels", label: "Les pronoms personnels" },
    { value: "La BD", label: "La BD" },
    { value: "Parties d'une BD", label: "Parties d'une BD" },
    { value: "Les expressions", label: "Les expressions" },
    { value: "Les bulles", label: "Les bulles" },
    {
      value: "Les matériels du dessinateur",
      label: "Les matériels du dessinateur",
    },
    { value: "Les adjectifs", label: "Les adjectifs" },
    { value: "Les adjectifs au feminin", label: "Les adjectifs au feminin" },
    { value: "Types of weather", label: "Types of weather" },
    { value: "Weather forecast", label: "Weather forecast" },
    {
      value: "Clothing items (Dressing for weather conditions)",
      label: "Clothing items (Dressing for weather conditions)",
    },
    { value: "Yesterday/today", label: "Yesterday/today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "Capital letters", label: "Capital letters" },
    { value: "Full stop", label: "Full stop" },
    { value: "Determinants", label: "Determinants" },
    { value: "Personal pronouns", label: "Personal pronouns" },
    { value: "Sound it out", label: "Sound it out" },
    {
      value: "Blending with known letter sounds; reading decodable sentences",
      label: "Blending with known letter sounds; reading decodable sentences",
    },
    { value: "Celebrations", label: "Celebrations" },
    { value: "Months of the year", label: "Months of the year" },
    { value: "Family members", label: "Family members" },
    { value: "Rooms of the house", label: "Rooms of the house" },
    { value: "Gender", label: "Gender" },
    { value: "Possessive adjectives", label: "Possessive adjectives" },
    { value: "Present continuous tense", label: "Present continuous tense" },
    { value: "Drawing my bedroom", label: "Drawing my bedroom" },
    { value: "Habitat", label: "Habitat" },
    { value: "Food", label: "Food" },
    { value: "Texture", label: "Texture" },
    { value: "Singular and plural forms", label: "Singular and plural forms" },
    { value: "Poster: the great circus", label: "Poster: the great circus" },
    { value: "Politeness", label: "Politeness" },
    { value: "Kindness", label: "Kindness" },
    { value: "Games", label: "Games" },
    { value: "Opposites", label: "Opposites" },
    { value: "Conjunctions", label: "Conjunctions" },
    {
      value: "Best friend award certificate",
      label: "Best friend award certificate",
    },
    { value: "Means of transport", label: "Means of transport" },
    { value: "Airport", label: "Airport" },
    { value: "Where, who", label: "Where, who" },
    { value: "Postcard", label: "Postcard" },
    { value: "Pet houses", label: "Pet houses" },
    { value: "Caring for pets", label: "Caring for pets" },
    {
      value: "Affirmative and negative forms",
      label: "Affirmative and negative forms",
    },
    { value: "Question words", label: "Question words" },
    { value: "A note on my pet", label: "A note on my pet" },
    { value: "Vegetables", label: "Vegetables" },
    { value: "Fruits", label: "Fruits" },
    { value: "Flowers", label: "Flowers" },
    { value: "Garden tools", label: "Garden tools" },
    { value: "Animals and insects", label: "Animals and insects" },
    { value: "Future tense", label: "Future tense" },
    { value: "Articles", label: "Articles" },
    { value: "Plural form", label: "Plural form" },
    {
      value: "Catty the caterpillar story",
      label: "Catty the caterpillar story",
    },
    { value: "Strange creatures", label: "Strange creatures" },
    { value: "Party activities", label: "Party activities" },
    { value: "possessive adjectives", label: "possessive adjectives" },
    { value: "My alien poster", label: "My alien poster" },
    { value: "Shapes", label: "Shapes" },
    { value: "Eleven to nineteen", label: "Eleven to nineteen" },
    { value: "Length", label: "Length" },
    { value: "Twenty to one hundred", label: "Twenty to one hundred" },
    { value: "One hundred", label: "One hundred" },
    { value: "Numerals 1 - 100", label: "Numerals 1 - 100" },
    { value: "Mass", label: "Mass" },
    { value: "Ordinal Numbers", label: "Ordinal Numbers" },
    { value: "Addition", label: "Addition" },
    { value: "Subtraction", label: "Subtraction" },
    { value: "Capacity", label: "Capacity" },
    { value: "Time", label: "Time" },
    { value: "Multiplication", label: "Multiplication" },
    { value: "Money", label: "Money" },
    { value: "Division", label: "Division" },
  ],
  3: [
    { value: "Observasion", label: "Observasion" },
    { value: "Konpreansion", label: "Konpreansion" },
    { value: "Lortograf", label: "Lortograf" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Gramer", label: "Gramer" },
    { value: "Prolonzman", label: "Prolonzman" },
    { value: "Lektir", label: "Lektir" },
    { value: "Silab", label: "Silab" },
    { value: "Lapes ourit", label: "Lapes ourit" },
    { value: "Lekritir", label: "Lekritir" },
    { value: "Konzigezon", label: "Konzigezon" },
    {
      value: "Les vacances et la rentree",
      label: "Les vacances et la rentree",
    },
    { value: "Observation d'image", label: "Observation d'image" },
    { value: "Après les vacances", label: "Après les vacances" },
    { value: "La pêche", label: "La pêche" },
    { value: "La nature", label: "La nature" },
    {
      value: "La majuscule et la minuscule",
      label: "La majuscule et la minuscule",
    },
    { value: "Les signes de ponctuation", label: "Les signes de ponctuation" },
    { value: "Ecrire le son [o]", label: "Ecrire le son [o]" },
    { value: "Le temps", label: "Le temps" },
    { value: "Malcom de Chazal", label: "Malcom de Chazal" },
    { value: "Les livres et la lecture", label: "Les livres et la lecture" },
    { value: "Observation d'images", label: "Observation d'images" },
    { value: "A nous les livres", label: "A nous les livres" },
    { value: "La bibliothèque", label: "La bibliothèque" },
    { value: "Le livre", label: "Le livre" },
    { value: "Les animaux marins", label: "Les animaux marins" },
    { value: "Ecrire c/ç", label: "Ecrire c/ç" },
    { value: "Ecrire le son [e]", label: "Ecrire le son [e]" },
    { value: "Le présent de l'indicatif", label: "Le présent de l'indicatif" },
    { value: "La phrase négative", label: "La phrase négative" },
    {
      value: "Les animaux et leurs petits",
      label: "Les animaux et leurs petits",
    },
    { value: "Le passé et le présent", label: "Le passé et le présent" },
    { value: "En route pour l'école", label: "En route pour l'école" },
    { value: "Les moyens de transport", label: "Les moyens de transport" },
    { value: "Les commerces", label: "Les commerces" },
    { value: "Les arbres fruitiers", label: "Les arbres fruitiers" },
    { value: "Ecire les sons", label: "Ecire les sons" },
    { value: "La phrase interrogative", label: "La phrase interrogative" },
    { value: "Les maison du monde", label: "Les maison du monde" },
    { value: "Musique et chansons", label: "Musique et chansons" },
    { value: "Retour à Petit Gabriel", label: "Retour à Petit Gabriel" },
    {
      value: "Scènes de vie et métiers à Rodrigues",
      label: "Scènes de vie et métiers à Rodrigues",
    },
    {
      value: "Le son ɲ (gn); le son [wa] -oi",
      label: "Le son ɲ (gn); le son [wa] -oi",
    },
    {
      value: "Le passé composé de l'indicatif",
      label: "Le passé composé de l'indicatif",
    },
    { value: "L'adjectif possessif", label: "L'adjectif possessif" },
    { value: "Les sirandanes", label: "Les sirandanes" },
    {
      value: "la nature et les traitements des déchets",
      label: "la nature et les traitements des déchets",
    },
    { value: "La grande sortie", label: "La grande sortie" },
    {
      value: "Synonymes, contraires et mots de la même famille",
      label: "Synonymes, contraires et mots de la même famille",
    },
    { value: "Le recyclage", label: "Le recyclage" },
    {
      value: "Transformer des verbes en noms",
      label: "Transformer des verbes en noms",
    },
    {
      value: "Créer des verbes à partir des mots en -eur",
      label: "Créer des verbes à partir des mots en -eur",
    },
    {
      value: "Les sons bR, dR, fR, gR, kR, pR, tR, vR; oir/oire",
      label: "Les sons bR, dR, fR, gR, kR, pR, tR, vR; oir/oire",
    },
    {
      value: "Le futur simple de l'indicatif-",
      label: "Le futur simple de l'indicatif-",
    },
    {
      value: "Le pluriel des noms communs",
      label: "Le pluriel des noms communs",
    },
  ],
  4: [
    {
      value: "Lir ek konpran enn zistwār plizoumwin long",
      label: "Lir ek konpran enn zistwār plizoumwin long",
    },
    { value: "Pran laparol pou kominike", label: "Pran laparol pou kominike" },
    {
      value: "Manifeste enn familiarite avek diferan tip text",
      label: "Manifeste enn familiarite avek diferan tip text",
    },
    {
      value: "Rekonet ek prodir enn fraz sinp",
      label: "Rekonet ek prodir enn fraz sinp",
    },
    {
      value: "Idantifie son &apos;n&apos; ek &apos;nn&apos;",
      label: "Idantifie son &apos;n&apos; ek &apos;nn&apos;",
    },
    {
      value: "Idantifie son &apos;on&apos; ek &apos;onn&apos;",
      label: "Idantifie son &apos;on&apos; ek &apos;onn&apos;",
    },
    {
      value: "Idantifie ek konpran kronolozi enn zistwār",
      label: "Idantifie ek konpran kronolozi enn zistwār",
    },
    { value: "Servi bann mo", label: "Servi bann mo" },
    {
      value: "Ekout enn zistwār avek atansion",
      label: "Ekout enn zistwār avek atansion",
    },
    {
      value: "Diferansie ant form long ek form kourt bãnn verb",
      label: "Diferansie ant form long ek form kourt bãnn verb",
    },
    {
      value: "Konpran fenomenn diplikasion verb",
      label: "Konpran fenomenn diplikasion verb",
    },
    {
      value: "Devlop konpetans pou servi diksioner",
      label: "Devlop konpetans pou servi diksioner",
    },
    {
      value: "Anplway bãnn sign ponktiasion avek pertinans",
      label: "Anplway bãnn sign ponktiasion avek pertinans",
    },
    { value: "Idantifie son “wa”", label: "Idantifie son “wa”" },
    {
      value: "Devlop kapasite pou lir diferan tip text: poem ek lafis",
      label: "Devlop kapasite pou lir diferan tip text: poem ek lafis",
    },
    {
      value: "Servi dan enn fason apropriye “x/ks/gz”",
      label: "Servi dan enn fason apropriye “x/ks/gz”",
    },
    {
      value: "Rekonet enn klas mo: pronom",
      label: "Rekonet enn klas mo: pronom",
    },
    {
      value: "Rekonet enn klas mo: determinan",
      label: "Rekonet enn klas mo: determinan",
    },
    {
      value: "Rekonet bãnn eleman dan enn lantre diksioner",
      label: "Rekonet bãnn eleman dan enn lantre diksioner",
    },
    {
      value: "Devlop kapasite memorizasion",
      label: "Devlop kapasite memorizasion",
    },
    {
      value: "Aprãnn poz enn kestion ouver",
      label: "Aprãnn poz enn kestion ouver",
    },
    {
      value: "Servi dan enn fason apropriye “i”, “y”",
      label: "Servi dan enn fason apropriye “i”, “y”",
    },
    {
      value: "Rekonet bãnn mo singilie ek pliryel",
      label: "Rekonet bãnn mo singilie ek pliryel",
    },
    {
      value: "Klasifie bãnn mo selon bãnn tem",
      label: "Klasifie bãnn mo selon bãnn tem",
    },
    {
      value: "Konpran kronolozi enn text: reper bãnn konekter letan",
      label: "Konpran kronolozi enn text: reper bãnn konekter letan",
    },
    { value: "Group nominal", label: "Group nominal" },
    {
      value: "Servi dan enn fason apropriye “ch” ek &apos;&apos;gn&apos;",
      label: "Servi dan enn fason apropriye “ch” ek &apos;&apos;gn&apos;",
    },
    {
      value: "Aprãnn fer enn deskripsion",
      label: "Aprãnn fer enn deskripsion",
    },
    {
      value:
        "Servi vokabiler pou dekrir enn landrwa ek diferan pārti enn volkan",
      label:
        "Servi vokabiler pou dekrir enn landrwa ek diferan pārti enn volkan",
    },
    {
      value: "Servi konpleman obze dan enn fraz",
      label: "Servi konpleman obze dan enn fraz",
    },
    {
      value: "Dekouver enn lafis piblisite",
      label: "Dekouver enn lafis piblisite",
    },
    { value: "Ekrir enn poskārt", label: "Ekrir enn poskārt" },
    {
      value: "Idantifie Group Nominal dan enn fraz",
      label: "Idantifie Group Nominal dan enn fraz",
    },
    {
      value: "Idantifie Group Verbal dan enn fraz",
      label: "Idantifie Group Verbal dan enn fraz",
    },
    {
      value: "Servi vokabiler presi pou dekrir enn landrwa",
      label: "Servi vokabiler presi pou dekrir enn landrwa",
    },
    { value: "Lir ek ekrir ler", label: "Lir ek ekrir ler" },
    { value: "Idantifie son [µ]", label: "Idantifie son [µ]" },
    {
      value: "Itiliz mārker preverbal pou mārk letan bãnn verb",
      label: "Itiliz mārker preverbal pou mārk letan bãnn verb",
    },
    {
      value: "Servi vokabiler presi pou dekrir diferan pārti enn volkan",
      label: "Servi vokabiler presi pou dekrir diferan pārti enn volkan",
    },
    {
      value: "Lir ek konpran enn long zistwār",
      label: "Lir ek konpran enn long zistwār",
    },
    {
      value: "Rekonet enn fraz ki dan  form diskour direk",
      label: "Rekonet enn fraz ki dan  form diskour direk",
    },
    {
      value: "Transformasion fraz: diskour direk-diskour indirek",
      label: "Transformasion fraz: diskour direk-diskour indirek",
    },
    {
      value: "Rekonet enn fraz inzonktif",
      label: "Rekonet enn fraz inzonktif",
    },
    {
      value: "Diferansie ant bãnn diferan tip ek form fraz",
      label: "Diferansie ant bãnn diferan tip ek form fraz",
    },
    { value: "Tredinion dan bãnn mo", label: "Tredinion dan bãnn mo" },
    { value: "Servi bãnn mo interogatif", label: "Servi bãnn mo interogatif" },
    { value: "Kas-tet", label: "Kas-tet" },
    { value: "Not available", label: "Not available" },

    { value: "Le nom", label: "Le nom" },
    { value: "La phrase simple", label: "La phrase simple" },
    { value: "Present de l'indicatif", label: "Present de l'indicatif" },
    { value: "Je parle des animaux:", label: "Je parle des animaux:" },
    {
      value: "Je lis, je reponds à des questions à l'orale",
      label: "Je lis, je reponds à des questions à l'orale",
    },
    {
      value: "Je lis, j'encercle la bonne réponse",
      label: "Je lis, j'encercle la bonne réponse",
    },
    {
      value: "Je lis, je complète un table avec des informations du texte",
      label: "Je lis, je complète un table avec des informations du texte",
    },
    {
      value: "Je reconnais quelques animaux grace à un dessin:",
      label: "Je reconnais quelques animaux grace à un dessin:",
    },
    {
      value: "Je reconnais quelques animaux grace à une definition",
      label: "Je reconnais quelques animaux grace à une definition",
    },
    {
      value: "Je trouve le cri de chaque animal:",
      label: "Je trouve le cri de chaque animal:",
    },
    { value: "Le pronom personnel sujet", label: "Le pronom personnel sujet" },
    { value: "Le present de l'indicatif", label: "Le present de l'indicatif" },
    { value: "Le groupe nominal sujet", label: "Le groupe nominal sujet" },
    {
      value: "Feminin des mots finissant en -eur, -teur",
      label: "Feminin des mots finissant en -eur, -teur",
    },
    { value: "Ecrire les homonymes", label: "Ecrire les homonymes" },
    {
      value: "Le présent de l'indicatif  (3ème groupe)",
      label: "Le présent de l'indicatif  (3ème groupe)",
    },
    {
      value: "Les déterminants démonstratifs",
      label: "Les déterminants démonstratifs",
    },
    { value: "Ecrire une bonne phrase", label: "Ecrire une bonne phrase" },
    { value: "Le verbe", label: "Le verbe" },
    { value: "Le contraire", label: "Le contraire" },
    {
      value: "Le futur de l'indicatif (1er groupe)",
      label: "Le futur de l'indicatif (1er groupe)",
    },
    { value: "Le pluriel", label: "Le pluriel" },
    {
      value: "Décrire les climats du monde",
      label: "Décrire les climats du monde",
    },
    {
      value: "Je lis, j'encercle la bonne reponse",
      label: "Je lis, j'encercle la bonne reponse",
    },
    {
      value: "Je lis,  je reponds à des questions à l'ecrit",
      label: "Je lis,  je reponds à des questions à l'ecrit",
    },
    {
      value: "Je relis chaque mot à son sens dans le texte",
      label: "Je relis chaque mot à son sens dans le texte",
    },
    {
      value: "Je complète une definition",
      label: "Je complète une definition",
    },
    { value: "Je coche les images", label: "Je coche les images" },
    { value: "Le groupe verbal", label: "Le groupe verbal" },
    {
      value: "Le complement d'objet direct (COD)",
      label: "Le complement d'objet direct (COD)",
    },
    {
      value: "Les determinants possessifs",
      label: "Les determinants possessifs",
    },
    { value: "Les préfixes", label: "Les préfixes" },
    {
      value: "Le futur de l'indicatif (2eme groupe)",
      label: "Le futur de l'indicatif (2eme groupe)",
    },
    { value: "Pluriel en -x", label: "Pluriel en -x" },
    { value: "Ecrire quelques phrases", label: "Ecrire quelques phrases" },
    { value: "La phrase negative", label: "La phrase negative" },
    { value: "La phrase interrogative", label: "La phrase interrogative" },
    { value: "Le passé composé", label: "Le passé composé" },
    { value: "L'adjectif qualificatif", label: "L'adjectif qualificatif" },
    {
      value: "Parler des plantes utilisées comme emblème nationale",
      label: "Parler des plantes utilisées comme emblème nationale",
    },
    {
      value: "Lire et répondre aux questions",
      label: "Lire et répondre aux questions",
    },
    {
      value: "Relier un mot à son sens dans le texte",
      label: "Relier un mot à son sens dans le texte",
    },
    {
      value: "Utiliser les mots du texte/donnés pour compléter une phrase",
      label: "Utiliser les mots du texte/donnés pour compléter une phrase",
    },
    { value: "Trouver un synonyme", label: "Trouver un synonyme" },
    { value: "Trouver le contraire", label: "Trouver le contraire" },
    {
      value: "Nommer les différentes parties d'une plante",
      label: "Nommer les différentes parties d'une plante",
    },
    { value: "Compléter un texte à trou", label: "Compléter un texte à trou" },
    { value: "Prépositions 1", label: "Prépositions 1" },
    { value: "Phrase negative", label: "Phrase negative" },
    {
      value: "Adjectif au féminin (e/euse)",
      label: "Adjectif au féminin (e/euse)",
    },
    { value: "Phrase interrogative", label: "Phrase interrogative" },
    {
      value: "Le complement d'objet indirect (COI)",
      label: "Le complement d'objet indirect (COI)",
    },
    { value: "Ecire une petite histoire", label: "Ecire une petite histoire" },
    { value: "Le déterminant indéfini", label: "Le déterminant indéfini" },
    { value: "Les signes de ponctuation", label: "Les signes de ponctuation" },
    { value: "c ou ç", label: "c ou ç" },
    {
      value: "Les éterminants possessifs",
      label: "Les éterminants possessifs",
    },
    { value: "Les moyens de cuisson", label: "Les moyens de cuisson" },
    {
      value: "Utiliser le dictionnaire pour trouver la signification d'un mot",
      label: "Utiliser le dictionnaire pour trouver la signification d'un mot",
    },
    {
      value: "Utiliser les mots donnés pour compléter une phrase",
      label: "Utiliser les mots donnés pour compléter une phrase",
    },
    {
      value: "Trouver le synonyme de mots",
      label: "Trouver le synonyme de mots",
    },
    {
      value: "Trouver le contraire de mots",
      label: "Trouver le contraire de mots",
    },
    {
      value: "Definir un mot avec ses propres exemples",
      label: "Definir un mot avec ses propres exemples",
    },
    {
      value: "Compléter un texte à l'aide des mots d'un texte",
      label: "Compléter un texte à l'aide des mots d'un texte",
    },
    {
      value: 'Le passé composé auxiliaire " avoir"  (3ème groupe):',
      label: 'Le passé composé auxiliaire " avoir"  (3ème groupe):',
    },
    { value: "Je relie deux phrases", label: "Je relie deux phrases" },
    { value: "L'imparfait", label: "L'imparfait" },
    { value: "Les pronoms  COI", label: "Les pronoms  COI" },
    { value: "Les mots interrogatifs", label: "Les mots interrogatifs" },
    { value: "Ecire une recette", label: "Ecire une recette" },
    { value: "Les déterminants définis", label: "Les déterminants définis" },
    { value: "l'axe de temps", label: "l'axe de temps" },
    { value: "Le COD", label: "Le COD" },
    { value: "Quelques prépositions", label: "Quelques prépositions" },
    {
      value: "Décrire une image sur le séga typique",
      label: "Décrire une image sur le séga typique",
    },
    {
      value:
        "Ecrire les noms de musiciens qui jouent de différents instruments",
      label:
        "Ecrire les noms de musiciens qui jouent de différents instruments",
    },
    {
      value: "Relier un mot à sa définition",
      label: "Relier un mot à sa définition",
    },
    { value: "Prépositions 2", label: "Prépositions 2" },
    { value: "L'imparfait: 3eme  groupe", label: "L'imparfait: 3eme  groupe" },
    { value: "Les pronoms COD", label: "Les pronoms COD" },
    { value: "Les indicateurs de temps", label: "Les indicateurs de temps" },
    {
      value: "Mettre des phrases en ordre pour faire une histoire",
      label: "Mettre des phrases en ordre pour faire une histoire",
    },
    { value: "Le présent de l'indicatif", label: "Le présent de l'indicatif" },
    { value: "l'adjectif qualificatif", label: "l'adjectif qualificatif" },
    { value: "Futur de l'indicatif", label: "Futur de l'indicatif" },
    { value: "La phrase négative", label: "La phrase négative" },
    {
      value: "Parler de différents métiers",
      label: "Parler de différents métiers",
    },
    {
      value: "Utiliser les mots donnés pour compléter un texte",
      label: "Utiliser les mots donnés pour compléter un texte",
    },
    {
      value: "Trouver un mot de la même famille",
      label: "Trouver un mot de la même famille",
    },
    {
      value:
        "Compléter les tirets par un mot qui convient (un mot qui complète la définition)",
      label:
        "Compléter les tirets par un mot qui convient (un mot qui complète la définition)",
    },
    {
      value: "Trouver le masculin ou féminin de certains métiers",
      label: "Trouver le masculin ou féminin de certains métiers",
    },
    {
      value: "Futur de l'indicatif: 3eme groupe",
      label: "Futur de l'indicatif: 3eme groupe",
    },
    { value: "Enrichissement du GN", label: "Enrichissement du GN" },
    { value: "Du verbe au nom", label: "Du verbe au nom" },
    { value: "1 son, 2 graphies", label: "1 son, 2 graphies" },
    { value: "Accord du Groupe Nominal", label: "Accord du Groupe Nominal" },
    { value: "L'Infinitif", label: "L'Infinitif" },
    { value: "L'Impératif", label: "L'Impératif" },
    {
      value: "Ecrire une petite histoire",
      label: "Ecrire une petite histoire",
    },
    {
      value: "Song: The people in  your neighborhood",
      label: "Song: The people in  your neighborhood",
    },
    {
      value: "I talk about my neighbourhood",
      label: "I talk about my neighbourhood",
    },
    { value: "Identifying rhyming words", label: "Identifying rhyming words" },
    { value: "Long a", label: "Long a" },
    {
      value: "Read a text, answer questions",
      label: "Read a text, answer questions",
    },
    { value: "Keywords in a text", label: "Keywords in a text" },
    { value: "Email", label: "Email" },
    { value: "Common and proper nouns", label: "Common and proper nouns" },
    {
      value: "Personal pronouns as object",
      label: "Personal pronouns as object",
    },
    { value: "Adjectives", label: "Adjectives" },
    { value: "The negative form", label: "The negative form" },
    { value: "The present tense", label: "The present tense" },
    { value: "Prepositions", label: "Prepositions" },
    { value: "A helpful neighbour", label: "A helpful neighbour" },
    { value: "Poem: my capital city", label: "Poem: my capital city" },
    { value: "/ur/", label: "/ur/" },
    { value: "/ir/", label: "/ir/" },
    { value: "/j/", label: "/j/" },
    {
      value: "Answering wh-, h- questions in simple sentences",
      label: "Answering wh-, h- questions in simple sentences",
    },
    { value: "Key words in a text", label: "Key words in a text" },
    {
      value: "Match words to their correct meaning",
      label: "Match words to their correct meaning",
    },
    { value: "Fact sheet", label: "Fact sheet" },
    { value: "Past Simple Tense", label: "Past Simple Tense" },
    { value: "Plural forms", label: "Plural forms" },
    { value: "Article", label: "Article" },
    { value: "Dippy visists Port Louis", label: "Dippy visists Port Louis" },
    { value: "Tongue twister", label: "Tongue twister" },
    { value: "Picture description", label: "Picture description" },
    { value: "diphtong /aw/ ɔ:", label: "diphtong /aw/ ɔ:" },
    {
      value: "Show reading comprehension",
      label: "Show reading comprehension",
    },
    { value: "Keywords from a story", label: "Keywords from a story" },
    { value: "Short story", label: "Short story" },
    {
      value: "Countable and uncountable nouns",
      label: "Countable and uncountable nouns",
    },
    {
      value: "Quantifiers referring to countable and uncountable nouns",
      label: "Quantifiers referring to countable and uncountable nouns",
    },
    { value: "Irregular plural forms", label: "Irregular plural forms" },
    { value: "The mermaid in the shell", label: "The mermaid in the shell" },
    {
      value: "Poem: Rodrigues, my beautiful island",
      label: "Poem: Rodrigues, my beautiful island",
    },
    { value: "Consonant culsuters", label: "Consonant culsuters" },
    {
      value: "Answer wh- questions using complete sentences",
      label: "Answer wh- questions using complete sentences",
    },
    {
      value: "Items to take on a trip/to put in your suitcase",
      label: "Items to take on a trip/to put in your suitcase",
    },
    { value: "Postcard", label: "Postcard" },
    { value: "Interrogative form", label: "Interrogative form" },
    { value: "Punctuation", label: "Punctuation" },
    { value: "Interrogative", label: "Interrogative" },
    { value: "Adverbs of manner", label: "Adverbs of manner" },
    { value: "A Visit to Rodrigues", label: "A Visit to Rodrigues" },
    {
      value: "Talk about hobbies and leisure time",
      label: "Talk about hobbies and leisure time",
    },
    { value: "Mime and guess", label: "Mime and guess" },
    {
      value: "schwa sound (unstressed syllable) ə",
      label: "schwa sound (unstressed syllable) ə",
    },
    { value: "Long I aɪ", label: "Long I aɪ" },
    { value: "ɪə (ere)", label: "ɪə (ere)" },
    { value: "Read aloud", label: "Read aloud" },
    { value: "Key words from a story", label: "Key words from a story" },
    {
      value: "Match definitions to words",
      label: "Match definitions to words",
    },
    { value: "Write a note", label: "Write a note" },
    { value: "Activity planner", label: "Activity planner" },
    { value: "Adjective", label: "Adjective" },
    { value: "Telling time", label: "Telling time" },
    {
      value: "Time markers-adverbs of time",
      label: "Time markers-adverbs of time",
    },
    { value: "Gendered nouns-animals", label: "Gendered nouns-animals" },
  ],
  5: [
    { value: "Ribrik 1: Oral", label: "Ribrik 1: Oral" },
    { value: "Ribrik 2: Konpreansion", label: "Ribrik 2: Konpreansion" },
    { value: "Ribrik 3: Vokabiler", label: "Ribrik 3: Vokabiler" },
    { value: "Ribrik 4: Lortograf", label: "Ribrik 4: Lortograf" },
    { value: "Ribrik 5: Gramer", label: "Ribrik 5: Gramer" },
    { value: "Ribrik 6: Prodiksion ekri", label: "Ribrik 6: Prodiksion ekri" },
    { value: "Ribrik 7: Lektir", label: "Ribrik 7: Lektir" },
    { value: "Lektir Konpreansion", label: "Lektir Konpreansion" },
    { value: "Gramer", label: "Gramer" },
    { value: "Lortograf", label: "Lortograf" },
    { value: "Lekritir", label: "Lekritir" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Récapitulatif", label: "Récapitulatif" },
    { value: "Je lis et je comprends", label: "Je lis et je comprends" },
    {
      value: "J'apprends de nouveaux mots et expressions",
      label: "J'apprends de nouveaux mots et expressions",
    },
    { value: "Je comprends la grammaire", label: "Je comprends la grammaire" },
    { value: "J'écris correctement", label: "J'écris correctement" },
    { value: "Je produis un texte", label: "Je produis un texte" },
    {
      value: "Speaking: Introducing oneself",
      label: "Speaking: Introducing oneself",
    },
    { value: "Speaking: Conversation", label: "Speaking: Conversation" },
    {
      value: "Listening: &apos;Sammy&apos;s holidays&apos;",
      label: "Listening: &apos;Sammy&apos;s holidays&apos;",
    },
    { value: "&apos;Safari in Kenya", label: "&apos;Safari in Kenya" },
    { value: "Postcard", label: "Postcard" },
    {
      value: "Match words with their meaning",
      label: "Match words with their meaning",
    },
    {
      value: "Fill in the blanks with key vocabulary",
      label: "Fill in the blanks with key vocabulary",
    },
    {
      value: "Relate vocabulary to the theme",
      label: "Relate vocabulary to the theme",
    },
    { value: "Nouns in the plural form", label: "Nouns in the plural form" },
    { value: "Collective Nouns", label: "Collective Nouns" },
    { value: "Present Simple Tense", label: "Present Simple Tense" },
    { value: "Present Continuous Tense", label: "Present Continuous Tense" },
    { value: "Speaking: Chain story", label: "Speaking: Chain story" },
    {
      value: "Listening: &apos;Mr Romi&apos;",
      label: "Listening: &apos;Mr Romi&apos;",
    },
    {
      value: "&apos;The Physical Education Class&apos;",
      label: "&apos;The Physical Education Class&apos;",
    },
    { value: "E-mail", label: "E-mail" },
    { value: "Fill in the blanks", label: "Fill in the blanks" },
    { value: "Find the meaning of words", label: "Find the meaning of words" },
    { value: "Find the root words", label: "Find the root words" },
    { value: "Past Simple Tense", label: "Past Simple Tense" },
    { value: "Past Continuous Tense", label: "Past Continuous Tense" },
    {
      value: "Adjectives - Comparative & Superlative forms",
      label: "Adjectives - Comparative & Superlative forms",
    },
    {
      value: "Using &apos;and&apos; & &apos;but",
      label: "Using &apos;and&apos; & &apos;but",
    },
    {
      value: "Speaking: Survival kit activity",
      label: "Speaking: Survival kit activity",
    },
    {
      value: "Listening: &apos;Come and fly to my island&apos;",
      label: "Listening: &apos;Come and fly to my island&apos;",
    },
    {
      value: "&apos;My beloved island Agalega",
      label: "&apos;My beloved island Agalega",
    },
    { value: "Informal letter", label: "Informal letter" },
    {
      value: "Match words with their definition",
      label: "Match words with their definition",
    },
    {
      value: "Match island with nationality of islanders",
      label: "Match island with nationality of islanders",
    },
    { value: "Find the synonym", label: "Find the synonym" },
    {
      value: "Adjectives - Comparative & Superlative form",
      label: "Adjectives - Comparative & Superlative form",
    },
    {
      value: "s Using &apos;and&apos; & &apos;but&apos;",
      label: "s Using &apos;and&apos; & &apos;but&apos;",
    },
    { value: "Phrasal verbs", label: "Phrasal verbs" },
    {
      value: "Adjectives in the Comparative and Superlative forms",
      label: "Adjectives in the Comparative and Superlative forms",
    },
    {
      value: "Prepositions (during, at, towards, to & on)",
      label: "Prepositions (during, at, towards, to & on)",
    },
    { value: "Determiner &apos;the", label: "Determiner &apos;the" },
    {
      value: "Listening: &apos;Mission Mars&apos;",
      label: "Listening: &apos;Mission Mars&apos;",
    },
    {
      value: "Speaking: • Your favourite film",
      label: "Speaking: • Your favourite film",
    },
    {
      value: "&apos;A film shoot at school&apos;",
      label: "&apos;A film shoot at school&apos;",
    },
    {
      value: "Guided picture composition",
      label: "Guided picture composition",
    },
    {
      value: "Complete table with meaning of words",
      label: "Complete table with meaning of words",
    },
    {
      value: "Complete conversation with words given",
      label: "Complete conversation with words given",
    },
    {
      value: "Match picture with occupation",
      label: "Match picture with occupation",
    },
    { value: "Quantifiers", label: "Quantifiers" },
    {
      value: "Past Continuous Tense\u0002",
      label: "Past Continuous Tense\u0002",
    },
    {
      value: "Negative and Interrogative Forms",
      label: "Negative and Interrogative Forms",
    },
    { value: "Adverbs of Frequency", label: "Adverbs of Frequency" },
    { value: "Reflexive Pronouns", label: "Reflexive Pronouns" },
    {
      value: "Listening: &apos;Mother Teresa&apos;",
      label: "Listening: &apos;Mother Teresa&apos;",
    },
    {
      value: "Speaking: • A person you admire • Poem",
      label: "Speaking: • A person you admire • Poem",
    },
    {
      value: "&apos;The child soldier&apos;",
      label: "&apos;The child soldier&apos;",
    },
    { value: "Guided composition", label: "Guided composition" },
    { value: "Crossword", label: "Crossword" },
    { value: "Antonym of words", label: "Antonym of words" },
    { value: "Design a poster", label: "Design a poster" },
    { value: "Demonstrative pronouns", label: "Demonstrative pronouns" },
    {
      value: "Punctuation in Direct Speech",
      label: "Punctuation in Direct Speech",
    },
    { value: "Present Perfect Tense", label: "Present Perfect Tense" },
    { value: "Verbs-Revision", label: "Verbs-Revision" },
    {
      value: "Listening: &apos;Magical hands and places&apos;",
      label: "Listening: &apos;Magical hands and places&apos;",
    },
    {
      value: "Speaking: • The most interesting job",
      label: "Speaking: • The most interesting job",
    },
    {
      value: "&apos;Fiola&apos;s dream job&apos;",
      label: "&apos;Fiola&apos;s dream job&apos;",
    },
    { value: "Tick correct sentences", label: "Tick correct sentences" },
    {
      value: "Reading aloud: Conversation",
      label: "Reading aloud: Conversation",
    },
    {
      value:
        "Present Perfect Tense- Time Markers, Negative and Interrogative Forms",
      label:
        "Present Perfect Tense- Time Markers, Negative and Interrogative Forms",
    },
    {
      value: "Using &apos;Must&apos; and &apos;Must not&apos;",
      label: "Using &apos;Must&apos; and &apos;Must not&apos;",
    },
    {
      value: "Conjunctions: as, although, before, however",
      label: "Conjunctions: as, although, before, however",
    },
    { value: "Numeration and Notation", label: "Numeration and Notation" },
    { value: "Addition", label: "Addition" },
    { value: "Subtraction", label: "Subtraction" },
    { value: "Multiplication", label: "Multiplication" },
    { value: "Division", label: "Division" },
    { value: "Square numbers", label: "Square numbers" },
    { value: "Number Patterns", label: "Number Patterns" },
    { value: "Symmetry", label: "Symmetry" },
    { value: "Angles", label: "Angles" },
    { value: "Shapes", label: "Shapes" },
    { value: "Fractions", label: "Fractions" },
    { value: "Decimals", label: "Decimals" },
    { value: "Powers", label: "Powers" },
    { value: "Average", label: "Average" },
    { value: "Direct proportion", label: "Direct proportion" },
    { value: "Ratio", label: "Ratio" },
    { value: "Length", label: "Length" },
    { value: "Perimeter", label: "Perimeter" },
    { value: "Area", label: "Area" },
    { value: "Capacity", label: "Capacity" },
    { value: "Mass", label: "Mass" },
    { value: "Money", label: "Money" },
    { value: "Time", label: "Time" },
    { value: "Pictogram", label: "Pictogram" },
    { value: "Bar chart", label: "Bar chart" },
    { value: "The three states of Water", label: "The three states of Water" },
    { value: "Plants around us", label: "Plants around us" },
    { value: "Plants in their Habitats", label: "Plants in their Habitats" },
    { value: "Animals in their Habitats", label: "Animals in their Habitats" },
    { value: "More about Plants", label: "More about Plants" },
    { value: "Energy", label: "Energy" },
    { value: "Transformation of Energy", label: "Transformation of Energy" },
    {
      value: "The Simple Electric Circuit The Simple Electric",
      label: "The Simple Electric Circuit The Simple Electric",
    },
    { value: "Planet Earth", label: "Planet Earth" },
    { value: "Volcanoes in our Region", label: "Volcanoes in our Region" },
    {
      value: "The Main Relief Features of Mauritius",
      label: "The Main Relief Features of Mauritius",
    },
    {
      value: "The Main Relief Features of Rodrigues",
      label: "The Main Relief Features of Rodrigues",
    },
    { value: "Environmental Problems", label: "Environmental Problems" },
    { value: "Indian Ocean in the Past", label: "Indian Ocean in the Past" },
    { value: "Understanding Centuries", label: "Understanding Centuries" },
    {
      value: "The Mascarene Islands/Rodrigues Island",
      label: "The Mascarene Islands/Rodrigues Island",
    },
    {
      value: "Dutch settlement in Mauritius",
      label: "Dutch settlement in Mauritius",
    },
    {
      value: "The French in Ile de France",
      label: "The French in Ile de France",
    },
    {
      value: "The conquest of Ile de France",
      label: "The conquest of Ile de France",
    },
    {
      value: "Mauritius: A British Colony",
      label: "Mauritius: A British Colony",
    },
    { value: "Temperature.", label: "Temperature." },
    { value: "Rainfall", label: "Rainfall" },
    { value: "Port Louis today", label: "Port Louis today" },
  ],
  6: [
    {
      value: "Li ek konpran enn text ki long",
      label: "Li ek konpran enn text ki long",
    },
    {
      value:
        "Reper enn azektif parmi enn group mo, dan enn fraz ek dan enn text",
      label:
        "Reper enn azektif parmi enn group mo, dan enn fraz ek dan enn text",
    },
    {
      value: "Servi azektif dan enn fraz",
      label: "Servi azektif dan enn fraz",
    },
    {
      value: "Devlop enn vokabiler presi pou tem metie",
      label: "Devlop enn vokabiler presi pou tem metie",
    },
    {
      value: 'Konin kan servi "x", "ks", "gz", "on" ek "onn" dan lekritir mo',
      label: 'Konin kan servi "x", "ks", "gz", "on" ek "onn" dan lekritir mo',
    },
    {
      value: "Aplik sekans kronolozik dan prodiksion ekri",
      label: "Aplik sekans kronolozik dan prodiksion ekri",
    },
    {
      value: "Servi konekter pou relie de fraz",
      label: "Servi konekter pou relie de fraz",
    },
    {
      value: "Servi enn konstelasion pou zener lide",
      label: "Servi enn konstelasion pou zener lide",
    },
    {
      value: "Klas bann mo dapre lord alfabetik",
      label: "Klas bann mo dapre lord alfabetik",
    },
    {
      value: "Lir varyete kreol ki koze dan rodrig",
      label: "Lir varyete kreol ki koze dan rodrig",
    },
    {
      value: "Ekout ek konpran enn text ki lir an plizier parti",
      label: "Ekout ek konpran enn text ki lir an plizier parti",
    },
    {
      value:
        "Reper enn adverb parmi enn group mo, dan enn fraz ek dan enn text",
      label:
        "Reper enn adverb parmi enn group mo, dan enn fraz ek dan enn text",
    },
    { value: "klasifie bann adverb", label: "klasifie bann adverb" },
    {
      value: "servi adverb dan prodiksion ekri",
      label: "servi adverb dan prodiksion ekri",
    },
    { value: "Reper bann omonim", label: "Reper bann omonim" },
    {
      value: "servi tredinion (-) dan lekritir mo",
      label: "servi tredinion (-) dan lekritir mo",
    },
    {
      value: "Met lespas ant mo dan enn group mo ek dan enn fraz",
      label: "Met lespas ant mo dan enn group mo ek dan enn fraz",
    },
    {
      value: "servi sinonim pou evit repetision",
      label: "servi sinonim pou evit repetision",
    },
    {
      value: "idantifie ek koriz fot  dan enn text",
      label: "idantifie ek koriz fot  dan enn text",
    },
    {
      value: "diferansie ant bann diferan tip fraz",
      label: "diferansie ant bann diferan tip fraz",
    },
    {
      value: "servi diksioner pou rod definision ek klas gramatikal bann mo",
      label: "servi diksioner pou rod definision ek klas gramatikal bann mo",
    },
    {
      value: "konpran ek diskit lor enn sema",
      label: "konpran ek diskit lor enn sema",
    },
    {
      value: "devlop enn konpreansion kreol ki koze dan rodrig",
      label: "devlop enn konpreansion kreol ki koze dan rodrig",
    },
    {
      value: "Lir ek konpran enn zistwar an plizier lepizod",
      label: "Lir ek konpran enn zistwar an plizier lepizod",
    },
    {
      value: "Diferansie ant pronom personel, posesif ek demonstratif",
      label: "Diferansie ant pronom personel, posesif ek demonstratif",
    },
    {
      value: "servi pronom dan prodiksion ekri",
      label: "servi pronom dan prodiksion ekri",
    },
    {
      value: "Idantifie mo-kle dan enn fraz, enn text, enn foto ek enn sema",
      label: "Idantifie mo-kle dan enn fraz, enn text, enn foto ek enn sema",
    },
    {
      value: 'Servi "ng", "sh", ek "ch" dan lekritir mo',
      label: 'Servi "ng", "sh", ek "ch" dan lekritir mo',
    },
    {
      value: "Met fraz an-ord kronolozik pou fer enn zistwar",
      label: "Met fraz an-ord kronolozik pou fer enn zistwar",
    },
    { value: "Definir enn mo", label: "Definir enn mo" },
    { value: "Fer enn 'fiksioner'", label: "Fer enn 'fiksioner'" },
    {
      value: "Rod bon definision enn mo dan diksioner",
      label: "Rod bon definision enn mo dan diksioner",
    },
    { value: "Ekrir enn email", label: "Ekrir enn email" },
    {
      value: "Reper linformasion lor enn poster",
      label: "Reper linformasion lor enn poster",
    },
    {
      value: "Ekout ek konpran enn text ki an plizier parti",
      label: "Ekout ek konpran enn text ki an plizier parti",
    },
    {
      value:
        "Diferansie ant verb santiman, verb aksion ek verb ki exprimaksion mantal",
      label:
        "Diferansie ant verb santiman, verb aksion ek verb ki exprimaksion mantal",
    },
    {
      value:
        "Servi verb ki exprim santiman, verb ki exprim aksion ek verb aksion mantal dan prodiksion ekri",
      label:
        "Servi verb ki exprim santiman, verb ki exprim aksion ek verb aksion mantal dan prodiksion ekri",
    },
    {
      value: "servi enn vokabiler presi pou exprim santiman ek lemosion",
      label: "servi enn vokabiler presi pou exprim santiman ek lemosion",
    },
    {
      value: "servi bann expresion an kreol Repiblik moris",
      label: "servi bann expresion an kreol Repiblik moris",
    },
    {
      value: "Reper erer lozik dan enn group mo, enn fraz ou enn text",
      label: "Reper erer lozik dan enn group mo, enn fraz ou enn text",
    },
    {
      value: "servi ponktiasion avek pertinans",
      label: "servi ponktiasion avek pertinans",
    },
    {
      value: "servi enn vokabiler ris pou ekrir enn deskripsion",
      label: "servi enn vokabiler ris pou ekrir enn deskripsion",
    },

    { value: "Je récapitule", label: "Je récapitule" },
    { value: "Je lis et je comprends", label: "Je lis et je comprends" },
    {
      value: "J&apos;apprends de nouveaux mots et expressions",
      label: "J&apos;apprends de nouveaux mots et expressions",
    },
    {
      value: "Je comprends la grammaire (I)",
      label: "Je comprends la grammaire (I)",
    },
    { value: "J&apos;écris correctement", label: "J&apos;écris correctement" },
    { value: "Je lis et je comprends (I", label: "Je lis et je comprends (I" },
    {
      value: "Je comprends la grammaire (II)",
      label: "Je comprends la grammaire (II)",
    },
    { value: "Je produis un texte", label: "Je produis un texte" },
    {
      value: "Je cherche à en savoir plus",
      label: "Je cherche à en savoir plus",
    },
    {
      value: "J&apos;évalue ce que j&apos;ai appris",
      label: "J&apos;évalue ce que j&apos;ai appris",
    },
    { value: "Je lis pour le plaisir", label: "Je lis pour le plaisir" },
    {
      value: "Je lis et je comprends (I)",
      label: "Je lis et je comprends (I)",
    },
    {
      value: "Je lis et je comprends (II)",
      label: "Je lis et je comprends (II)",
    },
    {
      value: "Je comprends la grammaire (II",
      label: "Je comprends la grammaire (II",
    },
    {
      value: "Discovering our cultural heritage",
      label: "Discovering our cultural heritage",
    },
    { value: "Solving riddles", label: "Solving riddles" },
    {
      value: "Fill in the blanks with key vocabulary",
      label: "Fill in the blanks with key vocabulary",
    },
    { value: "Synonyms", label: "Synonyms" },
    { value: "Story writing", label: "Story writing" },
    { value: "Listening: &apos;Sapsiway", label: "Listening: &apos;Sapsiway" },
    {
      value: "Speaking: Share your views",
      label: "Speaking: Share your views",
    },
    { value: "Indefinite Pronouns", label: "Indefinite Pronouns" },
    {
      value: "Verbs – Revision of Tenses",
      label: "Verbs – Revision of Tenses",
    },
    {
      value: "Present Perfect Tense,past participle",
      label: "Present Perfect Tense,past participle",
    },
    {
      value: "Present Continuous Tense for a future action",
      label: "Present Continuous Tense for a future action",
    },
    { value: "Phrasal verbs", label: "Phrasal verbs" },
    {
      value: "&apos;The story of Tizan gato kanet",
      label: "&apos;The story of Tizan gato kanet",
    },
    {
      value: "&apos;The cow and the tiger&apos;",
      label: "&apos;The cow and the tiger&apos;",
    },
    {
      value: "Match words with drawings and definitions",
      label: "Match words with drawings and definitions",
    },
    {
      value: "Tick the correct sentences",
      label: "Tick the correct sentences",
    },
    {
      value: "Write sentences using pictures and vocabulary given",
      label: "Write sentences using pictures and vocabulary given",
    },
    { value: "Road directions", label: "Road directions" },
    { value: "Letter writing", label: "Letter writing" },
    {
      value: "Listening: &apos;The magic show&apos;",
      label: "Listening: &apos;The magic show&apos;",
    },
    {
      value: "Speaking: Sachin&apos;s decision",
      label: "Speaking: Sachin&apos;s decision",
    },
    { value: "Past Perfect Tense", label: "Past Perfect Tense" },
    {
      value: "Forming abstract nouns from adjectives and verbs",
      label: "Forming abstract nouns from adjectives and verbs",
    },
    {
      value: "Using &apos;with&apos;/&apos;without&apos;",
      label: "Using &apos;with&apos;/&apos;without&apos;",
    },
    {
      value: "Caverne Patate ― &apos;A fascinating underground adventure",
      label: "Caverne Patate ― &apos;A fascinating underground adventure",
    },
    {
      value: "&apos;Andy and Jurassic World&apos;",
      label: "&apos;Andy and Jurassic World&apos;",
    },
    { value: "Amazing travel fact", label: "Amazing travel fact" },
    { value: "Cloze text: with/without", label: "Cloze text: with/without" },
    { value: "An amazing journey", label: "An amazing journey" },
    { value: "Listening comprehension", label: "Listening comprehension" },
    { value: "Tell a story", label: "Tell a story" },
    {
      value: "&apos;Celebrating Music Day at school&apos;",
      label: "&apos;Celebrating Music Day at school&apos;",
    },
    {
      value: "Write definitions of words or expressions",
      label: "Write definitions of words or expressions",
    },
    { value: "Fill in the blanks", label: "Fill in the blanks" },
    { value: "Complete a paragraph", label: "Complete a paragraph" },
    { value: "Poster design", label: "Poster design" },
    {
      value: "Listening: &apos;Tiara&apos;s ballet show&apos;",
      label: "Listening: &apos;Tiara&apos;s ballet show&apos;",
    },
    { value: "Speaking: Role play", label: "Speaking: Role play" },
    {
      value: "Past Perfect Tense - Negative & Interrogative forms",
      label: "Past Perfect Tense - Negative & Interrogative forms",
    },
    { value: "Relative Pronouns", label: "Relative Pronouns" },
    {
      value: "Relative Pronouns Using adverbs with adjectives",
      label: "Relative Pronouns Using adverbs with adjectives",
    },
    {
      value: "Natish, a unique pianist&apos;",
      label: "Natish, a unique pianist&apos;",
    },
    {
      value: "&apos;I want to become an artist&apos;",
      label: "&apos;I want to become an artist&apos;",
    },
    { value: "Amazing art fact", label: "Amazing art fact" },
    {
      value: "Past Simple Tense and Past Participle of irregular verbs",
      label: "Past Simple Tense and Past Participle of irregular verbs",
    },
    {
      value: "Use appropriate adverbs and adjectives",
      label: "Use appropriate adverbs and adjectives",
    },
    { value: "&apos;The book fair", label: "&apos;The book fair" },
    {
      value: "Add the missing definitions",
      label: "Add the missing definitions",
    },
    { value: "Tick the correct picture", label: "Tick the correct picture" },
    { value: "Classify books", label: "Classify books" },
    { value: "Rewriting fairy tales", label: "Rewriting fairy tales" },
    {
      value: "Listening: &apos;The World of Bookworm",
      label: "Listening: &apos;The World of Bookworm",
    },
    {
      value: "Speaking: Attending an event",
      label: "Speaking: Attending an event",
    },
    { value: "Formation of adjectives", label: "Formation of adjectives" },
    { value: "Using the comma", label: "Using the comma" },
    {
      value:
        "Conjunctions: &apos;because,as&apos;, &apos;for&apos;, &apos;where&apos; and &apos;while",
      label:
        "Conjunctions: &apos;because,as&apos;, &apos;for&apos;, &apos;where&apos; and &apos;while",
    },
    {
      value: "&apos;Why I love to read&apos;",
      label: "&apos;Why I love to read&apos;",
    },
    {
      value: "&apos;The mystery of the missing ring",
      label: "&apos;The mystery of the missing ring",
    },
    { value: "Amazing book fact", label: "Amazing book fact" },
    { value: "End of unit activities", label: "End of unit activities" },
    {
      value: "Write about your favourite storybook",
      label: "Write about your favourite storybook",
    },
    { value: "Practice  Phrasal verbs", label: "Practice  Phrasal verbs" },
    { value: "Reading comprehension", label: "Reading comprehension" },
    {
      value: "Tick the correct definition",
      label: "Tick the correct definition",
    },
    { value: "Complete the interview", label: "Complete the interview" },
    { value: "Word families", label: "Word families" },
    { value: "Composition", label: "Composition" },
    {
      value: "Listening: &apos;New inventions",
      label: "Listening: &apos;New inventions",
    },
    {
      value: "Speaking: Talk about Led  Slippers",
      label: "Speaking: Talk about Led  Slippers",
    },
    { value: "Quantifiers", label: "Quantifiers" },
    {
      value:
        "Conjunctions: &apos;either, or&apos;, &apos;neither---nor&apos;, &apos;so that,&apos;therefore&apos; and &apos;if",
      label:
        "Conjunctions: &apos;either, or&apos;, &apos;neither---nor&apos;, &apos;so that,&apos;therefore&apos; and &apos;if",
    },
    {
      value: "&apos;A trip to the Museum of Inventions&apos;",
      label: "&apos;A trip to the Museum of Inventions&apos;",
    },
    {
      value: "&apos;The importance of vaccines",
      label: "&apos;The importance of vaccines",
    },
    { value: "Amazing invention fact", label: "Amazing invention fact" },
    {
      value: "&apos;A special lesson&apos;",
      label: "&apos;A special lesson&apos;",
    },
    { value: "Find the missing words", label: "Find the missing words" },
    { value: "Tick the correct meaning", label: "Tick the correct meaning" },
    { value: "Cross out the odd words", label: "Cross out the odd words" },
    { value: "Picture Composition", label: "Picture Composition" },
    {
      value: "Listening: &apos;Hercules fights the monster&apos;",
      label: "Listening: &apos;Hercules fights the monster&apos;",
    },
    { value: "Nouns with no articles", label: "Nouns with no articles" },
    {
      value: "Using &apos;Might&apos; and &apos;Might not'",
      label: "Using &apos;Might&apos; and &apos;Might not'",
    },
    { value: "Word Formation – revision", label: "Word Formation – revision" },
    { value: "Giving directions", label: "Giving directions" },
    {
      value: "&apos;A delightful dream catcher!&apos;",
      label: "&apos;A delightful dream catcher!&apos;",
    },
    { value: "&apos;The Rainbow Serpent", label: "&apos;The Rainbow Serpent" },
    { value: "Amazing myth fact", label: "Amazing myth fact" },
    {
      value: "State that air is a mixture of gases.",
      label: "State that air is a mixture of gases.",
    },
    {
      value: "Conclude that oxygen is important for life",
      label: "Conclude that oxygen is important for life",
    },
    {
      value:
        "Suggest an experiment to demonstrate that oxygen is important for burning",
      label:
        "Suggest an experiment to demonstrate that oxygen is important for burning",
    },
    {
      value: "Demonstrate understanding that air exerts pressure",
      label: "Demonstrate understanding that air exerts pressure",
    },
    {
      value:
        "State some causes of air pollution and some measures to address it",
      label:
        "State some causes of air pollution and some measures to address it",
    },
    {
      value: "List the main functions of the leaf",
      label: "List the main functions of the leaf",
    },
    {
      value: "Explain how plants manufacture their food",
      label: "Explain how plants manufacture their food",
    },
    {
      value: "Explain the process of photosynthesis",
      label: "Explain the process of photosynthesis",
    },
    {
      value: "List the conditions necessary for plants to make their food",
      label: "List the conditions necessary for plants to make their food",
    },
    {
      value:
        "Infer how plants help to maintain the composition of the air constant.",
      label:
        "Infer how plants help to maintain the composition of the air constant.",
    },
    {
      value: "State the importance of plants in the environment.",
      label: "State the importance of plants in the environment.",
    },
    {
      value: "Identify and classify animals according to their characteristics",
      label: "Identify and classify animals according to their characteristics",
    },
    {
      value: "Identify foods taken by humans",
      label: "Identify foods taken by humans",
    },
    {
      value: "Classify human food into food groups",
      label: "Classify human food into food groups",
    },
    {
      value: "State the reasons for eating a balanced diet",
      label: "State the reasons for eating a balanced diet",
    },
    {
      value: "Name the different types of teeth and their functions",
      label: "Name the different types of teeth and their functions",
    },
    {
      value: "Identify and name some common materials",
      label: "Identify and name some common materials",
    },
    {
      value: "Classify materials into natural and man-made materials",
      label: "Classify materials into natural and man-made materials",
    },
    {
      value: "State the sources of natural materials.",
      label: "State the sources of natural materials.",
    },
    {
      value: "Explain what is rust and how it can be prevented",
      label: "Explain what is rust and how it can be prevented",
    },
    {
      value: "Explain the meaning of the term &apos;fuel&apos;",
      label: "Explain the meaning of the term &apos;fuel&apos;",
    },
    {
      value: "List the fuels that are used in the production of electricity",
      label: "List the fuels that are used in the production of electricity",
    },
    {
      value:
        "Explain the transformation of energy in thermal and hydro-electric power stations",
      label:
        "Explain the transformation of energy in thermal and hydro-electric power stations",
    },
    {
      value: "Identify non-polluting sources of energy",
      label: "Identify non-polluting sources of energy",
    },
    {
      value:
        "Demonstrate understanding of renewable and non-renewable sources of energy",
      label:
        "Demonstrate understanding of renewable and non-renewable sources of energy",
    },
    {
      value: "List and classify renewable and non-renewable sources of energy",
      label: "List and classify renewable and non-renewable sources of energy",
    },
    {
      value: "Demonstrate understanding of green energy.",
      label: "Demonstrate understanding of green energy.",
    },
    {
      value:
        "State the presence of the Earth, Moon and Sun in the solar system",
      label:
        "State the presence of the Earth, Moon and Sun in the solar system",
    },
    {
      value: "Explain the occurrence of night and day.",
      label: "Explain the occurrence of night and day.",
    },
    {
      value: "Relate the movement of the Sun and Earth to day and year",
      label: "Relate the movement of the Sun and Earth to day and year",
    },
    {
      value: "Explain the consequences of global warming",
      label: "Explain the consequences of global warming",
    },
    {
      value: "Explain how to care for planet Earth",
      label: "Explain how to care for planet Earth",
    },
    {
      value:
        "Demonstrate understanding of the existence of different types of ecosystems",
      label:
        "Demonstrate understanding of the existence of different types of ecosystems",
    },
    {
      value: "Identify the processes within forest and lagoon ecosystems",
      label: "Identify the processes within forest and lagoon ecosystems",
    },
    {
      value: "Explain the importance of ecosystems",
      label: "Explain the importance of ecosystems",
    },
    {
      value:
        "Discuss the consequences of beach and soil erosion and how to prevent them.",
      label:
        "Discuss the consequences of beach and soil erosion and how to prevent them.",
    },
    { value: "What is land use?", label: "What is land use?" },
    { value: "Agricultural land use", label: "Agricultural land use" },
    {
      value: "Land use for Tourism Purposes",
      label: "Land use for Tourism Purposes",
    },
    {
      value: "Land Use and environmental concerns",
      label: "Land Use and environmental concerns",
    },
    {
      value: "The quartiers(districts) in Ile de France",
      label: "The quartiers(districts) in Ile de France",
    },
    { value: "What is a natural hazard?", label: "What is a natural hazard?" },
    {
      value: "Mauritius the Star and Key of the Indian Ocean.",
      label: "Mauritius the Star and Key of the Indian Ocean.",
    },
    {
      value: "Mauritius an independent country",
      label: "Mauritius an independent country",
    },
    {
      value: "National symbols of Mauritius",
      label: "National symbols of Mauritius",
    },
    { value: "Rodrigues Island", label: "Rodrigues Island" },
    { value: "I check my progress", label: "I check my progress" },
    {
      value: "Places of historical interest in Mauritius",
      label: "Places of historical interest in Mauritius",
    },
    { value: "Our cultural heritage", label: "Our cultural heritage" },
  ],
};
// const qatLessonPlanThemes = [
//   { value: "1-La maison ", label: "1-La maison " },
//   { value: "2-Monécole", label: "2-Monécole" },
//   { value: "3-Les jeux", label: "3-Les jeux" },
//   { value: "4-Les aliments", label: "4-Les aliments" },
//   { value: "5-Les transports", label: "5-Les transports" },
//   { value: "6-Les animaux", label: "6-Les animaux" },
//   { value: "Shapes", label: "Shapes" },
//   { value: "Colours", label: "Colours" },
//   { value: "Numbers", label: "Numbers" },
//   { value: "Measure", label: "Measure" },
//   { value: "Getting started", label: "Getting started" },
//   { value: "1-Meet Ben", label: "1-Meet Ben" },
//   { value: "2-At School ", label: "2-At School " },
//   { value: "3-It's Playtime!", label: "3-It's Playtime!" },
//   { value: "4-Food, delicious food", label: "4-Food, delicious food" },
//   { value: "5-Moving around ", label: "5-Moving around " },
//   { value: "6-Animals ", label: "6-Animals " },
//   { value: "sapit 1-Mwan, mo nom", label: "sapit 1-Mwan, mo nom" },
//   { value: "sapit 2-Mo laniverser", label: "sapit 2-Mo laniverser" },
//   { value: "sapit 3-Bay Bay ti lekol", label: "sapit 3-Bay Bay ti lekol" },
//   { value: "sapit  4-Mo nouvo lekol", label: "sapit  4-Mo nouvo lekol" },
//   {
//     value: "sapit  5-Mo klas Kreol Rodrige",
//     label: "sapit  5-Mo klas Kreol Rodrige",
//   },
//   {
//     value: " sapit 6-Mo lavi zelev dan lekol",
//     label: " sapit 6-Mo lavi zelev dan lekol",
//   },
//   { value: "  sapit 7-Mo lanin Grad 1", label: "  sapit 7-Mo lanin Grad 1" },
// ];
const qatLessonPlanThemes2 = {
  1: [
    { value: "Mwan, mo nom", label: "Mwan, mo nom" },
    { value: "Mo  laniverser", label: "Mo  laniverser" },
    { value: "Mo lekol", label: "Mo lekol" },
    { value: "Mo liniver", label: "Mo liniver" },
    { value: "Nou lavi dan klas", label: "Nou lavi dan klas" },
    { value: "Nou lanvirõnnman", label: "Nou lanvirõnnman" },
    { value: "Anou dekouver lemond", label: "Anou dekouver lemond" },
    { value: "1-La maison", label: "1-La maison" },
    { value: "2-Monécole", label: "2-Monécole" },
    { value: "3-Les jeux", label: "3-Les jeux" },
    { value: "4-Les aliments", label: "4-Les aliments" },
    { value: "5-Les transports", label: "5-Les transports" },
    { value: "6-Les animaux", label: "6-Les animaux" },
    { value: "Getting started", label: "Getting started" },
    { value: "1-Meet Ben", label: "1-Meet Ben" },
    { value: "2-At School", label: "2-At School" },
    { value: "3-It's Playtime!", label: "3-It's Playtime!" },
    { value: "4-Food, delicious food", label: "4-Food, delicious food" },
    { value: "5-Moving around", label: "5-Moving around" },
    { value: "6-Animals", label: "6-Animals" },
    { value: "Home", label: "Home" },
    { value: "School", label: "School" },
    { value: "Games", label: "Games" },
    { value: "Food", label: "Food" },
    { value: "Transport", label: "Transport" },
    { value: "Animals", label: "Animals" },
  ],
  2: [
    { value: "Sapit 1", label: "Sapit 1" },
    { value: "Sapit 2", label: "Sapit 2" },
    { value: "Sapit 3", label: "Sapit 3" },
    { value: "Sapit 4", label: "Sapit 4" },
    { value: "Sapit 5", label: "Sapit 5" },
    { value: "Sapit 6", label: "Sapit 6" },
    { value: "Sapit 7", label: "Sapit 7" },
    { value: "Sapit 8", label: "Sapit 8" },
    { value: "1-Mes amis", label: "1-Mes amis" },
    { value: "2-Les fêtes", label: "2-Les fêtes" },
    { value: "3-Les voyages", label: "3-Les voyages" },
  ],
  3: [
    { value: "Enn nouvo larantre", label: "Enn nouvo larantre" },
    {
      value: "Lindepandans ek Larepiblik",
      label: "Lindepandans ek Larepiblik",
    },
    { value: "Tizan gato kanet", label: "Tizan gato kanet" },
    { value: "Liniver lamer", label: "Liniver lamer" },
    { value: "Océane rakonte", label: "Océane rakonte" },
    { value: "Lamizik!", label: "Lamizik!" },
    { value: "Lasas Trezor!", label: "Lasas Trezor!" },
    { value: "Otour langaz kreol", label: "Otour langaz kreol" },
    { value: "1-C'est la rentrée!", label: "1-C'est la rentrée!" },
    {
      value: "2-A la bibliothèque de l'école!",
      label: "2-A la bibliothèque de l'école!",
    },
    { value: "3-Ma localité", label: "3-Ma localité" },
    { value: "4-Kenzo à Rodrigues", label: "4-Kenzo à Rodrigues" },
    { value: "5-Protégeons la nature", label: "5-Protégeons la nature" },
  ],
  4: [
    { value: "Bienveni dan Grad 4", label: "Bienveni dan Grad 4" },
    {
      value: "Patang, Rwadezer, Karanbol",
      label: "Patang, Rwadezer, Karanbol",
    },
    { value: "Anou al laplaz", label: "Anou al laplaz" },
    { value: "Vwayaz Larenion", label: "Vwayaz Larenion" },
    { value: "Volkan", label: "Volkan" },
    { value: "Miltikiltiralite Moris", label: "Miltikiltiralite Moris" },
    { value: "Evaliasion", label: "Evaliasion" },
    { value: "1-Les animaux", label: "1-Les animaux" },
    { value: "2-Le climat", label: "2-Le climat" },
    { value: "3-Les plantes", label: "3-Les plantes" },
    { value: "4-La cuisine", label: "4-La cuisine" },
    { value: "5-La musique", label: "5-La musique" },
    { value: "6-Les métiers du monde", label: "6-Les métiers du monde" },
    { value: "1-My neighborhood", label: "1-My neighborhood" },
    { value: "2-Our capital city", label: "2-Our capital city" },
    { value: "3-The seaside", label: "3-The seaside" },
    { value: "4-Rodrigues", label: "4-Rodrigues" },
    { value: "5-Leisure time", label: "5-Leisure time" },
  ],
  5: [
    { value: "Dossier 1", label: "Dossier 1" },
    { value: "Dossier 2", label: "Dossier 2" },
    { value: "Dossier 3", label: "Dossier 3" },
    { value: "Dossier 4", label: "Dossier 4" },
    { value: "Dossier 5", label: "Dossier 5" },
    {
      value: "1: Let&apos;s go to Africa",
      label: "1: Let&apos;s go to Africa",
    },
    { value: "2: Games and toys", label: "2: Games and toys" },
    { value: "3: Islands", label: "3: Islands" },
    { value: "4 The world of films", label: "4 The world of films" },
    {
      value: "5 Making the world a better place",
      label: "5 Making the world a better place",
    },
    {
      value: "6 Magical hands and places",
      label: "6 Magical hands and places",
    },
    { value: "Unit 1", label: "Unit 1" },
    { value: "Unit 2", label: "Unit 2" },
    { value: "Unit 3", label: "Unit 3" },
    { value: "Unit 4", label: "Unit 4" },
    { value: "Unit 5", label: "Unit 5" },
    {
      value: "1-The three states of Water",
      label: "1-The three states of Water",
    },
    { value: "2-Plants around us", label: "2-Plants around us" },
    {
      value: "3- Plants in their Habitats",
      label: "3- Plants in their Habitats",
    },
    {
      value: "4-Animals in their Habitats",
      label: "4-Animals in their Habitats",
    },
    { value: "5-More about Plants", label: "5-More about Plants" },
    { value: "6-Energy", label: "6-Energy" },
    {
      value: "7-Transformation of Energy",
      label: "7-Transformation of Energy",
    },
    {
      value: "8-The Simple Electric Circuit The Simple Electric",
      label: "8-The Simple Electric Circuit The Simple Electric",
    },
    { value: "Our Natural Environment", label: "Our Natural Environment" },
    {
      value: "Discovery of Mauritius & Rodrigues",
      label: "Discovery of Mauritius & Rodrigues",
    },
    { value: "Settlement in Mauritius.", label: "Settlement in Mauritius." },
    { value: "Weather and climate", label: "Weather and climate" },
    {
      value: "Port Louis: the Capital of Mauritius",
      label: "Port Louis: the Capital of Mauritius",
    },
  ],
  6: [
    { value: "Bãnn metie", label: "Bãnn metie" },
    { value: "Fenomenn lanatir", label: "Fenomenn lanatir" },
    { value: "Liniver ek so sekre", label: "Liniver ek so sekre" },
    { value: "Bãnn santiman ek lemosion", label: "Bãnn santiman ek lemosion" },
    { value: "Les merveilles du monde", label: "Les merveilles du monde" },
  ],
};
// const qafTargets = [
//   {
//     value: "La salle de bain, la salon, la chambre à coucher, la cuisine",
//     label: "La salle de bain, la salon, la chambre à coucher, la cuisine",
//   },
//   {
//     value: "maman, papa, soeur, frère, ",
//     label: "maman, papa, soeur, frère, ",
//   },
//   {
//     value: "prénom, nom de famille, village, ville, majuscule ",
//     label: "prénom, nom de famille, village, ville, majuscule ",
//   },
//   { value: "[a]", label: "[a]" },
//   { value: "[m]", label: "[m]" },
//   {
//     value: "ecole, classe, terrain, jardin, ",
//     label: "ecole, classe, terrain, jardin, ",
//   },
//   {
//     value: "âge, adresse, coleur préférée",
//     label: "âge, adresse, coleur préférée",
//   },
//   {
//     value:
//       "livre, crayon, ardoise, pinceau, plume, feutre, ciseaux, sac, cahier, gomme",
//     label:
//       "livre, crayon, ardoise, pinceau, plume, feutre, ciseaux, sac, cahier, gomme",
//   },
//   {
//     value: "objets; animaux;  lettre minuscule",
//     label: "objets; animaux;  lettre minuscule",
//   },
//   { value: "[eu]", label: "[eu]" },
//   { value: "[t]", label: "[t]" },
//   {
//     value:
//       "dominos, ballon, poupée; cache-cache [jeux vidéo; cerf-volant; robot; toupie]",
//     label:
//       "dominos, ballon, poupée; cache-cache [jeux vidéo; cerf-volant; robot; toupie]",
//   },
//   {
//     value: "gouli dannta; billes; la roue; tina; sapsiway; élastique",
//     label: "gouli dannta; billes; la roue; tina; sapsiway; élastique",
//   },
//   {
//     value: "Il fait beau; il pleut; il y a du vent; il y  des nuages",
//     label: "Il fait beau; il pleut; il y a du vent; il y  des nuages",
//   },
//   {
//     value: "un à dix; s pour le pluriel",
//     label: "un à dix; s pour le pluriel",
//   },
//   { value: "[d]", label: "[d]" },
//   { value: "[i]", label: "[i]" },
//   {
//     value:
//       "pomme, orange, raisin, poire, letchis, mangue, ananas, jamalac, longane, avocat, citron, patate",
//     label:
//       "pomme, orange, raisin, poire, letchis, mangue, ananas, jamalac, longane, avocat, citron, patate",
//   },
//   {
//     value:
//       "tomate, laitue, pomme de terre, carrotte, betterave, giraumon (citrouille), lalo",
//     label:
//       "tomate, laitue, pomme de terre, carrotte, betterave, giraumon (citrouille), lalo",
//   },
//   {
//     value: "biscuit, fromage, lait, yaourt, jus, chocolat, bonbon, glace",
//     label: "biscuit, fromage, lait, yaourt, jus, chocolat, bonbon, glace",
//   },
//   {
//     value: "petit déjeuner, déjeuner, dîner",
//     label: "petit déjeuner, déjeuner, dîner",
//   },
//   { value: "un, une, des, le, la, les", label: "un, une, des, le, la, les" },
//   { value: "[s]", label: "[s]" },
//   { value: "[o]", label: "[o]" },
//   {
//     value: "voiture, moto, bateau, avion",
//     label: "voiture, moto, bateau, avion",
//   },
//   {
//     value:
//       "Air: avion, fusée, hélicoptère// Mer: bateau, sous-marin, voilier, navire de marchandises// Terre: moto, camion, voiture, bicyclette, train, charette, bus ",
//     label:
//       "Air: avion, fusée, hélicoptère// Mer: bateau, sous-marin, voilier, navire de marchandises// Terre: moto, camion, voiture, bicyclette, train, charette, bus ",
//   },
//   {
//     value: "Adjectifs qualificatifs: e.x. jolie, couleur, taille: grand/gros ",
//     label: "Adjectifs qualificatifs: e.x. jolie, couleur, taille: grand/gros ",
//   },
//   { value: "[l]", label: "[l]" },
//   { value: "[y]", label: "[y]" },
//   {
//     value:
//       "Chien, poisson rouge, chat, perroquet, tortue, cheval, hamster, chaméléon",
//     label:
//       "Chien, poisson rouge, chat, perroquet, tortue, cheval, hamster, chaméléon",
//   },
//   {
//     value:
//       "Giraffe, rhinocéros, tigre, hippopotame, cerf, crocodile, lion, gorille, vautour, ",
//     label:
//       "Giraffe, rhinocéros, tigre, hippopotame, cerf, crocodile, lion, gorille, vautour, ",
//   },
//   {
//     value: "niche, bocal, nid, ruche, grange",
//     label: "niche, bocal, nid, ruche, grange",
//   },
//   {
//     value: "Policier, médecin, pompier, enseignant, éboueur, ",
//     label: "Policier, médecin, pompier, enseignant, éboueur, ",
//   },
//   {
//     value: "genre des objets//masculin: un/le; féminin: une/la",
//     label: "genre des objets//masculin: un/le; féminin: une/la",
//   },
//   {
//     value: "féminin de: papa, oncle, frere, boeuf, coq, mouton, lion",
//     label: "féminin de: papa, oncle, frere, boeuf, coq, mouton, lion",
//   },
//   { value: "[f]", label: "[f]" },
//   { value: "[u]", label: "[u]" },
//   {
//     value: "Recognise, name, draw and identify shapes in the environment-SRTC",
//     label: "Recognise, name, draw and identify shapes in the environment-SRTC",
//   },
//   {
//     value: "Recognise and name colours-RBGY",
//     label: "Recognise and name colours-RBGY",
//   },
//   {
//     value:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa) [1,2]",
//     label:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa) [1,2]",
//   },
//   {
//     value: "Sort & compare objects according to length: long, short, tall",
//     label: "Sort & compare objects according to length: long, short, tall",
//   },
//   {
//     value:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa): 3,4,5",
//     label:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa): 3,4,5",
//   },
//   {
//     value: "Distinguish between time concepts: day, night, afternoon, morning",
//     label: "Distinguish between time concepts: day, night, afternoon, morning",
//   },
//   {
//     value:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa) [6 to 8]",
//     label:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa) [6 to 8]",
//   },
//   {
//     value: "Identify and complete patterns using 2-D shapes",
//     label: "Identify and complete patterns using 2-D shapes",
//   },
//   {
//     value: "Sort & Compare objects according to mass: big, small, heavy, light",
//     label: "Sort & Compare objects according to mass: big, small, heavy, light",
//   },
//   {
//     value:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa):0,9,10",
//     label:
//       "Recognise, read, write numbers in numerals and in words (count & write or match numbers in a group or vice-versa):0,9,10",
//   },
//   {
//     value:
//       "Perform addition of two numbers /Perform & state orally simple mental calculations involving addition: sums not exceeding 10",
//     label:
//       "Perform addition of two numbers /Perform & state orally simple mental calculations involving addition: sums not exceeding 10",
//   },
//   {
//     value: "Recognise and complete number patterns: 0 to 10",
//     label: "Recognise and complete number patterns: 0 to 10",
//   },
//   {
//     value:
//       "Recognise and use ordinal numbers, name the position of a member in a queue: up to 5th",
//     label:
//       "Recognise and use ordinal numbers, name the position of a member in a queue: up to 5th",
//   },
//   {
//     value: "Recognise, name & decompose coins: up to Rs 10",
//     label: "Recognise, name & decompose coins: up to Rs 10",
//   },
//   { value: "Review shapes & colours", label: "Review shapes & colours" },
//   { value: "Count: up to 10", label: "Count: up to 10" },
//   { value: "Review numbers:0 to 10", label: "Review numbers:0 to 10" },
//   {
//     value: "Review length, mass, money, time",
//     label: "Review length, mass, money, time",
//   },
//   { value: "Review addition", label: "Review addition" },
//   { value: "Review ordinal numbers", label: "Review ordinal numbers" },
//   { value: "Review money", label: "Review money" },
//   { value: "Letter formation ", label: "Letter formation " },
//   { value: "Learning letter names ", label: "Learning letter names " },
//   {
//     value:
//       "red, blue, green, yellow, pink, orange, purple, black, brown, white",
//     label:
//       "red, blue, green, yellow, pink, orange, purple, black, brown, white",
//   },
//   {
//     value: "mother, father, sister, brother, grandmother, grandfather",
//     label: "mother, father, sister, brother, grandmother, grandfather",
//   },
//   {
//     value: "good morning, good night, good bye, hello",
//     label: "good morning, good night, good bye, hello",
//   },
//   {
//     value: "wake up, brush (my teeth), wash (my face), comb (my hair)",
//     label: "wake up, brush (my teeth), wash (my face), comb (my hair)",
//   },
//   {
//     value: "bedroom, bathroom, living room, kitchen",
//     label: "bedroom, bathroom, living room, kitchen",
//   },
//   { value: "sunny, rainy", label: "sunny, rainy" },
//   { value: "Yes/No", label: "Yes/No" },
//   { value: "/b/", label: "/b/" },
//   { value: "/m/", label: "/m/" },
//   { value: "/f/", label: "/f/" },
//   { value: "/s/", label: "/s/" },
//   {
//     value: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday ",
//     label: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday ",
//   },
//   {
//     value: "playground, office, classroom, pupils, teacher, ",
//     label: "playground, office, classroom, pupils, teacher, ",
//   },
//   {
//     value:
//       "whiteboard, book, desk, chair, bag, eraser, ruler, sharpener, pencil",
//     label:
//       "whiteboard, book, desk, chair, bag, eraser, ruler, sharpener, pencil",
//   },
//   {
//     value: "rainy, sunny, cloudy, windy, (snowy)",
//     label: "rainy, sunny, cloudy, windy, (snowy)",
//   },
//   {
//     value:
//       "Line up; listen attentively; open your book; wait for your turn; raise your hand; stand up; sit down; be quiet; ",
//     label:
//       "Line up; listen attentively; open your book; wait for your turn; raise your hand; stand up; sit down; be quiet; ",
//   },
//   { value: "/d/", label: "/d/" },
//   { value: "/n/", label: "/n/" },
//   { value: "/a/", label: "/a/" },
//   { value: "/k/", label: "/k/" },
//   {
//     value: "/d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/",
//     label: "/d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/",
//   },
//   { value: "January to December ", label: "January to December " },
//   {
//     value: "merry-go-round, seesaw, monkey bars, swing, slide",
//     label: "merry-go-round, seesaw, monkey bars, swing, slide",
//   },
//   {
//     value: "push, hang, run, kick, jump, ",
//     label: "push, hang, run, kick, jump, ",
//   },
//   { value: "happy, sad, angry, bored", label: "happy, sad, angry, bored" },
//   { value: "Who?", label: "Who?" },
//   { value: "I/you", label: "I/you" },
//   { value: "/h/", label: "/h/" },
//   { value: "/e/", label: "/e/" },
//   { value: "/p/", label: "/p/" },
//   { value: "/l/", label: "/l/" },
//   {
//     value: " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/",
//     label: " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/",
//   },
//   {
//     value:
//       "rice, milk, soup, chicken curry, bread, salad; fruits:banana, apple, orange, grapes, guava, plum; breakfast/lunch/dinner food",
//     label:
//       "rice, milk, soup, chicken curry, bread, salad; fruits:banana, apple, orange, grapes, guava, plum; breakfast/lunch/dinner food",
//   },
//   {
//     value: "spoon, knife, fork, cup, glass, plate",
//     label: "spoon, knife, fork, cup, glass, plate",
//   },
//   { value: "breafkast, lunch, dinner", label: "breafkast, lunch, dinner" },
//   { value: "Please/thank you", label: "Please/thank you" },
//   { value: "What", label: "What" },
//   { value: "He/she", label: "He/she" },
//   { value: "/t/, /o/, /v/, /j/", label: "/t/, /o/, /v/, /j/" },
//   {
//     value:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/",
//     label:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/",
//   },
//   {
//     value: "train, bus, truck, van, motorcycle, car, airplane, bicycle, ",
//     label: "train, bus, truck, van, motorcycle, car, airplane, bicycle, ",
//   },
//   {
//     value: "playground, seaside, shop, hospital, cinema, market, ",
//     label: "playground, seaside, shop, hospital, cinema, market, ",
//   },
//   {
//     value: "shorts, t-shirt, shirt, dress, skirt, trousers",
//     label: "shorts, t-shirt, shirt, dress, skirt, trousers",
//   },
//   { value: "In, on, under", label: "In, on, under" },
//   { value: "Where", label: "Where" },
//   { value: "We/they", label: "We/they" },
//   { value: "/g/, /ch/, /i/", label: "/g/, /ch/, /i/" },
//   { value: "rhyming words", label: "rhyming words" },
//   {
//     value:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/, /g/, /ch/ /i/",
//     label:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/, /g/, /ch/ /i/",
//   },
//   {
//     value:
//       "dog, hamster, gorilla, horse, goldfish, cat, bird, rabbit, duck, mouse, goat, frog, ",
//     label:
//       "dog, hamster, gorilla, horse, goldfish, cat, bird, rabbit, duck, mouse, goat, frog, ",
//   },
//   {
//     value: "policeman, nurse, vet, driver, hairdresser, fireman, teacher",
//     label: "policeman, nurse, vet, driver, hairdresser, fireman, teacher",
//   },
//   { value: "head, hand, foot, ", label: "head, hand, foot, " },
//   { value: "in front of , behind, ", label: "in front of , behind, " },
//   {
//     value: "adding s for more than 1 item",
//     label: "adding s for more than 1 item",
//   },
//   { value: "/w/, /u/, /sh/", label: "/w/, /u/, /sh/" },
//   {
//     value:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/, /g/, /ch/ /i/, /w/, /sh/, /u/",
//     label:
//       " /d/, /n/, /a/, /k/, /b/,/m/,/f/,/s/, /h/,/e/,/p/,/l/, /t/, /o/, /v/, /j/, /g/, /ch/ /i/, /w/, /sh/, /u/",
//   },
//   {
//     value: "Move in a variety of ways using different body parts",
//     label: "Move in a variety of ways using different body parts",
//   },
//   {
//     value: "Use gestures and expressions to express feelings, moods, and ideas",
//     label: "Use gestures and expressions to express feelings, moods, and ideas",
//   },
//   {
//     value: "Imitate speech patterns and voice modulation ",
//     label: "Imitate speech patterns and voice modulation ",
//   },
//   { value: "Sing simple songs", label: "Sing simple songs" },
//   {
//     value: "Play simple percussion instrument to accompany songs",
//     label: "Play simple percussion instrument to accompany songs",
//   },
//   {
//     value: "Recognise and create simple rythmic patterns",
//     label: "Recognise and create simple rythmic patterns",
//   },
//   {
//     value:
//       "Use basic manipulative skills, techniques and processes in a few media with confidence to commuicate ideas through images ",
//     label:
//       "Use basic manipulative skills, techniques and processes in a few media with confidence to commuicate ideas through images ",
//   },
//   {
//     value: "Use imagination to make creative and innovative pictures",
//     label: "Use imagination to make creative and innovative pictures",
//   },
//   {
//     value: "Show basic understandingn of sequence, repeat and pattern ",
//     label: "Show basic understandingn of sequence, repeat and pattern ",
//   },
//   {
//     value:
//       "Demonstate basic technical skills and porcesses to produce simple 3D objects, and experiment with textures. ",
//     label:
//       "Demonstate basic technical skills and porcesses to produce simple 3D objects, and experiment with textures. ",
//   },
//   {
//     value: "Use senses to describe objects and situations",
//     label: "Use senses to describe objects and situations",
//   },
//   { value: "Identify the main meals", label: "Identify the main meals" },
//   {
//     value: "Wash hands before and after eating",
//     label: "Wash hands before and after eating",
//   },
//   {
//     value: "Recognise the importance of eating a variety of foods",
//     label: "Recognise the importance of eating a variety of foods",
//   },
//   { value: "Observe table manners", label: "Observe table manners" },
//   { value: "Choose healthy foods", label: "Choose healthy foods" },
//   {
//     value: "Appreciate and enjoy the meals",
//     label: "Appreciate and enjoy the meals",
//   },
//   { value: "Practise personal hygiene", label: "Practise personal hygiene" },
//   {
//     value:
//       "Observe procedures to avoid spread of infectious diseases (sneezing, coughing, hand washing..)",
//     label:
//       "Observe procedures to avoid spread of infectious diseases (sneezing, coughing, hand washing..)",
//   },
//   {
//     value: "Takes responsibility for own body care",
//     label: "Takes responsibility for own body care",
//   },
//   {
//     value:
//       "Identify the dangers in their environment (home, school, road, pets, games)",
//     label:
//       "Identify the dangers in their environment (home, school, road, pets, games)",
//   },
//   {
//     value: "Recognize potentially hazardous objects",
//     label: "Recognize potentially hazardous objects",
//   },
//   { value: "Manage own safety ", label: "Manage own safety " },
//   {
//     value: "Engage actively in gross motor activities ",
//     label: "Engage actively in gross motor activities ",
//   },
//   {
//     value: "Perform fine motor activities ",
//     label: "Perform fine motor activities ",
//   },
//   {
//     value:
//       "Carry out simple coordinated movements, balance, and strength activities",
//     label:
//       "Carry out simple coordinated movements, balance, and strength activities",
//   },
//   {
//     value:
//       "Identify and perform activities that require strength and flexibility, including simple breathing exercises and stretching",
//     label:
//       "Identify and perform activities that require strength and flexibility, including simple breathing exercises and stretching",
//   },
//   { value: "Pran konsians so lidantite", label: "Pran konsians so lidantite" },
//   { value: "Rekonesans grafik so nom", label: "Rekonesans grafik so nom" },
//   {
//     value: "Rekonesans let kapital ek tilet",
//     label: "Rekonesans let kapital ek tilet",
//   },
//   { value: "Rekonesans silab", label: "Rekonesans silab" },
//   { value: " 2010  -  2019", label: " 2010  -  2019" },
//   {
//     value:
//       "Zanvie, Fevriye, Mars, Avril,Me, Zin, Ziye ,Out, Septanm, Oktob, Novanm, Desanm",
//     label:
//       "Zanvie, Fevriye, Mars, Avril,Me, Zin, Ziye ,Out, Septanm, Oktob, Novanm, Desanm",
//   },
//   { value: "  1 - 31", label: "  1 - 31" },
//   {
//     value: "Lindi , Mārdi , Merkredi , Zedi ,Vandredi, Samdi\nDimans",
//     label: "Lindi , Mārdi , Merkredi , Zedi ,Vandredi, Samdi\nDimans",
//   },
//   {
//     value: "bato,   soulye , lagitār ,avion,  bonbon , lārdwaz   ,loto\n",
//     label: "bato,   soulye , lagitār ,avion,  bonbon , lārdwaz   ,loto\n",
//   },
//   {
//     value: "avan/aster/toulezour/plitār",
//     label: "avan/aster/toulezour/plitār",
//   },
//   { value: "granmatin , midi  ,tanto", label: "granmatin , midi  ,tanto" },
//   { value: " ecoute, reflesi", label: " ecoute, reflesi" },
//   { value: "dekrir nou lekol", label: "dekrir nou lekol" },
//   {
//     value: "dir son nou tande dan koumansman bãnn mo. ",
//     label: "dir son nou tande dan koumansman bãnn mo. ",
//   },
//   { value: '" Tizan gato kanet', label: '" Tizan gato kanet' },
//   { value: "ecrir fraz", label: "ecrir fraz" },
//   { value: "Nou gete, nou koze", label: "Nou gete, nou koze" },
//   { value: "rekonet alfabet", label: "rekonet alfabet" },
//   { value: " Deskripsion bãnn sinbol", label: " Deskripsion bãnn sinbol" },
//   {
//     value: "dekrir  bãnn personaz ki enan dan zistwār-la. ",
//     label: "dekrir  bãnn personaz ki enan dan zistwār-la. ",
//   },
//   { value: "mo, to", label: "mo, to" },
//   {
//     value: "sak ,sizo, lārdwaz ,lareg,fitwār,kreyon, kaye,plim\n",
//     label: "sak ,sizo, lārdwaz ,lareg,fitwār,kreyon, kaye,plim\n",
//   },
//   {
//     value: "Kont apārtir zero ziskan dis.",
//     label: "Kont apārtir zero ziskan dis.",
//   },
//   {
//     value: "Ekrir apārtir zero ziskan dis.",
//     label: "Ekrir apārtir zero ziskan dis.",
//   },
//   { value: "Ekrir bãnn fraz", label: "Ekrir bãnn fraz" },
//   {
//     value: "bis, camion,vãnn ,loto, bisiklet,moto",
//     label: "bis, camion,vãnn ,loto, bisiklet,moto",
//   },
//   {
//     value: "“rickshaw,,pirog,bato, saret ,trin,Elikopter",
//     label: "“rickshaw,,pirog,bato, saret ,trin,Elikopter",
//   },
//   {
//     value: "anba, gos, devan/,deryer, drwat, lor\n",
//     label: "anba, gos, devan/,deryer, drwat, lor\n",
//   },
//   {
//     value: "ekrir, lir,  zwe,  ekout ,desine ,galoupe ,manze,kriye ,koze",
//     label: "ekrir, lir,  zwe,  ekout ,desine ,galoupe ,manze,kriye ,koze",
//   },
//   {
//     value:
//       "Lakour rekreasion,zwe kanet,lapli laponp,lamarel, zakana zakana, emanoue,",
//     label:
//       "Lakour rekreasion,zwe kanet,lapli laponp,lamarel, zakana zakana, emanoue,",
//   },
//   {
//     value: "Lor pārking lekol ,Dan vãnn ,Lakaz,Gārdri,Granmer/granper\n",
//     label: "Lor pārking lekol ,Dan vãnn ,Lakaz,Gārdri,Granmer/granper\n",
//   },
//   { value: "Sourtrel ek fourmi", label: "Sourtrel ek fourmi" },
//   {
//     value: "Granmatin,Dan klas ,Dan rekreasion,Dan tanto",
//     label: "Granmatin,Dan klas ,Dan rekreasion,Dan tanto",
//   },
//   { value: "Trwa-z-er trant", label: "Trwa-z-er trant" },
//   { value: "Set frer tang", label: "Set frer tang" },
//   {
//     value: "rouz ,ver,zõnn ,mov,oranz,ble,blan\n",
//     label: "rouz ,ver,zõnn ,mov,oranz,ble,blan\n",
//   },
//   { value: "1--8", label: "1--8" },
//   {
//     value: "ponm,banãnn,pwār,goyav,papay,tamarin",
//     label: "ponm,banãnn,pwār,goyav,papay,tamarin",
//   },
//   { value: "l ,p, r,  m ,s,v,t,k,", label: "l ,p, r,  m ,s,v,t,k," },
//   {
//     value: "Zanvie, Fevriye, Mars, Avril,Me, Zin, Ziye ,Out",
//     label: "Zanvie, Fevriye, Mars, Avril,Me, Zin, Ziye ,Out",
//   },
//   {
//     value: "Septanm, Oktob, Novanm, Desanm",
//     label: "Septanm, Oktob, Novanm, Desanm",
//   },
// ];
const qafTarget2 = {
  1: [
    {
      value: "Aktivite 1. Anou gete. Dir ki to pe trouve?",
      label: "Aktivite 1. Anou gete. Dir ki to pe trouve?",
    },
    {
      value: "Aktivite 2: Mo desinn momem",
      label: "Aktivite 2: Mo desinn momem",
    },
    {
      value: "Aktivite 3: Mo ekrir mo nom dan name tag",
      label: "Aktivite 3: Mo ekrir mo nom dan name tag",
    },
    {
      value: "Aktivite 4. Mo dir nom bãnn tilet lalfabe",
      label: "Aktivite 4. Mo dir nom bãnn tilet lalfabe",
    },
    {
      value: "Aktivite 5. Mo rod bãnn let dapre zot form",
      label: "Aktivite 5. Mo rod bãnn let dapre zot form",
    },
    {
      value: "Aktivite 6. Anou dekouver bãnn let an kapital",
      label: "Aktivite 6. Anou dekouver bãnn let an kapital",
    },
    {
      value: "Aktivite 7. Mo get form bãnn let kapital",
      label: "Aktivite 7. Mo get form bãnn let kapital",
    },
    {
      value: "Aktivite 1.  Pre-lekritir Trase ek dir ki let sa:",
      label: "Aktivite 1.  Pre-lekritir Trase ek dir ki let sa:",
    },
    {
      value: "Aktivite 2. Reekrir bãnn let",
      label: "Aktivite 2. Reekrir bãnn let",
    },
    {
      value: "Aktivite 3. Mo aprãnn ekrir mo prenom",
      label: "Aktivite 3. Mo aprãnn ekrir mo prenom",
    },
    {
      value: "Aktivite 1. Anou zwe. Montre ki let ki inn arive",
      label: "Aktivite 1. Anou zwe. Montre ki let ki inn arive",
    },
    {
      value:
        "Aktivite 2. Nou sepār bãnn konsõnn ek bãnn vwayel Nou aprãnn zot son",
      label:
        "Aktivite 2. Nou sepār bãnn konsõnn ek bãnn vwayel Nou aprãnn zot son",
    },
    {
      value:
        "Aktivite 1. Mo dir ki mo pe trouve Dekrir sa zimaz-la dan to prop mo",
      label:
        "Aktivite 1. Mo dir ki mo pe trouve Dekrir sa zimaz-la dan to prop mo",
    },
    { value: "Aktivite 2. Mo ekoute", label: "Aktivite 2. Mo ekoute" },
    {
      value:
        "Aktivite 3. “Enn laniverser spesial, laniverser nou pei” Anou aprãnn Lim nasional",
      label:
        "Aktivite 3. “Enn laniverser spesial, laniverser nou pei” Anou aprãnn Lim nasional",
    },
    {
      value: "Aktivite 3. Mo pran kont bãnn mo ki dir kouman  mo santi mwan",
      label: "Aktivite 3. Mo pran kont bãnn mo ki dir kouman  mo santi mwan",
    },
    {
      value: "Aktivite 1.Pronons son [a]",
      label: "Aktivite 1.Pronons son [a]",
    },
    {
      value: "Aktivite 2. Idantifie bãnn mo avek son [a]",
      label: "Aktivite 2. Idantifie bãnn mo avek son [a]",
    },
    {
      value: "Aktivite 3. Anou dekouver bãnn mo avek son [a]",
      label: "Aktivite 3. Anou dekouver bãnn mo avek son [a]",
    },
    {
      value: "Aktivite 4. Anou dekouver silab avek son [a] dan bãnn mo",
      label: "Aktivite 4. Anou dekouver silab avek son [a] dan bãnn mo",
    },
    {
      value:
        "Aktivite 1  i. Mo met mo ledwa lor sak bwat pou aprãnn eple sa  bãnn mo-la  ii. Apre mo aprãnn tras sak mo pār momem",
      label:
        "Aktivite 1  i. Mo met mo ledwa lor sak bwat pou aprãnn eple sa  bãnn mo-la  ii. Apre mo aprãnn tras sak mo pār momem",
    },
    {
      value: "Aktivite 2. Mo kolorye bãnn let ki trouv dan sak mo",
      label: "Aktivite 2. Mo kolorye bãnn let ki trouv dan sak mo",
    },
    {
      value: "Aktivite 3. Ekrir mo ki korespõnn dan sak bwat",
      label: "Aktivite 3. Ekrir mo ki korespõnn dan sak bwat",
    },
    {
      value: "Aktivite 4: Mo prepār enn kārt laniverser",
      label: "Aktivite 4: Mo prepār enn kārt laniverser",
    },
    {
      value: "Aktivite 1. Mo aprãnn lir enn text",
      label: "Aktivite 1. Mo aprãnn lir enn text",
    },
    {
      value: "Akitivite 2. Dekod bãnn mo",
      label: "Akitivite 2. Dekod bãnn mo",
    },
    {
      value: "Aktivite 3. Rekonet ek lir bãnn silab",
      label: "Aktivite 3. Rekonet ek lir bãnn silab",
    },
    {
      value: "Aktivite 6. Mo rekonet bãnn mo",
      label: "Aktivite 6. Mo rekonet bãnn mo",
    },
    {
      value: "Aktivite 1. Ki mo aprãnn dan Grad 1?  Ki mo aprãnn dan klas KR?",
      label: "Aktivite 1. Ki mo aprãnn dan Grad 1?  Ki mo aprãnn dan klas KR?",
    },
    {
      value: "Aktivite 2. Ki nou bizin pou aprãnn? Ki manier nou aprãnn?",
      label: "Aktivite 2. Ki nou bizin pou aprãnn? Ki manier nou aprãnn?",
    },
    {
      value:
        "Aktivite 3. Si mo ti kapav swazir ki mo aprãnn dan lekol, ki mo ti pou anvi aprãnn?",
      label:
        "Aktivite 3. Si mo ti kapav swazir ki mo aprãnn dan lekol, ki mo ti pou anvi aprãnn?",
    },
    {
      value: "Aktivite 1. Anou fer son [e]",
      label: "Aktivite 1. Anou fer son [e]",
    },
    {
      value: "Aktivite 2. Anou rekonet bãnn mo avek son [e]",
      label: "Aktivite 2. Anou rekonet bãnn mo avek son [e]",
    },
    {
      value:
        "Aktivite 3. Anou idantifie son [e] Kolorye let &apos;e&apos; dan bãnn mo ki nou pe trouve",
      label:
        "Aktivite 3. Anou idantifie son [e] Kolorye let &apos;e&apos; dan bãnn mo ki nou pe trouve",
    },
    {
      value: "Aktivite 4. Anou get bãnn silab",
      label: "Aktivite 4. Anou get bãnn silab",
    },
    {
      value: "Aktivite 5. Anou get bãnn silab",
      label: "Aktivite 5. Anou get bãnn silab",
    },
    {
      value:
        "Aktivite 1.  1. Mo lir sa ti text-la ek aprãnn li pār ker 2. Dan sak lalign, mo kolorye bãnn mo kot enan let “e”",
      label:
        "Aktivite 1.  1. Mo lir sa ti text-la ek aprãnn li pār ker 2. Dan sak lalign, mo kolorye bãnn mo kot enan let “e”",
    },
    {
      value:
        "Aktivite 2. Mo met let &apos;e&apos; dan sa text-la lor tou bãnn tire",
      label:
        "Aktivite 2. Mo met let &apos;e&apos; dan sa text-la lor tou bãnn tire",
    },
    {
      value: "Aktivite 3. Mo trase ek ekrir bãnn mo avek son [e]",
      label: "Aktivite 3. Mo trase ek ekrir bãnn mo avek son [e]",
    },
    {
      value: "Aktivite 4. Mo relie desin ek mo",
      label: "Aktivite 4. Mo relie desin ek mo",
    },
    {
      value: "Aktivite 5. Mo trase ek kolorye seki mo fer dan lekol",
      label: "Aktivite 5. Mo trase ek kolorye seki mo fer dan lekol",
    },
    {
      value:
        "Aktivite 6 Anba sak desin enan de ti bout mo. Eple ek lir zot. Azout ti bout mo (silab) ki korek pou sak mo. Inn fer enn lexanp pou twa",
      label:
        "Aktivite 6 Anba sak desin enan de ti bout mo. Eple ek lir zot. Azout ti bout mo (silab) ki korek pou sak mo. Inn fer enn lexanp pou twa",
    },
    {
      value:
        "Aktivite 7. 1. Mo profeser montre mwan kouman eple ek lir sa  bãnn mo-la pār momem 2. Mo rekopie sa bãnn mo-la",
      label:
        "Aktivite 7. 1. Mo profeser montre mwan kouman eple ek lir sa  bãnn mo-la pār momem 2. Mo rekopie sa bãnn mo-la",
    },
    {
      value: "Aktivite 8. Anou get bãnn reper dan letan",
      label: "Aktivite 8. Anou get bãnn reper dan letan",
    },
    {
      value:
        "Aktivite 1  1.Mo ekoute. Mo dir ki son ki mo tande  2.Mo anserkle bãnn mo avek son [e]",
      label:
        "Aktivite 1  1.Mo ekoute. Mo dir ki son ki mo tande  2.Mo anserkle bãnn mo avek son [e]",
    },
    {
      value: "Aktivite 2. Mo aprãnn lir ek mo swiv ek mo ledwa",
      label: "Aktivite 2. Mo aprãnn lir ek mo swiv ek mo ledwa",
    },
    {
      value: "Aktivite 3. Dekod bãnn mo avek son [e] ki trouv dan sa text-la",
      label: "Aktivite 3. Dekod bãnn mo avek son [e] ki trouv dan sa text-la",
    },
    {
      value: "Aktivite 4. Mo rekonet bãnn silab. Mo lir",
      label: "Aktivite 4. Mo rekonet bãnn silab. Mo lir",
    },
    {
      value:
        "Aktivite 5. Mo lir bãnn silab ki enan dan lalis.Apre mo azout bãnn silab ki manke lor sak tire",
      label:
        "Aktivite 5. Mo lir bãnn silab ki enan dan lalis.Apre mo azout bãnn silab ki manke lor sak tire",
    },
    {
      value:
        "Aktivite 2. Mo dir nom bãnn zimaz e mo kolorye bãnn desin kot mo tãnn son [i]",
      label:
        "Aktivite 2. Mo dir nom bãnn zimaz e mo kolorye bãnn desin kot mo tãnn son [i]",
    },
    {
      value: "Aktivite 3. Mo ekoute. Mo repete",
      label: "Aktivite 3. Mo ekoute. Mo repete",
    },
    {
      value: "Aktivite 1. Prodir son [i]",
      label: "Aktivite 1. Prodir son [i]",
    },
    {
      value: "Aktivite 2. Anou get son [i]",
      label: "Aktivite 2. Anou get son [i]",
    },
    {
      value:
        "Aktivite 3. Bãnn bout-mo an dezord dan bwat anba. Eski to kapav trouv bãnn mo ki manke pār tomem?",
      label:
        "Aktivite 3. Bãnn bout-mo an dezord dan bwat anba. Eski to kapav trouv bãnn mo ki manke pār tomem?",
    },
    {
      value: "Aktivite 4. Anou kont bãnn silab avek son [i]",
      label: "Aktivite 4. Anou kont bãnn silab avek son [i]",
    },
    {
      value: "Aktivite 5. Anou trouv bãnn silab",
      label: "Aktivite 5. Anou trouv bãnn silab",
    },
    {
      value:
        "Aktivite 1. Rekopie sa bãnn mo avek son [i]. Met sak  let dan enn kazie kouman dan lexanp:",
      label:
        "Aktivite 1. Rekopie sa bãnn mo avek son [i]. Met sak  let dan enn kazie kouman dan lexanp:",
    },
    {
      value: "Aktivite 2. Mo aprãnn fer bãnn swa",
      label: "Aktivite 2. Mo aprãnn fer bãnn swa",
    },
    {
      value:
        "Aktivite 3. Anou gete ki zwe kapav zwe tousel, e ki zwe bizin enan kamarad",
      label:
        "Aktivite 3. Anou gete ki zwe kapav zwe tousel, e ki zwe bizin enan kamarad",
    },
    {
      value:
        "Aktivite 4. Anou gete ki zanimo kapav swagnin ek ki zanimo reste dan lanatir",
      label:
        "Aktivite 4. Anou gete ki zanimo kapav swagnin ek ki zanimo reste dan lanatir",
    },
    {
      value: "Aktivite 5. Mo aprãnn lir ek apre ekrir bãnn silab pār momem",
      label: "Aktivite 5. Mo aprãnn lir ek apre ekrir bãnn silab pār momem",
    },
    {
      value: "Aktivite 1. Mo aprãnn lir ek mo ledwa",
      label: "Aktivite 1. Mo aprãnn lir ek mo ledwa",
    },
    {
      value: "Aktivite 2. Mo lir ek dekod bãnn mo",
      label: "Aktivite 2. Mo lir ek dekod bãnn mo",
    },
    {
      value: "Aktivite 3. Mo met silab ki apropriye lor sak tire",
      label: "Aktivite 3. Mo met silab ki apropriye lor sak tire",
    },
    {
      value: "Aktivite 4. Mo lir bãnn fraz pār momem",
      label: "Aktivite 4. Mo lir bãnn fraz pār momem",
    },
    {
      value: "Aktivite 1. Mo aprãnn lir ek mo ledwa.",
      label: "Aktivite 1. Mo aprãnn lir ek mo ledwa.",
    },
    {
      value:
        "Aktivite 1. Anou observ sa desin-la. Ki nou pe trouve lor sa desin-la?",
      label:
        "Aktivite 1. Anou observ sa desin-la. Ki nou pe trouve lor sa desin-la?",
    },
    {
      value: "Aktivite 1. Anou fer son [o]",
      label: "Aktivite 1. Anou fer son [o]",
    },
    {
      value: "Aktivite 2. Anou rekonet bãnn mo avek son [o]",
      label: "Aktivite 2. Anou rekonet bãnn mo avek son [o]",
    },
    {
      value: "Aktivite 3. Anou idantifie son [o] dan bãnn mo",
      label: "Aktivite 3. Anou idantifie son [o] dan bãnn mo",
    },
    {
      value: "Aktivite 4. Anou dekouver bãnn silab",
      label: "Aktivite 4. Anou dekouver bãnn silab",
    },
    {
      value:
        "Aktivite 5. Get bãnn mo anba sak desin ek kolorye bãnn silab avek son [o].",
      label:
        "Aktivite 5. Get bãnn mo anba sak desin ek kolorye bãnn silab avek son [o].",
    },
    {
      value: "Aktivite 6. Anou lir bãnn silab konplex avek son [o]",
      label: "Aktivite 6. Anou lir bãnn silab konplex avek son [o]",
    },
    {
      value:
        "Aktivite 7. Azout enn konsõnn devan “ot” ek esey gete  ki mo ki formin. Inn fer enn lexanp pou twa.",
      label:
        "Aktivite 7. Azout enn konsõnn devan “ot” ek esey gete  ki mo ki formin. Inn fer enn lexanp pou twa.",
    },
    {
      value: "Aktivite 8. Anou kont bãnn silab avek son [o]",
      label: "Aktivite 8. Anou kont bãnn silab avek son [o]",
    },
    {
      value:
        "Aktivite 1. Mo kolorye sak mo lor sa tablo-la avek enn kouler diferan",
      label:
        "Aktivite 1. Mo kolorye sak mo lor sa tablo-la avek enn kouler diferan",
    },
    {
      value: "Aktivite 2. Anou ekout enn ti poem",
      label: "Aktivite 2. Anou ekout enn ti poem",
    },
    {
      value: "Aktivite 3. Anou observ nou klas",
      label: "Aktivite 3. Anou observ nou klas",
    },
    {
      value: "Aktivite 4. Anou pratik lekritir",
      label: "Aktivite 4. Anou pratik lekritir",
    },
    {
      value: "Aktivite 6. Anou aprãnn ekrir bãnn sif",
      label: "Aktivite 6. Anou aprãnn ekrir bãnn sif",
    },
    {
      value:
        "Aktivite 7. Mo konte konbien silab enan dan sak mo ek mo ekrir li dan bwat anba sak desin. Inn fer enn lexanp pou twa. Mo trase ek re-ekrir sak mo dan lespas akote.",
      label:
        "Aktivite 7. Mo konte konbien silab enan dan sak mo ek mo ekrir li dan bwat anba sak desin. Inn fer enn lexanp pou twa. Mo trase ek re-ekrir sak mo dan lespas akote.",
    },
    {
      value: "Aktivite 8. Anou rekonet bãnn mo",
      label: "Aktivite 8. Anou rekonet bãnn mo",
    },
    {
      value: "Aktivite 9. Anou observ sa desin-la ek dir ki pa bon ladan.",
      label: "Aktivite 9. Anou observ sa desin-la ek dir ki pa bon ladan.",
    },
    {
      value: "Aktivite 10: (a) Mo aprãnn lir sa regleman klas-la.",
      label: "Aktivite 10: (a) Mo aprãnn lir sa regleman klas-la.",
    },
    {
      value: "(b) Mo get bãnn desin ek aprãnn lir sak mo.",
      label: "(b) Mo get bãnn desin ek aprãnn lir sak mo.",
    },
    {
      value: "(c)  Mo ranpli sa tablo-la avek led mo profeser.",
      label: "(c)  Mo ranpli sa tablo-la avek led mo profeser.",
    },
    {
      value: "Aktivite 11. Mo aprãnn rekopie enn fraz.",
      label: "Aktivite 11. Mo aprãnn rekopie enn fraz.",
    },
    {
      value: "Aktivite 1. Anou aprãnn konte.",
      label: "Aktivite 1. Anou aprãnn konte.",
    },
    {
      value: "Aktivite 2. Mo dir ki kantite obze enan",
      label: "Aktivite 2. Mo dir ki kantite obze enan",
    },
    { value: "Aktivite 3. Mo konte", label: "Aktivite 3. Mo konte" },
    {
      value: "Aktivite 4. Mo konte konbien obze enan ek mo ekrir li akote.",
      label: "Aktivite 4. Mo konte konbien obze enan ek mo ekrir li akote.",
    },
    {
      value: "Aktivite 5. Kont kantite ledwa. Ekrir nom so sif anba li.",
      label: "Aktivite 5. Kont kantite ledwa. Ekrir nom so sif anba li.",
    },
    {
      value: "Aktivite 6. Ansekle bon nimero.",
      label: "Aktivite 6. Ansekle bon nimero.",
    },
    {
      value:
        "Aktivite 1. Anou observ sa bãnn desin-la ek dir ki nou pe trouve.",
      label:
        "Aktivite 1. Anou observ sa bãnn desin-la ek dir ki nou pe trouve.",
    },
    {
      value: "Aktivite 1. Anou fer son [u]",
      label: "Aktivite 1. Anou fer son [u]",
    },
    {
      value: "Aktivite 2. Anou nomm bãnn desin ki nou pe trouve",
      label: "Aktivite 2. Anou nomm bãnn desin ki nou pe trouve",
    },
    {
      value:
        "Aktivite 3. Anou dekouver bãnn bout mo (silab) avek son [u]. Anou osi get enn bãnn mo kot nou tãnn sa bãnn silab-la:",
      label:
        "Aktivite 3. Anou dekouver bãnn bout mo (silab) avek son [u]. Anou osi get enn bãnn mo kot nou tãnn sa bãnn silab-la:",
    },
    {
      value: "Aktivite 4. Anou dekouver bãnn silab sinp avek son [u]",
      label: "Aktivite 4. Anou dekouver bãnn silab sinp avek son [u]",
    },
    {
      value: "Aktivite 5. Anou esey lir bãnn silab konplex avek son [u]",
      label: "Aktivite 5. Anou esey lir bãnn silab konplex avek son [u]",
    },
    {
      value:
        "Aktivite 1. 1. Mo lir sa ti text-la ek aprãnn li pār  ker. 2. Dan sak lalign, mo kolorye bãnn mo kot enan “ou”",
      label:
        "Aktivite 1. 1. Mo lir sa ti text-la ek aprãnn li pār  ker. 2. Dan sak lalign, mo kolorye bãnn mo kot enan “ou”",
    },
    {
      value:
        "Aktivite 2. Mo met &apos;&apos;ou&apos;&apos; dan sa text-la lor tou bãnn tire:",
      label:
        "Aktivite 2. Mo met &apos;&apos;ou&apos;&apos; dan sa text-la lor tou bãnn tire:",
    },
    {
      value: "Aktivite 3. Anou aprãnn konte",
      label: "Aktivite 3. Anou aprãnn konte",
    },
    {
      value: "Aktivite 4. Mo dir ki kantite kitsoz mo trouve",
      label: "Aktivite 4. Mo dir ki kantite kitsoz mo trouve",
    },
    {
      value: "Aktivite 5. Mo lir bãnn sif ek zot nom",
      label: "Aktivite 5. Mo lir bãnn sif ek zot nom",
    },
    {
      value: "Aktivite 6. Mo reekrir nom bãnn sif.",
      label: "Aktivite 6. Mo reekrir nom bãnn sif.",
    },
    {
      value: "Aktivite 7. Mo relie kantite ledwa avek bon sif.",
      label: "Aktivite 7. Mo relie kantite ledwa avek bon sif.",
    },
    {
      value: "Aktivite 8. Anou aprãnn ekrir bãnn sif",
      label: "Aktivite 8. Anou aprãnn ekrir bãnn sif",
    },
    {
      value: "Aktivite 9. Anou aprãnn dir ek ekrir bãnn kantite",
      label: "Aktivite 9. Anou aprãnn dir ek ekrir bãnn kantite",
    },
    {
      value:
        "Aktivite 11. Mo konte konbien silab enan dan sak mo ek mo ekrir li anba sak desin. Mo trase ek reekrir sak mo dan lespas akote.",
      label:
        "Aktivite 11. Mo konte konbien silab enan dan sak mo ek mo ekrir li anba sak desin. Mo trase ek reekrir sak mo dan lespas akote.",
    },
    {
      value: "Aktivite 1. Lektir-konpreansion",
      label: "Aktivite 1. Lektir-konpreansion",
    },
    {
      value: "Aktivite 2. Mo ekoute. Mo anserkle bãnn mo kot mo tãnn son [ou].",
      label: "Aktivite 2. Mo ekoute. Mo anserkle bãnn mo kot mo tãnn son [ou].",
    },
    {
      value: "Aktivite 3. Mo kolorye desin kot mo tãnn son [ou].",
      label: "Aktivite 3. Mo kolorye desin kot mo tãnn son [ou].",
    },
    {
      value: "Aktivite 4. Anou lir sa text-la",
      label: "Aktivite 4. Anou lir sa text-la",
    },
    {
      value: "Aktivite 5. Mo dekod bãnn mo.",
      label: "Aktivite 5. Mo dekod bãnn mo.",
    },
    {
      value: "Aktivite 1. Avek mo profeser, mo koz lor landrwa kot mo reste.",
      label: "Aktivite 1. Avek mo profeser, mo koz lor landrwa kot mo reste.",
    },
    {
      value: "Aktivite 2. Reprezant bãnn zil Repiblik Moris",
      label: "Aktivite 2. Reprezant bãnn zil Repiblik Moris",
    },
    { value: "Aktivite 3. Anou reflesi", label: "Aktivite 3. Anou reflesi" },
    {
      value:
        "Aktivite 1. Fer enn desin enn kitsoz dapre son ki indike dan sak kare.",
      label:
        "Aktivite 1. Fer enn desin enn kitsoz dapre son ki indike dan sak kare.",
    },
    {
      value: "Aktivite 2. Konplet bãnn mo avek let ki bizin.",
      label: "Aktivite 2. Konplet bãnn mo avek let ki bizin.",
    },
    {
      value:
        "Aktivite 3. Anou konte konbien silab enan dan sak mo ek kolorye bon repons.",
      label:
        "Aktivite 3. Anou konte konbien silab enan dan sak mo ek kolorye bon repons.",
    },
    {
      value: "Aktivite 2. Mo profeser lir sa bãnn fraz-la.",
      label: "Aktivite 2. Mo profeser lir sa bãnn fraz-la.",
    },
    {
      value: "Aktivite 3. Mo aprãnn ekrir sa bãnn mo-la",
      label: "Aktivite 3. Mo aprãnn ekrir sa bãnn mo-la",
    },
    {
      value:
        "Aktivite 4. Mo aprãnn ekrir. Mo desinn kitsoz pou  reprezant sa bãnn mo-la.",
      label:
        "Aktivite 4. Mo aprãnn ekrir. Mo desinn kitsoz pou  reprezant sa bãnn mo-la.",
    },
    { value: "Aktivite 5. Anou Obzerve", label: "Aktivite 5. Anou Obzerve" },
    {
      value:
        "Aktivite 6. Anou al dekouver kouman bãnn dimounn  vwayaze zordi zour dan Rodrig",
      label:
        "Aktivite 6. Anou al dekouver kouman bãnn dimounn  vwayaze zordi zour dan Rodrig",
    },
    {
      value:
        "Aktivite 1. Mo profeser lir enn zistwār lor kouman dimounn ti pe vwayaze lontan dan Rodrig",
      label:
        "Aktivite 1. Mo profeser lir enn zistwār lor kouman dimounn ti pe vwayaze lontan dan Rodrig",
    },
    {
      value:
        "Aktivite 2. Mo reflesi ek mo ekrir. Kouman dimounn ti pe vwayaze lontan? Kouman dimounn vwayaze aster-la?",
      label:
        "Aktivite 2. Mo reflesi ek mo ekrir. Kouman dimounn ti pe vwayaze lontan? Kouman dimounn vwayaze aster-la?",
    },
    {
      value:
        "Aktivite 3. Mo remet bãnn silab dan sak bwat dan lord pou form enn mo",
      label:
        "Aktivite 3. Mo remet bãnn silab dan sak bwat dan lord pou form enn mo",
    },
    {
      value: "Aktivite 4. Mo aprãnn rekopie enn fraz.",
      label: "Aktivite 4. Mo aprãnn rekopie enn fraz.",
    },
    {
      value:
        "Aktivite 5. Anou lir enn text. Servi nou ledwa pou swiv bãnn fles.",
      label:
        "Aktivite 5. Anou lir enn text. Servi nou ledwa pou swiv bãnn fles.",
    },
    {
      value: "Aktivite 6. Mo dekod bãnn mo.",
      label: "Aktivite 6. Mo dekod bãnn mo.",
    },

    {
      value: "La salle de bain, la salon, la chambre à coucher, la cuisine",
      label: "La salle de bain, la salon, la chambre à coucher, la cuisine",
    },
    {
      value: "maman, papa, soeur, frère,",
      label: "maman, papa, soeur, frère,",
    },
    {
      value: "prénom, nom de famille, village, ville, majuscule",
      label: "prénom, nom de famille, village, ville, majuscule",
    },
    { value: "[a]", label: "[a]" },
    { value: "[m]", label: "[m]" },
    {
      value: "ecole, classe, terrain, jardin,",
      label: "ecole, classe, terrain, jardin,",
    },
    {
      value: "âge, adresse, coleur préférée",
      label: "âge, adresse, coleur préférée",
    },
    {
      value:
        "livre, crayon, ardoise, pinceau, plume, feutre, ciseaux, sac, cahier, gomme",
      label:
        "livre, crayon, ardoise, pinceau, plume, feutre, ciseaux, sac, cahier, gomme",
    },
    {
      value: "objets; animaux;  lettre minuscule",
      label: "objets; animaux;  lettre minuscule",
    },
    { value: "[eu]", label: "[eu]" },
    { value: "[t]", label: "[t]" },
    { value: "[a], [m], [eu], [t]", label: "[a], [m], [eu], [t]" },
    {
      value:
        "dominos, ballon, poupée; cache-cache [jeux vidéo; cerf-volant; robot; toupie]",
      label:
        "dominos, ballon, poupée; cache-cache [jeux vidéo; cerf-volant; robot; toupie]",
    },
    {
      value: "gouli dannta; billes; la roue; tina; sapsiway; élastique",
      label: "gouli dannta; billes; la roue; tina; sapsiway; élastique",
    },
    {
      value: "Il fait beau; il pleut; il y a du vent; il y  des nuages",
      label: "Il fait beau; il pleut; il y a du vent; il y  des nuages",
    },
    {
      value: "un à dix; s pour le pluriel",
      label: "un à dix; s pour le pluriel",
    },
    { value: "[d]", label: "[d]" },
    { value: "[i]", label: "[i]" },
    {
      value: "[a], [m], [eu], [t], [d], [i]",
      label: "[a], [m], [eu], [t], [d], [i]",
    },
  ],
  2: [
    {
      value: "1. Mo dir ki mo finn konpran dan zistwar-la.",
      label: "1. Mo dir ki mo finn konpran dan zistwar-la.",
    },
    {
      value: "2. Mo relie sak mo avek so explikasion.",
      label: "2. Mo relie sak mo avek so explikasion.",
    },
    {
      value: "3. Mo met enn rayt kot fraz ki vre ek lakrwa kot fraz ki fos.",
      label: "3. Mo met enn rayt kot fraz ki vre ek lakrwa kot fraz ki fos.",
    },
    {
      value: "4. Mo anserkle bon repons.",
      label: "4. Mo anserkle bon repons.",
    },
    {
      value: "5. Mo aprãnn sa bãnn mo-la.",
      label: "5. Mo aprãnn sa bãnn mo-la.",
    },
    { value: "Mo aprãnn lir", label: "Mo aprãnn lir" },
    { value: "Mo dekod bãnn mo", label: "Mo dekod bãnn mo" },
    {
      value: "2. Mo kas bãnn mo an silab.",
      label: "2. Mo kas bãnn mo an silab.",
    },
    {
      value: "1. Mo antour bãnn mo kot mo trouv let /l/.",
      label: "1. Mo antour bãnn mo kot mo trouv let /l/.",
    },
    {
      value: "2. Mo kolorye mo ki koresponn avek sak zimaz.",
      label: "2. Mo kolorye mo ki koresponn avek sak zimaz.",
    },
    {
      value: "3. Mo ekrir nom sak zimaz.",
      label: "3. Mo ekrir nom sak zimaz.",
    },
    {
      value: "4. Nou ekrir bãnn mo avek son [l].",
      label: "4. Nou ekrir bãnn mo avek son [l].",
    },
    {
      value: "5. Mo anserkle mo ki koumans par let /l/.",
      label: "5. Mo anserkle mo ki koumans par let /l/.",
    },
    {
      value: "6. Mo repõnn sa bãnn kestion-la.",
      label: "6. Mo repõnn sa bãnn kestion-la.",
    },
    { value: "1. Mo ekrir let ⁄L⁄.", label: "1. Mo ekrir let ⁄L⁄." },
    { value: "2. Mo ekrir let ⁄l⁄.", label: "2. Mo ekrir let ⁄l⁄." },
    {
      value: "3. Mo ekrir sa bãnn mo-la.",
      label: "3. Mo ekrir sa bãnn mo-la.",
    },
    { value: "4. Mo kopie sa fraz-la.", label: "4. Mo kopie sa fraz-la." },
    {
      value: "5. Mo met sa bãnn mo-la an-ord pou form enn fraz.",
      label: "5. Mo met sa bãnn mo-la an-ord pou form enn fraz.",
    },
    {
      value: "orevwār – mersi – bonzour – silvouple",
      label: "orevwār – mersi – bonzour – silvouple",
    },
    {
      value: "1. Mo lir sa bãnn silab-la. Mo dir enn mo kot mo tãnn sak silab.",
      label: "1. Mo lir sa bãnn silab-la. Mo dir enn mo kot mo tãnn sak silab.",
    },

    {
      value: "verbes/adjectifs: agir en bon ami; nommer ses amis",
      label: "verbes/adjectifs: agir en bon ami; nommer ses amis",
    },
    {
      value: 'en colère, content, avoir peur, pleurer, "c&apos;est bien"',
      label: 'en colère, content, avoir peur, pleurer, "c&apos;est bien"',
    },
    {
      value: "Bonjour, s'il te plaît, merci, excuse-moi, au revoir",
      label: "Bonjour, s'il te plaît, merci, excuse-moi, au revoir",
    },
    {
      value:
        "puzzle, jeux vidéo, ballon, ludo, la marelle, poupée, lego, cartes",
      label:
        "puzzle, jeux vidéo, ballon, ludo, la marelle, poupée, lego, cartes",
    },
    {
      value: "singulier: un, une, le, la, l'; pluriel: des, les-  prend s ou x",
      label: "singulier: un, une, le, la, l'; pluriel: des, les-  prend s ou x",
    },
    { value: "[k]", label: "[k]" },
    { value: "[ij]", label: "[ij]" },
    { value: "[i] ou [ij]", label: "[i] ou [ij]" },
    {
      value:
        "[a], [m], [eu], [t], [d], [i], [s], [o], [l], [y], [f], [u], [k], [ij]",
      label:
        "[a], [m], [eu], [t], [d], [i], [s], [o], [l], [y], [f], [u], [k], [ij]",
    },
    {
      value:
        "fête nationale, différentes fêtes (fête du pain, fête de la musique, anniversaire){ nouvel an, noël, fête du printemps, eid-ul-fitr, cavadee, divali}",
      label:
        "fête nationale, différentes fêtes (fête du pain, fête de la musique, anniversaire){ nouvel an, noël, fête du printemps, eid-ul-fitr, cavadee, divali}",
    },
    {
      value:
        "ce dont tu as besoin pour la fête: gâteau, ballons, rubans, decorations, boissons, musique, invités, jeux etc",
      label:
        "ce dont tu as besoin pour la fête: gâteau, ballons, rubans, decorations, boissons, musique, invités, jeux etc",
    },
  ],
  3: [
    { value: "1 Mo gete, mo dir.", label: "1 Mo gete, mo dir." },
    { value: "2 Mo reflesi, mo dir", label: "2 Mo reflesi, mo dir" },
    {
      value: "1.Repõnn pār Vre (V) ou Fos (F)",
      label: "1.Repõnn pār Vre (V) ou Fos (F)",
    },
    { value: "2. Ranpli bãnn tire", label: "2. Ranpli bãnn tire" },
    {
      value: "1. Ekrir silab ki manke pou form enn mo",
      label: "1. Ekrir silab ki manke pou form enn mo",
    },
    {
      value: "2. Met bãnn silab an-ord pou form enn mo",
      label: "2. Met bãnn silab an-ord pou form enn mo",
    },
    {
      value:
        "3. Reper dernien silab dan sak mo ek ekrir enn lot mo ki terminn pār mem silab",
      label:
        "3. Reper dernien silab dan sak mo ek ekrir enn lot mo ki terminn pār mem silab",
    },
    {
      value: "1. Idantifie bãnn desin ek ekrir so mo",
      label: "1. Idantifie bãnn desin ek ekrir so mo",
    },
    { value: "2. Konplet bãnn fraz.", label: "2. Konplet bãnn fraz." },
    {
      value: "1.Ranpli bãnn tire avek mo apropriye",
      label: "1.Ranpli bãnn tire avek mo apropriye",
    },
    { value: "2. Swazir bon repons", label: "2. Swazir bon repons" },
    {
      value: "1. Mo ranplas Tikoulou pār Mo,To ou Li",
      label: "1. Mo ranplas Tikoulou pār Mo,To ou Li",
    },
    {
      value: "1. Ranplas bānn mo an-gra pār nou, zot, bãnn-la",
      label: "1. Ranplas bānn mo an-gra pār nou, zot, bãnn-la",
    },
    {
      value: "2. Ranplas bãnn mo dan braket pār bon pronom dan sak fraz",
      label: "2. Ranplas bãnn mo dan braket pār bon pronom dan sak fraz",
    },
    { value: "2. Mo kolorye", label: "2. Mo kolorye" },
    {
      value: "1. Mo repõnn sa bãnn kestion-la",
      label: "1. Mo repõnn sa bãnn kestion-la",
    },
    {
      value: "2. Mo ekrir lekontrer sa bãnn mo-la",
      label: "2. Mo ekrir lekontrer sa bãnn mo-la",
    },
    {
      value: "3. Mo dir si bãnn fraz-la vre ou fos",
      label: "3. Mo dir si bãnn fraz-la vre ou fos",
    },
    {
      value: "4. Relie avek repons ki korespõnn e mo kopie fraz-la",
      label: "4. Relie avek repons ki korespõnn e mo kopie fraz-la",
    },
    {
      value:
        "1. Mo anserkle mo kot mo tãnn son [ɛ] ek mo soulign mo kot mo tãnn son [ɛn]",
      label:
        "1. Mo anserkle mo kot mo tãnn son [ɛ] ek mo soulign mo kot mo tãnn son [ɛn]",
    },
    {
      value:
        "2. Mo dekoup mo ki inn donin an silab, mo rod ek plas seki manke pou konplet mo-la",
      label:
        "2. Mo dekoup mo ki inn donin an silab, mo rod ek plas seki manke pou konplet mo-la",
    },
    { value: "1. Travay an-group", label: "1. Travay an-group" },
    {
      value: "2. Fer korespõnn sak mo ek so definision.",
      label: "2. Fer korespõnn sak mo ek so definision.",
    },
    {
      value:
        "3. Konplet bãnn fraz avek bãnn mo ki bizin. Swazir pārmi bãnn mo ki inn donin",
      label:
        "3. Konplet bãnn fraz avek bãnn mo ki bizin. Swazir pārmi bãnn mo ki inn donin",
    },
    {
      value: "4. Mo-krwaze avek bãnn term lie avek lindepandans",
      label: "4. Mo-krwaze avek bãnn term lie avek lindepandans",
    },
    {
      value: "1. Repõnn sa bãnn kestion-la",
      label: "1. Repõnn sa bãnn kestion-la",
    },
    {
      value: "3. Mo explik mo ki souligne dapre sans ki  li ena dan fraz-la",
      label: "3. Mo explik mo ki souligne dapre sans ki  li ena dan fraz-la",
    },
    {
      value: "4. Relie avek repons ki korespõnn e kopie fraz-la",
      label: "4. Relie avek repons ki korespõnn e kopie fraz-la",
    },
    {
      value: "1. Mo relie bãnn group mo pou fer bãnn fraz",
      label: "1. Mo relie bãnn group mo pou fer bãnn fraz",
    },
    {
      value:
        "2. Mo rekopie bãnn fraz ki mo inn fer. Mo pa bliye met bãnn maziskil ek bãnn pwin kot bizin. Mo relir bãnn fraz-la pār mo tousel",
      label:
        "2. Mo rekopie bãnn fraz ki mo inn fer. Mo pa bliye met bãnn maziskil ek bãnn pwin kot bizin. Mo relir bãnn fraz-la pār mo tousel",
    },
    {
      value: "1. Fer enn fraz pou sak desin",
      label: "1. Fer enn fraz pou sak desin",
    },
    {
      value: "2. Idantifie bãnn fraz afirmatif ek rekopie zot dan to kaye",
      label: "2. Idantifie bãnn fraz afirmatif ek rekopie zot dan to kaye",
    },
    {
      value: "3. Rod 5 fraz afirmatif dan pasaz ek ekrir zot dan to kaye.",
      label: "3. Rod 5 fraz afirmatif dan pasaz ek ekrir zot dan to kaye.",
    },
    {
      value: "4. Fer enn fraz pou sak desin",
      label: "4. Fer enn fraz pou sak desin",
    },
    {
      value: "5. Repõnn bãnn kestion ki swiv",
      label: "5. Repõnn bãnn kestion ki swiv",
    },
    {
      value: "6. Idantifie bãnn fraz negatif ek rekopie zot dan to kaye",
      label: "6. Idantifie bãnn fraz negatif ek rekopie zot dan to kaye",
    },
    {
      value: "7. Transform sa bãnn fraz afirmatif la an bãnn fraz negatif",
      label: "7. Transform sa bãnn fraz afirmatif la an bãnn fraz negatif",
    },
    {
      value: "8. Transform sa bãnn fraz negatif la an bãnn fraz afirmatif",
      label: "8. Transform sa bãnn fraz negatif la an bãnn fraz afirmatif",
    },
    {
      value: "1. Mo sant lim nasional nou pei.",
      label: "1. Mo sant lim nasional nou pei.",
    },
    {
      value: "2. Mo kolorye avek bãnn kouler nou Repiblik",
      label: "2. Mo kolorye avek bãnn kouler nou Repiblik",
    },
    {
      value:
        "2. Explik bãnn mo ou expresion dapre sans ki zot enan dan pasaz-la",
      label:
        "2. Explik bãnn mo ou expresion dapre sans ki zot enan dan pasaz-la",
    },
    {
      value: "3. Dir ek ekrir lekontrer sa bãnn mo-la",
      label: "3. Dir ek ekrir lekontrer sa bãnn mo-la",
    },
    {
      value: "4. Relie avek repons ki korespõnn. Kopie fraz-la",
      label: "4. Relie avek repons ki korespõnn. Kopie fraz-la",
    },
    { value: "1. Lir sa pasaz-la", label: "1. Lir sa pasaz-la" },
    {
      value: "2. Swazir mo ki apropriye ek ranpli bãnn tire",
      label: "2. Swazir mo ki apropriye ek ranpli bãnn tire",
    },
    {
      value: "3. Anserkle tou mo kot zot tãnn son [ɛn]",
      label: "3. Anserkle tou mo kot zot tãnn son [ɛn]",
    },
    {
      value: "1. Mo ranpli bãnn tire avek bãnn mo ki inn donin anba",
      label: "1. Mo ranpli bãnn tire avek bãnn mo ki inn donin anba",
    },
    { value: "2. Sirandãnn", label: "2. Sirandãnn" },
    {
      value: "3. Mo ranpli bãnn tire avek bãnn mo korek ki inn donin anba",
      label: "3. Mo ranpli bãnn tire avek bãnn mo korek ki inn donin anba",
    },
    {
      value: "1. Repõnn sa bãnn kestion-la.",
      label: "1. Repõnn sa bãnn kestion-la.",
    },
    {
      value: "2. Dir ek ekrir lekontrer sa bãnn mo-la",
      label: "2. Dir ek ekrir lekontrer sa bãnn mo-la",
    },
    {
      value:
        "3. Relir zistwār &apos;Tizan bonbon kanet&apos; (Epizod 1 ek 2) ek met sa bãnn fraz-la an-ord.",
      label:
        "3. Relir zistwār &apos;Tizan bonbon kanet&apos; (Epizod 1 ek 2) ek met sa bãnn fraz-la an-ord.",
    },
    {
      value: "4. Dir si fraz-la vre ou fos",
      label: "4. Dir si fraz-la vre ou fos",
    },
    {
      value: "5. Mo swazir bãnn bon repons pou konplet mo fraz",
      label: "5. Mo swazir bãnn bon repons pou konplet mo fraz",
    },
    {
      value: "1. Met lakrwa dan kwin fraz interogatif",
      label: "1. Met lakrwa dan kwin fraz interogatif",
    },
    {
      value: "2. Soulign bãnn mo interogatif dan bãnn fraz",
      label: "2. Soulign bãnn mo interogatif dan bãnn fraz",
    },
    {
      value: "3. Fer korespõnn sak kestion a so repons",
      label: "3. Fer korespõnn sak kestion a so repons",
    },
    {
      value: "1. Dekoup sa bãnn mo-la an silab ek mo ekrir zot an Madanm Sere",
      label: "1. Dekoup sa bãnn mo-la an silab ek mo ekrir zot an Madanm Sere",
    },
    {
      value: "2. Mo ekrir sa bãnn mo-la an Madanm Sere",
      label: "2. Mo ekrir sa bãnn mo-la an Madanm Sere",
    },
    {
      value: "2. Mo dir ek ekrir lekontrer sa bãnn mo-la",
      label: "2. Mo dir ek ekrir lekontrer sa bãnn mo-la",
    },
    { value: "1. Anagram", label: "1. Anagram" },
    { value: "2. Labirint", label: "2. Labirint" },
    { value: "3. Mo-krwaze lor lamer", label: "3. Mo-krwaze lor lamer" },
    { value: "4. Kas-Tet", label: "4. Kas-Tet" },
    {
      value: "1. Mo ekrir nom ki sak fles pe indike dan so kaz respektif",
      label: "1. Mo ekrir nom ki sak fles pe indike dan so kaz respektif",
    },
    {
      value:
        "2. Mo konte konbien silab enan dan sak  mo. Mo ekrir enn mo apārtir vokabiler  lamer ki enan mem kantite silab",
      label:
        "2. Mo konte konbien silab enan dan sak  mo. Mo ekrir enn mo apārtir vokabiler  lamer ki enan mem kantite silab",
    },
    {
      value:
        "1. Anserkle mo kot mo tãnn son &apos;in&apos;/[ɛ] ek mo soulign mo kot mo tãnn son &apos;inn&apos;/[in]",
      label:
        "1. Anserkle mo kot mo tãnn son &apos;in&apos;/[ɛ] ek mo soulign mo kot mo tãnn son &apos;inn&apos;/[in]",
    },
    {
      value:
        "2.Ekrir sak silab ki manke pou form enn mo Swazir pārmi bãnn silab ki inn dõnn twa",
      label:
        "2.Ekrir sak silab ki manke pou form enn mo Swazir pārmi bãnn silab ki inn dõnn twa",
    },
    {
      value:
        "3. Reper bãnn mo avek &apos;in&apos; ek &apos;inn dan pasaz ek rekopie zot dan enn tablo dan to kaye",
      label:
        "3. Reper bãnn mo avek &apos;in&apos; ek &apos;inn dan pasaz ek rekopie zot dan enn tablo dan to kaye",
    },
    {
      value: "2. Explik mo ki soulignin dapre sans ki li enan dan fraz-la",
      label: "2. Explik mo ki soulignin dapre sans ki li enan dan fraz-la",
    },
    {
      value: "3. Rod enn mo dan pasaz pou konplet sak fraz",
      label: "3. Rod enn mo dan pasaz pou konplet sak fraz",
    },
    {
      value: "4. Dir ek ekrir lekontrer sa bãnn mo-la",
      label: "4. Dir ek ekrir lekontrer sa bãnn mo-la",
    },
    {
      value:
        "5. Mo relie avek repons ki korespõnn. Mo kopie fraz-la dan mo kaye",
      label:
        "5. Mo relie avek repons ki korespõnn. Mo kopie fraz-la dan mo kaye",
    },
    {
      value: "1. Soulign bãnn fraz dan form exklamatif",
      label: "1. Soulign bãnn fraz dan form exklamatif",
    },
    {
      value: "2. Transform bãnn fraz dan form inzonktif.",
      label: "2. Transform bãnn fraz dan form inzonktif.",
    },
    {
      value: "3. Met bãnn fraz dan bon kolõnn",
      label: "3. Met bãnn fraz dan bon kolõnn",
    },
    {
      value: "1. Ekrir 5 fraz lor foto-la.",
      label: "1. Ekrir 5 fraz lor foto-la.",
    },
    { value: "Mo reflesi mo dir", label: "Mo reflesi mo dir" },
    { value: "Mo gete mo dir", label: "Mo gete mo dir" },
    {
      value: "1. Mo repõnn sa bãnn kestion-la.",
      label: "1. Mo repõnn sa bãnn kestion-la.",
    },
    {
      value:
        "2. Explik bãnn mo ki soulignin dapre sans ki zot enan dan fraz-la.",
      label:
        "2. Explik bãnn mo ki soulignin dapre sans ki zot enan dan fraz-la.",
    },
    {
      value: "3. Dir ek ekrir lekontrer sa bãnn mo-la.",
      label: "3. Dir ek ekrir lekontrer sa bãnn mo-la.",
    },
    {
      value:
        "4. Swazir mo ki bon ek ekrir dan lespas ki inn donin pou sak fraz.",
      label:
        "4. Swazir mo ki bon ek ekrir dan lespas ki inn donin pou sak fraz.",
    },
    { value: "5. Lir ek desinin.", label: "5. Lir ek desinin." },
    {
      value: "6. Relie avek repons ki korespõnn e mo kopie fraz-la.",
      label: "6. Relie avek repons ki korespõnn e mo kopie fraz-la.",
    },
    {
      value: "Rod bãnn mo dan text-la pou konplet bãnn fraz.",
      label: "Rod bãnn mo dan text-la pou konplet bãnn fraz.",
    },
    { value: "Proze Zero Plastik", label: "Proze Zero Plastik" },
    {
      value: "Ekrir enn definision pou sak mo dapre text-la.",
      label: "Ekrir enn definision pou sak mo dapre text-la.",
    },
    {
      value: "Ekrir enn definision pou sak expresion dapre text-la.",
      label: "Ekrir enn definision pou sak expresion dapre text-la.",
    },
    {
      value: "2. Explik bãnn mo dapre sans ki zot enan dan pasaz-la.",
      label: "2. Explik bãnn mo dapre sans ki zot enan dan pasaz-la.",
    },
    { value: "5.. Lir ek desinin.", label: "5.. Lir ek desinin." },
    {
      value: "1. Mo observ sa bãnn zimaz-la.",
      label: "1. Mo observ sa bãnn zimaz-la.",
    },
    { value: "2.Mārker letan", label: "2.Mārker letan" },
    {
      value: "3. Mārker deroulman laksion",
      label: "3. Mārker deroulman laksion",
    },
    { value: "4. Bãnn indikater letan", label: "4. Bãnn indikater letan" },
    { value: "5. Vāryasion verb", label: "5. Vāryasion verb" },
    {
      value: "6. Mo akord bãnn verb ki trouv dan braket.",
      label: "6. Mo akord bãnn verb ki trouv dan braket.",
    },
    {
      value: "Idantifie verb dan fraz 1. Mo ekrir enn fraz pou sak zimaz.",
      label: "Idantifie verb dan fraz 1. Mo ekrir enn fraz pou sak zimaz.",
    },
    {
      value: "2. Mo soulign bãnn verb aksion dan bãnn fraz anba.",
      label: "2. Mo soulign bãnn verb aksion dan bãnn fraz anba.",
    },
    {
      value:
        "3. Mo idantifie dis verb aksion dan  pasaz ek mo ekrir zot dan mo kaye. Mo ekrir enn fraz avek sak verb.",
      label:
        "3. Mo idantifie dis verb aksion dan  pasaz ek mo ekrir zot dan mo kaye. Mo ekrir enn fraz avek sak verb.",
    },
    {
      value: "4. Mo ranpli bãnn tire avek enn verb aksion.",
      label: "4. Mo ranpli bãnn tire avek enn verb aksion.",
    },
    {
      value: "Konstriksion enn fār avek enn roulo kārton",
      label: "Konstriksion enn fār avek enn roulo kārton",
    },
    {
      value:
        "2. Explik bãnn mo ou expresion ki soulignin dapre sans ki zot enan dan fraz-la.",
      label:
        "2. Explik bãnn mo ou expresion ki soulignin dapre sans ki zot enan dan fraz-la.",
    },
    {
      value: "4. Swazir mo ki bon pou sak fraz.",
      label: "4. Swazir mo ki bon pou sak fraz.",
    },
    {
      value:
        "6. Mo relie avek repons ki korespõnn e mo kopie fraz-la dan mo kaye.",
      label:
        "6. Mo relie avek repons ki korespõnn e mo kopie fraz-la dan mo kaye.",
    },
    {
      value:
        "1. Anserkle bãnn mo kot tãnn son [gn] ek mo soulign bãnn mo kot mo tãnn son [ng].",
      label:
        "1. Anserkle bãnn mo kot tãnn son [gn] ek mo soulign bãnn mo kot mo tãnn son [ng].",
    },
    {
      value: "2. Ranplas bãnn tire avek bãnn mo ki inn donin.",
      label: "2. Ranplas bãnn tire avek bãnn mo ki inn donin.",
    },
    { value: "3. Konplet bãnn mo.", label: "3. Konplet bãnn mo." },
    {
      value: "1. Ranpli sak tire avek enn mo ki apropriye.",
      label: "1. Ranpli sak tire avek enn mo ki apropriye.",
    },
    {
      value: "3. Lir ek ekrir lekontrer sa bãnn mo-la",
      label: "3. Lir ek ekrir lekontrer sa bãnn mo-la",
    },
    {
      value: "4. Rod bãnn mo dan pasaz pou konplet bãnn fraz-la.",
      label: "4. Rod bãnn mo dan pasaz pou konplet bãnn fraz-la.",
    },
    {
      value:
        "5. Swazir mo ki bon pārmi bãnn repons ek ekrir li dan lespas vid-la",
      label:
        "5. Swazir mo ki bon pārmi bãnn repons ek ekrir li dan lespas vid-la",
    },
    {
      value: "1. Ekrir enn fraz pou sak zimaz",
      label: "1. Ekrir enn fraz pou sak zimaz",
    },
    {
      value:
        "2. Soulign an ble bãnn verb ki exprim santiman dan bãnn fraz anba.",
      label:
        "2. Soulign an ble bãnn verb ki exprim santiman dan bãnn fraz anba.",
    },
    {
      value:
        "3. Idantifie bãnn verb ki exprim santiman dan pasaz ek mo ekrir zot dan kaye. Mo ekrir enn fraz avek sak verb.",
      label:
        "3. Idantifie bãnn verb ki exprim santiman dan pasaz ek mo ekrir zot dan kaye. Mo ekrir enn fraz avek sak verb.",
    },
    {
      value: "4. Ranpli bãnn tire avek enn verb ki exprim santiman.",
      label: "4. Ranpli bãnn tire avek enn verb ki exprim santiman.",
    },
    { value: "MO KRWAZE", label: "MO KRWAZE" },
    {
      value: "Klasifie sak linstriman dapre so kategori",
      label: "Klasifie sak linstriman dapre so kategori",
    },
    { value: "Melimelo", label: "Melimelo" },
    {
      value: "Linstriman ek lamizik tradisionel",
      label: "Linstriman ek lamizik tradisionel",
    },
    {
      value:
        "2. Explik bãnn mo / expresion dapre sans ki zot enan dan pasaz-la.",
      label:
        "2. Explik bãnn mo / expresion dapre sans ki zot enan dan pasaz-la.",
    },
    {
      value: "3. Lir ek ekrir lekontrer sa bãnn mo-la.",
      label: "3. Lir ek ekrir lekontrer sa bãnn mo-la.",
    },
    {
      value: "4. Servi bãnn mo dan pasaz pou  konplet sa bãnn fraz-la.",
      label: "4. Servi bãnn mo dan pasaz pou  konplet sa bãnn fraz-la.",
    },
    { value: "5. Desinin.", label: "5. Desinin." },
    {
      value: "6. Relie avek repons ki korespõnn ek kopie fraz-la.",
      label: "6. Relie avek repons ki korespõnn ek kopie fraz-la.",
    },
    {
      value:
        "1. Lir sinifikasion bãnn mo. Apre plas sakenn lor tire ki apropriye.",
      label:
        "1. Lir sinifikasion bãnn mo. Apre plas sakenn lor tire ki apropriye.",
    },
    {
      value: "Relie sak zimaz avek so nom. Apre  relie avek so definision.",
      label: "Relie sak zimaz avek so nom. Apre  relie avek so definision.",
    },
    {
      value: "Ekrir enn sinifikasion pou sak sinbol.",
      label: "Ekrir enn sinifikasion pou sak sinbol.",
    },
    {
      value: "Swiv bãnn letap an-ord pou desinn enn bato.",
      label: "Swiv bãnn letap an-ord pou desinn enn bato.",
    },
    {
      value: "Mo ranpli sak tire avek enn mo ki apropriye.",
      label: "Mo ranpli sak tire avek enn mo ki apropriye.",
    },
    {
      value: "Ranpli sak tire avek enn mo ki apropriye.",
      label: "Ranpli sak tire avek enn mo ki apropriye.",
    },
    {
      value:
        "1. Anserkle bãnn mo kot  tãnn son [ch] ek soulign bãnn mo kot  tãnn son [sh].",
      label:
        "1. Anserkle bãnn mo kot  tãnn son [ch] ek soulign bãnn mo kot  tãnn son [sh].",
    },
    { value: "2. Fer korespõnn.", label: "2. Fer korespõnn." },
    {
      value:
        "6. Swazir mo ki bon pārmi bãnn repons e ekrir li dan lespas vid-la.",
      label:
        "6. Swazir mo ki bon pārmi bãnn repons e ekrir li dan lespas vid-la.",
    },
    {
      value: "1. Mo ekrir enn fraz pou sa zimaz-la",
      label: "1. Mo ekrir enn fraz pou sa zimaz-la",
    },
    {
      value:
        "3. Idantifie bãnn verb ki exprim santiman dan pasaz ek ekrir zot dan kaye. Ekrir enn fraz avek sak verb.",
      label:
        "3. Idantifie bãnn verb ki exprim santiman dan pasaz ek ekrir zot dan kaye. Ekrir enn fraz avek sak verb.",
    },
    {
      value: "1. Kolorye kaz ki montre fitir kouler ver.",
      label: "1. Kolorye kaz ki montre fitir kouler ver.",
    },
    {
      value: "2. Soulign bãnn verb tan fitir kouler ver.",
      label: "2. Soulign bãnn verb tan fitir kouler ver.",
    },
    {
      value:
        "3. Rod bãnn verb tan fitir dan pasaz. Ekrir enn fraz avec sak verb.",
      label:
        "3. Rod bãnn verb tan fitir dan pasaz. Ekrir enn fraz avec sak verb.",
    },
    {
      value: "4. Akord bãnn verb ki trouv dan  braket dan tan fitir.",
      label: "4. Akord bãnn verb ki trouv dan  braket dan tan fitir.",
    },
    { value: "1. Desinin.", label: "1. Desinin." },
    {
      value: "2. Mo relie avek repons ki korespõnn e mo kopie fraz-la.",
      label: "2. Mo relie avek repons ki korespõnn e mo kopie fraz-la.",
    },
    {
      value: "3. Mo konplet sa ti zistwār-la apārtir sa sekans zimaz-la.",
      label: "3. Mo konplet sa ti zistwār-la apārtir sa sekans zimaz-la.",
    },
    {
      value: "3. Mo ekrir lekontrer sa bãnn mo-la.",
      label: "3. Mo ekrir lekontrer sa bãnn mo-la.",
    },
    {
      value:
        "5. Swazir ek anserkle bon repons pou sak fraz e re-ekrir li dan lespas.",
      label:
        "5. Swazir ek anserkle bon repons pou sak fraz e re-ekrir li dan lespas.",
    },
    { value: "6. Desinin.", label: "6. Desinin." },
    { value: "7. Kolorye repons ki bon.", label: "7. Kolorye repons ki bon." },
    {
      value: "8. Ekrir enn fraz avek sak mo.",
      label: "8. Ekrir enn fraz avek sak mo.",
    },
    {
      value: "9.  Ekrir nom sak lil e nomm sak zanfan lor lil kot zot sorti.",
      label: "9.  Ekrir nom sak lil e nomm sak zanfan lor lil kot zot sorti.",
    },
    {
      value: "10. Akord bãnn verb ki trouv dan braket.",
      label: "10. Akord bãnn verb ki trouv dan braket.",
    },
    {
      value: "11. Transform bãnn fraz dan zot form negatif.",
      label: "11. Transform bãnn fraz dan zot form negatif.",
    },
    {
      value: "12. Rod enn verb apropriye pou ranpli bãnn tire.",
      label: "12. Rod enn verb apropriye pou ranpli bãnn tire.",
    },
    {
      value: "13. Ekrir sa text-la an Madanm Sere.",
      label: "13. Ekrir sa text-la an Madanm Sere.",
    },
    {
      value:
        "14. Rod sak mo dapre so definision e kaz li dapre so nimero pou fer mo krwaze",
      label:
        "14. Rod sak mo dapre so definision e kaz li dapre so nimero pou fer mo krwaze",
    },
    {
      value: "15. Swazir enn mo depi dan lalis pou ekrir lor sak tire.",
      label: "15. Swazir enn mo depi dan lalis pou ekrir lor sak tire.",
    },
    {
      value: "16. Swazir enn mo depi dan braket pou ekrir lor sak tire.",
      label: "16. Swazir enn mo depi dan braket pou ekrir lor sak tire.",
    },
    {
      value:
        "17. Tradir bãnn verb ki trouv dan braket an  Kreol Rodrige apre mo akord zot.",
      label:
        "17. Tradir bãnn verb ki trouv dan braket an  Kreol Rodrige apre mo akord zot.",
    },
    {
      value:
        "18. Servi mo dan braket pou transform bãnn fraz an form interogatif.",
      label:
        "18. Servi mo dan braket pou transform bãnn fraz an form interogatif.",
    },
    {
      value: "19. Reget lord bãnn fraz dan enn zistwār.",
      label: "19. Reget lord bãnn fraz dan enn zistwār.",
    },
    {
      value: "20. Ranpli bãnn tire pār enn pronom personel.",
      label: "20. Ranpli bãnn tire pār enn pronom personel.",
    },
    {
      value: "21. Observ sa desin-la ek ekrir enn ti zistwār.",
      label: "21. Observ sa desin-la ek ekrir enn ti zistwār.",
    },

    { value: "Raconter ses vacances", label: "Raconter ses vacances" },
    {
      value: "Deux enfants se rencontrent devant l'entrée de l'école",
      label: "Deux enfants se rencontrent devant l'entrée de l'école",
    },
    { value: "Compréhension aurale", label: "Compréhension aurale" },
    { value: "Compréhension écrite", label: "Compréhension écrite" },
    {
      value: "Modèle de lecture fluide/fluente",
      label: "Modèle de lecture fluide/fluente",
    },
    {
      value: "Répondre à des questions oralement",
      label: "Répondre à des questions oralement",
    },
    {
      value: "Répondre à des questions  par vrai/faux",
      label: "Répondre à des questions  par vrai/faux",
    },
    {
      value: "Répondre à des questions par  classification",
      label: "Répondre à des questions par  classification",
    },
    {
      value: "Répondre à des questions en collant des images",
      label: "Répondre à des questions en collant des images",
    },
    {
      value: "chapeau, seau, hameçon, canne à pêche, filets, bateau/pirogue",
      label: "chapeau, seau, hameçon, canne à pêche, filets, bateau/pirogue",
    },
    {
      value:
        "jardin botanique, abeille, ravenale, bananier, palmier, marguerite, hibiscus, papillon [arbres, fleurs, insectes]",
      label:
        "jardin botanique, abeille, ravenale, bananier, palmier, marguerite, hibiscus, papillon [arbres, fleurs, insectes]",
    },
    {
      value:
        "Majuscule: nom propres (prénom, ville)// Minuscule: mois, jours de la semaine",
      label:
        "Majuscule: nom propres (prénom, ville)// Minuscule: mois, jours de la semaine",
    },
    {
      value: "Majuscule, point, point d'interrogation, point d'exclamation",
      label: "Majuscule, point, point d'interrogation, point d'exclamation",
    },
    { value: "o, ot, au, eau", label: "o, ot, au, eau" },
    {
      value: "Situer les faits dans le temps: Le présent, le passé, le futur",
      label: "Situer les faits dans le temps: Le présent, le passé, le futur",
    },
  ],
  4: [
    { value: "Konpreansion: aktivite 1", label: "Konpreansion: aktivite 1" },
    { value: "Reponn kestion oral", label: "Reponn kestion oral" },
    { value: "propre, commun", label: "propre, commun" },
    {
      value: "un seul sujet, un seul verbe",
      label: "un seul sujet, un seul verbe",
    },
    { value: "accord sujet-verbe", label: "accord sujet-verbe" },
    {
      value: "qui, comment, où, qu'est-que ?",
      label: "qui, comment, où, qu'est-que ?",
    },
  ],
  5: [
    {
      value: "Accord du verbe avec son sujet -",
      label: "Accord du verbe avec son sujet -",
    },
    {
      value: "Présent de l&apos;indicatif -",
      label: "Présent de l&apos;indicatif -",
    },
    {
      value: "Passé composé avec l&apos;auxiliaire « avoir » -",
      label: "Passé composé avec l&apos;auxiliaire « avoir » -",
    },
    { value: "é/er -", label: "é/er -" },
    { value: "Ponctuation", label: "Ponctuation" },
    { value: "Tikoulou à Rodrigues -", label: "Tikoulou à Rodrigues -" },
    { value: "La soupe au caillou", label: "La soupe au caillou" },
    { value: "Autour des aliments", label: "Autour des aliments" },
    {
      value: "Passé composé avec l&apos;auxiliaire « être » -",
      label: "Passé composé avec l&apos;auxiliaire « être » -",
    },
    { value: "Participe présent -", label: "Participe présent -" },
    { value: "Adverbe", label: "Adverbe" },
    { value: "Ponctuation I (. ,) -", label: "Ponctuation I (. ,) -" },
    { value: "Le nombre -", label: "Le nombre -" },
    { value: "Le genre", label: "Le genre" },
    { value: "Cookie-pop", label: "Cookie-pop" },
    {
      value: "Pronom personnel complément -",
      label: "Pronom personnel complément -",
    },
    {
      value: "Pronom relatif I (qui, que) -",
      label: "Pronom relatif I (qui, que) -",
    },
    { value: "Impératif", label: "Impératif" },
    {
      value:
        "De la production de phrases à la production d&apos;un texte narratif",
      label:
        "De la production de phrases à la production d&apos;un texte narratif",
    },
    { value: "Quelques déterminants -", label: "Quelques déterminants -" },
    { value: "Phrase négative -", label: "Phrase négative -" },
    { value: "Phrase interrogative -", label: "Phrase interrogative -" },
    { value: "Ou/où", label: "Ou/où" },
    { value: "Dilans -", label: "Dilans -" },
    { value: "Lucas et Gavin", label: "Lucas et Gavin" },
    { value: "Autour de l'environnement", label: "Autour de l'environnement" },
    {
      value: "Pronom relatif II (où, dont) -",
      label: "Pronom relatif II (où, dont) -",
    },
    { value: "Phrase négative", label: "Phrase négative" },
    { value: "Ponctuation II (? !) -", label: "Ponctuation II (? !) -" },
    { value: "Adjectif qualificatif -", label: "Adjectif qualificatif -" },
    { value: "Quelques homonymes", label: "Quelques homonymes" },
    {
      value: "La réserve à tortues François Leguat",
      label: "La réserve à tortues François Leguat",
    },
    {
      value: "Adverbe (-ment, -amment, -emment) -",
      label: "Adverbe (-ment, -amment, -emment) -",
    },
    { value: "Participe passé I", label: "Participe passé I" },
    {
      value: "De la production de phrases à la production d&apos;une brochure",
      label: "De la production de phrases à la production d&apos;une brochure",
    },
    { value: "Futur simple -", label: "Futur simple -" },
    { value: "Quelques prépositions -", label: "Quelques prépositions -" },
    { value: "c/ç", label: "c/ç" },
    { value: "Les fées -", label: "Les fées -" },
    { value: "Le tailleur de pierre", label: "Le tailleur de pierre" },
    { value: "Autour des contes", label: "Autour des contes" },
    {
      value: "Passé simple I (1er & 2ème groupes) -",
      label: "Passé simple I (1er & 2ème groupes) -",
    },
    {
      value: "Compléments circonstanciels -",
      label: "Compléments circonstanciels -",
    },
    {
      value: "Participe passé II (sans auxiliaire)",
      label: "Participe passé II (sans auxiliaire)",
    },
    {
      value: "Ponctuation III (« », -, :) -",
      label: "Ponctuation III (« », -, :) -",
    },
    {
      value: "Ses, ces, c&apos;est, s&apos;est -",
      label: "Ses, ces, c&apos;est, s&apos;est -",
    },
    { value: "Leur, leurs", label: "Leur, leurs" },
    {
      value: "Le tour du monde en 80 jours",
      label: "Le tour du monde en 80 jours",
    },
    { value: "Passé simple (II)", label: "Passé simple (II)" },
    { value: "La phrase avec « si »", label: "La phrase avec « si »" },
    { value: "Je récris un conte", label: "Je récris un conte" },
    { value: "est / et", label: "est / et" },
    { value: "Imparfait", label: "Imparfait" },
    {
      value: "Des matchs à rebondissements",
      label: "Des matchs à rebondissements",
    },
    { value: "Sepak takraw", label: "Sepak takraw" },
    { value: "Autour du sport", label: "Autour du sport" },
    { value: "Du nom à l&apos;adjectif", label: "Du nom à l&apos;adjectif" },
    { value: "Présent du subjonctif", label: "Présent du subjonctif" },
    { value: "il / ile / ille", label: "il / ile / ille" },
    { value: "Pluriel des mots en –ou", label: "Pluriel des mots en –ou" },
    {
      value: "Affiche « Jeux inter- villes de Maurice",
      label: "Affiche « Jeux inter- villes de Maurice",
    },
    { value: "De l&apos;adjectif au nom", label: "De l&apos;adjectif au nom" },
    { value: "Pronom COD", label: "Pronom COD" },
    { value: "Complément du nom", label: "Complément du nom" },
    {
      value:
        "J&apos;écris le compte- rendu de la journée sportive de l&apos;école",
      label:
        "J&apos;écris le compte- rendu de la journée sportive de l&apos;école",
    },
    { value: "Adjectif démonstratif -", label: "Adjectif démonstratif -" },
    { value: "Adjectif interrogatif -", label: "Adjectif interrogatif -" },
    { value: "Pronom possessif", label: "Pronom possessif" },
    { value: "Tornade -", label: "Tornade -" },
    {
      value: "Raoni, le roi de la forêt amazonienne",
      label: "Raoni, le roi de la forêt amazonienne",
    },
    { value: "Autour du héros", label: "Autour du héros" },
    { value: "Infinitif -", label: "Infinitif -" },
    { value: "Pronom démonstratif", label: "Pronom démonstratif" },
    { value: "a / à -", label: "a / à -" },
    { value: "son / sont", label: "son / sont" },
    { value: "Super Lilou", label: "Super Lilou" },
    {
      value: "lequel, laquelle, lesquels, lesquelles -",
      label: "lequel, laquelle, lesquels, lesquelles -",
    },
    { value: "Je relie deux phrases", label: "Je relie deux phrases" },
    { value: "J&apos;écris une histoire", label: "J&apos;écris une histoire" },
  ],
  6: [
    {
      value:
        "Les groupes de verbes: l&apos;infinitif des verbes du 1er, 2ème, 3ème groupes",
      label:
        "Les groupes de verbes: l&apos;infinitif des verbes du 1er, 2ème, 3ème groupes",
    },
    {
      value:
        "Déterminants (possessifs, démonstratifs, interrogatifs -Mon/Ma,cet/cette,quel/quelle)",
      label:
        "Déterminants (possessifs, démonstratifs, interrogatifs -Mon/Ma,cet/cette,quel/quelle)",
    },
    {
      value:
        "Phrase négative v/s phrase interrogative:  ne … plus , personne , rien, jamais, Est-ce que… ?,Qui, que ..",
      label:
        "Phrase négative v/s phrase interrogative:  ne … plus , personne , rien, jamais, Est-ce que… ?,Qui, que ..",
    },
    { value: "Ponctuation", label: "Ponctuation" },
    {
      value: "À la découverte d&apos;une merveille du monde",
      label: "À la découverte d&apos;une merveille du monde",
    },
    { value: "Les dinosaures", label: "Les dinosaures" },
    {
      value: "Autour des merveilles du monde",
      label: "Autour des merveilles du monde",
    },
    {
      value: "Les déterminants indéfinis: Quelques, chaque, plusieurs, toutes",
      label: "Les déterminants indéfinis: Quelques, chaque, plusieurs, toutes",
    },
    {
      value:
        "Les types de phrases(déclarative, interrogative,exclamative et impérative)",
      label:
        "Les types de phrases(déclarative, interrogative,exclamative et impérative)",
    },
    {
      value:
        "Prépositions I: sur, dans, sous, à côté de, entre, autour, devant, derrière …",
      label:
        "Prépositions I: sur, dans, sous, à côté de, entre, autour, devant, derrière …",
    },
    {
      value: "On a / On n&apos;a pas / On n&apos;a plus",
      label: "On a / On n&apos;a pas / On n&apos;a plus",
    },
    {
      value: "Les accents aigus (ˊ), graves (ˋ), circonflexes (ˆ)",
      label: "Les accents aigus (ˊ), graves (ˋ), circonflexes (ˆ)",
    },
    { value: "Dictée", label: "Dictée" },
    { value: "H muet vs H aspiré", label: "H muet vs H aspiré" },
    {
      value: "La grande barrière de corail d&apos;Australie",
      label: "La grande barrière de corail d&apos;Australie",
    },
    { value: "Présent du subjonctif", label: "Présent du subjonctif" },
    {
      value:
        "Prépositions II: Lieu : Ex. à la cantine, en Australie,Temps : Ex. à midi, en une heure..",
      label:
        "Prépositions II: Lieu : Ex. à la cantine, en Australie,Temps : Ex. à midi, en une heure..",
    },
    {
      value: "Je décris une image: Écris deux phrases sur chaque image",
      label: "Je décris une image: Écris deux phrases sur chaque image",
    },
    {
      value:
        "Je présente une merveille du monde à la classe-Les sept merveilles du monde antique",
      label:
        "Je présente une merveille du monde à la classe-Les sept merveilles du monde antique",
    },
    {
      value:
        "Je présente une merveille du monde à la classe- les merveilles de la nature",
      label:
        "Je présente une merveille du monde à la classe- les merveilles de la nature",
    },
    {
      value:
        "Je présente une merveille du monde à la classe -Les sept nouvelles merveilles du monde",
      label:
        "Je présente une merveille du monde à la classe -Les sept nouvelles merveilles du monde",
    },
    { value: "Exercices variés", label: "Exercices variés" },
  ],
};

const qafStrand = [
  { value: "Vocabulaire", label: "Vocabulaire" },
  { value: "Grammaire", label: "Grammaire" },
  { value: "Lecture", label: "Lecture" },
  { value: "Geometry", label: "Geometry" },
  { value: "Numbers", label: "Numbers" },
  { value: "Measures", label: "Measures" },
  { value: "Writing ", label: "Writing " },
  { value: "Vocabulary ", label: "Vocabulary " },
  { value: "Grammar", label: "Grammar" },
  { value: "Reading ", label: "Reading " },
  { value: "Dance ", label: "Dance " },
  { value: "Drama", label: "Drama" },
  { value: "Music  ", label: "Music  " },
  { value: "Food and nutrition ", label: "Food and nutrition " },
  {
    value: "Personal hygiene and grooming",
    label: "Personal hygiene and grooming",
  },
  {
    value: "Safety and injury prevention ",
    label: "Safety and injury prevention ",
  },
  {
    value: "Movements concepts and skills",
    label: "Movements concepts and skills",
  },
  { value: "Health-Related Fitness", label: "Health-Related Fitness" },
  { value: "lekritir", label: "lekritir" },
  { value: "Lektir", label: "Lektir" },
  { value: "Gramer", label: "Gramer" },
  { value: "vokabiler", label: "vokabiler" },
  { value: "lektir", label: "lektir" },
  { value: "gramer", label: "gramer" },
  { value: "Oral", label: "Oral" },
  { value: "ekrir", label: "ekrir" },
  { value: "oral", label: "oral" },
  { value: "Lekritir", label: "Lekritir" },
];
const qafStrand2 = {
  1: [
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Grammaire", label: "Grammaire" },
    { value: "Lecture", label: "Lecture" },
  ],
  2: [
    { value: "Grammaire", label: "Grammaire" },
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Lecture", label: "Lecture" },
    { value: "Ecriture", label: "Ecriture" },
    { value: "Vocabulary", label: "Vocabulary" },
    { value: "Writing", label: "Writing" },
    { value: "Grammar", label: "Grammar" },
    {
      value: "Grammar (sentence structure)",
      label: "Grammar (sentence structure)",
    },
    { value: "Konpreansion", label: "Konpreansion" },
    { value: "Lektir", label: "Lektir" },
    { value: "Let ek son", label: "Let ek son" },
    { value: "Lekritir", label: "Lekritir" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Silab", label: "Silab" },
    { value: "Gramer", label: "Gramer" },
    { value: "Evaliasion", label: "Evaliasion" },
    { value: "Prolonzman", label: "Prolonzman" },
    { value: "Text", label: "Text" },
  ],
  3: [
    { value: "Expression orale", label: "Expression orale" },
    { value: "Lecture", label: "Lecture" },
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Ecriture", label: "Ecriture" },
    { value: "Orthographe", label: "Orthographe" },
    { value: "Grammaire", label: "Grammaire" },
  ],
  4: [
    { value: "Lektir", label: "Lektir" },
    { value: "Oral", label: "Oral" },
    { value: "Gramer", label: "Gramer" },
    { value: "Lortograf", label: "Lortograf" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Grammaire", label: "Grammaire" },
    { value: "Expression orale", label: "Expression orale" },
    { value: "Lecture compréhension", label: "Lecture compréhension" },
    {
      value: "Lecture compréhension /vocabulaure",
      label: "Lecture compréhension /vocabulaure",
    },
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Ecrire correctement", label: "Ecrire correctement" },
    { value: "Production de texte", label: "Production de texte" },
    { value: "Communication skills", label: "Communication skills" },
    { value: "Reading", label: "Reading" },
    { value: "Vocabulary", label: "Vocabulary" },
    { value: "Writing", label: "Writing" },
    { value: "Grammar", label: "Grammar" },
    { value: "Phonics", label: "Phonics" },
    { value: "Readin g", label: "Readin g" },
  ],
  5: [
    { value: "Communication skills", label: "Communication skills" },
    { value: "Reading", label: "Reading" },
    { value: "Vocabulary", label: "Vocabulary" },
    { value: "Spellling", label: "Spellling" },
    { value: "Grammar", label: "Grammar" },
    { value: "Writing", label: "Writing" },
    { value: "Grammaire", label: "Grammaire" },
    { value: "Ecrire correctement", label: "Ecrire correctement" },
    { value: "Lecture", label: "Lecture" },
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Production de texte", label: "Production de texte" },
    { value: "Communication Skills", label: "Communication Skills" },
    { value: "Reading for Understanding", label: "Reading for Understanding" },
    { value: "Writing", label: "Writing" },
    { value: "Vocabulary", label: "Vocabulary" },
    { value: "Grammar", label: "Grammar" },
    { value: "Numeration and Notation", label: "Numeration and Notation" },
    { value: "Numbers", label: "Numbers" },
    { value: "Geometry", label: "Geometry" },
    { value: "Measure", label: "Measure" },
    { value: "Graphs", label: "Graphs" },
    { value: "The three states of Water", label: "The three states of Water" },
    { value: "Plants around us", label: "Plants around us" },
    { value: "Plants in their Habitats", label: "Plants in their Habitats" },
    { value: "Animals in their Habitats", label: "Animals in their Habitats" },
    { value: "More about Plants", label: "More about Plants" },
    { value: "Energy", label: "Energy" },
    { value: "Transformation of Energy", label: "Transformation of Energy" },
    {
      value: "The Simple Electric Circuit The Simple Electric",
      label: "The Simple Electric Circuit The Simple Electric",
    },
    { value: "Our Natural Environment", label: "Our Natural Environment" },
    {
      value: "Discovery of Mauritius & Rodrigues",
      label: "Discovery of Mauritius & Rodrigues",
    },
    { value: "Settlement in Mauritius.", label: "Settlement in Mauritius." },
    { value: "Weather and climate", label: "Weather and climate" },
    {
      value: "Port Louis: the Capital of Mauritius",
      label: "Port Louis: the Capital of Mauritius",
    },
  ],
  6: [
    { value: "Lektir", label: "Lektir" },
    { value: "Gramer", label: "Gramer" },
    { value: "Vokabiler", label: "Vokabiler" },
    { value: "Lekritir", label: "Lekritir" },
    { value: "Oral", label: "Oral" },
    { value: "Grammaire", label: "Grammaire" },
    { value: "Lecture", label: "Lecture" },
    { value: "Vocabulaire", label: "Vocabulaire" },
    { value: "Orthographe", label: "Orthographe" },
    { value: "Ecriture", label: "Ecriture" },
    { value: "Communication orale", label: "Communication orale" },
  ],
};

const qafTeachingStrategies = [
  { label: "Direct instruction", value: "Direct instruction" },
  {
    label: "Explicit systematic instruction",
    value: "Explicit systematic instruction",
  },
  {
    label: "Cooperative learning strategies",
    value: "Cooperative learning strategies",
  },
  { label: "PALS routines/procedures", value: "PALS routines/procedures" },
  { label: "Reciprocal teaching", value: "Reciprocal teaching" },
  { label: "Peer teaching strategies", value: "Peer teaching strategies" },
  { label: "Think-pair-share", value: "Think-pair-share" },
  {
    label: "Visual representations/Visualization",
    value: "Visual representations/Visualization",
  },
  { label: "Schema instruction", value: "Schema instruction" },
  { label: "Metacognitive strategies", value: "Metacognitive strategies" },
  {
    label: "Active learning: reciprocal questioning",
    value: "Active learning: reciprocal questioning",
  },
  {
    label: "Active learning: paise procedure",
    value: "Active learning: paise procedure",
  },
  {
    label: "Active learning: muddiest point",
    value: "Active learning: muddiest point",
  },
  { label: "Active learning: other", value: "Active learning: other" },
  { label: "Differentiated instruction", value: "Differentiated instruction" },
  { label: "Personalized learning", value: "Personalized learning" },
  {
    label: "Universal Design for Learning",
    value: "Universal Design for Learning",
  },
  { label: "Classroom technology", value: "Classroom technology" },
  {
    label: "Gamification/game-based learning",
    value: "Gamification/game-based learning",
  },
  {
    label: "Convergent and divergent thinking",
    value: "Convergent and divergent thinking",
  },
  { label: "Project based learning", value: "Project based learning" },
  { label: "Experiential learning", value: "Experiential learning" },
  { label: "Inquiry based learning", value: "Inquiry based learning" },
  { label: "Problem based learning", value: "Problem based learning" },
  { label: "Interdisciplinary teaching", value: "Interdisciplinary teaching" },
  { label: "Service learning", value: "Service learning" },
  { label: "Portfolio work", value: "Portfolio work" },
  { label: "Student led teaching", value: "Student led teaching" },
  {
    label: "Accomodation for special needs",
    value: "Accomodation for special needs",
  },
  {
    label: "Modificiation for special needs",
    value: "Modificiation for special needs",
  },
  { label: "Guided learning", value: "Guided learning" },
];
const qafClassSetup = [
  { label: "semi-circle", value: "semi-circle" },
  { label: "u shape", value: "u shape" },
  { label: "single rows", value: "single rows" },
  {
    label: "group/teams (rectangle/square)",
    value: "group/teams (rectangle/square)",
  },
  { label: "group/teams (T-shape)", value: "group/teams (T-shape)" },
  { label: "flexible seating", value: "flexible seating" },
  { label: "outside", value: "outside" },
  { label: "other", value: "other" },
];
const reinforcementStrategy = [
  {
    label: "Immediate reinforcement: individual",
    value: "Immediate reinforcement: individual",
  },
  {
    label: "Immediate reinforcement: group",
    value: "Immediate reinforcement: group",
  },
  {
    label: "Immediate reinforcement: whole class",
    value: "Immediate reinforcement: whole class",
  },
  {
    label: "Delayed reinforcement: individual",
    value: "Delayed reinforcement: individual",
  },
  {
    label: "Delayed reinforcement: group",
    value: "Delayed reinforcement: group",
  },
  {
    label: "Delayed reinforcement: whole class",
    value: "Delayed reinforcement: whole class",
  },
];
const examplesOfReinforcers = [
  {
    label:
      "Verbal: Bravo, super, well done, gone job, awesome, fantastic, nice, thank you etc.",
    value:
      "Verbal: Bravo, super, well done, gone job, awesome, fantastic, nice, thank you etc.",
  },
  {
    label: "Non-verbal: Hi-five, thumbs-up, clapping, fist bump, etc.",
    value: "Non-verbal: Hi-five, thumbs-up, clapping, fist bump, etc.",
  },
  {
    label:
      "Tangibles: stickers, smileys, stars, special class activity, preferred activity, etc.",
    value:
      "Tangibles: stickers, smileys, stars, special class activity, preferred activity, etc.",
  },
  {
    label:
      "Token economy: end of day/week/month/term celebration or reward if meets goals",
    value:
      "Token economy: end of day/week/month/term celebration or reward if meets goals",
  },
];

const qafHandlingDisruptions = [
  { value: "1- Pre-corrections", label: "1- Pre-corrections" },
  { value: "2- Planned ignoring", label: "2- Planned ignoring" },
  { value: "3-Eye contact", label: "3-Eye contact" },
  {
    value: "4- Differential reinforcement",
    label: "4- Differential reinforcement",
  },
  { value: "5-Signals", label: "5-Signals" },
  { value: "6- Proximity", label: "6- Proximity" },
  { value: "7-Redirections (verbal)", label: "7-Redirections (verbal)" },
  { value: "8-Personal signals", label: "8-Personal signals" },
];

const logicalConsequencesForSimpleChoice = [
  { label: "You break it you fix it", value: "You break it you fix it" },
  {
    label: "Remedial instructional practice during pupil&apos;s free time",
    value: "Remedial instructional practice during pupil&apos;s free time",
  },
  {
    label: "Extra practice sessions of the expected behaviour",
    value: "Extra practice sessions of the expected behaviour",
  },
  { label: "Think time", value: "Think time" },
  {
    label: "Write an action plan to correct behaviour",
    value: "Write an action plan to correct behaviour",
  },
  {
    label: "A presentation to the class on what they should have done",
    value: "A presentation to the class on what they should have done",
  },
  {
    label: "Track and make up wasted time",
    value: "Track and make up wasted time",
  },
  { label: "Immediate re-do", value: "Immediate re-do" },
  { label: "Re-do after class", value: "Re-do after class" },
  { label: "Student calls parent", value: "Student calls parent" },
  { label: "Other", value: "Other" },
];
const qafReferences2 = {
  1: [
    { value: "2 a 5", label: "2 a 5" },
    { value: "6 a 7", label: "6 a 7" },
    { value: "13 a 15", label: "13 a 15" },
    { value: "8 a 12", label: "8 a 12" },
    { value: "16 a 20", label: "16 a 20" },
    { value: "28 to 30", label: "28 to 30" },
    { value: "31 to 32", label: "31 to 32" },
    { value: "33 to 34", label: "33 to 34" },
    { value: "40 to 42", label: "40 to 42" },
    { value: "35 to 39", label: "35 to 39" },
    { value: "43 to 47", label: "43 to 47" },
  ],
  2: [
    { value: "2 à 3", label: "2 à 3" },
    { value: "4 à 5", label: "4 à 5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "15 à 19", label: "15 à 19" },
    { value: "8 à 14", label: "8 à 14" },
    { value: "20 à 25", label: "20 à 25" },
    { value: "26 à 27", label: "26 à 27" },
  ],
  3: [
    { value: "2, 3", label: "2, 3" },
    { value: "4,5", label: "4,5" },
    { value: "6, 7, 8, 9", label: "6, 7, 8, 9" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16, 17", label: "16, 17" },
    { value: "18, 19,20", label: "18, 19,20" },
    { value: "21, 22, 23", label: "21, 22, 23" },
    { value: "30, 31, 32, 33", label: "30, 31, 32, 33" },
    { value: "34, 35", label: "34, 35" },
    { value: "36, 37, 38,", label: "36, 37, 38," },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "43, 44", label: "43, 44" },
    { value: "45,46", label: "45,46" },
    { value: "47, 48", label: "47, 48" },
    { value: "49,50", label: "49,50" },
    { value: "51,52", label: "51,52" },
    { value: "53, 54, 55", label: "53, 54, 55" },
    { value: "66, 67,68, 69,70, 71", label: "66, 67,68, 69,70, 71" },
    { value: "72, 73", label: "72, 73" },
    { value: "74,75,76", label: "74,75,76" },
    { value: "77", label: "77" },
    { value: "78", label: "78" },
    { value: "78, 79", label: "78, 79" },
    { value: "80,81", label: "80,81" },
    { value: "82, 83,84", label: "82, 83,84" },
    { value: "85, 86, 87", label: "85, 86, 87" },
    { value: "89,90,91,92", label: "89,90,91,92" },
    { value: "2,3,4,5", label: "2,3,4,5" },
    { value: "6,7", label: "6,7" },
    { value: "8, 9, 10, 11, 12", label: "8, 9, 10, 11, 12" },
    { value: "12,13", label: "12,13" },
    { value: "14, 15, 16, 17, 18", label: "14, 15, 16, 17, 18" },
    { value: "19, 20, 21, 22", label: "19, 20, 21, 22" },
    { value: "23, 24, 25, 26, 27", label: "23, 24, 25, 26, 27" },
    { value: "28,29,30", label: "28,29,30" },
    {
      value: "42, 43, 44, 45, 46, 47, 48, 49",
      label: "42, 43, 44, 45, 46, 47, 48, 49",
    },
    { value: "50,51", label: "50,51" },
    { value: "52, 53, 54", label: "52, 53, 54" },
    { value: "55", label: "55" },
    { value: "56", label: "56" },
    { value: "57, 58", label: "57, 58" },
    { value: "59", label: "59" },
    { value: "60,61, 62, 63", label: "60,61, 62, 63" },
    { value: "64, 65,66,67,", label: "64, 65,66,67," },
    { value: "68, 69, 70, 71, 72", label: "68, 69, 70, 71, 72" },
  ],
  4: [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6,7,8", label: "6,7,8" },
    { value: "6,7,8,9", label: "6,7,8,9" },
    { value: "6,7,9", label: "6,7,9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12, 13,14", label: "12, 13,14" },
    { value: "14, 15, 16", label: "14, 15, 16" },
    { value: "16, 17, 18", label: "16, 17, 18" },
    { value: "19, 20,21", label: "19, 20,21" },
    { value: "21, 22", label: "21, 22" },
    { value: "24, 25", label: "24, 25" },
    { value: "26, 27, 28", label: "26, 27, 28" },
    { value: "29, 30, 31, 32, 33", label: "29, 30, 31, 32, 33" },
    { value: "44", label: "44" },
    { value: "44, 45", label: "44, 45" },
    { value: "45, 46", label: "45, 46" },
    { value: "46", label: "46" },
    { value: "47", label: "47" },
    { value: "48, 49, 50", label: "48, 49, 50" },
    { value: "48, 49, 51", label: "48, 49, 51" },
    { value: "52", label: "52" },
    { value: "53", label: "53" },
    { value: "57, 58, 59", label: "57, 58, 59" },
    { value: "59, 60, 61", label: "59, 60, 61" },
    { value: "62, 63, 64", label: "62, 63, 64" },
    { value: "65, 66, 67,", label: "65, 66, 67," },
    { value: "68, 69", label: "68, 69" },
    { value: "70, 71, 72", label: "70, 71, 72" },
    { value: "72, 73", label: "72, 73" },
    { value: "74", label: "74" },
    { value: "75", label: "75" },
    { value: "76", label: "76" },
    { value: "77, 78, 79, 80", label: "77, 78, 79, 80" },
    { value: "90", label: "90" },
    { value: "91", label: "91" },
    { value: "92", label: "92" },
    { value: "93", label: "93" },
    { value: "94,95,96", label: "94,95,96" },
    { value: "94,95,96,97", label: "94,95,96,97" },
    { value: "94,95,97", label: "94,95,97" },
    { value: "98", label: "98" },
    { value: "99", label: "99" },
    { value: "100, 101, 102", label: "100, 101, 102" },
    { value: "103, 104", label: "103, 104" },
    { value: "105, 106", label: "105, 106" },
    { value: "107, 108", label: "107, 108" },
    { value: "109, 110", label: "109, 110" },
    { value: "111, 112", label: "111, 112" },
    { value: "113114", label: "113114" },
    { value: "115, 116, 117,118", label: "115, 116, 117,118" },
    { value: "3, 4", label: "3, 4" },
    { value: "6, 7, 8", label: "6, 7, 8" },
    { value: "6, 7, 8,9", label: "6, 7, 8,9" },
    { value: "6, 7, 9", label: "6, 7, 9" },
    { value: "12,13", label: "12,13" },
    { value: "14, 15", label: "14, 15" },
    { value: "16, 17", label: "16, 17" },
    { value: "18, 19", label: "18, 19" },
    { value: "20, 21, 22", label: "20, 21, 22" },
    { value: "22, 23, 24, 25", label: "22, 23, 24, 25" },
    { value: "25,26, 27", label: "25,26, 27" },
    { value: "28, 29, 30, 31,32", label: "28, 29, 30, 31,32" },
    { value: "45,", label: "45," },
    { value: "48,49,50", label: "48,49,50" },
    { value: "48,49,51", label: "48,49,51" },
    { value: "54, 55, 56", label: "54, 55, 56" },
    { value: "56, 57", label: "56, 57" },
    { value: "58,59,60", label: "58,59,60" },
    { value: "61,62", label: "61,62" },
    { value: "63,64,65,", label: "63,64,65," },
    { value: "66, 67, 67", label: "66, 67, 67" },
    { value: "68, 69,70,71", label: "68, 69,70,71" },
    { value: "72, 73,74,75", label: "72, 73,74,75" },
    { value: "86", label: "86" },
    { value: "87", label: "87" },
    { value: "87, 88", label: "87, 88" },
    { value: "88", label: "88" },
    { value: "89", label: "89" },
    { value: "90, 91, 92", label: "90, 91, 92" },
    { value: "90, 91, 92,93", label: "90, 91, 92,93" },
    { value: "90, 91, 93", label: "90, 91, 93" },
    { value: "94", label: "94" },
    { value: "95", label: "95" },
    { value: "96, 97", label: "96, 97" },
    { value: "98, 99", label: "98, 99" },
    { value: "100, 101", label: "100, 101" },
    { value: "102, 103", label: "102, 103" },
    { value: "104, 105, 106", label: "104, 105, 106" },
    { value: "109, 110, 111", label: "109, 110, 111" },
    { value: "112, 113", label: "112, 113" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ],
  5: [],
  6: [
    { value: "1,2,3", label: "1,2,3" },
    { value: "3,4", label: "3,4" },
    { value: "page 5,6", label: "page 5,6" },
    { value: "pag  5,6", label: "pag  5,6" },
    { value: "page 7-11", label: "page 7-11" },
    { value: "page 11-14", label: "page 11-14" },
    { value: "page 15-21", label: "page 15-21" },
    { value: "page 22-24", label: "page 22-24" },
    { value: "page 24-27", label: "page 24-27" },
    { value: "page 27-33", label: "page 27-33" },
    { value: "page 34-35", label: "page 34-35" },
    { value: "page 35-37", label: "page 35-37" },
    { value: "page 37", label: "page 37" },
    { value: "page 38", label: "page 38" },
    { value: "page 39-41", label: "page 39-41" },
    { value: "page 42-44", label: "page 42-44" },
    { value: "page 46-50", label: "page 46-50" },
    { value: "page   51-53", label: "page   51-53" },
    { value: "page 54-57", label: "page 54-57" },
    { value: "page 58-65", label: "page 58-65" },
  ],
};

const qafEngagementActivities = [
  { value: "Song", label: "Song" },
  { value: "Poem", label: "Poem" },
  { value: "Slam", label: "Slam" },
  { value: "Brain break", label: "Brain break" },
];

const qafExpectationsForListeningToLearn = [
  {
    value: "Body still-Eyes Watching-Ears Listening-Mouth Quit-Attentoscope on",
    label: "Body still-Eyes Watching-Ears Listening-Mouth Quit-Attentoscope on",
  },
];

const qafAttentionSignal = [
  { value: "1- call & response", label: "1- call & response" },
  { value: "2-Lights", label: "2-Lights" },
  { value: "3-alarm sound", label: "3-alarm sound" },
  { value: "4-music", label: "4-music" },
  { value: "5-freeze", label: "5-freeze" },
  { value: "6-whistle (outdoors only)", label: "6-whistle (outdoors only)" },
  { value: "7- Other", label: "7- Other" },
];

const qafConversation = [
  { value: "0-voices off (silent)", label: "0-voices off (silent)" },
  { value: "1-Whisper", label: "1-Whisper" },
  { value: "2-Partner talk", label: "2-Partner talk" },
  { value: "3-Group voice", label: "3-Group voice" },
];

const qafHelp = [
  { value: "1-Raise your hand", label: "1-Raise your hand" },
  { value: "2-Ask a table buddy", label: "2-Ask a table buddy" },
  { value: "3-Ask 3 before me", label: "3-Ask 3 before me" },
  { value: "4-Take care of yourself", label: "4-Take care of yourself" },
  { value: "5-Ask an adult/teacher", label: "5-Ask an adult/teacher" },
];

const qafActivity = [
  { value: "1-Large group", label: "1-Large group" },
  { value: "2-small group", label: "2-small group" },
  { value: "3-partner work", label: "3-partner work" },
  { value: "4-independent seatwork", label: "4-independent seatwork" },
];

const qafMovement = [
  { value: "1-stay in your seat", label: "1-stay in your seat" },
  {
    value: "2-move only with permission",
    label: "2-move only with permission",
  },
  { value: "3-move as directed", label: "3-move as directed" },
  { value: "4- Exercise & move", label: "4- Exercise & move" },
];

const qafParticipation = [
  { value: "1-Listen & focus attention", label: "1-Listen & focus attention" },
  { value: "2-Raise hands to answer", label: "2-Raise hands to answer" },
  { value: "3-Work as a team", label: "3-Work as a team" },
  { value: "4-Work independently", label: "4-Work independently" },
  { value: "5-Stay on-task", label: "5-Stay on-task" },
  { value: "6- Work as directed", label: "6- Work as directed" },
  { value: "7-La martiniere", label: "7-La martiniere" },
  { value: "8- thumbs up/down", label: "8- thumbs up/down" },
  { value: "9- mime", label: "9- mime" },
  {
    value: "10- clap/stomp/flap/hop etc",
    label: "10- clap/stomp/flap/hop etc",
  },
  { value: "11-Directed movement", label: "11-Directed movement" },
  { value: "12-Play", label: "12-Play" },
];

const qafSuccess = [
  { value: "1- goal understood", label: "1- goal understood" },
  { value: "2-task completed", label: "2-task completed" },
  {
    value: "3-task completed at mastery level     (>90%)",
    label: "3-task completed at mastery level     (>90%)",
  },
  { value: "4-improved proficiency", label: "4-improved proficiency" },
  { value: "5-Have a good time & learn", label: "5-Have a good time & learn" },
  {
    value: "6-Assessment completed at mastery level (>90%)",
    label: "6-Assessment completed at mastery level (>90%)",
  },
  {
    value: "7-Task completed with fluency (accuracy >95%, low effort)",
    label: "7-Task completed with fluency (accuracy >95%, low effort)",
  },
  { value: "8-Generalization", label: "8-Generalization" },
];

const periodOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
];

export {
  grades,
  periodOptions,
  logicalConsequencesForSimpleChoice,
  sections,
  qafTeachingStrategies,
  language,
  qafClassSetup,
  reinforcementStrategy,
  months,
  qafStrand,
  qafStrand2,
  examplesOfReinforcers,
  languageLess,
  subjects,
  prescribedBooks,
  teachingStrategies,
  assessmentOptions,
  // qatLessonPlanThemes,
  specialization,
  academicYear,
  academicTerm,
  // qafTargets,
  topicsOrSubtopics,
  qafHandlingDisruptions,
  qafEngagementActivities,
  qafExpectationsForListeningToLearn,
  qafAttentionSignal,
  qafConversation,
  qafHelp,
  qafActivity,
  qafMovement,
  screens,
  qafParticipation,
  qafSuccess,
  qatLessonPlanThemes2,
  qafTarget2,
  qafReferences2,
  subjects2,
  textbooks2,
  topicsOrSubtopics2,
};
