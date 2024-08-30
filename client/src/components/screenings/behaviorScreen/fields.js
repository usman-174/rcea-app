const fields = [
  "plays_well_with_peers",
  "follows_directions",
  "handles_emotions",
  "self_confident",
  "doesnt_talk",
  "physically_aggressive",
  "steals",
  "dishonest",
  "acts_on_anger",
  "destroys_property",
  "nervous",
  "difficulty_concentrating",
  "withdrawn",
  "sad",
  "worried",
  "does_not_talk",
];

const validOptions = {
  0: "Not at all",
  1: "Some of the time",
  2: "Most of the time",
};

const defaultValues = {
  plays_well_with_peers: validOptions[2],
  follows_directions: "",
  handles_emotions: "",
  self_confident: "",
  doesnt_talk: validOptions[0],
  physically_aggressive: "",
  steals: "",
  dishonest: "",
  acts_on_anger: "",
  destroys_property: "",
  nervous: "",
  difficulty_concentrating: "",
  withdrawn: "",
  sad: "",
  worried: "",
  does_not_talk: "",
};

const Column_Row_Fields = ["", "Name", ...fields];

export { Column_Row_Fields, fields, defaultValues, validOptions };
