<template>
  <v-app>
    <v-app-bar app color="primary" density="compact">
      <v-app-bar-title>Pet Project</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn 
      v-for="link in links"
      :key="`${link.label}-header-link`"
      :to="link.url"
      > {{link.label}}</v-btn>
      <v-divider inset vertical></v-divider>
    </v-app-bar>
    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Dashboard',
        url: '/dashboard'
      }
    ]
  }),
}
</script>
