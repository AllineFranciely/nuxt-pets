import { request, gql } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event);

  const page = Number(queryParams.page || 1);
  const limit = Number(queryParams.limit || 10);

  const GQL_URL = process.env.GQL_URL || 'http://localhost:4000/graphql';

  const query = gql`
    query {
      pets {
        id
        name
        age
        type
        image
      }
    }
  `;

  try {
    const res = await request(
      GQL_URL,
      query,
      {},
      {
        'Content-Type': 'application/json',
        'apollo-require-preflight': 'true',
      }
    );

    const allPets = res.pets.map((p: any) => ({
      id: p.id,
      name: p.name,
      tag: `${p.age} anos · ${p.type}`,
      image: p.image,
    }));

    const total = allPets.length;
    const totalPages = Math.ceil(total / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    const pets = allPets.slice(start, end);

    return {
      data: pets,
      meta: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  } catch (err) {
    console.error('BFF /pets error:', err);
    throw createError({
      statusCode: 502,
      statusMessage: 'Erro ao buscar pets',
    });
  }
});
