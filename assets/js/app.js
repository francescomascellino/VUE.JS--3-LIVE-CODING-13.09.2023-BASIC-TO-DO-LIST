const { createApp } = Vue

createApp({
    data() {
        return {

            newTask: "",

            taskCheck: false,

            tasks: [
                "Fare la spesa",
                "Organizzare il viaggio",
                "Cucinare"
            ]
        }
    },

    methods: {

        addTask() {

            //AL CLICK DEL BOTTONE CONTROLLO SE L'IMPUT NON E' UNA STRINGA VUOTA
            if (this.newTask != "") {
                this.tasks.push(this.newTask);
                //SVUOTO LA NEW TASK, SVUOTANDO L'IMPUT
                this.newTask = "";
                //SETTO LA VARIABILE DI CONTROLLO DELLA LUNGHEZZA DEL TASK SU FALSE PER CANCELLARE UN EVENTUALE MESSAGGIO DI ERRORE IN PAGINA
                this.taskCheck = false;
                console.log(this.tasks);
            } else {
                //SE newTask E' UNA STRINGA VUOTA, SETTO SU true taskCheck, MOSTRANDO IL MESSAGGIO DI ERRORE
                this.taskCheck = true;
            }

        },

        removeTask(index) {
            //RIMUOVE ALLA POSIZIONE index 1 ELEMENTO
            this.tasks.splice(index, 1);
            console.log(this.tasks);
        },

    },

}).mount('#app')