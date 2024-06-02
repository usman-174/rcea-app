const mongoose = require('mongoose')
const School = require('./school')
const schema = mongoose.Schema;

const ResponsiblePartySchema = new schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  nationalID: {
    type: String,
    required: false,
  },
  relationship: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
});

const userSchema = new schema(
  {
    academic_year: {
      type: String,
      required: false,
    },
    term: {
      type: String,
      required: false,
    },
    school: {
      type: mongoose.Types.ObjectId,
      ref: School,
      required: false,
    },
    student_lastname: {
      type: String,
      required: false,
    },
    student_firstname: {
      type: String,
      required: false,
    },
    date_ofbirth: {
      type: Date,
      required: false,
    },
    grade: {
      type: String,
      required: false,
    },
    student_section: {
      type: String,
      required: false,
    },
    student_gender: {
      type: String,
      required: false,
    },
    student__nid: {
      type: String,
      required: false,
    },
    primaryResponsible: {
      type: ResponsiblePartySchema,
      required: false,
    },
    secondaryResponsible: {
      type: ResponsiblePartySchema,
      required: false,
    },
    adress: {
      type: String,
      required: false,
    },
    home_no: {
      type: String,
      required: false,
    },
    mobile_no: {
      type: String,
      required: false,
    },
    admission_no: {
      type: String,
      required: false,
    },
    date_of__admission: {
      type: Date,
      required: false,
    },
    school_from_which_admitted: {
      type: String,
      required: false,
    },
    medical: {
      type: String,
      required: false,
    },
    social_aid: {
      type: String,
      required: false,
    },
    optional_language: {
      type: String,
      required: false,
    },
    sen: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const Pupil = mongoose.model('pupil', userSchema)
module.exports = Pupil

const seedData = [
  {
    academic_year: '2022-2023',
    term: '1',
    school: '655e2680fe07ebdbda438c41', // Replace with the actual school ID
    student_lastname: 'Kasp',
    student_firstname: 'wonka',
    date_ofbirth: new Date('2005-07-10'),
    grade: '1',
    student_section: 'red',
    student_gender: 'Male',
    student__nid: '1234567890',
    responsible_party_last_name: 'Smith',
    responsible_party_first_name: 'Jane',
    address: '123 Main St',
    home_no: '123456789',
    mobile_no: '987654321',
    admission_no: 'A123',
    date_of__admission: new Date('2022-01-01'),
    school_from_which_admitted: 'Previous School',
    social_aid: 'Yes',
    optional_language: 'Spanish',
    sen: 'No',
  },
  {
    academic_year: '2022-2023',
    term: '1',
    school: '655e2680fe07ebdbda438c41', // Replace with the actual school ID
    student_lastname: 'Willa',
    student_firstname: 'cli',
    date_ofbirth: new Date('2005-07-10'),
    grade: '1',
    student_section: 'red',
    student_gender: 'Male',
    student__nid: '1234567890',
    responsible_party_last_name: 'Smith',
    responsible_party_first_name: 'Jane',
    address: '123 Main St',
    home_no: '123456789',
    mobile_no: '987654321',
    admission_no: 'A123',
    date_of__admission: new Date('2022-01-01'),
    school_from_which_admitted: 'Previous School',
    social_aid: 'Yes',
    optional_language: 'Spanish',
    sen: 'No',
  },
  {
    academic_year: '2022-2023',
    term: '1',
    school: '655e2680fe07ebdbda438c41', // Replace with the actual school ID
    student_lastname: 'Jet ',
    student_firstname: 'Li',
    date_ofbirth: new Date('2005-07-10'),
    grade: '1',
    student_section: 'red',
    student_gender: 'Male',
    student__nid: '1234567890',
    responsible_party_last_name: 'Smith',
    responsible_party_first_name: 'Jane',
    address: '123 Main St',
    home_no: '123456789',
    mobile_no: '987654321',
    admission_no: 'A123',
    date_of__admission: new Date('2022-01-01'),
    school_from_which_admitted: 'Previous School',
    social_aid: 'Yes',
    optional_language: 'Spanish',
    sen: 'No',
  },
  // Add more seed data objects as needed
];

// Function to seed data
async function seed() {
  try {
    // Clear existing data
    // await Pupil.deleteMany();

    // Insert seed data
    await Pupil.insertMany(seedData);

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect from MongoDB after seeding
    // mongoose.disconnect();
  }
}

// Call the seed function
// seed();