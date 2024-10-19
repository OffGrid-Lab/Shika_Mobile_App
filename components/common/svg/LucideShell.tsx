import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Props } from ".";

export default function LucideShell(props: Props) {
    let fillColor = "#000";
    if (props.color === "white") fillColor = "#fff";
    return (
        <Svg

            width={props.width}
            height={props.height}
            fill="none"
            {...props}
        >
            <Path
                stroke={fillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M32.083 25.208a4.583 4.583 0 1 1-9.166 0 9.167 9.167 0 0 1 18.333 0 13.75 13.75 0 1 1-27.5 0 18.333 18.333 0 0 1 36.667 0 22.917 22.917 0 1 1-45.834 0A27.34 27.34 0 0 1 10.13 8.663a4.584 4.584 0 1 1 7.242 5.591"
            />
        </Svg>
    )


}
