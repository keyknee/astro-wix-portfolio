import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import type { WixProject } from "./types";

export const getWixClient = () => {
  const wixClient = createClient({
    auth: OAuthStrategy({
      clientId: import.meta.env.WIX_CLIENT_ID,
    }),
  });
  return wixClient;
};

export const getProjects = async () => {
  const { queryDataItems } = getWixClient().use(items);
  const { items: projects } = await queryDataItems({
    dataCollectionId: "Projects",
    referencedItemOptions: [{ fieldName: "projectTechnologies" }],
  }).find();

  return projects.map(project => ({
    _id: project.data._id,
    _owner: project.data._owner,
    _createdDate: project.data._createdDate,
    _updatedDate: project.data._updatedDate,
    displayName: project.data.displayName,
    highlights: project.data.highlights,
    url: project.data.url,
    projectTechnologies: project.data.projectTechnologies,
  }));
};

export const getProject = async (url: string) => {
  const { queryDataItems } = getWixClient().use(items);
  const { items: projects } = await queryDataItems({
    dataCollectionId: "Projects",
  })
    .eq("url", url)
    .limit(1)
    .find();

  return projects[0].data;
};

export const getSocialLinks = async () => {
  const { queryDataItems } = getWixClient().use(items);
  const { items: links } = await queryDataItems({
    dataCollectionId: "SocialLinks",
  }).find();

  return links.map(link => link.data.url);
};

export const getPages = async () => {
  const { queryDataItems } = getWixClient().use(items);
  const { items: pages } = await queryDataItems({
    dataCollectionId: "Pages",
  })
    .eq("published", true)
    .find();

  return pages.map(page => ({
    ...page.data,
  }));
};
