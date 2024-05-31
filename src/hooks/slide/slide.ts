import { useEffect, useState } from "react";
import { Slide } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";

const useSlide = () => {
    //! state
    const [data, setData] = useState<any[]>([]);
    const getSlide = async () => {
        try {
            const response = await httpMethod.get(
                `${Slide.SLIDE}`,
            );
            if (response.status === 200) {
                setData(response.data.list);
            }
        } catch (error: any) {
            showError('Gọi api Slide lỗi rồi');
        }
    };
    useEffect(() => {
        getSlide();
    }, []);
    //! render
    return { data };
};

export default useSlide;
