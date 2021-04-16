<template>
  <div id="app">
   <div id='header'>
     <router-link to='title'>title</router-link>
     <router-link to='quiz'>quiz</router-link>
     <router-link to='analysis'>analysis</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: '#App'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header {
  height: 40px;
  background: white;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#header a {
  text-decoration: none;
  color: green;
  margin: 0 10px;
  padding: 3px 10px;
  background: #5ccebf;
}
</style>
