function checker(){
    let task1 = $('#task1').val();
    let task2 = $('#task2').val();
    let task3 = $('#task3').val();
    let task4 = $('#task4').val();
    let task5 = $('#task5').val();
    let task6 = $('#task6').val();
    let task7 = $('#task7').val();
    let task8 = $('#task8').val();
    if (task1 != ''){
        if(task1 != 'и'){
            var t1st = 'неверно!\n'
        } else {
            var t1st = 'верно!\n';
        }
    } else { var t1st = 'нет ответа\n' }
    if (task2 != ''){
        if(task2 != 'е'){
            var t2st = 'неверно!\n'
        } else {
            var t2st = 'верно!\n';
        }
    } else { var t2st = 'нет ответа\n' }
    if (task3 != ''){
        if(task3 != 'и'){
            var t3st = 'неверно!\n'
        } else {
            var t3st = 'верно!\n';
        }
    } else { var t3st = 'нет ответа\n' }
    if (task4 != ''){
        if(task4 != 'и'){
            var t4st = 'неверно!\n'
        } else {
            var t4st = 'верно!\n';
        }
    } else { var t4st = 'нет ответа\n' }
    if (task5 != ''){
        if(task5 != 'е'){
            var t5st = 'неверно!\n'
        } else {
            var t5st = 'верно!\n';
        }
    } else { var t5st = 'нет ответа\n' }
    if (task6 != ''){
        if(task6 != 'и'){
            var t6st = 'неверно!\n'
        } else {
            var t6st = 'верно!\n';
        }
    } else { var t6st = 'нет ответа\n' }
    if (task7 != ''){
        if(task7 != 'и'){
            var t7st = 'неверно!\n'
        } else {
            var t7st = 'верно!\n';
        }
    } else { var t7st = 'нет ответа\n' }
    if (task8 != ''){
        if(task8 != 'е'){
            var t8st = 'неверно!\n'
        } else {
            var t8st = 'верно!\n';
        }
    } else { var t8st = 'нет ответа\n' }
    alert('1) ' + t1st + '2) ' + t2st + '3) ' + t3st + '4) ' + t4st + '5) ' + t5st + '6) ' + t6st + '7) ' + t7st + '8) ' + t8st);
}