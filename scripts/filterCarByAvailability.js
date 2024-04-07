function filterCarByAvailability(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Tempat penampungan hasil
    const result = [];

    // Tulis code-mu disini

    // For loop untuk tiap elemen car di dalam array cars
    for (let car of cars) {
        // Jika available bernilai true, maka push car ke array result.
        car.available ? result.push(car) : null;
    }
    console.table(result);
    // Rubah code ini dengan array hasil filter berdasarkan availablity
    return result;
}