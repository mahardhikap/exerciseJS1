//variabel dengan nama biodata dan tipe data object dengan value dan tipe data
//sebagai berikut:
const biodata = {
  name: 'Mahardhika Putra Pratama',
  age: 22,
  hobbies: ['koding', 'gaming', 'healing'],
  isMarried: false,
  schoolList: [
    {
      name: 'SMP Negeri 1 Depok',
      yearIn: 2012,
      yearOut: 2015,
      major: null,
    },
    {
      name: 'SMA Negeri 1 Depok',
      yearIn: 2015,
      yearOut: 2018,
      major: 'IPS',
    },
    {
      name: 'Universitas Ahmad Dahlan',
      yearIn: 2018,
      yearOut: 2022,
      major: 'Ekonomi Pembangunan',
    },
  ],
  skills: [
    {
      skillName: 'Javascript',
      level: 'beginner',
    },
    {
      skillName: 'PHP',
      level: 'beginner',
    },
  ],
  interestInCoding: true,
};

console.log(`Nama skill: ${biodata.skills[0].skillName}`)
console.log(`Level: ${biodata.skills[0].level}`)