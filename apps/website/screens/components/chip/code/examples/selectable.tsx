import { DxcChip, DxcInset, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import { useState } from "react";

type Activity = {
  id: number;
  name: string;
  category: string;
  duration: string;
  participants: number;
};

const allActivities: Activity[] = [
  { id: 1, name: "Morning Yoga", category: "sports", duration: "1h", participants: 12 },
  { id: 2, name: "Watercolor Workshop", category: "art", duration: "2h", participants: 8 },
  { id: 3, name: "Basketball Practice", category: "sports", duration: "1.5h", participants: 10 },
  { id: 4, name: "Guitar Lessons", category: "music", duration: "1h", participants: 5 },
  { id: 5, name: "Book Club Meeting", category: "reading", duration: "2h", participants: 15 },
  { id: 6, name: "Swimming Session", category: "sports", duration: "1h", participants: 8 },
  { id: 7, name: "Pottery Class", category: "art", duration: "2h", participants: 10 },
  { id: 8, name: "Piano Recital", category: "music", duration: "1.5h", participants: 20 },
  { id: 9, name: "Poetry Reading", category: "reading", duration: "1h", participants: 12 },
  { id: 10, name: "Jazz Band Rehearsal", category: "music", duration: "2h", participants: 6 },
];

const columns = [
  { displayValue: "Activity" },
  { displayValue: "Category" },
  { displayValue: "Duration" },
  { displayValue: "Participants" },
];

const ActivitiesTable = ({ selectedFilters }: { selectedFilters: Record<string, boolean> }) => {
  const activeFilters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);
  const filteredActivities =
    activeFilters.length === 0 ? [] : allActivities.filter((activity) => activeFilters.includes(activity.category));
  const rows = filteredActivities.map((activity) => [
    activity.name,
    activity.category.charAt(0).toUpperCase() + activity.category.slice(1),
    activity.duration,
    activity.participants,
  ]);

  return (
    <DxcTable>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.displayValue}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No activities found. Select at least one category.</td>
          </tr>
        )}
      </tbody>
    </DxcTable>
  );
};

const code = `() => {
  const [selectedFilters, setSelectedFilters] = useState({
    sports: true,
    art: false,
    music: false,
    reading: false,
  });

  const filters = [
    { key: "sports", label: "Sports", icon: "fitness_center" },
    { key: "art", label: "Art", icon: "palette" },
    { key: "music", label: "Music", icon: "music_note" },
    { key: "reading", label: "Reading", icon: "menu_book" },
  ];

  const handleToggle = (key) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
          {filters.map((filter) => (
            <DxcChip
              key={filter.key}
              prefix={filter.icon}
              label={filter.label}
              selected={selectedFilters[filter.key]}
              onClick={() => handleToggle(filter.key)}
            />
          ))}
        </DxcFlex>

        <ActivitiesTable selectedFilters={selectedFilters} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
  DxcFlex,
  useState,
  allActivities,
  ActivitiesTable,
};

export default { code, scope };
