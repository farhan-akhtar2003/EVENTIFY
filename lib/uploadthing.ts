// src/utils/uploadthing.ts
// COPIED FROM WEBSITE NECESSARY FOR UPLOADTHING
import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();