<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error"> Please fill out fields</p>

        <div class="ui labeled input fluid2">
            <div class="ui label">
                <i class="calendar plus icon"></i>Tasks
            </div>
            <input type="text" placeholder="enter task..." v-model="task.task1">
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="info circle icon"></i>Detail
            </div>
            <input type="text" placeholder="enter detail..." v-model="task.task2">
        </div>
        <button class="positive ui button">Submit</button>
    </form>
</template>

<script>
export default {
    name:'task-form',
    props:{
        task:{
            type:Object,
            required:false,
            default:() =>{
                return {
                    task1:'',
                    task2:''
                }
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit:function(){
            if(this.task.task1 ==='' || this.task.task2 === ''){
                this.errorsPresent = true;
            } else{
                this.$emit('createOrUpdate',this.task);
            }
        }
    }
}
</script>

<style  scoped>
    .error {
        color: tomato;
    }
</style>