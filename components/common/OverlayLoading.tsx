import { useEffect, useState } from "react";
import { View } from "react-native";

import Spinner from 'react-native-loading-spinner-overlay';
export default function OverlayLoading() {
    const [spinner, SetSpinner] = useState(false);


    return (
        <Spinner
            visible={spinner}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
        />

    )


}
