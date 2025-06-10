export const useProjects = () => {
  return useAsyncData('projects', () => queryContent('/projects').find())
}
