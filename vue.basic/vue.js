
    "use strict";
    var vm=new Vue({
        el:"#app",
        data:{
            newItem:'',
          
            todos:[]
        },
        watch:{
            todos:{
               handler: function(){
                   localStorage.setItem('todos',JSON.stringify(this.todos));
                //alert('Data saved!');
            },
            deep:true
        }
    },
    mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      },
//すべてnew Vueのかっこの中に入れる必要があるから,でつなぐ
        methods:{
            addItem:function(){
                var item={
                    title:this.newItem,
                    isDone:false
                };

                this.todos.push(item);
                //送った後に空にします
                this.newItem='';
            },
            deleteItem:function(index){
                if(confirm('Are you sure?')){
                    this.todos.splice(index,1);
                }
            },
        purge:function(){
            if(!confirm("Delete finished task?")){
                return;
            }
            this.todos=this.remaining;
        }
        },
        computed:{
            remaining:function(){
          
            return this.todos.filter(function(todo){
                return!todo.isDone;
            });
    }
}
});