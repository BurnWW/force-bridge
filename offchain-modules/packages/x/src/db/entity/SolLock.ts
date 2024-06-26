import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SolLock {
  @PrimaryColumn()
  id: string; //txHash + actionIndex

  @Index()
  @Column()
  txHash: string;

  @Column()
  actionIndex: number;

  @Index()
  @Column()
  sender: string;

  @Index()
  @Column()
  token: string;

  @Column()
  amount: string;

  @Column('varchar', { length: 10240 })
  memo: string;

  @Column()
  actionPos: number;

  @Index()
  @Column()
  globalActionSeq: number;

  @Column()
  blockNumber: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export function getSolLockId(txHash: string, actionIndex: number): string {
  return `${txHash}_${actionIndex}`;
}
