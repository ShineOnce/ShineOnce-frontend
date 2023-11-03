<template>
  <div class="Login" ref="Login">
    <div class="alert">
      <div class="container">
        <label class="close-btn" title="close" @click="close">x</label>

        <div class="loginPage">
          <h1>登录账号</h1>
          <form action="#">
            <label>用户名</label>
            <i class="el-icon-check" v-if="!usernameExist&&username" style="background-color: #42b983;font-size: 14px;border-radius: 7px"></i>
            <i class="el-icon-close" v-if="usernameExist" style="background-color: rgb(254,44,85);font-size: 14px;border-radius: 7px">用户名已存在</i>
            <input type="text" v-model="username">
            <label>密码</label>
            <input type="password" v-model="password">

            <a href="#">忘记密码?</a>
            <button @click="loginRequest">登录</button>

            <div class="forgot">没有账号？<a @click="signUp">注册</a></div>

          </form>
        </div>

        <div class="signPage">
          <h1>注册账号</h1>
          <form action="#">
            <label>电子邮箱</label>
            <input type="text">

            <label>用户名</label>
            <input type="text">

            <label>密码</label>
            <input type="password">

            <button @click="registerRequest">注册</button>

            <div class="forgot">已经有账号？<a @click="logIn">登录</a></div>

          </form>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {login, register, usernameExist} from '../api/userApi'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      usernameExist: false
    }
  },
  methods: {
    display () {
      let container = this.$refs.Login.querySelector('.container')
      let alert = this.$refs.Login.querySelector('.alert')
      container.style.display = 'block'
      alert.style.display = 'block'
    },
    close () {
      let container = this.$refs.Login.querySelector('.container')
      let alert = this.$refs.Login.querySelector('.alert')
      container.style.display = 'none'
      alert.style.display = 'none'
    },
    signUp () {
      let loginPage = this.$refs.Login.querySelector('.loginPage')
      let signPage = this.$refs.Login.querySelector('.signPage')
      loginPage.style.display = 'none'
      signPage.style.display = 'block'
    },
    logIn () {
      let loginPage = this.$refs.Login.querySelector('.loginPage')
      let signPage = this.$refs.Login.querySelector('.signPage')
      signPage.style.display = 'none'
      loginPage.style.display = 'block'
    },
    loginRequest () {
      let LoginForm = {
        'account': this.username,
        'password': this.password
      }
      login(LoginForm).then(res => {
        if (res.code === 200) {
          this.$message.success('登录成功')
          this.$store.state.User.token = res.data.token
        } else {
          this.$message.error(res.message)
        }
      })
    },
    registerRequest () {
      let that = this
      usernameExist(this.username).then(res => {
        if (res.code === 200) {
          this.usernameExist = false
          let registerForm = {
            'username': that.username,
            'email': that.email,
            'password': that.password
          }
          register(registerForm).then(res => {
            if (res.code === 200) {
              that.$message.success('注册成功')
            } else {
              that.$message.error(res.data ? res.data : '注册失败')
            }
          })
        } else {
          this.usernameExist = true
        }
      })
    }
  },
  mounted () {

  }

}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  user-select: none;
  /* background: lightsteelblue; */
}

.Login {
  position: relative;
  width: 0;
  height: 0;
}

.alert {
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(31, 29, 29, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}

.signPage {
  display: none;
}
.loginPage, .signPage{
  margin-top: 30px;
}
.display-btn {
  top: 18px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  height: 80px;
  height: 40px;
  cursor: pointer;
  background: lightsteelblue;
  position: absolute;
  border-radius: 10px;
}

.display-btn:hover {
  background: black;
  color: white;
}

.container {
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 350px;
  height: 400px;
  padding: 30px;
  position: absolute;
  border-radius: 15px;
  opacity: 1;
  text-align: left;
}

.close-btn {
  right: 10%;
  position: absolute;
  color: black;
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
  background: none;
  transition: 0.2s;
}

.close-btn:hover {
  color: rgb(254,44,85);
}

h1 {
  background: none;
  text-align: center;
  margin: 20px 0;
  color: black;

}

form {
  background: none;
}

label {
  background: none;
  color: black;
  font-weight: bold;
  margin-top: 20px;
}

input {
  background: none;
  display: block;
  width: 90%;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  padding: 10px;
}

button {
  display: block;
  margin: 20px;
  width: 95%;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  background: black;
  border: none;
  outline: none;
  padding: 10px;
}

button:hover {
  background: rgb(254,44,85);
}

form a {
  font-weight: bold;
  color: rgb(254,44,85);
  background: none;
  text-decoration: none;
  transition: 0.2s;
}

form a:hover {
  color: rgb(254,44,85);
}

.forgot {
  background: none;
  text-align: center;
  margin: 40px 5px;
  color: black;
  cursor: pointer;
}

</style>
