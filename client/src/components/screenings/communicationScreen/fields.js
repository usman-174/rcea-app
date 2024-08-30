const fields = [
  "stuttering",
  "articulation_difficulties",
  "voice_problems",
  "often_says_huh",
  "needs_frequent_repetitions",
  "can_only_follow_one_step_direction",
  "cant_follow_conversations",
  "does_not_respond_when_spoken_to",
  "struggles_with_vocabulary",
  "cant_put_words_together",
  "poor_expression",
  "tone_does_not_match_words",
];
const validOptions = {
  0: "Not Obeserved",
  1: "Less than aged peers",
  2: "Same as same aged peers",
  3: "More than same aged peers",
};

const defaultValues = {
  stuttering: validOptions[0],
  articulation_difficulties: validOptions[0],
  voice_problems: validOptions[0],
  often_says_huh: validOptions[0],
  needs_frequent_repetitions: validOptions[0],
  can_only_follow_one_step_direction: validOptions[0],
  cant_follow_conversations: validOptions[0],
  does_not_respond_when_spoken_to: validOptions[0],
  struggles_with_vocabulary: validOptions[0],
  cant_put_words_together: validOptions[0],
  poor_expression: validOptions[0],
  tone_does_not_match_words: validOptions[0],
};

const Column_Row_Fields = ["", "Name", ...fields];

export { Column_Row_Fields, fields, defaultValues, validOptions };
