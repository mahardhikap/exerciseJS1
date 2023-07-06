//a. ubah data menggunakan spread operator
let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

const newData = {
  ...data,
  name: 'Mahardhika Putra Pratama',
  email: 'putrad578@gmail.com',
  hobby: ['koding', 'gaming', 'healing'],
};

console.log(newData);

//b. ambil data street dan city dengan destructuring
const {id, name, username, email, address:{street, suite, city, zipcode}, phone, website} = data
console.log(`Jalan ${street}, Kota ${city}`)
