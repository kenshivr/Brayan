import { describe, it, expect } from 'vitest';
import { integrationIconMap, techCategories, techIcons, projects } from '@models/projects';

describe('integrationIconMap', () => {
  it('retorna un emoji para claves conocidas', () => {
    expect(integrationIconMap['docker']).toBe('🐳');
    expect(integrationIconMap['stripe']).toBe('💳');
    expect(integrationIconMap['jwt']).toBe('🔑');
  });

  it('retorna undefined para claves desconocidas', () => {
    expect(integrationIconMap['inexistente']).toBeUndefined();
  });
});

describe('techCategories', () => {
  it('clasifica correctamente las tecnologías', () => {
    expect(techCategories['React']).toBe('Frontend');
    expect(techCategories['Node.js']).toBe('Backend');
    expect(techCategories['Docker']).toBe('DevOps');
    expect(techCategories['PostgreSQL']).toBe('Base de datos');
  });
});

describe('techIcons', () => {
  it('todas las rutas incluyen /Brayan/svg/', () => {
    Object.values(techIcons).forEach((path) => {
      expect(path).toMatch(/^\/Brayan\/svg\//);
    });
  });
});

describe('projects', () => {
  it('tiene al menos un proyecto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('cada proyecto tiene los campos requeridos', () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });
});
