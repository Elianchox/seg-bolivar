import { FooterBottom } from "@pagos/components/layout/footer/footer-bottom";
import { FooterContact } from "@pagos/components/layout/footer/footer-contact";
import { FooterLinkColumns } from "@pagos/components/layout/footer/footer-link-column";
import { FooterSocial } from "@pagos/components/layout/footer/footer-social";

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