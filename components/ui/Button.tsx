import { View, Text, Pressable } from "react-native";
import React, { ReactNode, useState } from "react";
import { Href, Link } from "expo-router";

interface Props {
  variant: "solid" | "outline" | "link";
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  width?: "full";
  rounded: "none" | "md" | "full" | "lg" | "xl";
  children: ReactNode;
  link?: Href;
  color?: string;
  gap?: string; //mb-2
  class?: string;
}

type clsName = {
  value: string;
  borderRadius: number;
};

export function getBtnClass(props: Props): clsName {
  let baseBtnCls = "items-center justify-center";
  let x: clsName = {
    value: baseBtnCls,
    borderRadius: 1,
  };

  if (props.width) baseBtnCls += " w-full";
  if (props.color) baseBtnCls += " bg-" + props.color;
  if (props.gap) baseBtnCls += " " + props.gap;
  if (props.class) baseBtnCls += " " + props.class;

  switch (props.rounded) {
    case "full":
      //baseBtnCls += " rounded-full";
      x.borderRadius = 50;
      break;
    case "none":
      x.borderRadius = 0;
      break;
    case "md":
      x.borderRadius = 8;
      break;
    case "lg":
      x.borderRadius = 11;
      break;
    case "xl":
      x.borderRadius = 15;
      break;

    default:
      x.borderRadius = 1;
      break;
  }

  switch (props.variant) {
    case "solid":
      baseBtnCls += " border-0";
      break;
    case "outline":
      baseBtnCls += " border-2";
      break;

    default:
      break;
  }

  switch (props.size) {
    case "xs":
      baseBtnCls += " px-3.5 h-8";
      break;
    case "sm":
      baseBtnCls += " px-4 h-9";
      break;
    case "md":
      baseBtnCls += " px-5 h-10";
      break;
    case "lg":
      baseBtnCls += " px-6 h-11";
      break;
    case "xl":
      baseBtnCls += " px-7 h-12";
      break;
    case "2xl":
      baseBtnCls += " px-8 h-14";
      break;
    default:
      baseBtnCls += " px-4 h-4";
      break;
  }

  x.value = baseBtnCls;
  return x;
}

export default function Button(props: Props) {
  //console.log(getBtnClass());
  let x = getBtnClass(props);
  console.log(x);
  if (props.link) {
    return (
      <Link href={props.link} asChild>
        <Pressable
          style={{
            borderRadius: x.borderRadius,
          }}
          className={x.value}
          android_ripple={{ color: "lightgrey" }}
        >
          {props.children}
        </Pressable>
      </Link>
    );
  }
}
