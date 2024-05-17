<template>
    <div class="character-card">
        <div class="character-card__photo">
            <img :src="character.image" alt="image" />
        </div>
        <div class="character-card__text-content">
            <div class="section">
                <h3>{{ character.name }}</h3>
                <span class="status">
                    <span :class="statusClass"></span>
                    {{ character.status }} - {{ character.species }}
                </span>
            </div>
            <div class="section">
                <span class="text-gray">Last known location:</span>
                <p>{{ character.location.name }}</p>
            </div>
            <div class="section">
                <span class="text-gray">First seen in:</span>
                <p>{{ character.episodeName }}</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
      name: "SingleCharacter",
      props: {
          character: {
              type: Object,
              required: true,
          },
      },
      setup(props) {
          const statusClass = computed(() => {
              if (props.character.status === 'Alive') {
                  return 'status__icon status-alive';
              } else if (props.character.status === 'Dead') {
                  return 'status__icon status-dead';
              } else {
                  return 'status__icon status-unknown';
              }
          });
  
          return {
              statusClass
          };
      }
  };
  </script>
  
  <style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  h3 {
      font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
          "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
      font-weight: 800;
      text-rendering: optimizeLegibility;
  }
  .character-card {
      width: 600px;
      height: 220px;
      width: 600px;
      height: 220px;
      display: flex;
      overflow: hidden;
      background: rgb(60, 62, 68);
      border-radius: 0.5rem;
      margin: 0.75rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
  
  .character-card__photo {
      flex: 2 1 0%;
      width: 100%;
  }
  .character-card__photo img {
      width: 100%;
      height: 100%;
      margin: 0px;
      opacity: 1;
      transition: opacity 0.5s ease 0s;
      object-position: center center;
      object-fit: cover;
  }
  .character-card__text-content {
      flex: 3 1 0%;
      padding: 0.75rem;
      color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
  }
  .character-card__text-content .section {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
  }
  .text-gray {
      color: rgb(158, 158, 158);
  }
  .status__icon {
      height: 0.5rem;
      width: 0.5rem;
      margin-right: 0.375rem;
      border-radius: 50%;
      display: inline-block;
  }
  .status {
      display: flex;
      align-items: center;
      text-transform: capitalize;
  }
  .status-alive {
      background: rgb(85, 204, 68);
  }
  .status-dead {
      background: rgb(214, 61, 46);
  }
  .status-unknown {
      background: rgb(158, 158, 158);
  }
  </style>