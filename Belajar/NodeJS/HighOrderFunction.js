// .Map()
const names = ["Budi", "Bayu", "Zahra"];

// map itu mengubah isi semua array menjadi parameter yg di namakan name dan di ubah isinya.
const greetNames = names.map(name => 'Hai ' + name);

console.log(greetNames);

// .filter.()

// filter digunakan untuk membuang array yg tidak sesuai kondisinya. 
const fourLettersName = names.filter(name => name.length === 4);

console.log(fourLettersName);


// .reduce()
// reduce memiliki dua parameter, fungsi lain dengan parameter accumulator, 
// currentValue, index, originalArray dan optional parameter initialValue 
// sebagai value awal untuk accumulator. accumulator disini berfungsi sebagai 
// wadah untuk menyimpan hasil dari iterasi sebelumnya.


const GreetAll = names.reduce(function (greeting, name, index) {
    if (index === 0) {
        greeting += 'Hai ' + name;
    } else {
        greeting += ', ' + name;
    }
    return greeting;
}, '');


// High order Function bercabang
console.log(GreetAll);

const fullnames = [
    ['Budi', 'Pekerti'],
    ['Slamet', 'Sentosa']
];

const greetFullnames = fullnames.map(fullname => fullname[0] + ' ' + fullname[1])
    .reduce((greeting, fullname, index) => {
        if (index === 0) {
            greeting += 'Hai ' + fullname;
        } else {
            greeting += ', ' + fullname;
        }
        return greeting;
    }, '');
console.log(greetFullnames);
// 'Hai Budi Pekerti, Slamet Sentosa'
// Bye-bye loops!!!