export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'claude-3-sonnet',
    label: 'Claude 3.5 Sonnet',
    apiIdentifier: 'claude-3-sonnet-20240229',
    description: 'Best for most tasks: fast, capable, and cost-effective',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'claude-3-sonnet';