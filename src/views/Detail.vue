<template>
	<div class="detail page">
		<BackButton/>
		<h1>Deelnemer details</h1>
		<div class="detail-container">
			<div class="description half-width">
				<div class="holder">
					<h2>Naam</h2>
					<h3>{{name}}</h3>
				</div>
				<div class="holder">
					<h2>Afdeling</h2>
					<h3>{{team}}</h3>
				</div>
				<div class="holder">
					<h2>Persoonlijke tekst</h2>
					<h3>{{personalizedText}}</h3>
				</div>
			</div>
			<div 
				class="image-holder half-width"
				:style="{ 'background-image': `url(${imageUrl})` }"
			></div>
		</div>
	</div>
</template>

<style lang="scss">
	.detail-container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.half-width {
			max-width: calc(50% - #{$unit});
			width: 100%;
		}

		.holder {
			margin-bottom: $unit_l;

			h2 {
				margin-bottom: $unit_xxs;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}

		.image-holder {
			max-width: 256px;
			background-size: cover;
			background-position: center;
			@include aspect-ratio(1, 1);
		}

		@include mobile {
			justify-content: flex-start;
			align-items: initial;
			flex-direction: column;

			.half-width {
				max-width: 100%;
			}

			.image-holder {
				margin-top: $unit_l;
			}
		}
	}
</style>

<script>
import BackButton from '@/components/BackButton.vue';

export default {
	name: 'Detail',
	components: {
		BackButton
	},
	data() {
		return {
			name: '',
			team: '',
			personalizedText: '',
			imageUrl: '',
		}
	},
	methods: {
		getParticipantById() {
		this.axios.post('http://dump.lwdev.nl/vue-cursus-api/deelnemerDetails/', { id: this.$route.params.userId }).then((response) => {
			console.log(response.data)
			const { naam, afdeling, img, tekst } = response.data;
			this.name = naam;
			this.team = afdeling;
			this.imageUrl = img;
			this.personalizedText = tekst;
		})
		}
	},
	created() {
		this.getParticipantById();
	}
}
</script>
