export class Diagnosis {
  id: number;
  slug: string;
  description: string;

  constructor(diagnosis: any) {
    this.id = diagnosis.id || 0;
    this.slug = diagnosis.slug || '';
    this.description = diagnosis.description || '';
  }
}
