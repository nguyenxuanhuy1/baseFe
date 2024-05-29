import { useEffect, useState } from "react";
import { Header, Menu } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useMidHeader = (props: any) => {
    //! state
    const [data, setData] = useState<any[]>([]);
    const getMidheader = async () => {
        try {
            const response = await httpMethod.get(
                `${Header.MID}`,
            );
            if (response.status === 200) {
                setData(response.data.data.homeTopMenu.shortcuts);
            }
        } catch (error: any) {
            showError('Lấy getMidheader lỗi');
        }
    };
    const refreshMid = () => {
        getMidheader();
    };
    //! render
    return { refreshMid, data };
};

export default useMidHeader;
