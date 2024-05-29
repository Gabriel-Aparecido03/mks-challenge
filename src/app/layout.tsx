import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { Body } from "@/components/ui/body";
import { Provider } from "./provider.wrapper";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas - Frontend Challenge",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Provider>
          <Body
            className={montserrat.className}
          >
            <Header />
            {children}
            <Footer />
          </Body>
        </Provider>
      </StyledComponentsRegistry>
    </html>
  );
}
