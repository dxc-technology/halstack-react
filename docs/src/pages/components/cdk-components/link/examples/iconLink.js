import { DxcLink } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <p>
        This is a text with an <DxcLink
            iconPosition="after"
            icon={
              <svg
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
                fill="currentColor"
              >
                <g id="Bounding_Box">
                  <rect fill="none" width="24" height="24" />
                </g>
                <g id="Master">
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
              </svg>
            }
            href="#"
            text="Icon after"
        >
        </DxcLink> the link.
    </p>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };
