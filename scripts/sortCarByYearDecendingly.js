function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    // Jawab:
    // Side effect: efek samping.
    // Side effect yang mungkin terjadi saat sort array adalah mengubah urutan array aslinya. 
    // Clone array dilakukan agar array cars tidak berubah.
    const result = [...cars];

    // Tulis code-mu disini
    // Bubble sort
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            // Jika tahun di kanan lebih besar, 
            if (result[j].year < result[j + 1].year) {
                // tukar posisi elemen sehingga tahun di kiri lebih besar
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    console.table(result);
    // Rubah code ini dengan array hasil sorting secara descending
    return result;
}