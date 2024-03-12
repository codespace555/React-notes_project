import { Client, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Storageservice {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(), // File name
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile:: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: uploadFile:: error", error);
      return false;
    }
  }

getFilePreview(fileId) {
  return this.bucket.getFilePreview(
    conf.appwriteBucketId,
    fileId
  )
  }


}

const storage = new Storageservice();

export default storage;
