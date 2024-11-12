<template>
  <section class="p-4 md:p-6 lg:p-8 grid md:grid-cols-2 md:gap-6 lg:gap-8">
    <h2 class="text-2xl font-bold mb-12 md:col-span-2">Contact Me</h2>
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-4">
        Alternatively, you can reach me at:
      </h3>
      <p class="mb-2">
        <strong>Email: </strong>
        <a
          href="mailto:example@example.com"
          class="text-blue-400 hover:underline"
          >maghami.a1987@gmail.com</a
        >
      </p>
      <p class="mb-2">
        <strong>Phone: </strong>
        <a href="tel:+989198881400" class="text-blue-400 hover:underline"
          >+989198881400</a
        >
      </p>
      <p class=""><strong>Address: </strong>Tehran, Tehran, Iran</p>
    </div>

    <UForm @submit.prevent="handleSubmit" class="mb-12">
      <div class="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <UFormGroup
          :ui="formGroup"
          label="Full name"
          class="col-span-2 lg:col-span-1"
        >
          <UInput placeholder="Enter full name.." :ui="input" />
        </UFormGroup>

        <UFormGroup
          :ui="formGroup"
          label="Email"
          class="col-span-2 lg:col-span-1"
        >
          <UInput placeholder="Enter email.." :ui="input" />
        </UFormGroup>

        <UFormGroup :ui="formGroup" label="Message" class="col-span-2">
          <UTextarea
            :ui="textarea"
            placeholder="Enter message.."
            autoresize
            resize
            :rows="10"
          />
        </UFormGroup>
        <div class="col-span-2">
          <UButton label="Send message" />
        </div>
      </div>
    </UForm>
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
const input = {
  base: "h-12 bg-red-500 aaaaaaaaaaaaa",
};

const textarea = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-textarea",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none",
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base",
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5",
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5",
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      xs: "ps-8",
      sm: "ps-9",
      md: "ps-10",
      lg: "ps-11",
      xl: "ps-12",
    },
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      xs: "pe-8",
      sm: "pe-9",
      md: "pe-10",
      lg: "pe-11",
      xl: "pe-12",
    },
  },
  color: {
    white: {
      outline:
        "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
    },
    gray: {
      outline:
        "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
    },
  },
  variant: {
    outline:
      "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none",
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5",
      },
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5",
      },
    },
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
  },
};
const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    required:
      "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400",
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base",
  },
  container: "mt-2 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm",
  },
};
</script>

<style scoped>
/* Optional additional styling */
</style>
