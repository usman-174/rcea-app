export const textFields = {
  areasOfConcern: "",
  currentPerformance: "",
  annualGoal: "",
  progressMonitoring: "",
  frequencyOfReview: "",
  participationInMainstream: "",
  participationInAssessments: "",
};

const dates = {
  date_of_meeting: "",
  date_of_start_iep: "",
  date_of_end_iep: "",
  date_of_consent_iep: "",
};

export const DateLabels = {
  date_of_meeting: "Date of Meeting",
  date_of_consent_iep: "Date of Consent IEP",
  date_of_start_iep: "Date of Start IEP",
  date_of_end_iep: "Date of End IEP",
};

export const TextLabels = {
  areasOfConcern: "Areas of Concern (Max 1000 words)",
  currentPerformance: "Current Performance (Max 1000 words)",
  annualGoal: "Annual Goal (Max 1000 words)",
  progressMonitoring: "Progress Monitoring (Max 1000 words)",
  frequencyOfReview: "Frequency of Review (Max 1000 words)",
  participationInMainstream: "Participation in Mainstream (Max 1000 words)",
  participationInAssessments: "Participation in Assessments (Max 1000 words)",
};
export const schemeOfWorkInitial = {
  subject: "",
  grade: "",
  prescribes_book: "",
  number_of_period_per_week: "",
  scheme_data: [
    {
      week: "",
      THEME: "",
      TOPICS: "",
      PEDAGOGICAL_STRATEGIES: "",
      EDUCATIONAL_RESOURCES: "",
      ASSESSMENT_EVALUATION: "",
      REMARKS: "",
    },
  ],
}
export const initialData = {
  ...textFields,
  ...dates,
  realtedService: {
    table: [
      {
        service: "Speech and Language",
        duration: "",
        frequency: "",
        place: "",
        provider: "",
      },
      {
        service: "Occupational therapy ",
        duration: "",
        frequency: "",
        place: "",
        provider: "",
      },
      {
        service: "Physical therapy",
        duration: "",
        frequency: "",
        place: "",
        provider: "",
      },

      {
        service: "Other",
        duration: "",
        frequency: "",
        place: "",
        provider: "",
      },
    ],
  },
  accomodation: {
    table: [
      {
        need: "",
        instructions: "",
        instruction_modification: "",
        assessment: "",
        assessment_modification: "",
      },
    ],
  },
  schemeOfWork:schemeOfWorkInitial
};
