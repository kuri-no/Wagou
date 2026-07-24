import {
  WP_REST_API_Posts,
  WP_REST_API_Post,
  WP_REST_API_Categories,
  WP_REST_API_Category,
} from "wp-types";

const WORDPRESS_POSTS_URL = process.env.WORDPRESS_POSTS_URL;
const WORDPRESS_CATEGORIES_URL = process.env.WORDPRESS_CATEGORIES_URL;

export async function getPosts(
  perPage: number,
  page: number = 1,
): Promise<WP_REST_API_Posts> {
  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed=&per_page=${perPage}&page=${page}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }

  const posts = await response.json();

  return posts;
}

export async function getPost(id: number): Promise<WP_REST_API_Post> {
  const response = await fetch(`${WORDPRESS_POSTS_URL}/${id}?_embed`, {
    // next: { revalidate: 60 },
  });

  if (response.status === 400 || response.status === 404) {
    return null;
  }

  const post = await response.json();

  return post;
}

export async function getTagPosts(
  tagIds: number | number[],
  perPage: number,
): Promise<WP_REST_API_Posts> {
  const tagsString = Array.isArray(tagIds)
    ? tagIds.join(",")
    : tagIds.toString();

  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed=&per_page=${perPage}&tags=${tagsString}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }
  
  const posts = await response.json();

  return posts;
}

export async function getAllCategories(): Promise<WP_REST_API_Categories> {
  const categoryResponse = await fetch(WORDPRESS_CATEGORIES_URL);
  const categories = await categoryResponse.json();

  return categories;
}

export async function getCategoryPosts(
  categoryIds: number | number[],
  perPage: number,
  page: number = 1,
): Promise<WP_REST_API_Posts> {
  const categoriesString = Array.isArray(categoryIds)
    ? categoryIds.join(",")
    : categoryIds.toString();

  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed=&per_page=${perPage}&categories=${categoriesString}&page=${page}`,
  );

  if (response.status === 400 || response.status === 404) {
    return [];
  }

  const posts = await response.json();

  return posts;
}

export async function getCategoryFromId(
  id: number,
): Promise<WP_REST_API_Category> {
  const response = await fetch(`${WORDPRESS_CATEGORIES_URL}/${id}`);
  const category = await response.json();

  return category;
}

export async function getTotalPages(perPage: number): Promise<number> {
  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed=&per_page=${perPage}`,
  );
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 0;

  return totalPages;
}

export async function getCategoryTotalPages(
  categoryIds: number | number[],
  perPage: number,
): Promise<number> {
  const categoriesString = Array.isArray(categoryIds)
    ? categoryIds.join(",")
    : categoryIds.toString();

  const response = await fetch(
    `${WORDPRESS_POSTS_URL}?_embed=&per_page=${perPage}&categories=${categoriesString}`,
  );
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 0;

  return totalPages;
}
