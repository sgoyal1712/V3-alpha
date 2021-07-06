<template>
<v-container class="grey lighten-5">
      <v-row no-gutters v-for=" itemRow,idx in items" :key="idx">
        <v-col
          v-for="item in itemRow"
          :key="item.id"
          cols="12"
          sm="3"
        >
          <v-card outlined tile >
            <v-img height="200"
							src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
						></v-img>
						<v-card-title> {{item.name}}</v-card-title>
						<v-card-text>
							<v-column >
							<v-row align="center">
								<v-rating :value="itemRow.length"
									dense half-increments readonly
									color="ambar" size="14"
								></v-rating>
								<div class="grey--text ms-4">
									{{itemRow.length}} (413)
								</div>
							</v-row>
							<v-row>
								<v-card-text>
									<div class="my-4 text-subtitle-1">
										{{`$ • ${item.brewery_type}`}}
									</div>
									<div>{{`${item.street} ${item.city} ${item.country}`}}</div>
								</v-card-text>
							</v-row>
							<!-- <v-divider class="mx-4"></v-divider> -->
							</v-column>
						</v-card-text>
						<v-card-title>Tonight's availability</v-card-title>
						<v-card-text>
							<v-chip-group
								v-model="selection"
								active-class="deep-purple accent-4 white--text"
								column
							>
								<v-chip>5:30PM</v-chip>
								<v-chip>7:30PM</v-chip>
								<v-chip>8:00PM</v-chip>
								<v-chip>9:00PM</v-chip>
							</v-chip-group>
						</v-card-text>
						<v-card-actions>
							<v-btn
								color="deep-purple lighten-2"
								align="center"
								text
								@click="reserve(item)"
							>
								Details
							</v-btn>
					</v-card-actions>
					</v-card>
        </v-col>
      </v-row>
    </v-container>
		<v-spacer></v-spacer>
	
	
</template>

<script>
// @ is an alias to /src
import breweries from '@/models/breweries'
import _ from 'lodash'

export default {
	name: 'home',
	data: () => ({
		list: [],
		items: [],
	}),
	async created() {
		const list = await breweries.getList()
		this.items = _.chunk(list, 4);
		this.list.push(...list)
		console.log(list)
	},
	methods: {
		reserve(data) {
			console.log('data', data)
		},
	},
}
</script>