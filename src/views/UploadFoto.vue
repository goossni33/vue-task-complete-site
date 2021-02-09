<template>
	<div class="upload-foto page">
		<BackButton/>
		<h1>Upload Foto</h1>
		<h2>Voeg nieuwe foto toe voor</h2>
		<select>
			<option 
				v-for="(participant) in participants" 
				:key="participant.id" 
				:value="participant.id"
			>{{participant.naam}}</option>
		</select>
		<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
	</div>
</template>

<style lang="scss">
	.page.upload-foto {
		h2 {
			margin-bottom: $unit_s;
		}

		.dropzone {
			margin-top: $unit_xl;
			border: 2px solid $primary;
			border-radius: 4px;

			.dz-message {
				color: $primary;
				font-size: $unit_l;
			}
		}
	}
</style>

<script>
import BackButton from '@/components/BackButton.vue';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: 'UploadFoto',
	components: {
		BackButton,
		vueDropzone: vue2Dropzone
	},
	data() {
		return {
			participants: [],
			dropzoneOptions: {
				url: 'https://httpbin.org/post',
				thumbnailWidth: 150,
				maxFilesize: 0.5,
				headers: { "My-Awesome-Header": "header value" }
			}
		}
	},
	methods: {
		getParticipants() {
			this.axios.get('http://dump.lwdev.nl/vue-cursus-api/deelnemers/').then((response) => {
				this.participants = response.data;
				console.log(this.participants[0])
			})
		}
	},
	created() {
		this.getParticipants();
	}
}
</script>
