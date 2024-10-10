import { QueryClient } from "@tanstack/react-query";
import User from "~/modules/common/icons/user";
import Wallet from "~/modules/common/icons/wallet";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60 * 24,
            retry:1,
        }
    }
})

export {queryClient}

interface RouteConfig {
    withLocale?: boolean;
    id: string;
    label: string;
    path: string;
    icon?: React.ReactNode;
    routes?: Array<RouteConfig>;
    hideDesktop?: boolean;
}

export const memberRoutes:Array<RouteConfig> = [
    {
        id: "account",
        label: "Account",
        withLocale: true,
        icon: <User size="20px" />,
        path: "/app/profile",
        // hideDesktop: true,
      },
      {
        id: "memberbadge",
        label: "Member Badge",
        withLocale: true,
        icon: <Wallet size="20px" />,
        path: "/app/memberbadge",
      },
      {
        id: "collection",
        label: "Collection",
        withLocale: true,
        icon: <Wallet size="20px" />,
        path: "/app/collection/list",
      },
]

export const opsRoutes:Array<RouteConfig> = [
    {
        id: "account",
        label: "Account",
        withLocale: true,
        icon: <User size="20px" />,
        path: "/app/account",
        // hideDesktop: true,
      },
      {
        id: "memberbadge",
        label: "Member Badge",
        withLocale: true,
        icon: <Wallet size="20px" />,
        path: "/app/memberbadge",
      },
      {
        id: "collection",
        label: "Collection",
        withLocale: true,
        icon: <Wallet size="20px" />,
        path: "/app/collection",
      },
]