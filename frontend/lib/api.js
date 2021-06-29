import Router from "next/router";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function updateAPI(url = "", data = {}, newUrl = null) {
  const requestUrl = getStrapiURL(url);
  await fetch(requestUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (newUrl) {
    Router.push(window.location.origin + newUrl);
  } else {
    Router.reload(window.location.pathname);
  }
}

export async function createAPI(url = "", data = {}) {
  const requestUrl = getStrapiURL(url);
  await fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  Router.reload(window.location.pathname);
}

export async function deleteAPI(url = "") {
  const requestUrl = getStrapiURL(url);
  await fetch(requestUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  Router.push("/");
}
