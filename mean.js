//Nama  : Nurfadillah Umar
//Nim   : D121221022

function mean(numbers) {
  if (numbers.length != 5) return "Angka yang dimasukkan harus 5 bilangan";

  let total = 0,
    grade;
  for (let i = 0; i < 5; i++) {
    if (numbers[i] < 1 || numbers[i] > 100) {
      return "Angka yang dimasukkan harus antara 1-100";
    }
    total += numbers[i];
  }

  let mean = total / 5;

  if (mean >= 0 && mean <= 20) grade = "E";
  else if (mean >= 21 && mean <= 40) grade = "D";
  else if (mean >= 41 && mean <= 60) grade = "C";
  else if (mean >= 61 && mean <= 80) grade = "B";
  else if (mean >= 81 && mean <= 100) grade = "A";
  else return "Nilai rata-ratanya tidak valid";

  return `Rata-rata = ${mean} \nGrade = ${grade}`;
}

let numbers = [10, 20, 60, 20, 100];
console.log(mean(numbers));
