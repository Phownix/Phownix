import { error } from '@sveltejs/kit';
import json from '$lib/json/work.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.name) {
        let data = json.filter(x => {
            if(x.name == params.name.replaceAll('_',' ')) return {x}
        });

        if (data[0]) return {data}
	}

	throw error(418, 'The project was not found');
}