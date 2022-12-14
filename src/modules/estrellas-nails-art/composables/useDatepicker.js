import { computed } from "vue";
import { addMonths, getMonth, getYear } from 'date-fns'
import { es } from 'date-fns/locale';
import '@vuepic/vue-datepicker/dist/main.css'

const useDatepicker = () =>{

    const minDate = new Date()

    const maxDate = computed(() => addMonths(new Date(getYear(new Date()), getMonth(new Date())), 2));

    return{
        minDate,
        maxDate,
        es,
    }
}

export default useDatepicker