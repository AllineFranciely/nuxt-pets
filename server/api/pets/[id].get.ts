import { request, gql } from 'graphql-request';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const GQL_URL = 'http://localhost:4000/graphql';

  const query = gql`
    query pet($id: ID!) {
      pet(id: $id) {
        id
        name
        age
        type
        image
      }
    }
  `;

  try {
    const res = await request(GQL_URL, query, { id });

    if (!res.pet) {
      throw createError({ statusCode: 404, statusMessage: 'Pet não encontrado' });
    }

    const p = res.pet;

    const baseUrl = 'http://localhost:3000';
    
    return {
      data: {
        id: p.id,
        name: p.name,
        tag: `${p.age} anos · ${p.type}`,
        image: p.image?.startsWith('http')
          ? p.image
          : `${baseUrl}${p.image}`,
      }
    };
  } catch (err) {
    console.error('BFF /pets/[id] error', err);
    throw createError({ statusCode: 502, statusMessage: 'Erro ao buscar pet' });
  }
});
