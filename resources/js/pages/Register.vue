<template>
  <div>
    <h2
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
    >
      Crear usuario
    </h2>
  </div>
  <form class="mt-8 space-y-6" @submit="register">
    <input type="hidden" name="remember" value="true" />
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="user-name" class="sr-only">Nombre</label>
        <input
          v-model="user.name"
          id="user-name"
          name="name"
          type="text"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-t-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Nombre"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Contraseña</label>
        <input
          v-model="user.password"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-b-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Contraseña"
        />
      </div>
      <div>
        <label for="password_confirmation" class="sr-only"
          >Confrimar contraseña</label
        >
        <input
          v-model="user.password_confirmation"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          required
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-b-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Confirmar contraseña"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          group
          relative
          flex
          w-full
          justify-center
          rounded-md
          border border-transparent
          bg-indigo-600
          py-2
          px-4
          text-sm
          font-medium
          text-white
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
        "
      >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Heroicon name: mini/lock-closed -->
          <svg
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Registrarse
      </button>
    </div>
  </form>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";
const router = useRouter();
const user = {
  name: "",
  password: "",
  password_confirmation: "",
};

function register(ev) {
  ev.preventDefault();
  store.dispatch("register", user).then(() => {
    router.push({ name: "Panel" });
  });
}
</script>

<style>
</style>