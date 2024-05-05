import { Suspense } from "react";
import "@/app/globals.css";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";
import AppProvider from "@/provider/AppProvider";
import { FooterComponent } from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionWrapper>
				<body
				>
					<StoreProvider>
						<AppProvider>
						<header>
							<NavbarComponent />
						</header>
						<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
						</AppProvider>
						<FooterComponent/>
					</StoreProvider>
				</body>
			</SessionWrapper>
		</html>
	);
}
