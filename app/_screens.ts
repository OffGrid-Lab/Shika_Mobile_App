import { AppScreen } from "@/shikawallet/types";
import { profile } from "./profile/_screens";
import { group } from "./group/_screens";
import { kyc } from "./kyc/_screens";
import { shika } from "@/shikawallet/shika";
import { otp } from "./otp/_screens";
import { wallet } from "./wallet/_screens";

const index: AppScreen[] = [
  {
    name: "index",
    title: shika.name,
    headerShow: false,
  },
  {
    name: "signup",
    title: "Create Account",
    headerShow: true,
  },
  {
    name: "dashboard",
    title: shika.name,
    headerShow: false,
  },
  {
    name: "notifications",
    title: "Notifications",
    headerShow: true,
  },
  {
    name: "loans",
    title: "Loans",
    headerShow: true,
  },
  {
    name: "help",
    title: "Help",
    headerShow: true,
  },
];

export const screens: AppScreen[] = [
  ...index,
  ...otp,
  ...profile,
  ...kyc,
  ...group,
  ...wallet,
];
