import { defineStore } from 'pinia';
import axios from 'axios'

export const PostStore = defineStore({
    id: "post",
    state : () => ({
        posts : [],
        // id : null,
        edit_id : null,
        projectcode : null,
        facilitycode : null,
        projectname : null,
        clientname : null,
        facilityname : null,
        plantname : null,
        creoprojectcode : null,
        componentlibrary : null,

        loading:false,
    }),

    getters: {

    },

    actions:{
        async fetchPosts(){
            console.log(28);
            this.posts = [];
            this.loading = true
            try{
                let posts = await axios.get('http://localhost:7000/api/employee/');
                console.log(33);
                this.posts = posts.data;
            }catch(error){
                console.log(error)
            }finally{
               
            }
        
    },
 

    addItem(){
        if(this.projectcode != '' && this.facilitycode != '' && this.projectname != '' && this.clientname != '' && this.facilityname != '' 
         && this.plantname != '' && this.creoprojectcode != '' && this.componentlibrary != ''){
            if(this.edit_id > 0){
                let form_data = {
                    projectcode : this.projectcode,
                   facilitycode : this.facilitycode,
                           projectname : this.projectname,
                         clientname : this.clientname,
                      facilityname : this.facilityname,
                           creoprojectcode : this.creoprojectcode,
                         componentlibrary : this.componentlibrary
                };
                axios.put('http://localhost:7000/api/employee/' + this.edit_id,form_data).then(res=>{
                                   console.log(80);
                          console.log(res);
                                 this.formReset()
                                    this.fetchPosts()
                                //  this.posts = posts.data;
            })
        }else{
            let form_data = {
                projectcode : this.projectcode,
                facilitycode : this.facilitycode,
                        projectname : this.projectname,
                      clientname : this.clientname,
                   facilityname : this.facilityname,
                        creoprojectcode : this.creoprojectcode,
                      componentlibrary : this.componentlibrary
            };
            axios.post('http://localhost:7000/api/employee/', form_data).then(res =>{

                console.log(res);
                       this.formReset()
                          this.fetchPosts()
        })
    }}},
    editItem(id){
        let post = this.posts.find(post=>post.id == id)
        if(post){
                    this.projectcode= post.projectcode
                 this.facilitycode= post.facilitycode
                    this.clientname= post.clientname
                    this.facilityname= post.facilityname
                    this.plantname= post.plantname
                    this.creoprojectcode= post.creoprojectcode
                    this.projectname= post.projectname
                 this.componentlibrary= post.componentlibrary
                 this.edit_id= post.id
        
         }},
    
    
        formReset(){
            this.edit_id = null
            this.projectcode = null
            this.facilitycode = null
            this.clientname = null
            this.facilityname = null
            this.plantname = null
            this.creoprojectcode = null
            this.projectname = null
            this.componentlibrary = null
        }
    }
})

