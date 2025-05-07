<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { supabase } from '~/utils/supabase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const { user, error } = await supabase.auth.signIn({
        email: this.email,
        password: this.password
      });
      if (error) {
        alert(error.message);
      } else {
        this.$router.push('/profile');
      }
    }
  }
};
</script>
