import {
    Routes,
    Route,
    Location,
    NavigateFunction,
    Params,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

// layer-one page
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

export default function MyRouter() {
    return (
        <Routes>
            <Route path="lets-meet">
                <Route path="" element={<Main />}></Route>
                {/* Login */}
                {/* Register */}
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    );
}

export interface IRouter {
    router: {
        location: Location;
        navigate: NavigateFunction;
        params: Params;
        search_params: URLSearchParams;
        set_search_params: ReturnType<typeof useSearchParams>[1];
    };
}

// This is a higher-order component
export function withRouter(Component: any) {
    return (props: any = {}) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        let [search_params, set_search_params] = useSearchParams();
        return (
            <Component
                {...props}
                router={{
                    location,
                    navigate,
                    params,
                    search_params,
                    set_search_params,
                }}
            />
        );
    };
}
