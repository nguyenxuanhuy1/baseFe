import React, { Suspense, createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute";

import Page404 from "pages/Page404";
import { ErrorBoundary } from "react-error-boundary";
import routes from "routers";
import SuspenseLoader from "components/SuspenseLoader";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
interface IAppContext {
  setLoading: (e: boolean) => void;
  loading: boolean;
}

export const AppContext = createContext<IAppContext>({
  setLoading: () => null,
  loading: false,
});

const App = () => {
  const [loading, setLoading] = useState(false);
  //! Render
  return (
    <AppContext.Provider
      value={{
        setLoading,
        loading,
      }}
    >
      <Router>
        {loading && <SuspenseLoader />}
        <Routes>
          {routes.map((route, index) => {
            return (
              <>
                <Route
                  key={`${route.path}-${index}-layout`}
                  path={route.path}
                  element={
                    <Suspense fallback={<></>}>
                      <ErrorBoundary FallbackComponent={ErrorFallback}>
                        {route.isPrivateRoute ? (
                          <PrivateRoute>
                            <route.layout>
                              {route.component && <route.component />}
                            </route.layout>
                          </PrivateRoute>
                        ) : (
                          <route.layout>
                            {route.component && <route.component />}
                          </route.layout>
                        )}
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                {route.routeChild.map((child, idx) => {
                  return (
                    <Route
                      key={`${child.path}-${idx}`}
                      path={child.path}
                      element={
                        <Suspense fallback={<></>}>
                          <ErrorBoundary FallbackComponent={ErrorFallback}>
                            {child.isPrivateRoute ? (
                              <PrivateRoute>
                                <child.layout>
                                  <child.component />
                                </child.layout>
                              </PrivateRoute>
                            ) : (
                              <child.layout>
                                <child.component />
                              </child.layout>
                            )}
                          </ErrorBoundary>
                        </Suspense>
                      }
                    />
                  );
                })}
              </>
            );
          })}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default React.memo(App);
