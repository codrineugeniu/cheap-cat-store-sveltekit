
export interface Cat {
  name: string;
  image: string;
	price: number;
}

export interface CatsResponse {
  cats: Cat[];
}

export function load(): CatsResponse {
	return {
		cats: [
			{
				name: 'Luna',
				price: 7000,
				image:
					'https://images.unsplash.com/photo-1579168765467-3b235f938439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			},
			{
				name: 'Simba',
				price: 34999,
				image:
					'https://images.unsplash.com/photo-1594142404563-64cccaf5a10f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			},
			{
				name: 'Max',
				price: 12000,
				image: 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			},
			{
				name: 'Tiger',
				price: 999999,
				image:
					'https://images.unsplash.com/photo-1599889959407-598566c6e1f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			},
			{
				name: 'Lola',
				price: 74300,
				image:
					'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			},
			{
				name: 'A Cat',
				price: 11000,
				image:
					'https://images.unsplash.com/photo-1605450648855-63f9161b7ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&fit=crop&h=175'
			}

		]
	};
}

