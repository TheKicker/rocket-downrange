<template>
  <div>
    <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
        Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ body }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <div v-if="button == true">
                        <a :href="buttonLink" class="btn btn-primary" target="_blank" rel="noopener">{{ buttonLabel }}</a>
                    </div>
                    <div v-else>
                        <!-- Null --> 
                    </div>
                </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:{
      title: String,
      body: String,
      button: false,
      buttonLabel: String,
      buttonLink: String
  }
};
</script>
