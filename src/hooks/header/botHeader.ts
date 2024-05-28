import { useEffect, useState } from "react";
import { Menu } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
// import { AppContext } from "App";

const useMenu = (props: any) => {
    //! state
    const [data, setData] = useState<any[]>([]);
    const getSearchDepartment = async () => {
        try {
            const response = await httpMethod.get(
                `${Menu.MENU}`,
            );
            if (response.status === 200) {
                setData(response.data.list);
            }
        } catch (error: any) {
            showError('Có lỗi xảy ra, vui lòng thử lại sau');
        }
    };
    const refresh = () => {
        getSearchDepartment();
    };
    //! render
    return { refresh, data };
};

export default useMenu;
