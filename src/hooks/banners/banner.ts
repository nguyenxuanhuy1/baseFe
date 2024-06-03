import { useEffect, useState } from "react";
import { Banners } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
// import { AppContext } from "App";

const useBanner = () => {
    //! state
    const [data, setData] = useState<any[]>([]);
    const getBanner = async () => {
        try {
            const response = await httpMethod.get(
                `${Banners.BANNER}`,
            );
            if (response.status === 200) {
                setData(response.data.list);
            }
        } catch (error: any) {
            showError('call api banner có vấn đề rồi');
        }
    };
    useEffect(() => {
        getBanner();
    }, []);

    return { data };
};

export default useBanner;
