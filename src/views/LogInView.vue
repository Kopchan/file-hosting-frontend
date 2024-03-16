<script setup>
import { ref } from 'vue';
import AuthCard from '@/components/AuthCard.vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const form = ref({
  email: '',
  password: '',
});

const onSubmit = async () => {
  const { login } = useAuthStore();
  login(form.value).then(router.push('/'))
}
</script>

<template>
  <AuthCard
    header="Авторизация"
    @on-submit="onSubmit"
    switch-path="/signup"
    switch-text="Ещё не зарегистрировались?"
    switch-link="К регистрации"
    submit-text="Войти">
    <input type="email"    v-model="form.email"    placeholder="Email"  required>
    <input type="password" v-model="form.password" placeholder="Пароль" required>
  </AuthCard>
</template>
