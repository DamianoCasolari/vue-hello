const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello word',
        image: "https://picsum.photos/200/300",
        active: false,
        red: 'red',
        md: '32px',
      }
    },
    methods: {
        changeColor (){
            this.active = !this.active;
        }
    }
  }).mount('#app')