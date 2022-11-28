import { useState, useEffect } from "react";
import type { UserInfo } from "@/domain/entities/UserInfo";
import userInfoRepository from "@/domain/repositories/UserInfoRepository";

export const useHooks = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    userInfoRepository.getUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, []);

  return { userInfo };
};
