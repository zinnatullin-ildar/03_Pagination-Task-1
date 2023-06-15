export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; // начальный индекс
    return [...items].splice(startIndex, pageSize); // новый массив со срезом юзеров
}
