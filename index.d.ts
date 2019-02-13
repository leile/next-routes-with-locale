declare module "next-routes-with-locale-fix" {
  import next from "next";

  type RouteParams = string | undefined;

  interface Route {
    route: { name: string };
    params: RouteParams;
  }

  export const Link: React.ComponentType<LinkProps>;
  export function RequestHandler(req: any, res: any): void;

  class Routes {
    Router: Router;
    Link: Link;
    defaultLocale: string;
    match(route: string): Route;
    setLocale(locale: string): void;
    getRequestHandler(app: next.Server): RequestHandler;
    add(params: {
      name: string;
      locale: string;
      pattern: string;
      page: string;
    }): Routes;
  }

  interface Router {
    events: {
      on(event: string, callback: (url: string) => void): void;
    };
    replaceRoute(
      routeName: string,
      params?: RouteParams,
      language?: string
    ): void;
    pushRoute(routeName: string, params?: object, language?: string): void;
    back(): void;
  }

  interface LinkProps {
    locale: string;
  }

  export const Router: Router;
  const routes: Routes;

  export default (params: { locale: string; hideDefaultLocale: boolean }) =>
    routes;
}
