import { useEffect, useState } from "react";
import { Header } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useTopheader = () => {
    const [data, setData] = useState<any[]>([]);
    const getTopheader = async () => {
        try {
            const response = await httpMethod.get(
                `${Header.TOP}`,
            );
            if (response.status === 200) {
                setData(response.data.data.homeTopMenu.contact);
            }
        } catch (error: any) {
            showError('Lấy Top header lỗi');
        }
    };
    useEffect(() => {
        getTopheader();
    }, []);
    //! render
    return {  data };
};

export default useTopheader;
