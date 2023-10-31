const {createApp} = Vue;
createApp({
    data(){
        return{
            tasks:[
                {
                    id:1,
                    text:'Sveglia alle 8:00',
                    done:true,
                },
                {
                    id:2,
                    text:'Collegamento Zoom in classe',
                    done:false,
                },
                {
                    id:3,
                    text:'Finisci la lezione',
                    done:false,
                },
            ],
            lastId:3,
            todoText:'',
        }
    },
    methods:{
        removeTask(i){
            this.tasks.splice(i,1)
        },
        addTask(){
            // Incrementa index
            this.lastId++
            // crea oggetto da inserire
            const newTask = {
                id: this.lastId,
                text:this.todoText,
                done:false,
            }
            // Aggiungi nuovo oggetto all'array
            this.tasks.unshift(newTask);
            // Pulire campo di inpu
            this.todoText = ''
        },
        // Sbarra la Task al click
        markAsDone(obj){
            obj.done = !obj.done
        },
    }
}).mount('#app')

