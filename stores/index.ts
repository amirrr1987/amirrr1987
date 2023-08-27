export const useDataStore = defineStore('data', () => {
    const projects = ref([
      {
        id: "1",
        image: "/camo.png",
        title: "Survey",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "2",
        image: "assets/img/camo.png",
        title: "HR Exam",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "3",
        image: "assets/img/camo.png",
        title: "Management Discount",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "4",
        image: "assets/img/camo.png",
        title: "Console log advanced",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "5",
        image: "assets/img/camo.png",
        title: "Araz",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "6",
        image: "assets/img/camo.png",
        title: "TheMovie",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "7",
        image: "assets/img/camo.png",
        title: "CVBuilder",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
      {
        id: "8",
        image: "assets/img/camo.png",
        title: "Traffic",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, odit?",
      },
    ]);
  
  
  
    return { projects }
  })