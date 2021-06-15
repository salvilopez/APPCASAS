import {rest} from 'msw';

export const handlers = [
	rest.get('https://api-casas.kevinmamaqi.com/api-casas', (req, res, ctx) => {
		// If authenticated, return a mocked user details
		return res(
			ctx.status(200),
			ctx.json([
				{
					price: 1067912,
					image: 'image6.jpg',
					name: 'Piso en Raval',
					lat: 41.366629,
					long: 2.185024,
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt tenetur, nobis natus neque necessitatibus ex quisquam eum, a nisi dolores aperiam accusamus aut impedit perferendis in fuga porro unde?',
					gastosIncluidos: true,
					habitaciones: 5,
					m2: 131,
				},
				{
					price: 942977,
					image: 'image1.jpg',
					name: 'Piso en Poble Nou',
					lat: 41.47632,
					long: 2.134556,
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt tenetur, nobis natus neque necessitatibus ex quisquam eum, a nisi dolores aperiam accusamus aut impedit perferendis in fuga porro unde?',
					gastosIncluidos: true,
					habitaciones: 3,
					m2: 140,
				},
				{
					price: 864971,
					image: 'image3.jpg',
					name: 'Chalet en Poble Sec',
					lat: 41.387025,
					long: 2.083189,
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium incidunt tenetur, nobis natus neque necessitatibus ex quisquam eum, a nisi dolores aperiam accusamus aut impedit perferendis in fuga porro unde?',
					gastosIncluidos: false,
					habitaciones: 3,
					m2: 106,
				},
			])
		);
	}),
];
