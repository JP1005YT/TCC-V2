<template>
  <header class="gradient shadow-md">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <router-link to="/">
        <a class="block text-white" href="#">
          <span class="sr-only">Home</span>
          <div class="w-20 h-20">
            <img src="@/assets/logo.png" alt="" class="w-full h-full object-contain" />
          </div>
        </a>
      </router-link>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <router-link to="/social">
                <a class="text-white transition hover:text-white/75" href="#"> Social </a>
              </router-link>
            </li>

            <li>
              <router-link to="/fitness">
                <a class="text-white transition hover:text-white/75" href="#"> Fitness </a>
              </router-link>
            </li>

            <li>
              <router-link to="/alimentos">
                <a class="text-white transition hover:text-white/75" href="#"> Alimentos </a>
              </router-link>
            </li>

            <li>
              <router-link to="/doencas">
                <a class="text-white transition hover:text-white/75" href="#"> Doenças </a>
              </router-link>
            </li>

            <li>
              <router-link to="/calculadora">
                <a class="text-white transition hover:text-white/75" href="#"> Calculadora </a>
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <router-link to="/login">
            <a
              class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              href="#"
            >
              Login
            </a>
            </router-link>

            <a
              class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
              href="#"
            >
              Register
            </a>
          </div>

          <button
            class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  // ...
}
</script>
