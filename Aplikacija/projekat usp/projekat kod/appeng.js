const app = Vue.createApp({
    data() {
      return {
        friends: [
          {
           id: 'basila',
           name: 'Basila Međedović',
           phone: '01234 5678 991',
           email: 'basila@localhost.com',
          },
          {
            id: 'ana',
            name: 'Anastasija Mijaljević',
            phone: '09876 543 221',
            email: 'ana@localhost.com',
          },
          {
            id: 'dzenisa',
            name: 'Dženisa Omerović',
            phone: '09876 543 221',
            email: 'dzenisa@localhost.com',
          },
          {
            id: 'jasmin',
            name: 'Jasmin Đerlek',
            phone: '09876 543 221',
            email: 'jasmin@localhost.com',
          },
          {
            id: 'emir',
            name: 'Emir Mujezinović',
            phone: '09876 543 221',
            email: 'emir@localhost.com',
          },
          {
            id: 'amar',
            name: 'Amar Hasanović',
            phone: '09876 543 221',
            email: 'amar@localhost.com',
          },
        ],
      };
    },
  });
  
  app.component('friend-contact', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'basila',
          name: 'Basila Međedović',
          phone: '01234 5678 991',
          email: 'basila@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  app.component('friend-contact1', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'ana',
            name: 'Anastasija Mijaljević',
            phone: '09876 543 221',
            email: 'ana@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  app.component('friend-contact2', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'dzenisa',
            name: 'Dženisa Omerović',
            phone: '09876 543 221',
            email: 'dzenisa@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  app.component('friend-contact3', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'jasmin',
            name: 'Jasmin Đerlek',
            phone: '09876 543 221',
            email: 'jasmin@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  app.component('friend-contact4', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'emir',
            name: 'Emir Mujezinović',
            phone: '09876 543 221',
            email: 'emir@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  app.component('friend-contact5', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        friend: {
          id: 'amar',
            name: 'Amar Hasanović',
            phone: '09876 543 221',
            email: 'amar@localhost.com',
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });

  app.mount('#app');