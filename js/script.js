const createApp = Vue;
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
            ]
        }
    },
    lastId:3,
    todoText:'',
    methods(){

    }
}).mount('#app')

