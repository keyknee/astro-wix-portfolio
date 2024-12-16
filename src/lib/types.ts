export type WixDateTime = {
  $date: string;
};

export type WixProject = {
  displayName: string;
  highlights: string;
  url: string;
  projectTechnologies: WixProjectTechnology[];
  _id: string;
  _owner: string;
  _createdDate: WixDateTime;
  _updatedDate: WixDateTime;
};

export type WixProjectTechnology = {
  _id: string;
  _owner: string;
  _createdDate: WixDateTime;
  _updatedDate: WixDateTime;
  displayName: string;
  iconClass: string;
};
