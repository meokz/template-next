import { jsonPlaceholderApi } from "@/domain/datasource/JsonPlaceholderApi";
import type { UserInfo } from "@/domain/entities/UserInfo";

export interface IUserInfoRepository {}

class UserInfoRepository implements IUserInfoRepository {
  async getUserInfo(): Promise<UserInfo> {
    const response = await jsonPlaceholderApi.getTodos1();
    const userInfo = response as UserInfo;
    return userInfo;
  }
}

const userInfoRepository = new UserInfoRepository();
export default userInfoRepository;
