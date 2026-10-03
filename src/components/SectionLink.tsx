import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** Section id on the homepage, e.g. "projects". Empty string = top of page. */
  to: string;
};

const scrollToSection = (id: string) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * In-page link that scrolls to a homepage section. Plain "#section" hrefs
 * clash with HashRouter (it treats them as routes), so we scroll manually.
 */
export const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(
  ({ to, onClick, ...props }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(to), 80);
      } else {
        scrollToSection(to);
      }
    };

    return <a ref={ref} href="#/" onClick={handleClick} {...props} />;
  }
);
SectionLink.displayName = "SectionLink";
