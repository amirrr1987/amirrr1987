<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400 bg-gray-900">
    <h2 class="text-2xl font-bold text-white mb-6">Contact Me</h2>

    <div class="grid grid-cols-2">
      <form
        @submit.prevent="handleSubmit"
        class="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300"
              >Full Name</label
            >
            <input
              v-model="form.name"
              id="name"
              type="text"
              class="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300"
              >Email</label
            >
            <input
              v-model="form.email"
              id="email"
              type="email"
              class="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div class="mt-6">
          <label for="message" class="block text-sm font-medium text-gray-300"
            >Message</label
          >
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            class="w-full mt-1 p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div class="mt-6 text-center">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      <!-- Contact Info -->
      <div class="mt-12 max-w-4xl mx-auto text-center">
        <h3 class="text-xl font-bold text-white mb-4">
          Alternatively, you can reach me at:
        </h3>

        <div class="text-sm text-gray-300">
          <p>
            <strong>Email:</strong>
            <a
              href="mailto:example@example.com"
              class="text-blue-400 hover:underline"
              >example@example.com</a
            >
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+1234567890" class="text-blue-400 hover:underline"
              >+1 (234) 567-890</a
            >
          </p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
useHead({
  title: `Amir Maghami | Contact`,
});
const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  alert("Message sent!");
  // Handle form submission logic here (e.g., send the form data to an API)
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<style scoped>
/* Optional additional styling */
</style>
