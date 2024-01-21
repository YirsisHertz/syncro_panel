import { environment } from "../../../environments/environments";
import type { CreateWebCard, WebCardEntity } from "../../domain";
import { WebCardRepository } from "../../domain";

export class WebCardMongoModel extends WebCardRepository {
  private baseURL: string = `${environment.webcard_base_url}`;

  async getAll(): Promise<WebCardEntity[]> {
    const res = await fetch(`${this.baseURL}/webcard`);
    const data = await res.json();

    return data;
  }

  async create(datasource: CreateWebCard): Promise<WebCardEntity> {
    const res = await fetch(`${this.baseURL}/webcard`, {
      method: "POST",
      body: JSON.stringify(datasource),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    return data;
  }

  delete(): Promise<WebCardEntity> {
    throw new Error("Method not implemented.");
  }
}
