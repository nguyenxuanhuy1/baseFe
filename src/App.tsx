import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute";

import Page404 from "pages/Page404";
import { ErrorBoundary } from "react-error-boundary";
import routes from "routers";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const App = () => {
  //! Render
  return (
    <Router>
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
  );
};

export default React.memo(App);
