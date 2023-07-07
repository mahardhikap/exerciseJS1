// program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai
// yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam
// program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi
const mtk = 90;
const bahasaIndonesia = 92;
const bahasaInggris = 100;
const ipa = 90;

const rapor = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
  if (typeof mtk !== 'number' || typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof ipa !== 'number') {
    console.log('Mohon diisi nilainya dan harus number');
  } else {
    let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    console.log(`Rata-rata = ${average}`);
    if (average >= 90) {
      console.log('Grade = A');
    } else if (average >= 80) {
      console.log('Grade = B');
    } else if (average >= 70) {
      console.log('Grade = C');
    } else if (average >= 60) {
      console.log('Grade = D');
    } else {
      console.log('Grade = E');
    }
  }
};

rapor(mtk, bahasaIndonesia, bahasaInggris, ipa);

