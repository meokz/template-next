type Response = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface IJsonPlaceholderApi {
  getTodos1(): Promise<Response>;
}

class JsonPlaceholderApi implements IJsonPlaceholderApi {
  async getTodos1(): Promise<Response> {
    return (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json().then((json) => {
      const response = json as Response;
      console.log(response);
      return response;
    });
  }
}

class JsonPlaceholderApiMock implements IJsonPlaceholderApi {
  private jsonPlaceholderApi = new JsonPlaceholderApi();

  getTodos1(): Promise<Response> {
    return this.jsonPlaceholderApi.getTodos1();
  }
}

export const jsonPlaceholderApi = new JsonPlaceholderApi();
export const jsonPlaceholderApiMock = new JsonPlaceholderApiMock();
