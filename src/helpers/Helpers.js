import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
    messageOption: {
        timeout:3000,
        pauseOnInteract: true
    }
})

const vm = new Vue();
const baseURL ='http://localhost:3000/tasks'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`,'error')
    })

export const api = {
    createtask: handleError(async payload =>{
        const res =await axios.post(baseURL,payload)
        return res.data;
    }),
    gettasks: handleError(async () =>{
        const res = await axios.get(baseURL);
        return res.data;

    }),
    deletetask: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    })

}