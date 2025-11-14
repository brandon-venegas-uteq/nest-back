import { ObjectLiteral, Repository } from 'typeorm';

export class GenericService<T extends ObjectLiteral> {
  constructor(protected repository: Repository<T>) {}

  async create(data: Partial<T>): Promise<any> {
    return this.repository.save(data as any);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T | undefined | null> {
    return this.repository.findOneBy({ id } as any);
  }

  async update(id: number, data: Partial<T>): Promise<T | undefined | null> {
    await this.repository.update(id, data as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}