import conf from "../conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, pass, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        pass,
        name
      );
      if (userAccount) {
        return this.login({ email, pass });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, pass }) {
    try {
      return await this.account.createEmailSession(email, pass);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new AuthService();

export default authservice;
