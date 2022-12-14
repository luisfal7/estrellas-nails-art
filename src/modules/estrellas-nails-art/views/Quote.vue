<template>
  <h1>citas</h1>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="date.name" disabled/>
    <input type="text" v-model="date.email" disabled/>
    <Datepicker
      v-model="date.fecha"
      model-type="dd/MM/yyyy"
      locale="es"
      :min-date="minDate"
      :max-date="maxDate"
      prevent-min-max-navigation
      :enable-time-picker="false"
      placeholder="Seleccione fecha..."
      required
    >
    </Datepicker>
    <select v-model="date.hours" required>
      <option v-for="hour in hours" :key="hour.hour">{{ hour.hour }}</option>
    </select>
    <ul>
      <li
        v-for="service in services"
        :key="service.service"
        @click="selectService(service)"
        >
        {{service.service}}
      </li>
    </ul>
    <p v-if="date">Fecha seleccionada: {{ date }}</p>

    <button type="submit">Enviar</button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import { useStore } from "vuex";
  import Datepicker from '@vuepic/vue-datepicker'
  import useDatepicker from "../composables/useDatepicker";

export default {

  components: { Datepicker },

  setup() {
      const store = useStore()
      const login = store.getters['auth/getState']

      const { minDate ,maxDate, es } = useDatepicker()

      const hours = ref([{ hour: '09:00' }, { hour: '10:00' }, { hour: '11:00' }, { hour: '12:00' }, { hour: '13:00' }, { hour: '14:00' }, { hour: '15:00' }, { hour: '16:00' }, { hour: '17:00' }, { hour: '18:00' }, { hour: '19:00' }, { hour: '20:00' }, { hour: '21:00' }])

      const services = ref([{service: 'manicura 0'},{service: 'manicura 2'},{service: 'manicura 3'},{service: 'pedicure 1'}])

      const selectService = (service) => date.value.service.push(service.service)

      const date = ref({
        name: login.user.name,
        email: login.user.email,
        service: [],
        fecha: '',
        hours:''
      })

      const submitForm = () => {
        console.log('enviar a db', date.value);
      }

      return {
          date,
          submitForm,
          login,
          hours,
          maxDate,
          minDate,
          es,
          services,
          selectService
      }
  }
}
</script>

<style>

</style>