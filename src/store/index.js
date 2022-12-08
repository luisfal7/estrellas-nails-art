import { createStore } from "vuex";
import admin from "../modules/admin/store";
import estrellas from "../modules/estrellas-nails-art/store";
import auth from "@/modules/auth/store";

const store = createStore({
    modules: {
      admin,
      auth,
      estrellas,
    }
})

export default store
