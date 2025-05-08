import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options_material = [
    {
      label: "Transport",
      options: [
        {
          label: "Electric Car",
          value: "car",
          icon: "electric_car",
        },
        {
          label: "Motorcycle",
          value: "motorcycle",
          icon: "Motorcycle",
        },
        {
          label: "Train",
          value: "train",
          icon: "train",
        },
        {
          label: "Bike",
          value: "bike",
          icon: "pedal_bike",
        },
      ],
    },
    {
      label: "Entertainment",
      options: [
        {
          label: "Movie",
          value: "movie",
          icon: "movie",
        },
        {
          label: "Music",
          value: "music",
          icon: "music_note",
        },
        {
          label: "Games",
          value: "games",
          icon: "joystick",
        },
      ],
    },
  ];
  
  

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcSelect
        label="Select your favourite social media"
        placeholder="Choose an option"
        options={options_material}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
};

export default { code, scope };
