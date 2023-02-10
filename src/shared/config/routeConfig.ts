import { RouteProps } from "react-router-dom";

enum AppRoutes {
  MAIN = "main",
  CHAT = "chat",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CHAT]: "chat",
};
