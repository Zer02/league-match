<template>
  <div>
    <h2>Player Profile</h2>
    <form @submit.prevent="saveProfile">
      <input v-model="profile.name" placeholder="Name" required />
      <input v-model="profile.skill" placeholder="Skill Level" required />
      <input v-model="profile.availability" placeholder="Preferred Play Times" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { supabase } from '~/utils/supabase';

export default {
  data() {
    return {
      profile: {
        name: '',
        skill: '',
        availability: ''
      }
    };
  },
  async mounted() {
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (data) {
        this.profile = data;
      }
    }
  },
  methods: {
    async saveProfile() {
      const user = supabase.auth.user();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .upsert({
            user_id: user.id,
            name: this.profile.name,
            skill: this.profile.skill,
            availability: this.profile.availability
          });
        if (error) {
          alert(error.message);
        } else {
          alert('Profile saved!');
        }
      }
    }
  }
};
</script>
