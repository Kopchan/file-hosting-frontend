<script setup>
import { ref } from 'vue';
import AuthCard from '@/components/AuthCard.vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const form = ref({
  last_name:  '',
  first_name: '',
  email:      '',
  password:   '',
});

const onSubmit = async () => {
  const { registrate } = useAuthStore();
  registrate(form.value).then(router.push('/'))
}
</script>

<template>
  <AuthCard
    header="Регистрация"
    @on-submit="onSubmit"
    switch-path="/login"
    switch-text="Уже зарегистрировались?"
    switch-link="К авторизации"
    submit-text="Создать">
    <input type="text"     v-model="form.last_name"  placeholder="Фамилия" required>
    <input type="text"     v-model="form.first_name" placeholder="Имя"     required>
    <input type="email"    v-model="form.email"      placeholder="Email"   required>
    <input type="password" v-model="form.password"   placeholder="Пароль"  required>
  </AuthCard>
</template>
