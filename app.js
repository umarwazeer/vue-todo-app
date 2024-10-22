console.log("hello Umar Khan");

const options = {
    data() {
        return {
            item:"",
            items:[],
            editIndex: -1
            
        };
    },
    mounted(){
      this.getItem()
    },
    methods:{
        update(index) {
            console.log("index of update item", index);
            console.log("data", this.items);
            this.item = this.items[index]; 

            this.editIndex = index; 
        },

        updateLocalStorage() {
            const parsed = JSON.stringify(this.items);
            localStorage.setItem('items', parsed);
        },

        del(index){
            this.items.splice(index, 1); 
            localStorage.setItem('items', JSON.stringify(this.items));
        },

        clear(){
            localStorage.removeItem('items')
           this.items = []
        },

        addItem(){
            if (this.item.trim() === "") {
                console.log("Item cannot be empty");
                return;
            }
            if (this.editIndex === -1) {

                this.items.push(this.item);
            } else {
                
                this.items[this.editIndex] = this.item;
                this.editIndex = -1;
            }
            
            this.updateLocalStorage();
            this.item = "";
            
        },

        getItem(){
            this.items = JSON.parse(localStorage.getItem('items')) || []; 
            console.log("data",this.items)
        }
    
    }
};

const app = Vue.createApp(options); // Make sure the Vue instance is created
app.mount('#app'); // Mount to the element with ID 'app'
