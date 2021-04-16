<template>
  <div>
    <input type="file" @change="onFileChange" class="px-8 py-3" >
    <button class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Upload</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      file:null
    }
  },
  methods: {
    onFileChange(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    }
  },
}
</script>
