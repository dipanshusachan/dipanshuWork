<template>
<div>
    <div class="col-lg-4 m-auto"><br><br>
        <div class="asu">
            <h1>ASU CONFIGURATOR</h1>
        </div>
        <form>
            <div class="fft col-md-12">
            <div class="row form-group">

                <div class="login">
                    <h1 class="text-white">LOGIN</h1>
                </div>
                <br>
                <input type="text" name="name" class="form-control" placeholder="Username" autocomplete="off" v-model="name"><br>

                <input type="password" name="password" class="form-control" placeholder="Password" autocomplete="off" v-model="password">

        
                <router-link v-if="login" to="/front" class="btn" v-on:click="login()">Submit</router-link>
               <p v-else> <router-link to="/" ></router-link> </p>
                <p>
                    
                </p>
            </div>
        </div>
        </form>

    </div>
</div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            name: '',
            password: '',
        }
    },
    methods: {
        login() {
            console.log(43);
            if(this.name == 'test' && this.password == 'test'){
                console.log(45);
            }else{
                console.log(50);
                alert("Invalid name or Password");
                
                // <p>
                //    <router-link to="/"></router-link>
                // </p>
            
            }
        }
    }
}
</script>

<style scoped>
.form-control {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    margin-right: 10%;
    margin-right: 10%;
    border-radius: none;
    background-color: #f4f4f4;
    padding: 15px 15px;
}

.btn {
    background: #008bce;
    margin-right: 20%;
    margin-left: 0%;
    color: #f4f4f4;
    border: none;
    margin-bottom: 30px;
    margin-top: 26px;
    padding: 17px 17px;
    font-size: 20px;
}

.card {
    background-color: rgba(68, 68, 68, 0.9);
    color: #f4f4f4;
    max-width: 100%;
    margin-right: 10px;
}

.fft{
    padding: 0px 50px;
    background:rgba(68, 68, 68, 0.9);;
}

.login {
    display: block;
    font-family: 'Bodoni MT';
    font-size: 26px;
    color: white;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 36px;
    margin-left: 0%;
}

.asu {
    text-align: center;
}
</style>
