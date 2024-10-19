"use client";
import { useEffect, useState } from "react";
import { CreateHmacSHA256 } from "./crypto";
import {
  SUMSUB_APP_SECRET,
  SUMSUB_APP_TOKEN,
  SUMSUB_LEVEL_NAME,
} from "../constants";

// sumsub KYC API

type ExternalLink = {
  url: string;
};

export type AccessToken = {
  userId: string;
  token: string;
};
export default class SumSubApi {
  private levelName;
  private userId;
  private lang;
  private baseApiUrl = "https://api.sumsub.com";

  constructor(userId: string, lang: string) {
    this.levelName = SUMSUB_LEVEL_NAME; //process.env.EXPO_PUBLIC_SUMSUB_LEVEL_NAME;
    this.userId = userId;
    this.lang = lang;
  }

  async Post(uri: string) {
    const headers = new Headers();
    const requestOptions = {
      method: "POST",
      headers: headers,
    };
    const url = this.baseApiUrl + uri;
    const appToken = SUMSUB_APP_TOKEN; //process.env.EXPO_PUBLIC_SUMSUB_APP_TOKEN as string;
    const appSecret = SUMSUB_APP_SECRET; //process.env.EXPO_PUBLIC_SUMSUB_APP_SECRET as string;
    const timestamp = Date.now();
    const unixTime = Math.floor(timestamp / 1000);
    const ts = String(unixTime);

    console.log("ts=", ts);
    console.log("app-token:", appToken);
    console.log("app-secret:", appSecret);

    const dataToSig = ts + requestOptions.method.toUpperCase() + uri;
    console.log("dataToSig=", dataToSig);
    const signature = CreateHmacSHA256(dataToSig, appSecret);

    console.log("signature:", signature);
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set("X-App-Token", appToken);
    headers.set("X-App-Access-Sig", signature);
    headers.set("X-App-Access-Ts", ts);

    return fetch(url, requestOptions);
  }

  async GenerateAccessToken() {
    const uri =
      "/resources/accessTokens?userId=" +
      this.userId +
      "&levelName=" +
      this.levelName +
      "&ttlInSecs=600";
    return await this.Post(uri);
  }

  async GenerateExternalLink() {
    const uri =
      "/resources/sdkIntegrations/levels/" +
      this.levelName +
      "/websdkLink?ttlInSecs=1800&externalUserId=" +
      this.userId +
      "&lang=" +
      this.lang;
    return this.Post(uri);
  }

  GetKYCLink() {
    const [data, setData] = useState("");
    useEffect(() => {
      this.GenerateExternalLink()
        .then((resp) => resp.json())
        .then((json) => {
          const x: ExternalLink = json;
          setData(x.url);
        })
        .catch((err) => console.log(err));
    }, []);

    return data;
  }
}
