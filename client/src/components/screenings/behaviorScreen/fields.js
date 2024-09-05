const fields = [
  "works_well_with_peers",
  "follows_directions",
  "handles_emotions",
  "self_confident",
  "plays_well_with_peers",
  "verbally_aggressive",
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
  works_well_with_peers: validOptions[2],
  follows_directions: validOptions[2],
  handles_emotions: validOptions[2],
  self_confident: validOptions[2],
  plays_well_with_peers: validOptions[2],
  verbally_aggressive: validOptions[0],
  physically_aggressive: validOptions[0],
  steals: validOptions[0],
  dishonest: validOptions[0],
  acts_on_anger: validOptions[0],
  destroys_property: validOptions[0],
  nervous: validOptions[0],
  difficulty_concentrating: validOptions[0],
  withdrawn: validOptions[0],
  sad: validOptions[0],
  worried: validOptions[0],
  does_not_talk: validOptions[0],
};

const Column_Row_Fields = ["", "Name", ...fields];

export { Column_Row_Fields, fields, defaultValues, validOptions };
