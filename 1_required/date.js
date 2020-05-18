function date(){
    let americanDate = prompt('Введите дату в Американском формате');
    let dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (!dateFormat.test(americanDate)){
        return alert('Дата не в Американском формате');
    }
    let date = new Date(americanDate);
    if (isNaN(date)) {
        return alert('Не верная дата');
    }
    const russianDate =
        `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    return alert (`Дата в Российском формате: ${russianDate}`);
}
date();
