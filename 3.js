//program yang memiliki satu variabel dengan nama “printSegitiga”
//berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka
//jika bukan number 'Data harus number'
// const printSegitiga = 'enam';
const printSegitiga = 5;
const triangle = () => {
  if (typeof printSegitiga !== 'number') {
    console.log('Data harus number');
  } else {
    for (let row = printSegitiga; row >= 1; row--) {
      let container = '';
      for (let fillRow = 1; fillRow <= row; fillRow++) {
        container += fillRow + ' ';
      }
      console.log(container);
    }
  }
};

triangle();
