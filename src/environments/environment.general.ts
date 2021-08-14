export const environment = {
  firebase: {
    apiKey: 'AIzaSyBq8w1zumTsb_Qv1ndgCEG7tyk1eDCKSWw',
    authDomain: 'michaelsolati-com.firebaseapp.com',
    databaseURL: 'https://michaelsolati-com.firebaseio.com',
    projectId: 'michaelsolati-com',
    storageBucket: 'michaelsolati-com.appspot.com',
    messagingSenderId: '653176308527',
    appId: '1:653176308527:web:fda95f60e1170cfc55d7da',
    measurementId: 'G-43TV7TLVQ1'
  },
  site: {
    baseURL: 'https://michaelsolati.com',
    email: 'hayramban@gmail.com', // Should be same as LinkedIn login
    name: 'Hayramban TJ',
    short_name: 'Hayramban',
    phone: '9600297357',
    twitter: 'Hayramban',
  },
  pages: {
    devto: {
      enabled: true,
      name: 'Articles',
      path: 'articles',
      username: 'Hayramban',
      title: 'Articles | Hayramban',
      header: 'Articles',
      description: 'Stories, guides, and tutorials for developers by me.',
      topics: ['writing', 'article']
    },
    github: {
      enabled: true,
      name: 'Code',
      path: 'code',
      username: 'Hayramban',
      title: 'Code | Hayramban',
      header: 'Code',
      description: 'Some of the best code I\'ve written, available for everyone!',
      topics: ['code', 'software', 'development']
    },
    home: {
      enabled: true, // Never disables
      name: 'Home',
      path: '',
      username: 'Hayramban', // For LinkedIn
      title: 'Home | Hayramban',
      header: 'Hayramban',
      description: null // Leave empty to default to LinkedIn description
    },
    youtube: {
      enabled: true,
      name: 'Talks',
      path: 'talks',
      playlist: 'PLpvTYOL2L1kRkGfvnMk96sQ-iDKkzxrUl',
      title: 'Talks | Hayramban',
      header: 'Talks',
      description: 'From major conferences to smaller meetups, I\'ve spoken at a slew of events.',
      topics: ['conference', 'speaking']
    }
  }
};
