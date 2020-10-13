var mashin = {
    name: 'Toyota ',
    zoriulalt: 'Suudal',
    model: [
        {
            mashinNer: 'Prius10', on: '2000', ungu: 'har'},
            {
                mashinNer: 'prius 20 ', on: '2010', ungu: 'ulaan'
            }
    ]
}
document.getElementById('demo').innerHTML=mashin.name + 'Zagwar n: ' + mashin.model[0].mashinNer + ' uildwerlesen on: ' + mashin.model[0].on + ' Ungu n: ' + mashin.model[0].ungu;