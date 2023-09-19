const readline = require('readline-sync');
const chalk = require('chalk');

const list = [];

function interfas(){
    for(let i = 0; i < list.length; i++){
        const listTasks = list[i];
        console.log(`[${i + 1}] ${listTasks.pregunta1} (${listTasks.completada ? chalk.green('Completada') : chalk.red('Pendeinte')})` )
    }
}

const promesaAdd = new Promise((resolve, reject) => {
    try {
        const pregunta1 = readline.question(chalk.blue.italic('Ingrese tarea: '));
    list.push({pregunta1, completada: false});
    console.log(chalk.green.italic(`Se agrego tarea`));
    resolve(list);
} catch (error){
    reject (error);
}
});

promesaAdd 
.then(list =>{
    cosnole.log('!Tarea agrgada con exito¡');
    console.log(list);
})
.catch(error =>{
    console.log('Error al agragar la tarea', error)
});

function delete1(){
    return new Promise((resolve, reject)=> {
        interfas();
    const index = readline.questionInt(chalk.cyan.italic('ingrese el numero de la tarea que desea eliminar --->  ')) -1;
    
    if (index >= 0 && index < list.length){
        list.splice(index, 1)
        console.log(chalk.green.italic('tarea eliminada... '));
        resolve()
    }else{
        console.log(chalk.red.italic('nuemro no valido...'));
        reject('nuemro no valido...')
    }
    })
}
delete1()
.then(()=>{
    console.log('Tarea eliminada con éxito');
})
.catch(error => {
    console.error('Error al eliminar la tarea:', error);
  });

function completarTarea(){
    
    const index = readline.questionInt(chalk.cyan.italic('Ingrese el numero de la tarea que desea completar ---> ')) -1;

    if(index >= 0 && index < list.length){
        list[index].completada = true;
        console.log(chalk.green.italic('Tarea completada...'))
    }else{
        console.log(chalk.red.italic('respuesta no valida...'))
    }
}



function tablero(){
    
     while(true){
        console.log(chalk.magenta.underline('-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-|'));
        console.log(chalk.yellow('Mostrar tareas                  ===> (1)'));
        console.log(chalk.green('Añadir tarea                     ===> (2)'));
        console.log(chalk.red('Eliminar tarea                     ===> (3)'));
        console.log(chalk.blue('Marcar tarea como completada      ===> (4)'));
        console.log(chalk.black('Salir.... (5)'));
        console.log(chalk.magenta.underline('-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-°-|'));


        const elegir = readline.question(chalk.magenta.bold('elige una de las 4  --->   '))
         switch (elegir){
            case '1':
                interfas();
                break;
            case '2':
                add();
                break;
            case '3':
                delete1();
                break;
            case '4':
                completarTarea();
                break;
            case '5':
                console.log(chalk.red.italic('cerrando programa ....'));
                return;
            default:
                console.log(chalk.black.bgWhite.bold('Opcion no valida'))
         }
     }
 }

 tablero()