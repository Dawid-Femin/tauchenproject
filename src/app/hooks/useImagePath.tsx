import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const useImagePath = (path: string) => {
  return `${publicRuntimeConfig.basePath}/${path}`;
};

//PATH FROM APP DIRECTORY!
