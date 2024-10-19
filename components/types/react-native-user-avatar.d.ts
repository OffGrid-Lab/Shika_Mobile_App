declare module "react-native-user-avatar" {
  import { Component } from "react";
  import { ImageStyle, TextStyle, ViewStyle } from "react-native";

  interface UserAvatarProps {
    name: string;
    src?: string;
    bgColor?: string;
    bgColors?: string[];
    textColor?: string;
    size?: number;
    imageStyle?: ImageStyle;
    textStyle?: TextStyle;
    style?: ViewStyle;
    borderRadius?: number;
    component?: React.ComponentType;
  }

  export default class UserAvatar extends Component<UserAvatarProps> {}
}
