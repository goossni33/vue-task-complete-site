<template>
	<div class="upload-foto page">
		<BackButton/>
		<h1>Upload Foto</h1>
		<h2>Voeg nieuwe foto toe voor</h2>
		<select v-model="selectedParticipantId">
			<option 
				v-for="(participant) in participants" 
				:key="participant.id" 
				:value="participant.id"
			>{{participant.naam}}</option>
		</select>
		<p class="error" v-if="errorMessage">{{errorMessage}}</p>
		<vue-dropzone 
			ref="myVueDropzone" 
			id="dropzone" 
			:options="dropzoneOptions" 
			v-on:vdropzone-sending="sendingEvent" 
			v-on:vdropzone-error="onError"
			v-on:vdropzone-success="onSuccess"
		/>
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

		p.error {
			margin-top: $unit_s;
			color: red;
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
			selectedParticipantId: null,
			errorMessage: '',
			dropzoneOptions: {
				url: 'http://dump.lwdev.nl/vue-cursus-api/uploadFoto/upload.php',
				thumbnailWidth: 150,
				maxFilesize: 0.5,
				acceptedFiles: 'image/jpg, image/png, image/jpeg'
			}
		}
	},
	methods: {
		getParticipants() {
			this.axios.get('http://dump.lwdev.nl/vue-cursus-api/deelnemers/').then((response) => {
				this.participants = response.data;
				this.selectedParticipantId = response.data[0].id;
			});
		},
		sendingEvent(file, xhr, formData) {
			formData.append('id', this.selectedParticipantId);
		},
		onError(file, message, xhr) {
			this.errorMessage = message;
		},
		onSuccess(file, response) {
			this.errorMessage = '';
			
			if(response.success) {
				alert('Uploaden geslaagd!')
			}
		}
	},
	created() {
		this.getParticipants();
	}
}
</script>
