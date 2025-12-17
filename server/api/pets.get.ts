import { request, gql } from 'graphql-request';

export default defineEventHandler(async () => {
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
        'apollo-require-preflight': 'true'
      }
    );

    const pets = res.pets.map((p: any) => ({
      id: p.id,
      name: p.name,
      tag: `${p.age} anos · ${p.type}`,
      image: p.image,
    }));

    return { data: pets };
  } catch (err) {
    console.error('BFF /pets error:', err);
    throw createError({
      statusCode: 502,
      statusMessage: 'Erro ao buscar pets',
    });
  }
});
