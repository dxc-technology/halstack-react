import { DxcChip, DxcInset, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import { useState, useMemo } from "react";

const code = `() => {
  const [selectedFilters, setSelectedFilters] = useState({
    frontend: true,
    backend: false,
    database: false,
    devops: false,
  });

  const filters = [
    { key: "frontend", label: "Frontend", icon: "web" },
    { key: "backend", label: "Backend", icon: "dns" },
    { key: "database", label: "Database", icon: "storage" },
    { key: "devops", label: "DevOps", icon: "settings" },
  ];

  const allProjects = [
    { id: 1, name: "E-commerce Website", category: "frontend", status: "Active", team: 5 },
    { id: 2, name: "API Gateway", category: "backend", status: "Active", team: 3 },
    { id: 3, name: "Mobile App UI", category: "frontend", status: "Planning", team: 4 },
    { id: 4, name: "PostgreSQL Migration", category: "database", status: "Active", team: 2 },
    { id: 5, name: "CI/CD Pipeline", category: "devops", status: "Completed", team: 3 },
    { id: 6, name: "Dashboard React", category: "frontend", status: "Active", team: 6 },
    { id: 7, name: "Microservices", category: "backend", status: "Planning", team: 8 },
    { id: 8, name: "MongoDB Cluster", category: "database", status: "Active", team: 2 },
    { id: 9, name: "Kubernetes Setup", category: "devops", status: "Active", team: 4 },
    { id: 10, name: "REST API", category: "backend", status: "Completed", team: 3 },
  ];

  const handleToggle = (key) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredProjects = useMemo(() => {
    const activeFilters = Object.keys(selectedFilters).filter(key => selectedFilters[key]);
    if (activeFilters.length === 0) return [];
    return allProjects.filter(project => activeFilters.includes(project.category));
  }, [selectedFilters]);

  const columns = [
    { displayValue: "Project Name" },
    { displayValue: "Category" },
    { displayValue: "Status" },
    { displayValue: "Team Size" },
  ];

  const rows = filteredProjects.map(project => [
    project.name,
    project.category.charAt(0).toUpperCase() + project.category.slice(1),
    project.status,
    project.team,
  ]);

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
                <td colSpan={columns.length}>
                  No projects found. Select at least one filter.
                </td>
              </tr>
            )}
          </tbody>
        </DxcTable>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
  DxcFlex,
  DxcTable,
  useState,
  useMemo,
};

export default { code, scope };
