const App = {
  data() {
    return {
      activeIndex: 0,
      steps: [
        {
          title: 'Основы',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Dapibus ultrices in iaculis nunc. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Consectetur adipiscing elit ut aliquam purus. Nibh tellus molestie nunc non blandit massa enim nec. Vitae ultricies leo integer malesuada nunc vel. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Eget aliquet nibh praesent tristique magna. Arcu vitae elementum curabitur vitae nunc. Feugiat scelerisque varius morbi enim nunc faucibus. Vel orci porta non pulvinar neque. Consectetur a erat nam at lectus urna duis. In nisl nisi scelerisque eu ultrices vitae auctor eu. Arcu cursus euismod quis viverra nibh. Mi in nulla posuere sollicitudin.',
          textTitle: 'Lorem ipsum - Основы',
          img: "public/1.jpg"
        },
        {
          title: 'Компоненты',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo. Dui id ornare arcu odio ut sem nulla pharetra. Elit sed vulputate mi sit amet. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Odio euismod lacinia at quis risus sed vulputate. Egestas quis ipsum suspendisse ultrices gravida. Enim sed faucibus turpis in eu mi bibendum neque. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Eu volutpat odio facilisis mauris sit. Morbi leo urna molestie at elementum eu facilisis. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed arcu non odio euismod lacinia at quis risus. At auctor urna nunc id cursus metus.',
          textTitle: 'Lorem ipsum - Компоненты',
          img: "public/2.jpg"
        },
        {
          title: 'Роутер',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio. Sem nulla pharetra diam sit. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Sit amet est placerat in egestas erat. Eget nullam non nisi est sit amet facilisis magna. Senectus et netus et malesuada fames ac turpis. Vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius quam. Eu non diam phasellus vestibulum lorem sed. Consectetur a erat nam at lectus urna duis. Tellus pellentesque eu tincidunt tortor. Euismod elementum nisi quis eleifend quam adipiscing. Morbi non arcu risus quis varius quam.',
          textTitle: 'Lorem ipsum - Роутер',
          img: "public/3.jpg"
        },
        {
          title: 'Vuex',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue quisque egestas. Lorem sed risus ultricies tristique. Mus mauris vitae ultricies leo integer. Convallis posuere morbi leo urna molestie. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Blandit massa enim nec dui nunc. Orci sagittis eu volutpat odio facilisis mauris sit amet. At quis risus sed vulputate. Mi quis hendrerit dolor magna. Aliquam id diam maecenas ultricies mi eget.',
          textTitle: 'Lorem ipsum - Vuex',
          img: "public/4.jpg"
        },
        {
          title: 'Composition',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Faucibus et molestie ac feugiat sed lectus vestibulum. Donec ac odio tempor orci dapibus ultrices. Mauris pellentesque pulvinar pellentesque habitant morbi. Convallis tellus id interdum velit. Sed velit dignissim sodales ut eu sem integer. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Dolor sit amet consectetur adipiscing. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Leo vel fringilla est ullamcorper eget nulla. Sollicitudin tempor id eu nisl. Placerat vestibulum lectus mauris ultrices eros in. Tincidunt eget nullam non nisi est sit amet facilisis. Aliquam etiam erat velit scelerisque in dictum non.',
          textTitle: 'Lorem ipsum - Composition',
          img: "public/5.jpg"
        },
      ],
      isActive: true,
    }
  },
  methods: {
    prev() {
      if (this.activeIndex !== 0) this.activeIndex--
    },
    reset() {
      this.activeIndex = 0
      this.isActive = true
    },
    nextOfFinish() {
      if (this.activeIndex !== this.steps.length - 1) {
        return this.activeIndex++
      } else {
        this.isActive = false
      }
    },
    setActive(idx) {
      this.activeIndex = idx
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    },
    prevDisabled() {
      return this.activeIndex === 0
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    }
  }
}

Vue.createApp(App).mount('#app')