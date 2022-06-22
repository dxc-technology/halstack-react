import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const url_options = [
    {
      label: "Social Media",
      options: [
        {
          label: "Instagram",
          value: "instagram",
          icon: "https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_960_720.png",
        },
        {
          label: "Twitter",
          value: "twitter",
          icon: "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png",
        },
        {
          label: "Facebook",
          value: "facebook",
          icon: "https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png",
        },
        {
          label: "Pinterest",
          value: "pinterest",
          icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
        },
      ],
    },
    {
      label: "Design",
      options: [
        {
          label: "Figma",
          value: "figma",
          icon: "https://logowik.com/content/uploads/images/figma.jpg",
        },
        {
          label: "Adobe XD",
          value: "adobexd",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
        },
        {
          label: "Sketch",
          value: "sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
      ],
    },
  ];

  return (
    <DxcInset space="large">
      <DxcSelect
        label="Select your favourite social media"
        placeholder="Choose an option"
        options={url_options}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
};

export default { code, scope };
