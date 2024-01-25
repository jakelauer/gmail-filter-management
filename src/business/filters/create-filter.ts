import { GMail } from '../../external/GMail/index';

type FilterContent = Parameters<typeof GMail.Filters.createFilter>[0]>;

export async function createFilter() {
	try {
		const result = await GMail.Filters.createFilter({
			userId: "me",
			requestBody: {
				action: {

				},
				criteria: {

				},
			},
		});

		console.log(`Created filter with id: ${result.data.id}`);
		return result.data.id;
	} catch (error) {
		console.error(`An error occurred: ${error}`);
		return null;
	}
}
