import { FooterBottom } from "@/components/layout/footer/footer-bottom";
import { FooterContact } from "@/components/layout/footer/footer-contact";
import { FooterLinkColumns } from "@/components/layout/footer/footer-link-column";
import { FooterSocial } from "@/components/layout/footer/footer-social";

export function Footer() {
  return (
    <footer>
      <FooterSocial />
      <FooterContact />
      <FooterLinkColumns />
      <FooterBottom />
    </footer>
  );
}