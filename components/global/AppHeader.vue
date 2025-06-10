<template>
  <UNavigationMenu
    :items="links"
  >
 
      <UColorModeButton variant="ghost" color="secondary" />
      <UButton
        to="https://github.com/amirrr1987"
        target="_blank"
        icon="i-simple-icons-github"
        color="secondary"
        variant="ghost"
      />
      <UButton
        to="https://www.linkedin.com/in/amirrr1987/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        color="secondary"
        variant="ghost"
      />
  </UNavigationMenu>
</template>

<script setup lang="ts">
  const links = [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/'
    },
    {
      label: 'About',
      icon: 'i-heroicons-user',
      to: '/about'
    },
    {
      label: 'Skills',
      icon: 'i-heroicons-academic-cap',
      to: '/skills'
    },
    {
      label: 'Projects',
      icon: 'i-heroicons-briefcase',
      to: '/projects'
    },
    {
      label: 'Contact',
      icon: 'i-heroicons-envelope',
      to: '/contact'
    }
  ]
  
  const headerConfig = {
    wrapper: 'sticky top-0 z-50',
    container: 'py-2',
    background: 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800',
    links: 'hidden md:flex',
    popover: {
      container: 'bg-gray-900 border border-gray-800'
    }
  }
</script>