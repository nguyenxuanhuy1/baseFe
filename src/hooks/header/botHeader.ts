import { useEffect, useState } from "react";
import { Header } from "constants/api";
import httpMethod from "services/httpMethod";
import { showError } from "helpers/toast";
// import { AppContext } from "App";

const useBotHeader = (props: any) => {
    //! state
    const [data, setData] = useState<any[]>([]);
    const getBotHeader = async () => {
        try {
            const response = await httpMethod.get(
                `${Header.BOT}`,
            );
            if (response.status === 200) {
                setData(response.data.data.homeTopMenu.partnership);
            }
        } catch (error: any) {
            showError('call api botheader có vấn để rồi');
        }
    };
    const refreshBot = () => {
        getBotHeader();
    };
    //! render
    return { refreshBot, data };
};

export default useBotHeader;
